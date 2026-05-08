import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profissionais',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
       <!-- Background Blobs -->
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[-100px] left-[-100px]"></div>
       <div class="bg-blob w-80 h-80 bg-secondary bottom-[-50px] right-[-50px]"></div>

       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-white text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-100">Autoridade e Excelência</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight">Nossa <span class="text-gradient">Equipe.</span></h1>
          <p class="text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
             Profissionais altamente qualificados, em constante atualização e comprometidos com a sua saúde e bem-estar.
          </p>
       </div>
    </section>

    <section class="py-32 bg-white relative">
       <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
             @for (doc of doctors; track doc.name) {
                <div class="group">
                   <div class="relative rounded-[56px] overflow-hidden bg-slate-100 aspect-[4/5] mb-8 shadow-3xl shadow-primary/5 group-hover:-translate-y-4 transition-all duration-700 border-4 border-white">
                      <img [src]="doc.image" [alt]="doc.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110">
                      <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <!-- Hover social links -->
                      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                         <a href="https://instagram.com" target="_blank" class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                         </a>
                      </div>
                   </div>
                   
                   <div class="text-center space-y-2">
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">Dr. {{ doc.name }}</h3>
                      <p class="text-primary font-bold text-[9px] uppercase tracking-[0.2em]">{{ doc.specialty }}</p>
                      <p class="text-slate-400 text-[10px] leading-relaxed px-4 pt-1 line-clamp-2">{{ doc.bio }}</p>
                   </div>
                </div>
             }
          </div>
       </div>
    </section>

    <!-- Join our mission -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[10%] left-[10%]"></div>
       <div class="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-10">
          <div class="w-20 h-20 rounded-[32px] bg-secondary flex items-center justify-center mx-auto mb-8 animate-float">
             <mat-icon class="text-primary text-3xl">favorite</mat-icon>
          </div>
          <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-900">Atendimento Humanizado</h3>
          <p class="text-xl text-slate-600 leading-relaxed italic font-serif max-w-2xl mx-auto">
            "Não tratamos apenas dentes, cuidamos de pessoas. Nosso objetivo é que você se sinta em casa, seguro e acolhido em cada momento da sua consulta."
          </p>
          <div class="flex justify-center pt-8">
             <img src="https://i.ibb.co/Hf7DPfVq/259758180-839352380066455-2212882331847913900-n.png" alt="Logo signature" class="h-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
          </div>
       </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Profissionais {
  doctors = [
    { 
      name: 'Willian Yassumitsu', 
      specialty: 'Implantodontia & Reabilitação', 
      image: 'https://i.ibb.co/Y4pRFZmr/468626529-1457247381610282-6536782216758870714-n.jpg',
      bio: 'Fundador da clínica, com mais de 26 anos de experiência transformando vidas através da implantodontia e reabilitação oral avançada.'
    },
    { 
      name: 'Flávia Sousa', 
      specialty: 'Ortodontia & Estética', 
      image: 'https://ui-avatars.com/api/?name=Flavia+Sousa&background=0E6B7E&color=fff',
      bio: 'Especialista em alinhadores invisíveis Invisalign e estética dental, unindo tecnologia e sensibilidade para criar sorrisos harmônicos.'
    },
    { 
      name: 'Rodrigo Sales', 
      specialty: 'Periodontia & Cirurgia', 
      image: 'https://ui-avatars.com/api/?name=Rodrigo+Sales&background=3494A8&color=fff',
      bio: 'Especialista em saúde gengival e procedimentos cirúrgicos de alta precisão, focado na preservação e reconstrução dos tecidos bucais.'
    },
    { 
      name: 'Daianna Valente', 
      specialty: 'Odontopediatria', 
      image: 'https://ui-avatars.com/api/?name=Daianna+Valente&background=0E6B7E&color=fff',
      bio: 'Dedicada ao cuidado lúdico e preventivo das crianças, garantindo que a primeira experiência no dentista seja positiva e acolhedora.'
    }
  ];
}
