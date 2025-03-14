"use client";
import { useState } from "react";
import { PlusCircle, Trash2, Grip } from "lucide-react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  ICellRendererParams,
  ModuleRegistry,
} from "ag-grid-community";
import { Store } from "@/types/store";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { deleteStore } from "@/redux/features/storeSlice";
import AddStoreForm from "@/components/AddStoreForm";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface ActionsCellRendererProps extends ICellRendererParams {
  data: Store;
}

export default function StorePage() {
  const dispatch = useAppDispatch();
  const {
    items: stores,
    loading,
    error,
  } = useAppSelector((state) => state.stores);

  const [showForm, setShowForm] = useState(false);

  const handleDeleteStore = (id: string) => {
    dispatch(deleteStore(id));
  };

  const ActionsCellRenderer = ({ data }: ActionsCellRendererProps) => {
    return (
      <div className="flex items-center gap-2">
        <button
          className="p-1 hover:bg-gray-100 rounded-md"
          onClick={() => handleDeleteStore(data.id)}
        >
          <Trash2 className="h-6 w-5 hover:text-red-500" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-md flex">
          <Grip className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    );
  };

  const columnDefs: ColDef<Store>[] = [
    {
      headerName: "",
      width: 20,
      cellRenderer: ActionsCellRenderer,
      sortable: false,
      filter: false,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      field: "seqNo",
      headerName: "S.No",
      width: 100,
      filter: "agNumberColumnFilter",
      cellStyle: { display: "flex", alignItems: "center" },
    },
    {
      field: "label",
      headerName: "Store",
      width: 250,
      cellStyle: { fontWeight: 500 },
      cellRenderer: (params: ICellRendererParams<Store, string>) => {
        if (!params.value) return "";
        return params.value.charAt(0).toUpperCase() + params.value.slice(1);
      },
    },

    {
      field: "city",
      headerName: "City",
      width: 150,
      cellRenderer: (params: ICellRendererParams<Store, string>) => {
        if (!params.value) return "";
        return params.value.charAt(0).toUpperCase() + params.value.slice(1);
      },
    },
    {
      field: "state",
      headerName: "State",
      width: 120,
      cellRenderer: (params: ICellRendererParams<Store, string>) => {
        if (!params.value) return "";
        return params.value.toUpperCase();
      },
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-4 m-4">
      <div className="flex-1 w-full border rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="w-full h-full">
          <AgGridReact<Store>
            rowData={stores}
            columnDefs={columnDefs}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
              minWidth: 100,
            }}
            headerHeight={48}
            rowHeight={30}
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            domLayout="normal"
            suppressCellFocus={true}
            suppressRowClickSelection={true}
          />
        </div>
      </div>
      {!showForm && (
        <div className="w-full flex justify-start">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition"
          >
            <PlusCircle className="mr-2" size={20} />{" "}
            {showForm ? "HIDE FORM" : "NEW STORE"}
          </button>
        </div>
      )}
      {showForm && (
        <div className="border p-4 rounded-lg bg-gray-50 shadow-md">
          <AddStoreForm setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
}
