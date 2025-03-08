"use client";

import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ColDef,
  ColGroupDef,
  ICellRendererParams,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useEffect } from "react";
import { calendarData } from "@/data/calendar_data";
import { planningData } from "@/data/planning_data";
import { calculationData } from "@/data/calculation_data";
import { RowData } from "@/types/planning";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const generateColumns = (weeksWithData: Set<string>) => {
  const monthGroups: Record<string, ColGroupDef> = {};

  calendarData.forEach(({ week, month, monthLabel }) => {
    if (!weeksWithData.has(week)) return; 

    if (!monthGroups[month]) {
      monthGroups[month] = {
        headerName: monthLabel,
        marryChildren: true,
        children: [],
      };
    }

    monthGroups[month].children.push({
      headerName: week,
      marryChildren: true,
      children: [
        { field: `salesUnits_${week}`, headerName: "Sales Units", width: 120 },
        {
          field: `salesDollars_${week}`,
          headerName: "Sales Dollars",
          width: 120,
        },
        {
          field: `gmPercent_${week}`,
          headerName: "GM %",
          width: 100,
          cellRenderer: (params: ICellRendererParams) => (
            <div className={`p-1 rounded ${getColorForGM(params.value)}`}>
              {params.value} %
            </div>
          ),
        },
      ],
    });
  });

  return Object.values(monthGroups);
};

const getColorForGM = (value: number) => {
  if (value >= 80) return "bg-green-500 text-white";
  if (value >= 50) return "bg-green-300";
  if (value >= 30) return "bg-yellow-400";
  if (value >= 10) return "bg-orange-400";
  return "bg-red-400 text-white";
};

const DynamicPlanningTable = () => {
const [rowData, setRowData] = useState<RowData[]>([]);
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([]);

  useEffect(() => {
    const weeksWithData = new Set(
      [...planningData, ...calculationData].map((d) => d.week)
    );

   const mergedData: RowData[] = Array.from(
     new Set(planningData.map((d) => `${d.store}_${d.sku}`))
   ).map((key) => {
     const [store, sku] = key.split("_");
     const row: RowData = { store, sku }; 

     weeksWithData.forEach((week) => {
       const plan = planningData.find(
         (p) => p.store === store && p.sku === sku && p.week === week
       );
       const calc = calculationData.find(
         (c) => c.store === store && c.sku === sku && c.week === week
       );

       row[`salesUnits_${week}`] = plan?.salesUnits ?? 0;
       row[`salesDollars_${week}`] = calc?.salesDollars ?? 0;
       row[`gmPercent_${week}`] = calc?.gmPercent ?? 0;
     });

     return row;
   });


    setRowData(mergedData);
    setColumnDefs([
      { field: "store", headerName: "Store", width: 150 },
      { field: "sku", headerName: "SKU", width: 150 },
      ...generateColumns(weeksWithData),
    ]);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] p-4">
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
          rowHeight={35}
        />
      </div>
    </div>
  );
};

export default DynamicPlanningTable;
