import Link from "next/link";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const MultiplePagePrintSecond = () => {
  return (
    <main className="min-w-full min-h-screen relative">
      <div className="m-auto bg-white border rounded shadow-lg max-w-5xl w-full my-8 px-10">
        <ContentToPrint />{" "}
      </div>
    </main>
  );
};

export default MultiplePagePrintSecond;

const grMainData = [
  { text: "Voucher Type:", value: "Purchase Order" },
  { text: "Voucher Name:", value: "PO-PYO-20230728-1" },
  { text: "PO Batch:", value: "1" },
  { text: "Supplier:", value: "global suplier" },
  { text: "Company:", value: "PYOPP" },
  { text: "Company Abbr:", value: "PYO" },
  { text: "Delivery Date:", value: "02-08-2023 00:00:00" },
  { text: "Workflow Status:", value: "BINNED" },
];

const srColumnField = ["Sr", "Status", "Status Time", "Person in Charge"];

const srRowData = [
  {
    status: "ON DELIVERY",
    time: "02-08-2023 11:24:58",
    pic: "packerdepok2@pts.sc",
  },
  {
    status: "RECEIVING",
    time: "02-08-2023 11:24:58",
    pic: "packerdepok2@pts.sc",
  },
  {
    status: "SUBMIT QC",
    time: "02-08-2023 11:24:58",
    pic: "packerdepok2@pts.sc",
  },
  {
    status: "ACCEPTED AT WAREHOUSE",
    time: "02-08-2023 11:24:58",
    pic: "packerdepok2@pts.sc",
  },
  {
    status: "BINNED",
    time: "02-08-2023 11:24:58",
    pic: "packerdepok2@pts.sc",
  },
];

const otherBasicData = [
  { text: "Destination Warehouse::", value: "Malatex - PYO" },
  { text: "Warehouse Profile Destination:", value: "Malatex G11" },
];

const grTableColumn = ["Item Code", "Item Name", "Brand Item Code", "Selling Price", "Buying Price", "UOM ID", "Discount Amount", "Weight Per Unit", "Quantity on Letter of Travel", "Accepted Qty"];

const grDataRow = [
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
  ["PYO|SNTP2.0-LGOPG-24", "Sandal Tapak 2.0 Barefoot Flip Flops Light Grey On Pebble Grey-24", "SNTP2.0-LGOPG-24", "278.000,00", "278.000", "0", "0", "500", "10", "10"],
];
const ContentToPrint = () => {
  const [isWithHeader, setIsWithHeader] = useState(true);
  const [isPrintOptionOpen, setIsPrintOptionOpen] = useState(true);
  const [isPrinting, setIsPrinting] = useState(false);
  const printRefToForward = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printRefToForward.current,
    pageStyle: "size: auto; margin: 20mm 0 10mm 0;",
    documentTitle: "Laporan Penjualan",
    onBeforePrint: () => {
      console.info("onBeforePrint");
      //   setIsPrinting(true);
    },
    onAfterPrint: () => {
      console.info("onAfterPrint");
      //   setIsPrinting(false);
    },
  });
  return (
    <>
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
              <li>
                <Link className="text-secondary underline text-sm" href={"/"}>
                  Go To Home Page
                </Link>
              </li>
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
      <div ref={printRefToForward} className="px-4 py-8">
        <table className="w-full">
          <thead className=" py-4 space-y-2">
            <tr>
              <th className="w-full  py-4">
                <div className="w-fit ml-auto text-4xl">Goods Receipt</div>
                <div className="w-fit ml-auto text-2xl text-black/50">GR-PO-PYO-20230728-1-1</div>
                <div className="w-full h-[1px] bg-black my-4"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <td>
              <div className="py-10 space-y-10">
                <ul className="w-1/2 space-y-2">
                  {grMainData.map((grMain, i) => (
                    <li className="flex items-center gap-8 justify-between" key={i}>
                      <div className="font-bold">{grMain.text}</div>
                      <div>{grMain.value}</div>
                    </li>
                  ))}
                </ul>
                <table className="w-full text-left border border-gray-400">
                  <thead>
                    <tr className="bg-gray-200">
                      {srColumnField.map((srColumn, i) => (
                        <th key={i} className="px-2 py-4 border border-gray-400">
                          {srColumn}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {srRowData.map((srRow, i) => (
                      <tr key={i}>
                        <td className="border border-gray-400 px-2 py-2">{i + 1}</td>
                        <td className="border border-gray-400 px-2 py-2">{srRow.status}</td>
                        <td className="border border-gray-400 px-2 py-2">{srRow.time}</td>
                        <td className="border border-gray-400 px-2 py-2">{srRow.pic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ul className="w-1/2 space-y-2">
                  {otherBasicData.map((grMain, i) => (
                    <li className="flex items-center gap-8 justify-between" key={i}>
                      <div className="font-bold">{grMain.text}</div>
                      <div>{grMain.value}</div>
                    </li>
                  ))}
                </ul>
                <div className="">
                  <table
                    className="w-fit text-left border border-gray-400 table-auto text-sm "
                    style={{
                      pageBreakInside: "auto",
                    }}
                  >
                    <thead className="" style={{ display: "table-header-group" }}>
                      <tr className="bg-gray-200 pt-10" style={{ pageBreakInside: "avoid", pageBreakAfter: "auto" }}>
                        <th className="px-2 py-4 border border-gray-400 w-fit ">Sr</th>
                        {grTableColumn.map((srColumn, i) => (
                          <th key={i} className="px-2 py-4 border border-gray-400 ">
                            {srColumn}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {grDataRow.map((grData, i) => (
                        <tr key={i}>
                          <td className="border border-gray-400 px-2 py-2">{i + 1}</td>
                          {grData.map((grDatas, index) => (
                            <td key={index} className="border border-gray-400 px-2 py-2 break-all">
                              {grDatas}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tbody>
          <tfoot>page of page</tfoot>
        </table>
      </div>
    </>
  );
};
