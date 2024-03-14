import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isModalOpen = false;
  step = 1;
  activeLink = '';

  openModal(): void {
    this.isModalOpen = true;
    this.step = 1;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  handleContinue(): void {
    this.step++;
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
