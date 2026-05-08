import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule, MatIconModule],
  template: `
    <!-- Hero Subpage -->
    <section class="pt-48 pb-24 bg-slate-50 text-slate-900 relative overflow-hidden">
       <!-- Background Blobs -->
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[-100px] left-[-100px]"></div>
       
       <div class="absolute inset-0 opacity-10">
          <img src="https://i.ibb.co/Y4pRFZmr/468626529-1457247381610282-6536782216758870714-n.jpg" class="w-full h-full object-cover" alt="Clínica Yassumitsu Background">
          <div class="absolute inset-0 bg-slate-50/80"></div>
       </div>
       
       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div class="max-w-3xl">
             <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6">Nossa <span class="text-accent-2 italic">História</span></h1>
             <p class="text-xl text-slate-600 leading-relaxed font-sans">
                Conheça a trajetória de excelência e inovação que transformou a Clínica Yassumitsu em uma referência regional.
             </p>
          </div>
       </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding bg-white relative overflow-hidden">
       <div class="bg-blob w-80 h-80 bg-secondary bottom-[-40px] left-[-40px]"></div>
       
       <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div class="space-y-8">
                <div class="inline-flex items-center gap-2">
                  <span class="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Trajetória de Sucesso</span>
                </div>
                <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-900">Tradição que gera <span class="text-gradient">confiança.</span></h3>
                <p class="text-slate-600 leading-relaxed text-lg">
                   A Clínica Yassumitsu Odontologia foi fundada com o objetivo de oferecer uma odontologia moderna, pautada no respeito ao paciente e na busca incessante pelos melhores resultados.
                </p>
                <p class="text-slate-600 leading-relaxed">
                   Localizada em Posse e Campos Belos/GO, nossa estrutura foi projetada para oferecer conforto e segurança em cada atendimento. Ao longo de mais de 26 anos, evoluímos junto com a tecnologia, mas sem nunca perder a essência do atendimento humanizado.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                   <div class="space-y-4 p-8 rounded-3xl bg-slate-50 border border-slate-100">
                      <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                         <mat-icon class="text-primary">visibility</mat-icon>
                      </div>
                      <h4 class="text-xl font-bold text-slate-900">Nossa Visão</h4>
                      <p class="text-sm text-slate-500 italic">"Ser a principal referência em sorrisos saudáveis e estéticos no nordeste goiano."</p>
                   </div>
                   <div class="space-y-4 p-8 rounded-3xl bg-slate-50 border border-slate-100">
                      <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                         <mat-icon class="text-primary">star</mat-icon>
                      </div>
                      <h4 class="text-xl font-bold text-slate-900">Nossa Missão</h4>
                      <p class="text-sm text-slate-500 italic">"Proporcionar bem-estar e autoestima através de uma odontologia de alta performance e acolhedora."</p>
                   </div>
                </div>
             </div>

             <div class="relative group">
                <div class="relative rounded-[60px] overflow-hidden shadow-3xl bg-slate-100 aspect-square border-8 border-white group-hover:shadow-primary/20 transition-all duration-700">
                   <img src="https://i.ibb.co/Hf7DPfVq/259758180-839352380066455-2212882331847913900-n.png" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Dr. Yassumitsu Portrait">
                   <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <!-- Numbers cards -->
                <div class="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-3xl border border-slate-100 hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
                   <p class="text-6xl font-display font-bold text-primary mb-2">26+</p>
                   <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Anos de dedicação</p>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Timeline / Values -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[-10%) right-[-10%]"></div>
       <div class="max-w-4xl mx-auto px-4 relative z-10">
          <div class="text-center mb-20 space-y-4">
             <h2 class="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Cultura e Princípios</h2>
             <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-900">Nossos Valores <span class="text-gradient">Fundamentais</span></h3>
          </div>
          
          <div class="space-y-12 relative">
             <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
             
             @for (value of values; track value.title; let i = $index) {
                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10" [class.md:flex-row-reverse]="i % 2 !== 0">
                   <div class="hidden md:block w-1/2"></div>
                   <div class="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 font-bold border-4 border-white">
                      {{ i + 1 }}
                   </div>
                   <div class="md:w-1/2 bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100">
                      <h4 class="text-xl font-bold text-slate-900 mb-4">{{ value.title }}</h4>
                      <p class="text-slate-500 leading-relaxed text-sm">{{ value.desc }}</p>
                   </div>
                </div>
             }
          </div>
       </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Sobre implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  values = [
    { title: 'Excelência Técnica', desc: 'Buscamos constantemente a perfeição em cada procedimento, utilizando as melhores técnicas do mercado.' },
    { title: 'Humanização', desc: 'Entendemos os medos e necessidades de cada paciente, tratando-os com empatia e cuidado.' },
    { title: 'Inovação', desc: 'Não paramos no tempo. Tecnologia de ponta é parte fundamental do nosso DNA.' },
    { title: 'Ética & Transparência', desc: 'O paciente sempre em primeiro lugar, com diagnósticos honestos e planos de tratamento claros.' }
  ];

  ngOnInit() {
    this.title.setTitle('Sobre Nós | Clínica Yassumitsu Odontologia');
    this.meta.updateTag({ name: 'description', content: 'Conheça a história de mais de 26 anos da Clínica Yassumitsu em Posse e Campos Belos/GO.' });
  }
}
