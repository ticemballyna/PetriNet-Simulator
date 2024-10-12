import React from 'react';
import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';

class PDFExport extends React.Component {
  exportToPDF = (filename) => {
    const graphContainer = document.getElementById('graph');
    
    const marginLeft = 0;
    const marginTop = 25;
    
    domtoimage.toPng(graphContainer)
      .then((dataUrl) => {

        const pdf = new jsPDF('landscape', 'mm', 'a4');
        
        pdf.addImage(dataUrl, 'PNG', marginLeft, marginTop);
        if(filename) pdf.save(filename);
        else pdf.save('Petri_Graph.pdf');
      })
      .catch((error) => {
        console.error('Error exporting to PDF:', error);
      });
  };

  render() {
    return (
      <button onClick={this.exportToPDF}>
        Export as PDF with Margins
      </button>
    );
  }
}

export default PDFExport;