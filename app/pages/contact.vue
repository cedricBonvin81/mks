<script setup lang="ts">
useSiteSeo({
  title: 'Contact',
  description: 'Contacte Monkey School à Crans-Montana : cours d\'escalade, inscriptions, séances privées. Par e-mail, téléphone ou WhatsApp au +41 79 519 04 84.',
})
</script>

<template>
    <div class="w-full bg-surface py-12 sm:py-20">
      <div class="container-page">
        
        <div class="max-w-3xl mb-12 sm:mb-20">
          <span class="text-sm font-semibold uppercase tracking-widest text-brand">Contact</span>
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Rejoins la tribu <span class="text-brand"> Monkey</span><span class="text-ink">-</span><span class="text-brand">School</span>
          </h1>
          <p class="mt-4 text-lg text-ink-muted">
            Une question sur les cours collectifs, les abonnements ou envie de planifier une session d'initiation ? Contacte-nous directement, on te répond plus vite que ton ombre.
          </p>
        </div>
  
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          <div class="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm sm:p-12 flex flex-col justify-between items-start space-y-8">
            <div class="space-y-4">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
                <Icon name="heroicons:envelope" class="size-6" />
              </div>
              <h2 class="text-2xl font-bold text-ink sm:text-3xl">Des questions ? Écris-nous !</h2>
              <p class="text-base text-ink-muted leading-relaxed">
                Que ce soit pour obtenir les horaires des différents groupes, connaître les tarifs ou trouver le cours parfaitement adapté à ton niveau, notre boîte mail est grande ouverte.
              </p>
            </div>
            
            <div class="w-full pt-4">
              <UiBaseButton 
                to="mailto:info@monkey-school.ch" 
                color="brand" 
                size="lg" 
                icon="heroicons:paper-airplane" 
                icon-right
                class="w-full sm:w-auto shadow-md shadow-brand/10 hover:shadow-lg transition-shadow"
              >
                Envoyer un e-mail à la tribu
              </UiBaseButton>
              <span class="block mt-3 text-xs text-ink-muted">
                Ou écris-nous directement à : <a href="mailto:info@monkey-school.ch" class="font-semibold text-brand hover:underline">info@monkey-school.ch</a>
              </span>
            </div>
          </div>
  
          <div class="lg:col-span-5 flex flex-col gap-6">
            
            <div class="rounded-3xl bg-surface-muted p-8 border border-slate-100/80 space-y-4 flex-1 flex flex-col justify-center">
              <div class="flex items-start gap-4">
                <div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Icon name="heroicons:phone" class="size-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold text-ink-muted uppercase tracking-wider">Téléphone & WhatsApp</span>
                  <a href="tel:+41795190484" class="mt-1 block text-xl font-extrabold text-ink hover:text-brand transition-colors sm:text-2xl">
                    +41 (0) 79 519 04 84
                  </a>
                  <p class="mt-2 text-xs text-ink-muted">
                    Disponible pour un échange rapide de vive voix ou par message.
                  </p>
                </div>
              </div>
            </div>
  
            <div class="rounded-3xl bg-surface-muted p-8 border border-slate-100/80 space-y-4 flex-1 flex flex-col justify-center">
              <div class="flex items-start gap-4">
                <div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Icon name="heroicons:map-pin" class="size-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold text-ink-muted uppercase tracking-wider mb-1">Notre terrain de jeu</span>
                  <p class="text-sm font-bold text-ink">
                    Crans-Montana Sports Center
                  </p>
                  <p class="text-xs text-ink-muted leading-relaxed">
                    Route de la Moubra 73<br />
                    3963 Crans-Montana, Suisse
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Crans-Montana+Sports+Center+Route+de+la+Moubra+73+3963" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="mt-4 inline-flex items-center text-xs font-bold text-brand hover:underline"
                  >
                    Ouvrir dans Google Maps
                    <Icon name="heroicons:arrow-top-right-on-square" class="ml-1 size-3.5" />
                  </a>
                </div>
              </div>
            </div>
  
          </div>
          
        </div>
  
      </div>
      <div class="mt-16 sm:mt-24 text-center border-t border-slate-100 pt-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wider uppercase mb-4">
          <Icon name="lucide:sparkles" class="size-3.5 animate-pulse" />
          Pas d'excuses, que du plaisir
        </div>
        <h3 class="text-xl font-bold text-ink sm:text-2xl">
          Prêt à sauter le pas ?
        </h3>
        <p class="mt-2 text-sm text-ink-muted max-w-md mx-auto">
          Peu importe ton âge ou ton niveau actuel, il y a toujours une place pour toi dans notre team. Amène juste ton énergie, on s'occupe du reste !
        </p>
      </div>
    </div>
  </template>