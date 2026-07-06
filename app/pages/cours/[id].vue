<script setup lang="ts">
const route = useRoute()
const { getCoursById } = useCours()

// Récupération automatique du cours par rapport à l'URL (ex: /cours/mini-spider)
const cours = computed(() => getCoursById(String(route.params.id)))

// Mise à jour automatique du titre du navigateur
useHead({
  title: cours.value ? `${cours.value.nom} - Monkey School` : 'Cours introuvable'
})
</script>

<template>
  <div v-if="cours" class="w-full bg-surface pb-20">
    
    <div class="relative h-[250px] sm:h-[380px] bg-slate-900 overflow-hidden">
      <NuxtImg :src="cours.image" :alt="cours.nom" class="w-full h-full object-cover opacity-40 scale-105" 
        loading="eager"
        width="400"
        height="420"
        quality="60"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/10"></div>
      
      <div class="absolute inset-x-0 bottom-0 p-6 sm:p-12">
        <div class="container-page max-w-5xl">
          <NuxtLink to="/cours" class="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline mb-4 group">
            <Icon name="heroicons:arrow-left" class="size-4 transition-transform group-hover:-translate-x-1" />
            Retour aux cours
          </NuxtLink>
          
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-center gap-5">
              <div class="hidden sm:block shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-[1.5rem] border-4 border-white shadow-2xl overflow-hidden rotate-3">
                <NuxtImg :src="cours.image" :alt="cours.nom" class="w-full h-full object-cover" 
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="60"
                />
              </div>

              <div class="space-y-2">
                <span class="px-4 py-1.5 text-xs font-black rounded-full bg-slate-950 text-white uppercase tracking-widest border border-slate-800">
                  {{ cours.public }}
                </span>
                <h1 class="text-4xl font-black text-ink tracking-tight uppercase sm:text-5xl italic">
                  {{ cours.nom }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-page max-w-5xl mt-8 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-8 space-y-8">

          <section 
            v-if="cours.type === 'Régulier'" 
            class="bg-amber-50/60 border border-amber-200 rounded-[2rem] p-6 sm:p-8 shadow-sm relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 bg-amber-500 text-white font-black uppercase text-[10px] tracking-wider px-4 py-1 rounded-bl-xl italic">
              Saison Exceptionnelle
            </div>

            <div class="flex items-start gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/10 shrink-0">
                <Icon name="heroicons:exclamation-triangle" class="size-5" />
              </div>
              <div class="space-y-3">
                <h3 class="text-lg font-black text-amber-950 uppercase tracking-tight italic">
                  Ajustement exceptionnel du calendrier
                </h3>
                
                <p class="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
                  En raison de la fermeture technique du <span class="font-bold">Crans-Montana Sports Center</span> du <span class="font-bold">6 janvier au 21 février 2027</span>, le programme de cette saison doit être adapté indépendamment de notre volonté. <br>
                  Nous nous excusons pour les inconvénients que cela peut causer et nous vous remercions de votre compréhension.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div class="bg-white/80 backdrop-blur-sm border border-amber-200/60 p-4 rounded-xl flex items-center gap-3">
                    <Icon name="heroicons:academic-cap" class="size-5 text-amber-600 shrink-0" />
                    <div>
                      <span class="block text-[11px] font-bold uppercase text-amber-800 tracking-wider">Volume de cours</span>
                      <span class="text-sm font-black text-amber-950 font-mono">25 sessions <span class="text-xs font-normal text-amber-700">(au lieu de 30)</span></span>
                    </div>
                  </div>

                  <div class="bg-white/80 backdrop-blur-sm border border-amber-200/60 p-4 rounded-xl flex items-center gap-3">
                    <Icon name="heroicons:credit-card" class="size-5 text-amber-600 shrink-0" />
                    <div>
                      <span class="block text-[11px] font-bold uppercase text-amber-800 tracking-wider">Tarification</span>
                      <span class="text-sm font-black text-amber-950 font-mono">Prix adapté au prorata</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section class="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-sm">
            <h3 class="text-xl font-black text-ink uppercase tracking-tight mb-4 italic">L'esprit du cours</h3>
            <p class="text-base text-ink-muted leading-relaxed font-medium">
              {{ cours.description }}
            </p>
            
            <div v-if="cours.avantages && cours.avantages.length" class="mt-6 space-y-2">
              <div v-for="(avantage, idx) in cours.avantages" :key="idx" class="flex items-center gap-3 text-sm text-emerald-700 font-bold bg-emerald-50/60 border border-emerald-100/40 px-4 py-3 rounded-2xl">
                <Icon name="heroicons:check-badge" class="size-5 shrink-0" />
                <span>{{ avantage }}</span>
              </div>
            </div>
          </section>

          <section v-if="cours.planningSaison && cours.planningSaison.length" class="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/10">
                <Icon name="heroicons:calendar-days" class="size-5" />
              </div>
              <h3 class="text-xl font-black text-ink uppercase tracking-tight italic">Calendrier des sessions</h3>
            </div>

            <div class="space-y-8">
              <div v-for="(anneeSaison, aIdx) in cours.planningSaison" :key="aIdx" class="space-y-4">
                <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900 text-white text-xs font-black tracking-wider">
                   Saison {{ anneeSaison.annee }}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    v-for="(mois, mIdx) in anneeSaison.mois" 
                    :key="mIdx" 
                    class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between group hover:border-brand/20 transition-colors"
                  >
                    <span class="text-xs font-black text-ink uppercase tracking-wider mb-1">{{ mois.nom }}</span>
                    <span class="text-sm font-bold text-brand tracking-wide font-mono">{{ mois.jours }}</span>
                  </div>
                </div>
              </div>
            </div>

            <p class="mt-6 text-[11px] text-ink-muted leading-relaxed bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
              * Les cours respectent les vacances scolaires et jours fériés du Valais. Aucun cours n'est dispensé durant ces périodes sauf exception.
            </p>
          </section>

          <section v-if="cours.tarifsPrive && cours.tarifsPrive.length" class="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/10">
                <Icon name="heroicons:currency-dollar" class="size-5" />
              </div>
              <h3 class="text-xl font-black text-ink uppercase tracking-tight italic">Tarifs à la carte</h3>
            </div>

            <div class="grid grid-cols-1 gap-3">
              <div v-for="(tarif, tIdx) in cours.tarifsPrive" :key="tIdx" 
                   class="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand/30 transition-all">
                <span class="font-black text-ink uppercase italic text-sm">{{ tarif.personnes }}</span>
                <span class="text-lg font-black text-brand font-mono">{{ tarif.tarif }}</span>
              </div>
            </div>

            <div class="mt-6 p-5 rounded-2xl bg-brand/5 border border-brand/10">
               <div class="flex items-start gap-4">
                  <Icon name="heroicons:calendar" class="size-6 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-black text-ink uppercase italic text-sm">Réservation sur-mesure</h4>
                    <p class="text-xs text-ink-muted font-medium mt-1 leading-relaxed">
                      Afin de bloquer une date et un horais qui s'adaptent à vos disponibilités, contactez-nous directement par téléphone ou via notre formulaire. Nous calerons votre session ensemble !
                    </p>
                  </div>
               </div>
            </div>
          </section>

        </div>

        <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-6">
          
            <aside class="bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-white shadow-xl">
            
            <div class="text-center pb-6 border-b border-white/10 mb-6">
                <span class="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">
                {{ cours.tarifsPrive ? (cours.id === 'famille' ? 'Tarif 1h30' : 'Tarif Horaire') : 'Tarif Unique Saison' }}
              </span>
              <span class="text-5xl font-black text-brand italic tracking-tight">{{ cours.prix }}</span>
            </div>

            <div class="space-y-3 text-sm mb-8">
              <div class="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl">
                <span class="text-xs font-bold text-slate-400">Jour</span>
                <span class="font-black text-brand uppercase text-xs">{{ cours.jour || 'À la carte' }}</span>
              </div>
              <div class="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl">
                <span class="text-xs font-bold text-slate-400">Horaire</span>
                <span class="font-bold text-white text-xs">{{ cours.horaire || 'Sur-mesure' }}</span>
              </div>
              <div v-if="cours.nbCours" class="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl">
                <span class="text-xs font-bold text-slate-400">Volume</span>
                <span class="font-bold text-white text-xs">{{ cours.nbCours }} cours ({{ cours.duree || '1h30' }})</span>
              </div>
              <div class="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl">
                <span class="text-xs font-bold text-slate-400">Lieu</span>
                <span class="font-bold text-white text-right text-xs max-w-[150px] truncate" :title="cours.lieu">{{ cours.lieu }}</span>
              </div>
            </div>

            <UiBaseButton to="/contact" color="brand" size="lg" class="w-full justify-center py-4 font-black uppercase tracking-tight italic">
              {{ cours.tarifsPrive ? 'Réserver une session' : 'Réserver une place' }}
            </UiBaseButton>
          </aside>

          <div v-if="cours.rabais && cours.rabais.length" class="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center gap-2 text-ink">
              <Icon name="heroicons:users" class="size-5 text-brand" />
              <h4 class="text-sm font-black uppercase tracking-wider italic">Rabais Famille</h4>
            </div>
            
            <p class="text-xs text-ink-muted font-medium leading-relaxed">
              ** Pour les familles, ce rabais s'applique sur la deuxième inscription (ou la dernière) :
            </p>

            <div class="grid grid-cols-3 gap-2 text-center">
              <div v-for="(item, rIdx) in cours.rabais" :key="rIdx" class="bg-slate-50 border border-slate-100 rounded-xl p-2">
                <span class="text-[9px] font-black text-ink-muted uppercase block mb-0.5">{{ item.condition }}</span>
                <span class="text-sm font-black text-emerald-600">-{{ item.valeur }}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>