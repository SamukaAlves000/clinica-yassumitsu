import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-unidades',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="pt-48 pb-24 bg-white relative overflow-hidden">
       <!-- Background Blobs -->
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[-100px] right-[-100px]"></div>
       <div class="bg-blob w-80 h-80 bg-secondary bottom-[-50px] left-[-50px]"></div>

       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Onde nos encontrar</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight">Nossas <span class="text-gradient">Unidades</span></h1>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
             Ambientes modernos, confortáveis e equipados com o que há de melhor na odontologia atual. Escolha a unidade mais próxima de você.
          </p>
       </div>
    </section>

    <section class="pb-32 bg-white relative">
       <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <div class="space-y-32">
             @for (unit of units; track unit.city; let i = $index) {
                <div class="flex flex-col lg:flex-row gap-16 items-center" [class.lg:flex-row-reverse]="i % 2 !== 0">
                      <div class="lg:w-1/2 w-full aspect-[4/3] md:aspect-video rounded-[64px] overflow-hidden shadow-3xl bg-slate-50 relative group border-8 border-white transition-all duration-700 hover:shadow-primary/20">
                         <img [src]="unit.image" class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" alt="Fachada da Clínica {{ unit.city }}">
                         <div class="absolute inset-0 bg-primary/20 transition-opacity duration-500"></div>
                         
                         <!-- Overlay info -->
                         <div class="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px] md:max-w-xs shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                            <p class="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em] mb-2 leading-none">Unidade</p>
                            <p class="text-3xl font-bold text-primary">{{ unit.city }}</p>
                         </div>
                      </div>

                   <div class="lg:w-1/2 space-y-10">
                      <div class="space-y-4">
                        <h3 class="text-3xl md:text-5xl font-bold text-slate-900">Yassumitsu <span class="text-primary">{{ unit.city }}.</span></h3>
                        <div class="w-20 h-1 bg-gradient-to-r from-primary to-accent-2 rounded-full"></div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                         <div class="space-y-8">
                            <div class="space-y-3">
                               <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Endereço</p>
                               <p class="text-slate-600 text-sm leading-relaxed font-medium">{{ unit.address }}</p>
                            </div>
                            <div class="space-y-3">
                               <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Canais de Contato</p>
                               <div class="space-y-2">
                                  <p class="text-slate-900 font-bold flex items-center gap-2">
                                    <mat-icon class="text-primary text-sm">phone</mat-icon>
                                    {{ unit.phone }}
                                  </p>
                                  <p class="text-primary font-bold flex items-center gap-2">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.393L6.46 20.21l5.033-1.071c.883.435 1.884.685 2.946.685 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm4.511 8.35c-.186.522-1.077 1.012-1.488 1.082-.373.064-.86.113-2.392-.522-1.957-.81-3.218-2.795-3.316-2.926-.098-.13-.799-.957-.799-1.826 0-.869.455-1.297.617-1.472.162-.174.354-.218.471-.218.117 0 .233.001.336.006.107.004.25-.041.391.298.144.348.494 1.205.536 1.29.043.084.07.183.013.295-.056.113-.085.183-.17.282-.084.099-.177.221-.254.298-.084.084-.172.176-.073.348.099.172.438.723.94 1.169.645.574 1.189.753 1.359.839.17.086.27.072.369-.043.099-.115.426-.497.54-.668.114-.171.228-.142.383-.085s.983.464 1.153.549c.17.086.284.128.326.198.043.07.043.407-.143.929z"/></svg>
                                    {{ unit.whatsapp }}
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div class="space-y-8">
                            <div class="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col gap-6">
                               <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Horário</p>
                               <div class="text-slate-600 text-xs space-y-3">
                                  <div class="flex justify-between items-center pb-2 border-b border-slate-200">
                                    <span class="font-bold">Segunda - Sexta</span> 
                                    <span class="text-primary font-bold">08:00 - 18:00</span>
                                  </div>
                                  <div class="flex justify-between items-center pb-2 border-b border-slate-200">
                                    <span class="font-bold">Sábado</span> 
                                    <span class="text-primary font-bold">08:00 - 12:00</span>
                                  </div>
                                  <div class="flex justify-between items-center text-slate-400">
                                    <span class="font-bold">Domingo</span> 
                                    <span class="font-bold uppercase text-[9px] tracking-widest">Fechado</span>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>

                      <div class="flex flex-col md:flex-row gap-4 pt-4">
                         <a 
                          [href]="unit.maps" 
                          target="_blank" 
                          class="flex-1 py-5 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center gap-3 hover:bg-accent-4 transition-all shadow-xl shadow-primary/20"
                         >
                            <mat-icon>directions</mat-icon> Como Chegar
                         </a>
                         <a 
                          [href]="'https://wa.me/55' + unit.whatsapp.replace(' ', '').replace('(', '').replace(')', '').replace('-', '')" 
                          target="_blank" 
                          class="flex-1 py-5 rounded-full border-2 border-primary text-primary font-bold text-sm flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                         >
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.393L6.46 20.21l5.033-1.071c.883.435 1.884.685 2.946.685 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm4.511 8.35c-.186.522-1.077 1.012-1.488 1.082-.373.064-.86.113-2.392-.522-1.957-.81-3.218-2.795-3.316-2.926-.098-.13-.799-.957-.799-1.826 0-.869.455-1.297.617-1.472.162-.174.354-.218.471-.218.117 0 .233.001.336.006.107.004.25-.041.391.298.144.348.494 1.205.536 1.29.043.084.07.183.013.295-.056.113-.085.183-.17.282-.084.099-.177.221-.254.298-.084.084-.172.176-.073.348.099.172.438.723.94 1.169.645.574 1.189.753 1.359.839.17.086.27.072.369-.043.099-.115.426-.497.54-.668.114-.171.228-.142.383-.085s.983.464 1.153.549c.17.086.284.128.326.198.043.07.043.407-.143.929z"/></svg>
                            Falar no WhatsApp
                         </a>
                      </div>
                   </div>
                </div>
             }
          </div>
       </div>
    </section>

    <!-- Support banner -->
    <section class="py-24 bg-slate-50 border-y border-slate-100">
       <div class="max-w-4xl mx-auto px-4 text-center">
          <h3 class="text-3xl font-display font-bold text-slate-900 mb-6">Precisa de suporte?</h3>
          <p class="text-slate-500 mb-10">Central de atendimento para dúvidas, orçamentos e agendamentos.</p>
          <div class="flex flex-wrap justify-center gap-12">
             <div class="flex flex-col items-center gap-2">
                <mat-icon class="text-primary text-3xl">headset_mic</mat-icon>
                <p class="font-bold text-slate-800">(62) 3481-3069</p>
             </div>
             <div class="flex flex-col items-center gap-2">
                <mat-icon class="text-primary text-3xl">email</mat-icon>
                <p class="font-bold text-slate-800">contato&#64;yassumitsu.com.br</p>
             </div>
          </div>
       </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Unidades {
  units = [
    {
      city: 'Posse',
      address: 'Av. Nestor Balduíno de Souza, Qd. 29, Lote 10A – Posse/GO',
      phone: '(62) 3481-3069',
      whatsapp: '(62) 99954-0828',
      maps: 'https://www.google.com/maps/place/Nestor+Balduino+de+Souza,+S/N+Augusto+José+Valente+Posse+GO+73900000',
        image: 'https://i.ibb.co/svbmVZbH/Chat-GPT-Image-7-de-mai-de-2026-23-48-33.png'
    },
    {
       city: 'Campos Belos',
       address: 'Rua B H Foreman, nº 54 – Campos Belos/GO',
       phone: '(62) 3451-3194',
       whatsapp: '(62) 99993-2959',
       maps: 'https://www.google.com/maps',
        image: 'https://i.ibb.co/fBv4kTx/Chat-GPT-Image-7-de-mai-de-2026-23-57-19.png'
    }
  ];
}
