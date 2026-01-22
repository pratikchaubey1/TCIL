import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function List() {
  const [suppliers, setSuppliers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    supplierName: "",
    supplierAddress: "",
    bannedDate: new Date().toISOString().split("T")[0],
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
        supplierAddress: "",
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

  return (
    <div className="p-10">
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-5 py-3 rounded-lg mb-6"
      >
        + Add Supplier
      </button>

      {/* TABLE */}
      <div className="border rounded bg-white">
        <div className="grid grid-cols-4 bg-green-500 font-semibold">
          <div className="p-3">SUPPLIER</div>
          <div className="p-3">BANNED DATE</div>
          <div className="p-3">BANNED BY</div>
          <div className="p-3">PERIOD</div>
        </div>

        {suppliers.map((s, i) => (
          <div className="grid grid-cols-4 border-b">
            {/* SUPPLIER COLUMN */}
            <div className="p-3">
              <div className="font-medium text-blue-500 hover:text-blue-600">
                {i + 1}. {s.supplierName}
              </div>

              <div className="text-sm  text-blue-500 hover:text-blue-600 mt-1">
                {s.supplierAddress}
              </div>
            </div>

            {/* DATE */}
            <div className="p-3">
              {new Date(s.bannedDate).toLocaleDateString()}
            </div>

            {/* BANNED BY */}
            <div className="p-3">{s.bannedBy}</div>

            {/* PERIOD */}
            <div className="p-3">{s.banningPeriod} Days</div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 w-[400px] rounded"
          >
            <input
              name="supplierName"
              value={formData.supplierName}
              onChange={handleChange}
              placeholder="Supplier Name"
              className="w-full border p-2 mb-2"
              required
            />

            <textarea
              name="supplierAddress"
              value={formData.supplierAddress}
              onChange={handleChange}
              placeholder="Supplier Address"
              rows={3}
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

            <div className="flex justify-end gap-10">
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
