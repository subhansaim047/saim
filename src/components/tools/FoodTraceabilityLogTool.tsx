"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  Thermometer,
  Clock,
  Sparkles,
  FileSpreadsheet,
  Truck,
  Building2,
  Search,
  Package
} from "lucide-react";

interface DeliveryLogEntry {
  id: string;
  date: string;
  supplier: string;
  invoiceNo: string;
  productDescription: string;
  batchLotCode: string;
  category: "Chilled Meat" | "Chilled Fish" | "Dairy" | "Produce" | "Frozen" | "Ambient Dry";
  tempArrival: number;
  useByDate: string;
  conditionStatus: "Accepted" | "Rejected";
  receiverInitials: string;
  notes: string;
}

const DEFAULT_DELIVERIES: DeliveryLogEntry[] = [
  {
    id: "del-1",
    date: "2026-10-28",
    supplier: "Smithfield Quality Meats Ltd",
    invoiceNo: "INV-98412",
    productDescription: "Fresh British Beef Sirloin (4x 5kg vacuum packs)",
    batchLotCode: "LOT-261028-UK421",
    category: "Chilled Meat",
    tempArrival: 3.4,
    useByDate: "2026-11-12",
    conditionStatus: "Accepted",
    receiverInitials: "JM",
    notes: "Chilled van at 2.8°C; packaging sealed; kill date verified"
  },
  {
    id: "del-2",
    date: "2026-10-28",
    supplier: "Billingsgate Direct Seafoods",
    invoiceNo: "BDS-55104",
    productDescription: "Fresh Scottish Salmon Fillets (12kg box)",
    batchLotCode: "HARV-261027-FAO27",
    category: "Chilled Fish",
    tempArrival: 1.2,
    useByDate: "2026-11-03",
    conditionStatus: "Accepted",
    receiverInitials: "JM",
    notes: "Supplied packed on fresh flake ice in insulated box"
  },
  {
    id: "del-3",
    date: "2026-10-28",
    supplier: "Country Dairy Co-Op",
    invoiceNo: "CDC-7721",
    productDescription: "Pasteurised Whole Milk (24x 2L poly bottles)",
    batchLotCode: "BCH-8820A",
    category: "Dairy",
    tempArrival: 4.1,
    useByDate: "2026-11-06",
    conditionStatus: "Accepted",
    receiverInitials: "SA",
    notes: "Tamper seals intact on crates"
  }
];

export function FoodTraceabilityLogTool({ templateId }: { templateId?: string }) {
  const [businessName, setBusinessName] = useState<string>("The Crown Restaurant & Kitchen");
  const [premisesLicenseNo, setPremisesLicenseNo] = useState<string>("FSA/EHO-99410-LON");
  const [supervisorName, setSupervisorName] = useState<string>("Head Chef J. Morgan");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const [deliveries, setDeliveries] = useState<DeliveryLogEntry[]>(DEFAULT_DELIVERIES);

  // New Delivery Form Fields
  const [supplier, setSupplier] = useState<string>("");
  const [invoiceNo, setInvoiceNo] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [batchLotCode, setBatchLotCode] = useState<string>("");
  const [category, setCategory] = useState<DeliveryLogEntry["category"]>("Chilled Meat");
  const [tempArrival, setTempArrival] = useState<number>(3.5);
  const [useByDate, setUseByDate] = useState<string>("");
  const [conditionStatus, setConditionStatus] = useState<"Accepted" | "Rejected">("Accepted");
  const [receiverInitials, setReceiverInitials] = useState<string>("JM");
  const [notes, setNotes] = useState<string>("Vehicle clean; packaging intact");

  const addDeliveryEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supplier.trim() || !productDescription.trim() || !batchLotCode.trim()) return;

    const newEntry: DeliveryLogEntry = {
      id: `del-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      supplier: supplier.trim(),
      invoiceNo: invoiceNo.trim() || "N/A",
      productDescription: productDescription.trim(),
      batchLotCode: batchLotCode.trim(),
      category,
      tempArrival: Number(tempArrival),
      useByDate: useByDate || "See pack label",
      conditionStatus,
      receiverInitials: receiverInitials.toUpperCase().slice(0, 3),
      notes: notes.trim()
    };

    setDeliveries([newEntry, ...deliveries]);
    setSupplier("");
    setInvoiceNo("");
    setProductDescription("");
    setBatchLotCode("");
  };

  const removeEntry = (id: string) => {
    setDeliveries(deliveries.filter(d => d.id !== id));
  };

  const filteredDeliveries = deliveries.filter(d => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      d.supplier.toLowerCase().includes(q) ||
      d.productDescription.toLowerCase().includes(q) ||
      d.batchLotCode.toLowerCase().includes(q) ||
      d.invoiceNo.toLowerCase().includes(q)
    );
  });

  const exportCSV = () => {
    const headers = [
      "Delivery ID",
      "Date",
      "Supplier Name",
      "Invoice / Ticket No",
      "Product Description",
      "Batch / Lot Code",
      "Category",
      "Arrival Temp (°C)",
      "Use-By Date",
      "Status",
      "Receiver Initials",
      "Notes"
    ];

    const rows = deliveries.map(d => [
      `"${d.id}"`,
      `"${d.date}"`,
      `"${d.supplier}"`,
      `"${d.invoiceNo}"`,
      `"${d.productDescription}"`,
      `"${d.batchLotCode}"`,
      `"${d.category}"`,
      d.tempArrival,
      `"${d.useByDate}"`,
      `"${d.conditionStatus}"`,
      `"${d.receiverInitials}"`,
      `"${d.notes}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `food_traceability_intake_log_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-2">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Regulation (EC) No 178/2002 Article 18 Traceability System</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              One-Step-Back &amp; One-Step-Forward Food Traceability Log
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Record supplier intake batches, check delivery temperatures, log lot numbers, and instantly retrieve due diligence records during EHO food safety audits or product recall notices.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={exportCSV}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer border border-slate-300"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 Delivery Sheet</span>
            </button>
          </div>
        </div>

        {/* Configuration Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Establishment Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Premises License / Approval No
            </label>
            <input
              type="text"
              value={premisesLicenseNo}
              onChange={e => setPremisesLicenseNo(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Search Log (Supplier, Batch, Item)
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search batch LOT code..."
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg pl-8 pr-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Log Goods Inwards Intake Form */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-600" />
              <span>Record New Goods Inwards Intake Batch</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Statutory Requirement under General Food Law
            </span>
          </div>

          <form onSubmit={addDeliveryEntry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Supplier / Wholesaler Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Brakes Foodservice"
                value={supplier}
                onChange={e => setSupplier(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Invoice / Delivery Note #
              </label>
              <input
                type="text"
                placeholder="e.g. INV-10924"
                value={invoiceNo}
                onChange={e => setInvoiceNo(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Product Description
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Chicken Breasts (Grade A)"
                value={productDescription}
                onChange={e => setProductDescription(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Batch / Lot Number / Kill Code
              </label>
              <input
                type="text"
                required
                placeholder="e.g. LOT-UK-9921"
                value={batchLotCode}
                onChange={e => setBatchLotCode(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold font-mono text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Product Category
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as any)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              >
                <option value="Chilled Meat">Chilled Meat (≤ 5°C)</option>
                <option value="Chilled Fish">Chilled Fish (≤ 2°C on ice)</option>
                <option value="Dairy">Dairy (≤ 8°C)</option>
                <option value="Produce">Produce / Salads</option>
                <option value="Frozen">Frozen (≤ -18°C)</option>
                <option value="Ambient Dry">Ambient Dry Goods</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Delivery Arrival Temp (°C)
              </label>
              <input
                type="number"
                step="0.1"
                value={tempArrival}
                onChange={e => setTempArrival(parseFloat(e.target.value))}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Use-By / Expiry Date
              </label>
              <input
                type="date"
                value={useByDate}
                onChange={e => setUseByDate(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-black text-white text-xs font-bold py-2 rounded-lg transition-all shadow-xs cursor-pointer"
              >
                + Log Delivery Intake
              </button>
            </div>
          </form>
        </div>

        {/* Deliveries Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Supplier &amp; Invoice</th>
                <th className="py-3 px-3">Item Description</th>
                <th className="py-3 px-3">Batch / Lot Code</th>
                <th className="py-3 px-3">Arrival Temp</th>
                <th className="py-3 px-3">Use-By</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {filteredDeliveries.map(d => {
                const isTempSafe = d.tempArrival <= (d.category === "Frozen" ? -18 : 8);
                return (
                  <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 font-mono text-[11px]">{d.date}</td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{d.supplier}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{d.invoiceNo}</div>
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-900">{d.productDescription}</td>
                    <td className="py-3 px-3 font-mono font-bold text-amber-800">{d.batchLotCode}</td>
                    <td className="py-3 px-3">
                      <span className={`font-black ${isTempSafe ? "text-emerald-700" : "text-rose-700"}`}>
                        {d.tempArrival}°C
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">{d.useByDate}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {d.conditionStatus}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => removeEntry(d.id)}
                        className="text-slate-400 hover:text-rose-600 cursor-pointer font-bold text-[11px]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 PRINTABLE TRACEABILITY DELIVERY SHEET CONTAINER
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Sheet Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-slate-900 text-white font-mono font-black text-xs uppercase tracking-wider mb-2">
                FSA STATUTORY INTAKE VERIFICATION
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                Goods Inwards &amp; Food Traceability Record
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                One-Step-Back Supplier Auditing Under Regulation (EC) No 178/2002 Article 18
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Premises Approval</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-slate-700 truncate">{premisesLicenseNo}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px]">
            <div>
              <span className="font-bold text-slate-500 uppercase block">Supervisor:</span>
              <span className="font-black text-slate-900">{supervisorName}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Chilled Arrival Limit:</span>
              <span className="font-black text-rose-700">≤ 8.0°C (Reject &gt; 8°C)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Frozen Arrival Limit:</span>
              <span className="font-black text-sky-700">≤ -18.0°C</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Record Retention:</span>
              <span className="font-black text-slate-900">Minimum 6 Months (SFBB)</span>
            </div>
          </div>
        </div>

        {/* Printable Log Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Supplier &amp; Inv No</th>
                <th className="py-2.5 px-3">Item Description</th>
                <th className="py-2.5 px-2">Batch/Lot Code</th>
                <th className="py-2.5 px-2">Arrival (°C)</th>
                <th className="py-2.5 px-2">Use-By</th>
                <th className="py-2.5 px-2">Sign</th>
                <th className="py-2.5 px-3">Delivery Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-900">
              {deliveries.map(d => (
                <tr key={d.id}>
                  <td className="py-2 px-3 font-mono text-[10px]">{d.date}</td>
                  <td className="py-2 px-3">
                    <div className="font-bold">{d.supplier}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{d.invoiceNo}</div>
                  </td>
                  <td className="py-2 px-3 text-[11px]">{d.productDescription}</td>
                  <td className="py-2 px-2 font-mono font-bold text-[10px]">{d.batchLotCode}</td>
                  <td className="py-2 px-2 font-black font-mono text-rose-700">{d.tempArrival}°C</td>
                  <td className="py-2 px-2 font-mono text-[10px]">{d.useByDate}</td>
                  <td className="py-2 px-2 font-mono font-bold text-center">{d.receiverInitials}</td>
                  <td className="py-2 px-3 text-[10px] text-slate-600">{d.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Due Diligence Traceability Legal Notice */}
        <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 text-xs space-y-2">
          <div className="font-black text-slate-900 uppercase text-xs flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>FSA Traceability Compliance Standards (Regulation EC 178/2002)</span>
          </div>
          <p className="text-[11px] text-slate-700 leading-relaxed">
            All commercial food businesses must be able to produce delivery invoices and lot codes for any food item within 4 hours of an official request by an Environmental Health Officer (EHO). Delivery vehicles must be inspected for hygiene, absence of chemical contamination, and valid temperature seals.
          </p>
        </div>

        {/* Sign-off & Verification Footer */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[11px] text-slate-500">
            Regulation (EC) No 178/2002 Art 18 • Food Safety Act 1990 • Due Diligence Delivery Sheet
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-700">
            <div className="border-b border-slate-400 pb-1 min-w-[120px] text-center">
              Intake Manager Sign-Off
            </div>
            <div className="border-b border-slate-400 pb-1 min-w-[100px] text-center">
              Date: ___ / ___ / 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
