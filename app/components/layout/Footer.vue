<template>
    <footer class="w-full border-t border-slate-100 bg-surface-muted py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 pb-12">
          
            <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-2">
            <div class="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
                <Icon name="heroicons:trophy" class="size-5" /> 
            </div>
            <span class="text-lg font-bold tracking-tight text-text">
              Monkey<span class="text-brand">- School</span>
            </span>
          </div>
          <p class="text-sm text-ink-muted max-w-sm leading-relaxed">
            L'école d'escalade de Crans-Montana. Rejoins notre team pour développer ton agilité, ta force et ta confiance.
          </p>
        </div>
  
          <div class="md:col-span-3 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-ink">Navigation</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="text-sm text-ink-muted hover:text-brand transition-colors">À propos</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cours" class="text-sm text-ink-muted hover:text-brand transition-colors">Les cours</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="text-sm text-ink-muted hover:text-brand transition-colors">FAQ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-sm text-ink-muted hover:text-brand transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>
  
          <div class="md:col-span-4 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-ink">Partenaire Officiel</h4>
            <div class="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
              <p class="text-xs font-bold text-ink mb-3">Fier partenaire de l'infrastructure</p>
              
              <div class="mb-4">
                <NuxtImg 
                  src="/images/cmsc_black.png" 
                  alt="Logo Crans-Montana Sports Center" 
                  width="300" 
                  height="72"
                  class="h-8 w-auto object-contain" 
                />
              </div>

              <p class="text-xs text-ink-muted leading-relaxed mb-4">
                Tous nos cours se déroulent au sein du centre 'Crans-Montana Sports Center'.
              </p>
              <a 
                href="https://www.cmsc.ch" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center text-xs font-bold text-brand hover:underline"
              >
                Crans-Montana Sports Center
                <Icon name="heroicons:arrow-top-right-on-square" class="ml-1 size-3" />
              </a>
            </div>
          </div>
  
        </div>
  
        <div class="border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>&copy; {{ new Date().getFullYear() }} Monkey-School. Tous droits réservés.</p>
          <p class="flex items-center gap-1">
            Fait avec passion à <span class="font-medium text-ink">Crans-Montana</span>
          </p>
        </div>
  
      </div>
    </footer>
  </template>