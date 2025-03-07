"use client";

import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ColGroupDef,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { useEffect, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const getColorForGM = (value: number) => {
  if (value >= 80) return "bg-green-500 text-white";
  if (value >= 50) return "bg-green-300";
  if (value >= 30) return "bg-yellow-400";
  if (value >= 10) return "bg-orange-400";
  return "bg-red-400 text-white";
};

const PlanningTable = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("/api/planning-data") // Replace with actual API or data source
      .then((res) => res.json())
      .then((data) => setRowData(data));
  }, []);

  const columnDefs: (ColDef | ColGroupDef)[] = [
    { field: "store", headerName: "Store", width: 200 },
    { field: "sku", headerName: "SKU", width: 200 },
    {
      headerName: "Feb",
      marryChildren: true,
      headerClass: "header-center",
      children: [
        {
          headerName: "Week 01",
          marryChildren: true,
          headerClass: "header-center",
          cellStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          children: [
            {
              field: "week01.salesUnits",
              headerName: "Sales Units",
              width: 150,
            },
            {
              field: "week01.salesDollars",
              headerName: "Sales Dollars",
              width: 150,
            },
            { field: "week01.gmDollars", headerName: "GM Dollars", width: 150 },
            {
              field: "week01.gmPercent",
              headerName: "GM Percent",
              width: 120,
              cellRenderer: (params: ICellRendererParams) => {
                <div className={`p-1 rounded ${getColorForGM(params.value)}`}>
                  {params.value.toFixed(2)} %
                </div>;
              },
            },
          ],
        },
        {
          headerName: "Week 02",
          marryChildren: true,
          headerClass: "header-center",
          children: [
            {
              field: "week02.salesUnits",
              headerName: "Sales Units",
              width: 150,
            },
            {
              field: "week02.salesDollars",
              headerName: "Sales Dollars",
              width: 150,
            },
            { field: "week02.gmDollars", headerName: "GM Dollars", width: 150 },
            {
              field: "week02.gmPercent",
              headerName: "GM Percent",
              width: 120,
              cellRenderer: (params: ICellRendererParams) => (
                <div className={`p-1 rounded ${getColorForGM(params.value)}`}>
                  {params.value.toFixed(2)} %
                </div>
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="ag-theme-alpine w-full h-full border rounded-lg shadow-lg">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          pagination={true}
          paginationPageSize={10}
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default PlanningTable;
