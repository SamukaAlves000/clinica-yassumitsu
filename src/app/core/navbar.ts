import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <nav 
      class="fixed h-20 top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.glass]="isScrolled()"
      [class.py-4]="!isScrolled()"
      [class.py-2]="isScrolled()"
      [class.shadow-sm]="isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3 group">
          <img 
            src="https://i.ibb.co/Hf7DPfVq/259758180-839352380066455-2212882331847913900-n.png" 
            alt="Clínica Yassumitsu Logo" 
            class="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
          >
        </a>
        <div class="h-10 md:h-12 w-[1px] bg-slate-200 ml-2 hidden lg:block"></div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 ml-4">
          @for (item of menuItems; track item.path) {
            <a 
              [routerLink]="item.path" 
              (click)="isScrolled() ? isMenuOpen = false : null"
              routerLinkActive="text-primary underline underline-offset-8 decoration-2"
              [routerLinkActiveOptions]="{exact: true}"
              class="text-slate-600 hover:text-primary transition-colors text-[13px] font-bold tracking-wider uppercase"
            >
              {{ item.label }}
            </a>
          }
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-4">
          <button 
            routerLink="/contato"
            (click)="isScrolled() ? isMenuOpen = false : null"
            class="px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all"
          >
            Agendar Consulta
          </button>
          <a 
            href="https://wa.me/5562999540828" 
            target="_blank"
            class="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.393L6.46 20.21l5.033-1.071c.883.435 1.884.685 2.946.685 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm4.511 8.35c-.186.522-1.077 1.012-1.488 1.082-.373.064-.86.113-2.392-.522-1.957-.81-3.218-2.795-3.316-2.926-.098-.13-.799-.957-.799-1.826 0-.869.455-1.297.617-1.472.162-.174.354-.218.471-.218.117 0 .233.001.336.006.107.004.25-.041.391.298.144.348.494 1.205.536 1.29.043.084.07.183.013.295-.056.113-.085.183-.17.282-.084.099-.177.221-.254.298-.084.084-.172.176-.073.348.099.172.438.723.94 1.169.645.574 1.189.753 1.359.839.17.086.27.072.369-.043.099-.115.426-.497.54-.668.114-.171.228-.142.383-.085s.983.464 1.153.549c.17.086.284.128.326.198.043.07.043.407-.143.929z"/></svg>
            WhatsApp
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button 
          (click)="toggleMenu()"
          class="md:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
        >
          <mat-icon>{{ isMenuOpen ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      @if (isMenuOpen) {
        <div 
          class="absolute top-full left-0 right-0 glass pt-4 pb-8 flex flex-col items-center gap-6 shadow-xl animate-fade-in"
        >
          @for (item of menuItems; track item.path) {
            <a 
              [routerLink]="item.path" 
              (click)="isMenuOpen = false"
              class="text-slate-700 hover:text-primary transition-colors text-lg font-medium"
            >
              {{ item.label }}
            </a>
          }
          <div class="flex flex-col gap-4 w-full px-8 mt-4">
            <a 
              href="https://wa.me/5562999540828" 
              class="w-full py-3 rounded-full bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
            >
              <mat-icon>chat</mat-icon>
              WhatsApp
            </a>
            <button 
                routerLink="/contato"
                (click)="isMenuOpen = false"
                class="w-full py-3 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
              Agendar Consulta
            </button>
          </div>
        </div>
      }
    </nav>
  `,
  styles: [`
    :host { display: block; }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class Navbar {
  platformId = inject(PLATFORM_ID);
  isScrolled = signal(false);
  isMenuOpen = false;

  menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Especialidades', path: '/especialidades' },
    { label: 'Tecnologias', path: '/tecnologias' },
    { label: 'Profissionais', path: '/profissionais' },
    { label: 'Unidades', path: '/unidades' },
    { label: 'Contato', path: '/contato' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
