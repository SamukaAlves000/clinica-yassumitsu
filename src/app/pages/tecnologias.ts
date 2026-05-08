import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="pt-48 pb-24 bg-slate-50 text-slate-900 relative overflow-hidden">
       <div class="bg-blob w-96 h-96 bg-primary/10 top-[-100px] right-[-100px]"></div>
       <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20">Vanguard Digital</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Inovação & <span class="text-accent-2 italic">Tecnologia.</span></h1>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
             A odontologia do futuro, hoje. Investimos em tecnologia de ponta para diagnósticos precisos e tratamentos confortáveis.
          </p>
       </div>
    </section>

    <section class="py-32 bg-white text-slate-900 relative">
       <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
             <div class="space-y-8">
                <div class="inline-block px-4 py-2 rounded-full bg-accent-2/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-accent-2/20">
                   Fluxo 100% Digital
                </div>
                <h2 class="text-4xl md:text-6xl font-bold leading-tight text-slate-900">Diga adeus às <span class="text-primary italic">moldagens</span> físicas.</h2>
                <p class="text-slate-600 text-lg leading-relaxed">
                   Com nosso scanner intraoral iTero, capturamos cada detalhe da sua boca em tempo real, gerando um modelo digital perfeito em minutos. Mais rapidez e precisão absoluta.
                </p>
                <ul class="space-y-6">
                   <li class="flex items-center gap-4 text-slate-600">
                      <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <mat-icon class="text-primary scale-75">check</mat-icon>
                      </div>
                      Previsibilidade total do resultado final
                   </li>
                   <li class="flex items-center gap-4 text-slate-600">
                      <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <mat-icon class="text-primary scale-75">check</mat-icon>
                      </div>
                      Mais agilidade em todo o planejamento
                   </li>
                   <li class="flex items-center gap-4 text-slate-600">
                      <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <mat-icon class="text-primary scale-75">check</mat-icon>
                      </div>
                      Conforto incomparável para o paciente
                   </li>
                </ul>
             </div>
             <div class="relative group">
                <div class="relative aspect-square rounded-[60px] overflow-hidden border-8 border-white bg-slate-50 z-10 shadow-3xl">
                   <img src="https://i.ibb.co/211CM849/Chat-GPT-Image-8-de-mai-de-2026-00-20-32.png" class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" alt="Equipamento Tecnológico">
                </div>
                <!-- Scanning line effect -->
                <div class="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-[60px]">
                   <div class="w-full h-1 bg-accent-2/50 absolute top-0 shadow-[0_0_20px_#6CB2C4] animate-scan"></div>
                </div>
             </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center lg:flex-row-reverse">
             <div class="lg:order-2 space-y-8">
                <div class="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                   Ortodontia Invisível
                </div>
                <h2 class="text-4xl md:text-6xl font-bold leading-tight text-slate-900">O alinhador mais <span class="text-accent-2 italic">avançado</span> do mundo.</h2>
                <p class="text-slate-600 text-lg leading-relaxed">
                   Aliamos o escaneamento digital ao sistema Invisalign para planejar toda a movimentação dos seus dentes antes mesmo de começar. Transparente, removível e eficiente.
                </p>
                <div class="p-10 rounded-[40px] bg-slate-50 border border-slate-100 shadow-2xl">
                   <p class="text-slate-600 italic leading-relaxed">"O simulador de resultados permite que você visualize seu novo sorriso em segundos, tornando o planejamento participativo e empolgante."</p>
                </div>
             </div>
             <div class="lg:order-1 relative group">
                <div class="relative aspect-square rounded-[60px] overflow-hidden border-8 border-white bg-slate-50 z-10 shadow-3xl">
                   <img src="https://i.ibb.co/d4qd5Pfq/df7cd825-d890-4d5b-b9da-b642380f192a.png" class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" alt="Invisalign Technology">
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Additional Tech Grid -->
    <section class="py-32 bg-white relative overflow-hidden">
       <div class="bg-blob w-80 h-80 bg-secondary bottom-[-40px] right-[-40px]"></div>
       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div class="text-center mb-20 space-y-4">
             <h2 class="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Infraestrutura Completa</h2>
             <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-900">Precisão em <span class="text-gradient">cada detalhe.</span></h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div class="p-12 rounded-[56px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-3xl hover:shadow-primary/5 transition-all group hover:-translate-y-2">
                <div class="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <mat-icon class="text-primary group-hover:text-white transition-colors">camera</mat-icon>
                </div>
                <h4 class="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">Raio-X Digital</h4>
                <p class="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600">Menos radiação e resultados imediatos com alta definição para diagnósticos cirúrgicos precisos.</p>
             </div>
             <div class="p-12 rounded-[56px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-3xl hover:shadow-primary/5 transition-all group hover:-translate-y-2">
                <div class="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <mat-icon class="text-primary group-hover:text-white transition-colors">videocam</mat-icon>
                </div>
                <h4 class="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">Câmera Intraoral</h4>
                <p class="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600">Acompanhe cada detalhe da sua saúde bucal através de imagens em alta resolução projetadas em tempo real.</p>
             </div>
             <div class="p-12 rounded-[56px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-3xl hover:shadow-primary/5 transition-all group hover:-translate-y-2">
                <div class="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <mat-icon class="text-primary group-hover:text-white transition-colors">biotech</mat-icon>
                </div>
                <h4 class="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">Motores Elétricos</h4>
                <p class="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600">Equipamentos silenciosos de última geração para procedimentos de canal e cirurgia com máximo conforto.</p>
             </div>
          </div>
       </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    @keyframes scan {
      0% { top: 0; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    .animate-scan {
      animation: scan 3s linear infinite;
    }
  `]
})
export class Tecnologias {}
