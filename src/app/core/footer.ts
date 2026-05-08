import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <footer class="bg-primary text-white py-16 px-4 md:px-12 overflow-hidden relative">
      <!-- Background subtle elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div class="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div class="flex flex-col">
              <span class="text-[10px] text-white/50 uppercase font-bold tracking-widest mb-2">Agendamento Posse</span>
              <span class="text-lg font-medium">(62) 3481-3069</span>
              <span class="text-sm text-white/70 mt-1">Av. Nestor Balduíno, Qd. 29, Lote 10A</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[10px] text-white/50 uppercase font-bold tracking-widest mb-2">Agendamento C. Belos</span>
              <span class="text-lg font-medium">(62) 3451-3194</span>
              <span class="text-sm text-white/70 mt-1">Rua B H Foreman, nº 54</span>
            </div>
          </div>
          
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center lg:justify-end">
            <div class="md:text-right">
              <span class="block text-sm font-bold">Dr. Willian Yassumitsu</span>
              <span class="block text-[10px] text-white/60 uppercase">RT • CRO/GO 8666</span>
            </div>
            <div class="hidden md:block h-10 w-[1px] bg-white/20"></div>
            <div class="flex flex-col gap-3">
              <span class="text-[11px] font-semibold text-white/80">Planos e Convênios:</span>
              <div class="flex flex-wrap gap-2 opacity-80">
                @for (plan of plans; track plan) {
                  <span class="text-[9px] px-2 py-1 rounded border border-white/30 font-bold uppercase tracking-wider">{{ plan }}</span>
                }
              </div>
            </div>
          </div>
        </div>
        
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] uppercase font-bold tracking-widest">
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="flex items-center gap-6">
              <a routerLink="/" class="hover:text-white transition-colors">Início</a>
              <a routerLink="/sobre" class="hover:text-white transition-colors">Sobre</a>
              <a routerLink="/unidades" class="hover:text-white transition-colors">Unidades</a>
              <a routerLink="/contato" class="hover:text-white transition-colors">Contato</a>
            </div>
            <div class="hidden md:block h-3 w-[1px] bg-white/20"></div>
            <a routerLink="/desenvolvedor" class="hover:text-white transition-colors flex items-center gap-1">
              <mat-icon class="text-[12px] h-auto w-auto">code</mat-icon>
              Desenvolvedor
            </a>
          </div>
          <p>© 2026 Clínica Yassumitsu Odontologia. Excelência em Sorrisos.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Footer {
  plans = ['Ipasgo', 'Bradesco', 'Unimed Odonto', 'BB Dental', 'Odontoprev', 'Sul América'];
}
