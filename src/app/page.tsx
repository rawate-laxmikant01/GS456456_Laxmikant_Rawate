"use client";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {  PlusCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function StoresPage() {

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="border rounded-lg shadow-lg m-4 bg-white h-[600px]">

          <div className="h-[600px] bg-red p-4">Test data</div>
          <button className="flex items-center bg-orange-500 text-white mt-3 py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition">
            <PlusCircle className="mr-2" size={20} /> NEW STORE
          </button>
        </div>
      </div>
    </div>
  );
}
