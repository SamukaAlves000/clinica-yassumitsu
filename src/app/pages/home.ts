import {Component, AfterViewInit, ElementRef, ViewChild, inject, PLATFORM_ID, OnInit, signal} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {Title, Meta} from '@angular/platform-browser';
import {animate, stagger, scroll} from "motion";

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule, MatIconModule],
    template: `
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50">
            <!-- Background Blobs -->
            <div class="bg-blob w-96 h-96 bg-primary/10 top-[-100px] right-[-100px]"></div>
            <div class="bg-blob w-80 h-80 bg-accent-2/20 bottom-[-50px] left-[-50px]"></div>

            <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 w-full">
                <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div class="w-full lg:w-1/2 flex flex-col gap-6" #heroContent>
                        <div class="flex items-center gap-2 animate-item">
                            <span class="px-4 py-1.5 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Desde 1998 • 26 Anos</span>
                            <div class="flex gap-1">
                                <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <div class="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
                            </div>
                        </div>

                        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 animate-item">
                            Referência em <br>
                            <span class="text-gradient">Sorrisos de Excelência.</span>
                        </h1>

                        <p class="text-lg text-slate-600 leading-relaxed max-w-lg animate-item">
                            A Clínica Yassumitsu une experiência, tecnologia de ponta e atendimento humanizado em Posse
                            e Campos Belos/GO. Sorrir bem é viver melhor.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-6 mt-4 items-center animate-item">
                            <div class="flex -space-x-3">
                                <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                                <div class="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                                    +15k
                                </div>
                            </div>
                            <p class="text-sm text-slate-500 font-medium">
                                Milhares de atendimentos realizados <br>
                                <span class="text-primary tracking-wide">com tecnologia digital avançada.</span>
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-3 mt-4 animate-item">
                            @for (tag of heroTags; track tag.label) {
                                <div class="px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-2">
                                    <div class="w-2 h-2 rounded-full" [class]="tag.color"></div>
                                    <span class="text-xs font-semibold">{{ tag.label }}</span>
                                </div>
                            }
                        </div>

                        <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-item">
                            <button routerLink="/contato"
                                    class="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-white font-bold text-sm hover:bg-accent-4 shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1">
                                Agendar Consulta
                            </button>
                            <a
                                    href="https://wa.me/5562999540828"
                                    class="w-full sm:w-auto px-10 py-4 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-all text-center"
                            >
                                Falar com Consultor
                            </a>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end">
                        <div class="relative w-full max-w-xl aspect-[4/5] rounded-[40px] overflow-hidden shadow-3xl border border-white group animate-item hero-video-container">
                            <video
                                    #heroVideo
                                    src="video-sobre.mp4"
                                    class="w-full h-full object-cover transition-transform duration-1000"
                                    autoplay
                                    playsinline
                                    preload="auto"
                                    (loadedmetadata)="heroVideo.play()"
                                    (canplay)="heroVideo.play()"
                            ></video>

                            <!-- Audio Control -->
                            <button
                                (click)="toggleAudio()"
                                class="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all z-20 group/audio"
                                [title]="isMuted() ? 'Ativar som' : 'Desativar som'"
                            >
                                <mat-icon class="text-2xl transition-transform group-hover/audio:scale-110">
                                    {{ isMuted() ? 'volume_off' : 'volume_up' }}
                                </mat-icon>
                                
                                <!-- Visual indicator that audio is playing -->
                                @if (!isMuted()) {
                                    <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                      <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                }
                            </button>
                            
<!--                            <div class="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-between">-->
<!--                                <div class="flex flex-col">-->
<!--                                    <span class="text-white/70 text-[10px] uppercase font-bold tracking-widest">Nossa Unidade Principal</span>-->
<!--                                    <span class="text-white font-bold text-lg">Posse - Goiás</span>-->
<!--                                </div>-->
<!--                                <div class="flex items-center gap-2 text-white">-->
<!--                                    <div class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">-->
<!--                                        <mat-icon class="text-lg">location_on</mat-icon>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>

                        <div class="absolute -right-6 top-20 p-5 bg-white rounded-3xl shadow-2xl flex flex-col items-center gap-1 border border-slate-100 animate-float">
                            <span class="text-3xl font-bold text-primary">26+</span>
                            <span class="text-[9px] uppercase font-black tracking-tighter text-slate-400">Anos de História</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Differentials Section -->
        <section class="section-padding bg-slate-50 relative overflow-hidden">
            <!-- Decorative element -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl px-4 pointer-events-none">
                <div class="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20">
                        Diferenciais Yassumitsu
                    </div>
                    <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Excelência em
                        cada detalhe do seu <span class="text-gradient">atendimento.</span></h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" #diffsGrid>
                    @for (diff of differentials; track diff.title) {
                        <div class="group p-10 rounded-[48px] bg-white border border-primary/30 shadow-2xl shadow-primary/10 transition-all duration-500 cursor-default relative overflow-hidden">
                            <!-- Background Accent -->
                            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-700"></div>

                            <div class="relative z-10">
                                <div class="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 transition-all duration-500 shadow-sm border border-slate-200/50">
                                    <mat-icon
                                            class="text-white transition-colors">{{ diff.icon }}
                                    </mat-icon>
                                </div>
                                <h4 class="text-xl font-bold text-primary mb-4 transition-colors">{{ diff.title }}</h4>
                                <p class="text-slate-700 text-sm leading-relaxed transition-colors">{{ diff.description }}</p>

                                <div class="mt-8 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-500">
                                    Saiba mais
                                    <mat-icon class="text-xs">arrow_forward</mat-icon>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- About Summary Section -->
        <section class="section-padding overflow-hidden bg-slate-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-col lg:flex-row items-center gap-16">
                    <div class="lg:w-1/2 relative">
                        <!-- Image Container -->
                        <div class="relative rounded-[40px] overflow-hidden shadow-2xl z-10 mx-auto border-8 border-white bg-slate-100 group">
                            <img
                                    src="https://i.ibb.co/4nbxPPGt/Chat-GPT-Image-7-de-mai-de-2026-23-27-04.png"
                                    alt="Clínica Background"
                                    class="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
                            >
                        </div>
                        <!-- Decorative dots -->
                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
                        <div class="absolute -bottom-10 -right-10 w-60 h-60 bg-accent-4/10 rounded-full blur-3xl z-0"></div>

                        <div class="absolute bottom-20 -right-8 glass p-6 rounded-2xl shadow-xl hidden md:block z-20 max-w-xs border border-primary/10">
                            <p class="text-primary font-bold italic mb-2">"Nosso compromisso é com a saúde e a
                                autoestima de cada paciente."</p>
                            <span class="text-xs font-bold uppercase tracking-widest text-slate-400">— Dr. Willian Yassumitsu</span>
                        </div>
                    </div>

                    <div class="lg:w-1/2 space-y-8">
                        <h2 class="text-primary font-bold uppercase tracking-widest text-xs">Sobre a Clínica</h2>
                        <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-800 leading-tight">Uma
                            história de paixão pelo <span class="text-primary italic font-serif">sorriso</span></h3>
                        <p class="text-slate-600 text-lg leading-relaxed">
                            A Clínica Yassumitsu Odontologia é referência em cuidado odontológico na região de Posse e
                            Campos Belos/GO. Há mais de 26 anos, transforma sorrisos com excelência, inovação e
                            atendimento humanizado.
                        </p>
                        <p class="text-slate-600 leading-relaxed italic border-l-4 border-primary pl-6">
                            Fundada pelo Dr. Willian Yassumitsu, nossa clínica nasceu com o propósito de oferecer
                            tratamentos odontológicos de alto padrão em um ambiente acolhedor e tecnológico.
                        </p>
                        <div class="flex items-center gap-6 pt-4">
                            <button routerLink="/sobre"
                                    class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-accent-4 transition-all">
                                Conhecer Nossa História
                            </button>
                            <div class="flex -space-x-4">
                                <div class="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                    <img src="https://ui-avatars.com/api/?name=W+Y&background=0E6B7E&color=fff"
                                         alt="Team member">
                                </div>
                                <div class="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                    <img src="https://ui-avatars.com/api/?name=F+S&background=3494A8&color=fff"
                                         alt="Team member">
                                </div>
                                <div class="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm flex items-center justify-center bg-slate-100 font-bold text-xs text-slate-500">
                                    +4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Specialties Grid -->
        <section class="section-padding bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div class="max-w-2xl space-y-4">
                        <h2 class="text-primary font-bold uppercase tracking-widest text-xs">Nossos Serviços</h2>
                        <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-800">Tratamentos <span
                                class="text-primary italic font-serif">completos</span> para você</h3>
                    </div>
                    <button routerLink="/especialidades" class="text-primary font-bold flex items-center gap-2 group">
                        Ver todas especialidades
                        <mat-icon class="group-hover:translate-x-2 transition-transform">arrow_forward</mat-icon>
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    @for (item of mainSpecialties; track item.title) {
                        <div class="group relative bg-[#F8FAFC] rounded-[40px] p-10 overflow-hidden hover:bg-primary transition-all duration-500">
                            <div class="relative z-10">
                                <div class="w-16 h-16 rounded-3xl bg-primary/5 group-hover:bg-white/20 flex items-center justify-center mb-8 transition-colors">
                                    <mat-icon class="text-primary group-hover:text-white text-3xl">{{ item.icon }}
                                    </mat-icon>
                                </div>
                                <h4 class="text-2xl font-bold text-slate-800 group-hover:text-white mb-4">{{ item.title }}</h4>
                                <p class="text-slate-500 group-hover:text-white/70 text-sm leading-relaxed mb-8">{{ item.description }}</p>
                                <a [routerLink]="['/especialidades']"
                                   class="text-primary group-hover:text-white font-bold text-xs uppercase tracking-widest underline decoration-2 underline-offset-4">Saiba
                                    Mais</a>
                            </div>

                            <!-- Decorative circle in background -->
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full group-hover:bg-white/5 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- Technology Section -->
        <section class="py-32 bg-slate-900 text-white overflow-hidden relative">
            <div class="absolute top-[-100px] left-[-100px] w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>

            <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div class="space-y-8">
                        <div class="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-accent-2 text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/30">
                            Tecnologia de Ponta
                        </div>
                        <h3 class="text-4xl md:text-6xl font-display font-bold leading-tight">Investimos no que há de
                            mais <span class="text-accent-2 italic">avançado.</span></h3>
                        <p class="text-white/60 text-lg leading-relaxed max-w-lg">
                            Utilizamos equipamentos de última geração para garantir diagnósticos precisos, tratamentos
                            ágeis e o máximo conforto para nossos pacientes.
                        </p>

                        <div class="space-y-6 pt-4">
                            @for (tech of technologies; track tech.title) {
                                <div class="flex gap-6 p-8 rounded-[32px] bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                                    <div class="shrink-0 w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <mat-icon class="text-accent-2 scale-125">{{ tech.icon }}</mat-icon>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold mb-2 group-hover:text-accent-2 transition-colors">{{ tech.title }}</h4>
                                        <p class="text-white/40 text-sm leading-relaxed">{{ tech.description }}</p>
                                    </div>
                                </div>
                            }
                        </div>

                        <button routerLink="/tecnologias"
                                class="px-10 py-5 rounded-full bg-white text-slate-900 font-bold hover:bg-primary hover:text-white transition-all shadow-2xl shadow-black/20">
                            Explorar Tecnologias
                        </button>
                    </div>

                    <div class="relative">
                        <div class="aspect-square rounded-[60px] overflow-hidden bg-slate-800 rotate-3 animate-float relative z-10 border-8 border-white/5">
                            <img src="https://i.ibb.co/211CM849/Chat-GPT-Image-8-de-mai-de-2026-00-20-32.png"
                                 alt="Technology" class="w-full h-full object-cover grayscale opacity-50 contrast-125">
                            <!-- Scanner Overlay Effect -->
                            <div class="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                            <div class="absolute top-0 left-0 w-full h-[2px] bg-accent-4 animate-scan opacity-70"></div>
                        </div>

                        <!-- Floating elements -->
                        <div class="absolute top-10 -left-10 glass-dark p-6 rounded-2xl border border-white/10 z-20 hidden md:block">
                            <p class="text-[10px] uppercase font-bold text-accent-4 mb-2 tracking-widest">Scanner
                                Intraoral</p>
                            <p class="text-xl font-bold text-white">Moldagem 100% Digital</p>
                        </div>
                        <div class="absolute bottom-10 -right-10 glass-dark p-6 rounded-2xl border border-white/10 z-20 hidden md:block">
                            <p class="text-[10px] uppercase font-bold text-accent-4 mb-2 tracking-widest">Invisalign</p>
                            <p class="text-xl font-bold text-white">Previsibilidade Total</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Units Section -->
        <section class="section-padding bg-slate-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 class="text-primary font-bold uppercase tracking-widest text-xs">Onde Estamos</h2>
                    <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-800">Duas sedes preparadas para te
                        receber com <span class="text-primary">conforto</span></h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    @for (unit of units; track unit.city) {
                        <div class="bg-white rounded-[40px] p-10 shadow-xl shadow-slate-200/50 flex flex-col justify-between group">
                            <div class="space-y-8">
                                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                                    <mat-icon class="text-sm">location_on</mat-icon>
                                    {{ unit.city }}
                                </div>

                                <h4 class="text-3xl font-display font-bold text-slate-800 transition-colors">
                                    Yassumitsu <span class="text-primary">{{ unit.city }}</span></h4>

                                <div class="space-y-4 text-slate-500">
                                    <div class="flex items-start gap-4">
                                        <mat-icon class="text-slate-300">map</mat-icon>
                                        <span class="text-sm leading-relaxed">{{ unit.address }}</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <mat-icon class="text-slate-300">phone</mat-icon>
                                        <span class="text-sm font-bold">{{ unit.phone }}</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <mat-icon class="text-emerald-500">chat</mat-icon>
                                        <span class="text-sm font-bold text-slate-800">{{ unit.whatsapp }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-12 flex items-center gap-4">
                                <a
                                        [href]="unit.maps"
                                        target="_blank"
                                        class="flex-1 py-4 px-6 rounded-2xl border-2 border-slate-100 font-bold text-slate-800 text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <mat-icon>directions</mat-icon>
                                    Ver no Mapa
                                </a>
                                <a
                                        [href]="'https://wa.me/55' + unit.whatsapp.replace(' ', '').replace('(', '').replace(')', '').replace('-', '')"
                                        target="_blank"
                                        class="flex-1 py-4 px-6 rounded-2xl bg-emerald-500 text-white font-bold text-center hover:bg-emerald-600 shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <mat-icon>chat</mat-icon>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- Social Proof -->
        <section class="py-24 bg-white relative overflow-hidden">
            <div class="bg-blob w-80 h-80 bg-secondary bottom-[-40px] right-[-40px]"></div>
            <div class="max-w-7xl mx-auto px-4 lg:px-12">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
                    @for (stat of stats; track stat.label) {
                        <div class="text-center group">
                            <p class="text-5xl md:text-7xl font-display font-bold text-primary tracking-tighter group-hover:scale-110 transition-transform">{{ stat.value }}</p>
                            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] mt-4">{{ stat.label }}</p>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- Testimonials Ticker -->
        <section class="py-32 bg-slate-50 overflow-hidden relative">
            <div class="max-w-7xl mx-auto px-4 lg:px-12 mb-16 text-center">
                <h2 class="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Depoimentos Reais</h2>
                <h3 class="text-3xl md:text-5xl font-display font-bold text-slate-900">O que nossos <span
                        class="text-gradient">pacientes dizem.</span></h3>
            </div>

            <!-- Ticker Container -->
            <div class="relative flex overflow-x-hidden group py-4">
                <div class="animate-marquee flex gap-8 whitespace-nowrap">
                    <!-- First set -->
                    @for (test of testimonials; track $index) {
                        <div class="w-[400px] shrink-0 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col gap-4 whitespace-normal">
                            <div class="flex items-center justify-between">
                                <div class="flex gap-1">
                                    @for (star of [1, 2, 3, 4, 5]; track star) {
                                        <mat-icon class="text-[#FFD700] text-sm">star</mat-icon>
                                    }
                                </div>
                                <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{{ test.date }}</span>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed italic">
                                "{{ test.review || 'Tratamento impecável e profissionais excelentes!' }}"</p>
                            <div class="mt-auto pt-4 flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs uppercase overflow-hidden">
                                    <img [src]="test.image" [alt]="test.name" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-slate-900">{{ test.name }}</p>
                                    <div class="flex items-center gap-1">
                                        <mat-icon class="text-[10px] text-slate-300">verified</mat-icon>
                                        <span class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Paciente Verificado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <!-- Duplicate set for seamless loop -->
                    @for (test of testimonials; track $index + '-duplicate') {
                        <div class="w-[400px] shrink-0 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col gap-4 whitespace-normal"
                             aria-hidden="true">
                            <div class="flex items-center justify-between">
                                <div class="flex gap-1">
                                    @for (star of [1, 2, 3, 4, 5]; track star) {
                                        <mat-icon class="text-[#FFD700] text-sm">star</mat-icon>
                                    }
                                </div>
                                <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{{ test.date }}</span>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed italic">
                                "{{ test.review || 'Tratamento impecável e profissionais excelentes!' }}"</p>
                            <div class="mt-auto pt-4 flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs uppercase overflow-hidden">
                                    <img [src]="test.image" [alt]="test.name" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-slate-900">{{ test.name }}</p>
                                    <div class="flex items-center gap-1">
                                        <mat-icon class="text-[10px] text-slate-300">verified</mat-icon>
                                        <span class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Paciente Verificado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- Partners / Convênios -->
        <section class="py-20 bg-[#FBFBFB]">
            <div class="max-w-7xl mx-auto px-4">
                <p class="text-center text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-16">Aceitamos
                    diversos convênios e operadoras</p>
                <div class="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
                    @for (partner of partners; track partner) {
                        <div class="text-lg font-bold text-slate-500 hover:text-primary cursor-default whitespace-nowrap">{{ partner }}</div>
                    }
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-32 relative overflow-hidden bg-primary">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 right-0 w-[50rem] h-[50rem] bg-white rounded-full blur-[150px] -mr-[25rem] -mt-[25rem]"></div>
                <div class="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-white rounded-full blur-[150px] -ml-[25rem] -mb-[25rem]"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <h2 class="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">Pronto para
                    transformar<br/>o seu sorriso?</h2>
                <p class="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                    Agende agora mesmo uma avaliação e dê o primeiro passo para uma vida com mais saúde, confiança e
                    beleza.
                </p>
                <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button class="w-full sm:w-auto px-12 py-6 rounded-full bg-white text-primary font-bold text-xl hover:bg-slate-100 shadow-2xl transition-all scale-100 hover:scale-105 active:scale-95">
                        Agendar Minha Consulta
                    </button>
                    <button class="w-full sm:w-auto px-12 py-6 rounded-full border-2 border-white/30 text-white font-bold text-xl hover:bg-white/10 transition-all">
                        Saber Mais
                    </button>
                </div>
            </div>
        </section>
    `,
    styles: [`
        :host {
            display: block;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(3deg);
            }
            50% {
                transform: translateY(-20px) rotate(4deg);
            }
        }

        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes scan {
            0% {
                top: 0;
            }
            100% {
                top: 100%;
            }
        }

        .animate-scan {
            animation: scan 4s linear infinite;
        }

        @keyframes bounce-slow {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes marquee {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }

        .animate-marquee {
            animation: marquee 120s linear infinite;
            display: flex;
            width: max-content;
        }

        .animate-marquee2 {
            display: none;
        }

        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
            animation-play-state: paused;
        }
    `],
    host: {
        'class': 'block'
    }
})
export class Home implements AfterViewInit, OnInit {
    private platformId = inject(PLATFORM_ID);
    private title = inject(Title);
    private meta = inject(Meta);

    @ViewChild('heroContent') heroContent!: ElementRef;
    @ViewChild('diffsGrid') diffsGrid!: ElementRef;
    @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

    isMuted = signal(true);

    heroTags = [
        {label: 'Invisalign Provider', color: 'bg-emerald-500'},
        {label: 'Scanner iTero', color: 'bg-primary'},
        {label: 'Implantes 3D', color: 'bg-accent-4'}
    ];

    differentials = [
        {
            title: '26 anos de tradição',
            icon: 'verified',
            description: 'Uma trajetória construída com ética, confiança e milhares de sorrisos transformados.'
        },
        {
            title: 'Tecnologia Avançada',
            icon: 'memory',
            description: 'Investimos nos melhores equipamentos mundiais para oferecer tratamentos ágeis e precisos.'
        },
        {
            title: 'Atendimento Humanizado',
            icon: 'favorite',
            description: 'Aqui cada paciente é único. Cuidado genuíno em cada etapa da sua jornada.'
        },
        {
            title: 'Todas Especialidades',
            icon: 'health_and_safety',
            description: 'Corpo clínico completo para atender todas as suas necessidades em um só lugar.'
        },
    ];

    mainSpecialties = [
        {
            title: 'Implantodontia',
            icon: 'straighten',
            description: 'Recupere a funcionalidade e estética do seu sorriso com implantes de alta tecnologia.'
        },
        {
            title: 'Ortodontia',
            icon: 'face',
            description: 'Alinhamento dental moderno com aparelhos fixos, estéticos e Invisalign.'
        },
        {
            title: 'Estética Facial',
            icon: 'face',
            description: 'Harmonização e procedimentos estéticos para realçar sua beleza natural.'
        },
        {
            title: 'Odontologia Geral',
            icon: 'medical_services',
            description: 'Checkups, limpezas e cuidados preventivos essenciais para sua saúde bucal.'
        },
    ];

    technologies = [
        {
            title: 'Scanner Intraoral 3D',
            icon: 'api',
            description: 'Fim das moldagens desconfortáveis. Captura digital precisa em minutos.'
        },
        {
            title: 'Invisalign iTero',
            icon: 'psychology',
            description: 'Simulação instantânea do seu novo sorriso com inteligência artificial.'
        },
        {
            title: 'Raio-X Digital',
            icon: 'visibility',
            description: 'Menos radiação e resultados instantâneos na tela do computador.'
        },
    ];

    units = [
        {
            city: 'Posse',
            address: 'Av. Nestor Balduíno de Souza, Qd. 29, Lote 10A – Posse/GO',
            phone: '(62) 3481-3069',
            whatsapp: '(62) 99954-0828',
            maps: 'https://www.google.com/maps/place/Nestor+Balduino+de+Souza,+S/N+Augusto+José+Valente+Posse+GO+73900000'
        },
        {
            city: 'Campos Belos',
            address: 'Rua B H Foreman, nº 54 – Campos Belos/GO',
            phone: '(62) 3451-3194',
            whatsapp: '(62) 99993-2959',
            maps: 'https://www.google.com/maps'
        }
    ];

    stats = [
        {value: '26', label: 'Anos de História'},
        {value: '15k', label: 'Pacientes'},
        {value: '2', label: 'Unidades Modernas'},
        {value: '4.9', label: 'Nota Google'},
    ];

    partners = ['Ipasgo', 'Bradesco', 'Unimed Odonto', 'BB Dental', 'Odontoprev', 'Sul América'];

    testimonials = [
        {
            name: 'Millena Macedo',
            rating: 5,
            date: '2 meses atrás',
            review: 'Experiência excelente na clínica! Fui muito bem atendida desde a recepção até o final do tratamento. O dentista é muito paciente, cuidadoso e passa muita segurança, e todos os profissionais são muito atenciosos e educados.',
            likes: 1,
            ownerResponse: 'Muito obrigada pela preferência.',
            image: 'https://i.ibb.co/pj4BMB50/unnamed.png'
        },
        {
            name: 'Jeissi Moreira',
            rating: 5,
            date: '4 meses atrás',
            review: 'A melhor clínica odontológica que eu já fui. Atendimento extraordinário desde a recepção até os dentistas. Gratidão!',
            likes: 1,
            ownerResponse: 'É sempre um grande prazer te atender.',
            image: 'https://i.ibb.co/Fq3pV6Gw/unnamed-2.png'
        },
        {
            name: 'Leila Rodrigues',
            rating: 5,
            date: '4 meses atrás',
            review: 'Excelentes profissionais, atendimento rápido. Amei o resultado do meu sorriso.',
            likes: 1,
            ownerResponse: 'Gratidão pela preferência.',
            image: 'https://i.ibb.co/MxRN636H/unnamed-3.png'
        },
        {
            name: 'Natália Gontijo',
            rating: 5,
            date: '4 meses atrás',
            review: 'Melhor clínica da região 👏🏼❤️',
            likes: 1,
            ownerResponse: 'Com a melhor ortodontista junto.',
            image: 'https://ui-avatars.com/api/?name=Natália+Gontijo&background=0E6B7E&color=fff'
        },
        {
            name: 'Pedro Henrique',
            rating: 5,
            date: '4 meses atrás',
            review: 'Muito bom, excelentes profissionais, especialistas em todas as áreas! 👏🏻👏🏻👏🏻👏🏻👏🏻',
            likes: 1,
            ownerResponse: 'Muito obrigada.',
            image: 'https://i.ibb.co/tTtL2kdY/unnamed-4.png'
        },
        {
            name: 'Daniela Rodrigues',
            rating: 5,
            date: '1 ano atrás',
            review: 'Excelente atendimento, ótimos profissionais.',
            likes: 1,
            ownerResponse: 'Gratidão.',
            image: 'https://i.ibb.co/20sN3s6p/unnamed-5.png'
        },
        {
            name: 'K.E.A.O 2021',
            rating: 5,
            date: '1 ano atrás',
            review: 'Muito 🔝',
            likes: 1,
            ownerResponse: 'Obrigada.',
            image: 'https://i.ibb.co/27TvL9Pv/unnamed-6.png'
        },
        {
            name: 'Julia Yassumitsu',
            rating: 5,
            date: '4 meses atrás',
            review: 'Atendimento excepcional e equipe muito qualificada. Recomendo!',
            likes: 1,
            ownerResponse: 'Obrigada.',
            image: 'https://ui-avatars.com/api/?name=Julia+Yassumitsu&background=0E6B7E&color=fff'
        },
        {
            name: 'Mariana Tizzo',
            rating: 5,
            date: '4 meses atrás',
            review: 'Clínica moderna e profissionais muito gentis. Adorei a experiência.',
            likes: 1,
            ownerResponse: 'Gratidão.',
            image: 'https://i.ibb.co/b5QPDXF3/unnamed-7.png'
        },
        {
            name: 'Sofia Reico Yassumitsu',
            rating: 5,
            date: '4 meses atrás',
            review: 'Simplesmente a melhor clínica da cidade!',
            likes: 1,
            ownerResponse: 'Obrigada.',
            image: 'https://ui-avatars.com/api/?name=Sofia+Reico&background=0E6B7E&color=fff'
        },
        {
            name: 'Mychelle Lima',
            rating: 5,
            date: '4 meses atrás',
            review: 'Atendimento nota 10!',
            likes: 1,
            ownerResponse: 'Obrigada.',
            image: 'https://ui-avatars.com/api/?name=Mychelle+Lima&background=3494A8&color=fff'
        },
        {
            name: 'Michele Marques',
            rating: 5,
            date: '4 meses atrás',
            review: 'Equipe Maravilhosa!',
            likes: 1,
            ownerResponse: 'Obrigada.',
            image: 'https://i.ibb.co/PG2dYMhC/unnamed-8.png'
        },
        {
            name: 'Universo Distribuidora',
            rating: 5,
            date: '2 meses atrás',
            review: 'Profissionais atenciosos e dedicados. Clínica excelente!!',
            likes: 1,
            ownerResponse: 'Muito obrigada.',
            image: 'https://i.ibb.co/yc8FKG8n/unnamed-1.png'
        },
    ];

    ngOnInit() {
        this.title.setTitle('Clínica Yassumitsu Odontologia | Posse e Campos Belos/GO');
        this.meta.updateTag({
            name: 'description',
            content: 'Referência em odontologia há mais de 26 anos no Nordeste Goiano. Especialista em implantes, ortodontia e estética dental.'
        });
        this.meta.updateTag({name: 'author', content: 'Clínica Yassumitsu'});
    }

    toggleAudio() {
        if (this.heroVideo && this.heroVideo.nativeElement) {
            const video = this.heroVideo.nativeElement;
            video.muted = !video.muted;
            this.isMuted.set(video.muted);
            
            // Se o vídeo estava pausado (alguns navegadores pausam se o autoplay falhar), tenta dar play
            if (video.paused) {
                video.play().catch(() => { /* empty */ });
            }
        }
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Stagger animations for Hero items
            const heroItems = this.heroContent.nativeElement.querySelectorAll('.animate-item');
            animate(
                heroItems,
                {opacity: [0, 1], y: [40, 0]},
                {delay: stagger(0.15), duration: 1, ease: [0.22, 1, 0.36, 1]}
            );

            // Subtle zoom-in animation for the main video on enter
            const heroVideoElem = document.querySelector('.hero-video-container video');
            if (heroVideoElem) {
                animate(
                    heroVideoElem,
                    { scale: [1.2, 1] },
                    { duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
                );
            }

            // Play hero video
            if (this.heroVideo && this.heroVideo.nativeElement) {
                const video = this.heroVideo.nativeElement;
                video.muted = true; // Reforçar muted via código
                video.play().catch(err => {
                    console.log('Autoplay blocked, attempting again on interaction:', err);
                    // Fallback: tentar tocar novamente se houver interação ou após um pequeno delay
                    setTimeout(() => video.play().catch(() => {}), 1000);
                });
            }
        }
    }
}
