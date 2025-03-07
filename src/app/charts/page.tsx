import GrossMarginChart from "@/components/GrossMarginChart";
import { PlusCircle } from "lucide-react";

export default function ChartPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-4 m-4">
      <div className="flex-1 w-full border rounded-lg shadow-lg bg-black overflow-hidden">
        <div className="w-full h-full bg-red p-4">
          <GrossMarginChart/>
        </div>
      </div>
    </div>
  );
}
