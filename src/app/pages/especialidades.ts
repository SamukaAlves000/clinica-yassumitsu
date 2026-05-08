import {Component, OnInit, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {Title, Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-especialidades',
    imports: [CommonModule, MatIconModule],
    template: `
        <section class="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
            <!-- Background Blobs -->
            <div class="bg-blob w-96 h-96 bg-primary/5 top-[-100px] left-[-100px]"></div>
            <div class="bg-blob w-80 h-80 bg-secondary bottom-[-50px] right-[-50px]"></div>

            <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center">
                <div class="inline-flex items-center gap-2 mb-6">
                    <span class="px-3 py-1 rounded-full bg-white text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-100">Cuidado Integral</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight">Nossas <span
                        class="text-gradient">Especialidades</span></h1>
                <p class="text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
                    Tratamentos odontológicos completos, integrados e realizados por especialistas apaixonados pela
                    profissão.
                </p>
            </div>
        </section>

        <section class="py-32 bg-white relative">
            <div class="max-w-7xl mx-auto px-4 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @for (item of specialties; track item.title) {
                        <div class="group bg-slate-50 rounded-[56px] p-12 hover:bg-white hover:shadow-3xl hover:shadow-primary/5 transition-all duration-700 border border-transparent hover:border-slate-100">
                            <div class="w-20 h-20 rounded-[32px] bg-secondary/50 backdrop-blur-sm flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg] shadow-sm">
                                <mat-icon class="text-primary group-hover:text-white text-4xl leading-none h-auto w-auto transition-colors">{{ item.icon }}
                                </mat-icon>
                            </div>

                            <h3 class="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">{{ item.title }}</h3>
                            <p class="text-slate-500 leading-relaxed text-sm mb-10">
                                {{ item.longDesc }}
                            </p>

                            <div class="flex flex-wrap gap-2 mb-10">
                                @for (tag of item.tags; track tag) {
                                    <span class="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">{{ tag }}</span>
                                }
                            </div>

                            <button class="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-[0.2em] group/btn">
                                Agendar Consulta
                                <mat-icon class="text-lg group-hover/btn:translate-x-2 transition-transform">
                                    arrow_forward
                                </mat-icon>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- Detailed Info Banner -->
        <section class="py-24 bg-primary relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                <div class="max-w-2xl space-y-6">
                    <h2 class="text-4xl font-display font-bold">Não encontrou o que procurava?</h2>
                    <p class="text-white/70 text-lg">
                        Nossa equipe está preparada para diagnósticos complexos e tratamentos personalizados. Entre em
                        contato para uma conversa inicial.
                    </p>
                </div>
                <a href="https://wa.me/5562999540828" target="_blank"
                   class="px-10 py-5 bg-white text-primary font-bold rounded-full text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">Falar
                    com Consultor</a>
            </div>
        </section>
    `,
    styles: [`
        :host {
            display: block;
        }
    `]
})
export class Especialidades implements OnInit {
    private title = inject(Title);
    private meta = inject(Meta);

    ngOnInit() {
        this.title.setTitle('Especialidades | Clínica Yassumitsu Odontologia');
        this.meta.updateTag({
            name: 'description',
            content: 'Explore nossas especialidades: Implantes Dentários, Ortodontia, Invisalign, Harmonização Orofacial e muito mais em Posse e Campos Belos.'
        });
    }

    specialties = [
        {
            title: 'Implantodontia',
            icon: 'straighten',
            longDesc: 'A solução definitiva para dentes perdidos. Os implantes funcionam como raízes artificiais, suportando próteses fixas com total segurança e aparência natural.',
            tags: ['Implantes Unitários', 'Carga Imediata', 'All-on-4', 'Enxerto Ósseo']
        },
        {
            title: 'Ortodontia',
            icon: 'straighten',
            longDesc: 'Alinhamento dental para todas as idades. Do preventivo em crianças aos modernos alinhadores invisíveis Invisalign para adultos.',
            tags: ['Invisalign', 'Aparelho Estético', 'Ortodontia Autoligada', 'Preventiva']
        },
        {
            title: 'Prótese Dentária',
            icon: 'settings_backup_restore',
            longDesc: 'Reabilitação oral completa. Devolvendo a forma, função e estética através de próteses fixas, removíveis e sobre implantes.',
            tags: ['Coroas', 'Facetas', 'Lentes de Contato', 'Prótese Total']
        },
        {
            title: 'Estética Orofacial',
            icon: 'face',
            longDesc: 'Harmonização do sorriso e da face. Procedimentos que realçam sua beleza e rejuvenescem com naturalidade.',
            tags: ['Botox', 'Preenchimento', 'Lipo de Papada', 'Harmonização']
        },
        {
            title: 'Endodontia',
            icon: 'healing',
            longDesc: 'Tratamento de canal especializado. Tecnologia que garante rapidez e ausência de dor em procedimentos internos do dente.',
            tags: ['Canal em Sessão Única', 'Microscopia', 'Retratamento']
        },
        {
            title: 'Periodontia',
            icon: 'spa',
            longDesc: 'Cuidado essencial com as gengivas e tecidos de suporte. Prevenção e tratamento de doenças periodontais.',
            tags: ['Gengivoplastia', 'Limpeza Profunda', 'Tratamento Periodontal']
        }
    ];
}
