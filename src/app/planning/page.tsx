import { PlusCircle } from "lucide-react";

export default function PlanningPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-4 m-4">
      <div className="flex-1 w-full border rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="w-full h-full bg-red p-4">Planning</div>
      </div>
      <div className="w-full flex justify-start">
        <button className="flex items-center bg-orange-500 cursor-pointer text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition">
          <PlusCircle className="mr-2" size={20} /> NEW STORE
        </button>
      </div>
    </div>
  );
}
