import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-whatsapp-button',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3">
      <!-- Options Menu -->
      @if (isOpen()) {
        <div 
          class="bg-white rounded-2xl shadow-2xl p-4 w-64 border border-slate-100 mb-2 animate-slide-up"
        >
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Escolha uma Unidade</p>
          <div class="space-y-2">
            <a 
              href="https://wa.me/5562999540828?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank"
              class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <div>
                <p class="font-bold text-slate-800 text-sm">Unidade Posse</p>
                <p class="text-[10px] text-slate-500">Clique para iniciar conversa</p>
              </div>
              <mat-icon class="text-emerald-500 group-hover:translate-x-1 transition-transform">arrow_forward</mat-icon>
            </a>
            <a 
              href="https://wa.me/5562999932959?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank"
              class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <div>
                <p class="font-bold text-slate-800 text-sm">Unidade Campos Belos</p>
                <p class="text-[10px] text-slate-500">Clique para iniciar conversa</p>
              </div>
              <mat-icon class="text-emerald-500 group-hover:translate-x-1 transition-transform">arrow_forward</mat-icon>
            </a>
          </div>
        </div>
      }

      <!-- Main Button -->
      <button 
        (click)="toggle()"
        class="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <span class="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
           Fale Conosco
        </span>
        @if (!isOpen()) {
          <mat-icon class="text-3xl">chat</mat-icon>
        }
        @if (isOpen()) {
          <mat-icon class="text-3xl">close</mat-icon>
        }
        
        <!-- Ripple effect -->
        <span class="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-20 pointer-events-none"></span>
      </button>
    </div>
  `,
  styles: [`
    .animate-slide-up {
      animation: slideUp 0.3s ease-out;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px) scale(0.9); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `]
})
export class WhatsAppButton {
  isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }
}
