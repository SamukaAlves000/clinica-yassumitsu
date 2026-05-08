import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  template: `
    <section class="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
       <!-- Background Blobs -->
       <div class="bg-blob w-96 h-96 bg-primary/5 top-[-100px] left-[-100px]"></div>
       <div class="bg-blob w-80 h-80 bg-secondary bottom-[-50px] right-[-50px]"></div>

       <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-white text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-100">Canais Abertos</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight">Vamos <span class="text-gradient">Conversar.</span></h1>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
             Estamos prontos para tirar suas dúvidas e agendar sua avaliação. Escolha o canal de sua preferência.
          </p>
       </div>
    </section>

    <section class="pb-32 bg-slate-50 relative">
       <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <div class="bg-white rounded-[64px] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-white">
             <!-- Contact Info Sidebar -->
             <div class="lg:w-1/3 bg-slate-900 p-12 md:p-16 text-white relative overflow-hidden">
                <div class="absolute inset-0 bg-blob w-80 h-80 bg-primary/20 top-[-40px] left-[-40px]"></div>
                
                <div class="relative z-10 space-y-16">
                   <div>
                      <h3 class="text-3xl font-display font-bold mb-6">Contatos <span class="text-accent-2 italic">Diretos.</span></h3>
                      <p class="text-white/40 text-sm leading-relaxed">Escolha uma de nossas unidades para atendimento personalizado.</p>
                   </div>
                   
                   <div class="space-y-10">
                      <div class="group border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors">
                         <p class="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Unidade Posse</p>
                         <div class="space-y-3">
                            <div class="flex items-center gap-4">
                               <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                                  <mat-icon class="scale-75">phone</mat-icon>
                               </div>
                               <span class="font-bold text-lg">(62) 3481-3069</span>
                            </div>
                            <div class="flex items-center gap-4">
                               <div class="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-white">
                                  <mat-icon class="scale-75 text-accent-2">chat</mat-icon>
                               </div>
                               <span class="font-bold text-lg text-accent-2 border-b border-accent-2/20">(62) 99954-0828</span>
                            </div>
                         </div>
                      </div>

                      <div class="group border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors">
                         <p class="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Unidade Campos Belos</p>
                         <div class="space-y-3">
                            <div class="flex items-center gap-4">
                               <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                                  <mat-icon class="scale-75">phone</mat-icon>
                               </div>
                               <span class="font-bold text-lg">(62) 3451-3194</span>
                            </div>
                            <div class="flex items-center gap-4">
                               <div class="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-white">
                                  <mat-icon class="scale-75 text-accent-2">chat</mat-icon>
                               </div>
                               <span class="font-bold text-lg text-accent-2 border-b border-accent-2/20">(62) 99993-2959</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div class="pt-10 space-y-4">
                      <p class="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Canais Digitais</p>
                      <div class="flex gap-4">
                         <a href="https://facebook.com/yassumitsu" target="_blank" class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                            <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                         </a>
                         <a href="https://instagram.com/yassumitsu" target="_blank" class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                            <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                         </a>
                      </div>
                   </div>
                </div>
             </div>

             <!-- Contact Form -->
             <div class="lg:w-2/3 p-12 md:p-20 relative">
                <div class="bg-blob w-64 h-64 bg-secondary bottom-[-40px] right-[-40px] opacity-30"></div>
                
                <form [formGroup]="contactForm" (ngSubmit)="send()" class="space-y-10 relative z-10">
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div class="space-y-3">
                         <label for="name" class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Nome Completo</label>
                         <input 
                          id="name"
                          formControlName="name"
                          type="text" 
                          placeholder="Ex: João da Silva"
                          class="w-full px-8 py-5 rounded-[24px] bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                         >
                      </div>
                      <div class="space-y-3">
                         <label for="phone" class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">WhatsApp</label>
                         <input 
                          id="phone"
                          formControlName="phone"
                          type="tel" 
                          placeholder="(00) 00000-0000"
                          class="w-full px-8 py-5 rounded-[24px] bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                         >
                      </div>
                   </div>

                   <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div class="space-y-3">
                         <label for="unit" class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Unidade de Preferência</label>
                         <div class="relative">
                            <select 
                             id="unit"
                             formControlName="unit"
                             class="w-full px-8 py-5 rounded-[24px] bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                            >
                               <option value="">Selecione uma unidade</option>
                               <option value="Posse">Posse/GO</option>
                               <option value="Campos Belos">Campos Belos/GO</option>
                            </select>
                            <mat-icon class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</mat-icon>
                         </div>
                      </div>
                      <div class="space-y-3">
                         <label for="specialty" class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Especialidade</label>
                         <div class="relative">
                            <select 
                             id="specialty"
                             formControlName="specialty"
                             class="w-full px-8 py-5 rounded-[24px] bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                            >
                               <option value="">Selecione uma especialidade</option>
                               <option value="Implantes">Implantodontia</option>
                               <option value="Ortodontia">Ortodontia / Alinhadores</option>
                               <option value="Estética">Harmonização Orofacial</option>
                               <option value="Geral">Clínica Geral</option>
                               <option value="Outros">Outros</option>
                            </select>
                            <mat-icon class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</mat-icon>
                         </div>
                      </div>
                   </div>

                   <div class="space-y-3">
                      <label for="message" class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">O que você busca?</label>
                      <textarea 
                        id="message"
                        formControlName="message"
                        rows="4" 
                        placeholder="Conte-nos brevemente sobre seu caso..."
                        class="w-full px-8 py-5 rounded-[32px] bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all resize-none placeholder:text-slate-300"
                      ></textarea>
                   </div>

                   <button 
                    type="submit"
                    [disabled]="contactForm.invalid || isSending()"
                    class="w-full md:w-auto px-16 py-6 rounded-full bg-primary text-white font-bold text-lg hover:bg-accent-4 transition-all shadow-2xl shadow-primary/20 disabled:opacity-50 disabled:pointer-events-none active:scale-95 flex items-center justify-center gap-3"
                   >
                      {{ isSending() ? 'Processando Solicitação...' : 'Enviar Solicitação' }}
                      @if (!isSending()) {
                        <mat-icon>arrow_forward</mat-icon>
                      }
                   </button>

                   @if (isSuccess()) {
                    <div class="p-8 rounded-[32px] bg-emerald-50 text-emerald-800 font-bold text-sm border-2 border-emerald-100 flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-700">
                        <div class="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                           <mat-icon>check</mat-icon>
                        </div>
                        <p>Solicitação enviada! Redirecionando para atendimento oficial...</p>
                    </div>
                   }
                </form>
             </div>
          </div>
       </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Contato {
  private fb = inject(FormBuilder);
  
  isSending = signal(false);
  isSuccess = signal(false);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    unit: ['', [Validators.required]],
    specialty: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  send() {
    if (this.contactForm.valid) {
      this.isSending.set(true);
      
      // Simulate real integration with WhatsApp redirect
      const val = this.contactForm.value;
      const text = `Olá, meu nome é ${val.name}.\nUnidade: ${val.unit}\nEspecialidade: ${val.specialty}\nMensagem: ${val.message}`;
      const phone = val.unit === 'Posse' ? '5562999540828' : '5562999932959';
      
      setTimeout(() => {
        this.isSending.set(false);
        this.isSuccess.set(true);
        this.contactForm.reset();
        
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
      }, 1500);
    }
  }
}
