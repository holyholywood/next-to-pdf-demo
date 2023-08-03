import Image from "next/image";
import { Inter } from "next/font/google";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
const fontInter = Inter({
  subsets: ["latin"],
});
const fontInterBold = Inter({
  subsets: ["latin"],
  weight: ["800"],
});

function getLocalTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return hours + ":" + minutes;
}

export default function Home() {
  const [isWithHeader, setIsWithHeader] = useState(true);
  const [isPrintOptionOpen, setIsPrintOptionOpen] = useState(true);
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    pageStyle: "padding: 2rem 0px",
    documentTitle: "Laporan Penjualan",
    onBeforePrint: () => {
      console.info("onBeforePrint");
      setIsPrinting(true);
    },
    onAfterPrint: () => {
      console.info("onAfterPrint");
      setIsPrinting(false);
    },
  });
  return (
    <>
      <div className="mt-2 rounded shadow-xl mb-4 w-fit mx-auto">
        <main className="max-w-5xl w-full mx-auto relative px-10 py-10" style={fontInter.style} ref={printRef}>
          {isWithHeader && (
            <header className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-2xl" style={fontInterBold.style}>
                <Image src="/img/logo.png" alt="item" width={150} height={50} />
                <h1>-</h1>
                <h1>Brodo</h1>
              </div>
              <div className="text-xs">
                Exported on {new Date().toLocaleDateString()} {getLocalTime()}
              </div>
            </header>
          )}

          <h1 className="my-4 mt-10 text-2xl font-bold text-secondary">GR-PO-RAD-20230502-1-1</h1>
          <div className="space-y-4">
            <div className="border-2 rounded-lg shadow">
              <div className="border-b px-4 py-1 text-secondary font-bold">Activity Detail</div>
              <div className="grid grid-cols-2 gap-x-8 px-4 py-4 text-sm">
                {ActivityDetailData.map((item) => (
                  <div key={item.value} className="grid grid-cols-2">
                    <div className="font-semibold">{item.fieldName}</div>
                    <div className="flex gap-2">
                      <span>:</span>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 rounded-lg shadow">
              <div className="border-b px-4 py-1 text-secondary font-bold">Document Info</div>
              <div className="grid grid-cols-2 gap-x-8 px-4 py-4 text-sm">
                {DocumentInfoData.map((item) => (
                  <div key={item.value} className="grid grid-cols-2">
                    <div className="font-semibold">{item.fieldName}</div>
                    <div className="flex gap-2">
                      <span>:</span>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 rounded-lg shadow">
              <div className="border-b px-4 py-1 text-secondary font-bold">Item List & Payment Detail </div>
              <div className="px-4 py-4 text-sm">
                <table className="w-full rounded overflow-hidden">
                  <thead className="text-left">
                    <tr className="[&>th]:py-2 [&>th]:px-4 bg-secondary-light">
                      <th>#</th>
                      <th>Item</th>
                      <th className="text-right">Qty.</th>
                      <th className="text-right">Total Handed over</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ItemList.map((item, index) => {
                      return (
                        <tr key={item.id} className={`[&>td]:py-2 [&>td]:px-4 ${index % 2 !== 0 ? " [&>td]:bg-secondary/10" : ""}`}>
                          <td>{index + 1}</td>
                          <td className="flex items-center w-full gap-1">
                            <Image src={item.image} alt="item" width={50} height={50} />
                            <div>
                              <div>{item.name}</div>
                              <div className="text-quinary">{item.sku}</div>
                            </div>
                          </td>
                          <td className="text-center">{item.qty}</td>
                          <td className="text-right">{item.total}</td>
                          <td>{<StatusTD {...item.status} />}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className=" border ml-auto rounded p-4 w-96 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span>Total Qty.</span>
                    <span>16.937</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Handed Over Qty.</span>
                    <span>10.937</span>
                  </div>
                  <div className="flex justify-between items-center font-bold">
                    <span>Grand Total</span>
                    <span>Rp1.600.548.500</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm">
              <span className="font-semibold">Created by</span> : Admin X
            </div>
          </div>
        </main>
      </div>
      <div className={`fixed bottom-20 right-10 px-4 py-2 bg-white border rounded-lg ${isPrintOptionOpen ? "w-72" : "w-fit"}`}>
        {isPrintOptionOpen && (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Print Option</h1>
              <button className="text-xs text-secondary/75" onClick={() => setIsPrintOptionOpen(false)}>
                Tutup
              </button>
            </div>
            <ul className="my-4">
              <li className="flex items-center gap-4">
                <label htmlFor="withHeader">With Header?</label>
                <input
                  type="checkbox"
                  name=""
                  id="withHeader"
                  checked={isWithHeader}
                  onChange={(e) => {
                    setIsWithHeader(e.target.checked);
                  }}
                  className="accent-secondary"
                />
              </li>
              <li></li>
            </ul>
          </>
        )}
        {!isPrintOptionOpen && (
          <button className="text-xs text-secondary/75 mx-auto block mb-4" onClick={() => setIsPrintOptionOpen(true)}>
            Buka
          </button>
        )}
        <button
          disabled={isPrinting}
          onClick={handlePrint}
          className="disabled:cursor-not-allowed font-semibold ml-auto w-fit block text-white bg-primary rounded-lg px-6 py-2 hover:bg-primary-light hover:text-primary duration-500"
        >
          {isPrinting ? "Loading" : "Print"}
        </button>
      </div>
    </>
  );
}

const statusClass = {
  warning: "bg-amber-400 border-amber-400 text-amber-400",
  success: "bg-lime-400 border-lime-400 text-lime-400",
  error: "bg-danger border-danger text-danger",
};

const StatusTD = ({ name, type }: { name: string; type: "warning" | "success" | "error" }) => {
  return (
    <span className={`px-1 py-0.5 whitespace-nowrap border rounded-full text-center font-semibold inline-flex justify-center items-center bg-opacity-10 text-xs ${statusClass[type]}`}>{name}</span>
  );
};

const ActivityDetailData = [
  {
    fieldName: "Activity Type",
    value: "Purchase Order",
  },
  {
    fieldName: "Activity Number",
    value: "PO-RAD-20230502-1",
  },
];

const DocumentInfoData = [
  {
    fieldName: "Brand",
    value: "Rose All Day",
  },
  {
    fieldName: "Created Date",
    value: "02 May 2023",
  },
  {
    fieldName: "Warehouse",
    value: "Malatex - RAD",
  },
  {
    fieldName: "Expeceted Production Due Date",
    value: "03 May 2023",
  },
  {
    fieldName: "Vendor",
    value: "Cosmax",
  },
  {
    fieldName: "Batch",
    value: "1",
  },
  {
    fieldName: "Vendor Address",
    value: "Jalan KH. Hasyim XI No. 48 Jakarta Selatan, DKI Jakarta",
  },
  {
    fieldName: "Notes",
    value: "-",
  },
];

type ItemListType = {
  id: number;
  image: string;
  name: string;
  sku: string;
  qty: number;
  total: number;
  status: {
    name: string;
    type: "warning" | "success" | "error";
  };
};
const ItemList: ItemListType[] = [
  {
    id: 1,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 5000,
    total: 10111,
    status: {
      name: "Over Quantity",
      type: "warning",
    },
  },
  {
    id: 2,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "success",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
  {
    id: 3,
    image: "/img/dummyphoto.jpg",
    name: "The Realset Lightweight Essence Cushin San...",
    sku: "RAD|8997227080989",
    qty: 9393,
    total: 22212,
    status: {
      name: "Quantity Matched",
      type: "error",
    },
  },
];
