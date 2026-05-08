import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desenvolvedor',
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <section class="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[-100px] left-[-100px]"></div>
       <div class="bg-blob w-80 h-80 bg-secondary/10 bottom-[-50px] right-[-50px]"></div>

       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div class="flex flex-col lg:flex-row items-center gap-16">
             <div class="w-full lg:w-1/3">
                <div class="relative group">
                   <div class="absolute -inset-4 bg-primary/10 rounded-[60px] blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                   <div class="relative rounded-[48px] overflow-hidden border-8 border-white shadow-2xl aspect-[3/4]">
                      <img src="/Image (3).jpg" alt="Samuel Alves dos Santos" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                   </div>
                </div>
             </div>

             <div class="w-full lg:w-2/3 space-y-8">
                <div class="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                   Desenvolvedor de Sistemas
                </div>
                <h1 class="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">Samuel Alves <span class="text-gradient">dos Santos</span></h1>
                <p class="text-xl text-slate-600 leading-relaxed max-w-2xl">
                   Especialista em transformar ideias em soluções digitais modernas, rápidas e profissionais.
                </p>
                
                <div class="flex flex-wrap gap-4 pt-4">
                   <a href="https://w.app/qygesc" target="_blank" class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-accent-4 transition-all flex items-center gap-2 shadow-xl shadow-primary/20">
                      <mat-icon>chat</mat-icon>
                      Chamar no WhatsApp
                   </a>
                   <div class="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-bold flex items-center gap-2 bg-white">
                      <mat-icon class="text-primary">phone</mat-icon>
                      (62) 99839-5236
                   </div>
                </div>

                <div class="flex gap-4 pt-2">
                   <a href="https://www.linkedin.com/in/santoss-samuel/" target="_blank" class="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm group/link">
                      <svg class="w-6 h-6 transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                   </a>
                   <a href="https://www.instagram.com/samuka_santos_s?igsh=a2h0azdsbzZlbTZy&utm_source=qr" target="_blank" class="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm group/link">
                      <svg class="w-6 h-6 transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                   </a>
                </div>
             </div>
          </div>
       </div>
    </section>

    <section class="py-24 bg-white relative">
       <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div class="space-y-12">
                <div>
                   <h2 class="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                      <span class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                         <mat-icon>code</mat-icon>
                      </span>
                      O que posso desenvolver
                   </h2>
                   <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      @for (item of solutions; track item) {
                         <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 hover:border-primary/30 transition-colors">
                            <mat-icon class="text-primary text-sm">check_circle</mat-icon>
                            <span class="text-slate-700 font-medium">{{ item }}</span>
                         </div>
                      }
                   </div>
                </div>

                <div>
                   <h2 class="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                      <span class="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary">
                         <mat-icon>star</mat-icon>
                      </span>
                      Diferenciais dos Projetos
                   </h2>
                   <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      @for (item of differentials; track item) {
                         <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 hover:border-primary/30 transition-colors">
                            <mat-icon class="text-primary text-sm">bolt</mat-icon>
                            <span class="text-slate-700 font-medium">{{ item }}</span>
                         </div>
                      }
                   </div>
                </div>
             </div>

             <div class="space-y-12">
                <div>
                   <h2 class="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                      <span class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                         <mat-icon>work</mat-icon>
                      </span>
                      Experiência Profissional
                   </h2>
                   <div class="space-y-8">
                      @for (exp of experience; track exp.company) {
                         <div class="relative pl-8 border-l-2 border-slate-100 pb-2">
                            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                            <p class="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">{{ exp.period }}</p>
                            <h3 class="text-xl font-bold text-slate-900">{{ exp.company }}</h3>
                            <p class="text-slate-500 font-bold text-sm mb-2">{{ exp.role }}</p>
                            <p class="text-slate-400 text-xs flex items-center gap-1">
                               <mat-icon class="text-[14px] h-auto w-auto">location_on</mat-icon>
                               {{ exp.location }}
                            </p>
                         </div>
                      }
                   </div>
                </div>

                <div>
                   <h2 class="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                      <span class="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary">
                         <mat-icon>school</mat-icon>
                      </span>
                      Formação Acadêmica
                   </h2>
                   <div class="p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                      <p class="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">2016 – 2019</p>
                      <h3 class="text-xl font-bold text-slate-900 mb-2">Instituto Federal Goiano – Campus Urutaí</h3>
                      <p class="text-slate-600 font-medium">Bacharelado em Sistemas de Informação</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-primary relative overflow-hidden">
       <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
       </div>
       <div class="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold text-white">Conheça a prévia que preparei para você</h2>
          <p class="text-xl text-white/80 leading-relaxed">
             Visualize agora o potencial do seu projeto através da prévia funcional que desenvolvi.
          </p>
          <div class="pt-4">
             <a routerLink="/" class="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-xl hover:bg-slate-100 transition-all shadow-2xl">
                <mat-icon>visibility</mat-icon>
                Acessar Prévia
             </a>
          </div>
       </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Desenvolvedor {
  solutions = [
    'Sistemas web', 'Sites institucionais', 'Landing Pages', 
    'Plataformas administrativas', 'Dashboards', 'Soluções personalizadas', 
    'Integrações e automações',
   'Painéis gerenciais', 'Aplicações responsivas'
  ];

  differentials = [
    'Performance', 'Responsividade', 'Experiência do usuário',
    'Visual moderno', 'Facilidade de uso', 'Integração com WhatsApp',
    'SEO básico', 'Estrutura profissional'
  ];

  experience = [
    {
      company: 'act digital',
      role: 'Analista de Desenvolvimento',
      period: 'Jun de 2025 – Atual',
      location: 'Brasília – DF | Remoto'
    },
    {
      company: 'Stefanini Brasil',
      role: 'Analista Desenvolvedor Pleno/Júnior',
      period: 'Ago de 2020 – Jun de 2025',
      location: 'Brasília – DF'
    },
    {
      company: 'Globaltec S/A',
      role: 'Desenvolvedor Pleno/Júnior',
      period: 'Ago de 2019 – Ago de 2020',
      location: 'Goiânia – GO'
    }
  ];
}
