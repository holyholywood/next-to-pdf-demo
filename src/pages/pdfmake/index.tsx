import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class PDFGenerator extends React.Component {
  generatePDF = () => {
    const header = { text: "Sample Header", style: "header" };
    const content = Array(400).fill("Sample content line.");

    const documentDefinition: TDocumentDefinitions = {
      info: {
        title: "Sample PDF with Header and Page Numbers",
      },
      header: header,
      footer: function (currentPage: any, pageCount: any) {
        return {
          text: `Page ${currentPage.toString()} of ${pageCount}`,
          alignment: "center",
        };
      },
      content: [
        header,
        {
          text: "Page 1 Content",
          style: "subheader",
        },
        content,
        // { text: "\n\n" }, // Add spacing between pages
        header,
        {
          text: "Page 2 Content",
          style: "subheader",
        },
        content,
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          margin: [0, 10, 0, 10],
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
        },
      },
      defaultStyle: {
        fontSize: 12,
        margin: [0, 5, 0, 5],
      },
    };

    pdfMake.createPdf(documentDefinition).download("sample_2_page.pdf");
  };

  render() {
    return (
      <div>
        <h1>PDF Generator Example with Header and Page Numbers</h1>
        <button onClick={this.generatePDF}>Generate 2-Page PDF</button>
      </div>
    );
  }
}

export default PDFGenerator;
