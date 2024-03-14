import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  exportPdf(): void {
    
    const pdf = new jsPDF('p', 'pt', 'a3');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('AuditHistory.pdf');
      },
    });
  }
}
