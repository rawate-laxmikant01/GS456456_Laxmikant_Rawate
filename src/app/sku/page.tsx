"use client";
import { PlusCircle, Trash2 } from "lucide-react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  ICellRendererParams,
  ModuleRegistry,
  ValueFormatterParams,
} from "ag-grid-community";
import { Sku } from "@/types/sku";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { deleteSku } from "@/redux/features/skuSlice";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface ActionsCellRendererProps extends ICellRendererParams {
  data: Sku;
}

export default function SkuPage() {
  const dispatch = useAppDispatch();
  const { items: skus, loading, error } = useAppSelector((state) => state.skus);

  const handleDeleteSku = (id: string) => {
    dispatch(deleteSku(id));
  };

  const ActionsCellRenderer = ({ data }: ActionsCellRendererProps) => {
    return (
      <div className="flex items-center gap-2">
        <button
          className="p-1 hover:bg-gray-100 rounded-md"
          onClick={() => handleDeleteSku(data.id)}
        >
          <Trash2 className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </button>
      </div>
    );
  };

  const currencyFormatter = (params: ValueFormatterParams) => {
    return params.value ? `$ ${params.value.toFixed(2)}` : "";
  };

  const columnDefs: ColDef<Sku>[] = [
    {
      headerName: "",
      width: 10,
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
      field: "id",
      headerName: "SKU",
      width: 120,
      cellStyle: { fontWeight: 500 },
    },
    {
      field: "label",
      headerName: "Label",
      minWidth: 300,
    },
    // {
    //   field: "class",
    //   headerName: "Class",
    //   width: 150,
    // },
    // {
    //   field: "department",
    //   headerName: "Department",
    //   width: 180,
    // },
    {
      field: "price",
      headerName: "Price",
      width: 70,
      valueFormatter: currencyFormatter,
    },
    {
      field: "cost",
      headerName: "Cost",
      width: 20,
      valueFormatter: currencyFormatter,
      // cellStyle: { justifyContent: "flex-end" },
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-4 m-4">
      <div className="flex-1 w-full border rounded-lg shadow-lg bg-white overflow-hidden">
        <div
          className="w-full h-full ag-theme-alpine"
         
        >
          <AgGridReact<Sku>
            rowData={skus}
            columnDefs={columnDefs}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
              minWidth: 100,
            }}
            headerHeight={48}
            rowHeight={48}
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            domLayout="normal"
            suppressCellFocus={true}
            suppressRowClickSelection={true}
            rowDragManaged={true}
          />
        </div>
      </div>
      <div className="w-full flex justify-start">
        <button className="flex items-center bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition">
          <PlusCircle className="mr-2" size={20} /> NEW SKU
        </button>
      </div>
    </div>
  );
}
