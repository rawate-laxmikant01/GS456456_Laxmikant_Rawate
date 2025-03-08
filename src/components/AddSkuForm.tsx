import { useState } from "react";
import { PlusCircle, XCircle } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { addSku } from "@/redux/features/skuSlice";
import { Sku } from "@/types/sku";

interface AddSkuFormProps {
  setShowForm: (value: boolean) => void;
}

export default function AddSkuForm({ setShowForm }: AddSkuFormProps) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Omit<Sku, "id">>({
    label: "",
    class: "",
    department: "",
    price: 0,
    cost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "cost" ? parseFloat(value) : value,
    });
  };

  const handleAddSku = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.label ||
      !formData.class ||
      !formData.department ||
      formData.price <= 0 ||
      formData.cost <= 0
    )
      return;

    const newSku: Sku = {
      id: `SK${Math.floor(10000 + Math.random() * 90000)}`,
      ...formData,
    };

    dispatch(addSku(newSku));

    setFormData({
      label: "",
      class: "",
      department: "",
      price: 0,
      cost: 0,
    });

    setShowForm(false);
  };

  return (
    <form onSubmit={handleAddSku} className="flex gap-2 justify-between">
      <div className="flex gap-2">
        <input
          type="text"
          name="label"
          placeholder="SKU Name"
          value={formData.label}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="number"
          name="cost"
          placeholder="Cost"
          value={formData.cost}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 flex items-center"
        >
          <PlusCircle className="mr-2" size={20} /> ADD SKU
        </button>
      </div>
      <button
        type="button"
        onClick={() => setShowForm(false)}
        className="flex items-center text-red-500 hover:text-red-600"
      >
        <XCircle className="mr-2" size={20} />
      </button>
    </form>
  );
}
