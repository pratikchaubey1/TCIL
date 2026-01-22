import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function List() {
  const [suppliers, setSuppliers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    supplierName: "",
    bannedDate: new Date().toISOString().split("T")[0], // AUTO TODAY
    bannedBy: "",
    banningPeriod: "",
    remarks: "",
  });

  const fetchSuppliers = async () => {
    const res = await axios.get("http://localhost:5000/api/banned-suppliers");
    if (res.data.success) setSuppliers(res.data.data);
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/banned-suppliers", {
        ...formData,
        banningPeriod: Number(formData.banningPeriod),
        bannedDate: new Date(formData.bannedDate).toISOString(),
      });

      setShowForm(false);
      setFormData({
        supplierName: "",
        bannedDate: new Date().toISOString().split("T")[0],
        bannedBy: "",
        banningPeriod: "",
        remarks: "",
      });

      fetchSuppliers();
    } catch (err) {
      alert("Failed to ban supplier");
    } finally {
      setLoading(false);
    }
  };

  const menu = [
    { id: 1, Name: "Home", path: "/" },
    { id: 2, Name: "Tender", path: "/tender" },
    { id: 3, Name: "List of banned Suppliers", path: "/list" },
  ];

  return (
    <div className="p-10 mt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-300 px-2  py-3">
        <nav className="text-md text-gray-700 flex items-center gap-2">
          {menu.map((item, index) => (
            <span key={item.id} className="flex items-center gap-2">
              <Link
                to={item.path}
                className={`hover:underline ${
                  index === 0 ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {item.Name}
              </Link>

              {index < menu.length - 1 && <span>/</span>}
            </span>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 hover:bg-green-700 text-white translate-x-420 px-5 mt-10 py-4 rounded-2xl "
      >
        + Add Supplier
      </button>
   <div className="mt-10 border border-gray-300 rounded-md overflow-hidden bg-white">

  {/* Header */}
  <div className="grid grid-cols-4 bg-green-500 text-black font-semibold text-sm">
    <div className="p-4">BANNED SUPPLIER</div>
    <div className="p-4">BANNED DATE</div>
    <div className="p-4">BANNED BY</div>
    <div className="p-4">BANNING PERIOD</div>
  </div>

  {/* Rows */}
  {suppliers.map((s, i) => (
    <div
      key={s._id}
      className="grid grid-cols-4 border-b hover:bg-gray-100 transition"
    >
      {/* Supplier */}
      <div className="p-4 text-blue-600 text-sm leading-6">
        <span className="font-medium text-black mr-1">{i + 1}.</span>
        <span className="hover:underline cursor-pointer">
          {s.supplierName}
        </span>
      </div>

      {/* Date */}
      <div className="p-4 text-sm text-gray-800">
        {new Date(s.bannedDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </div>

      {/* Banned By */}
      <div className="p-4 text-sm text-gray-800">
        {s.bannedBy}
      </div>

      {/* Period */}
      <div className="p-4 text-sm text-gray-800 font-medium">
        {s.banningPeriod} Years
      </div>
    </div>
  ))}
</div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-white p-6 w-[400px]">
            <input
              name="supplierName"
              value={formData.supplierName}
              onChange={handleChange}
              placeholder="Supplier Name"
              className="w-full border p-2 mb-2"
              required
            />

            <input
              type="date"
              name="bannedDate"
              value={formData.bannedDate}
              readOnly
              className="w-full border p-2 mb-2 bg-gray-100"
            />

            <input
              name="bannedBy"
              value={formData.bannedBy}
              onChange={handleChange}
              placeholder="Banned By"
              className="w-full border p-2 mb-2"
              required
            />

            <input
              type="number"
              name="banningPeriod"
              value={formData.banningPeriod}
              onChange={handleChange}
              placeholder="Banning Period (Days)"
              className="w-full border p-2 mb-2"
              required
            />

            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Remarks"
              className="w-full border p-2 mb-4"
            />

            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default List;
