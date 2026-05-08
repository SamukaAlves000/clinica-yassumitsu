import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-developer-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <div class="fixed bottom-28 right-8 z-[60] flex flex-col items-end gap-3">
      <!-- Main Button -->
      <a 
        routerLink="/desenvolvedor"
        class="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl shadow-primary/20 hover:scale-110 active:scale-95 transition-all duration-300 relative group border border-slate-100"
      >
        <span class="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
           Conheça o Desenvolvedor
        </span>
        <mat-icon class="text-3xl">face</mat-icon>
        
        <!-- Subtle pulse effect -->
        <span class="absolute inset-0 rounded-full animate-ping bg-primary opacity-10 pointer-events-none"></span>
      </a>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class DeveloperButton {}
