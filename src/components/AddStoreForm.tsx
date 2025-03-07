import { useState } from "react";
import { PlusCircle, XCircle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addStore } from "@/redux/features/storeSlice";
import { Store } from "@/types/store";

interface AddStoreFormProps {
  setShowForm: (value: boolean) => void;
}

export default function AddStoreForm({ setShowForm }: AddStoreFormProps) {
  const dispatch = useAppDispatch();
  const stores = useAppSelector((state) => state.stores.items);

  const [formData, setFormData] = useState<Omit<Store, "id">>({
    seqNo: stores.length + 1,
    label: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.label || !formData.city || !formData.state) return;

    const newStore: Store = {
      id: Date.now().toString(),
      ...formData,
    };

    dispatch(addStore(newStore));

    setFormData({
      seqNo: stores.length + 2,
      label: "",
      city: "",
      state: "",
    });

    setShowForm(false);
  };

  return (
    <form onSubmit={handleAddStore} className="flex gap-2 justify-between">
      <div className="flex gap-2">
        <input
          type="text"
          name="label"
          placeholder="Store Name"
          value={formData.label}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 flex items-center"
        >
          <PlusCircle className="mr-2" size={20} /> ADD STORE
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
