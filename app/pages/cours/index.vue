<script setup lang="ts">
// On récupère les listes centralisées depuis le composable
const { coursCollectifs, coursPrives } = useCours()

// Gestion de l'onglet actif
const activeTab = ref('collectifs')
</script>

<template>
  <div class="w-full bg-surface py-12 sm:py-20">
    <div class="container-page">
      
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span class="text-sm font-semibold uppercase tracking-widest text-brand">Rejoins la tribu</span>
        <h1 class="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Les cours de <span class="text-brand">l'école</span>
        </h1>
        
        <div class="mt-8 inline-flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200/40">
          <button 
            @click="activeTab = 'collectifs'"
            class="px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200"
            :class="activeTab === 'collectifs' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink'"
          >
            Cours Collectifs (Annuels)
          </button>
          <button 
            @click="activeTab = 'prives'"
            class="px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200"
            :class="activeTab === 'prives' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink'"
          >
            Cours Privés & Famille
          </button>
        </div>
      </div>

      <div v-if="activeTab === 'collectifs'" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink 
          v-for="cours in coursCollectifs" 
          :key="cours.id"
          :to="`/cours/${cours.id}`"
          class="relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100 block bg-slate-900 cursor-pointer"
        >
          <NuxtImg 
            :src="cours.image" 
            :alt="cours.nom" 
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            loading="lazy" 
            width="400"
            height="420"
            quality="60"
            
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95"></div>

          <div class="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div class="flex justify-end">
              <span class="px-4 py-1.5 text-xs font-black rounded-full bg-slate-950 text-white uppercase tracking-wider border border-slate-800">
                {{ cours.public }}
              </span>
            </div>
            <div class="space-y-3 transform transition-transform duration-300 group-hover:-translate-y-2">
              <h2 class="text-2xl font-black text-white tracking-tight uppercase">{{ cours.nom }}</h2>
              <p class="text-sm text-slate-200/90 leading-relaxed line-clamp-2 font-medium">{{ cours.description }}</p>
              <div class="pt-2 flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider">
                <span>Voir les détails et dates</span>
                <Icon name="heroicons:arrow-right" class="size-4" />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-if="activeTab === 'prives'" class="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <NuxtLink 
          v-for="cours in coursPrives" 
          :key="cours.id"
          :to="`/cours/${cours.id}`"
          class="relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group block bg-slate-900 cursor-pointer"
        >
        <NuxtImg 
          :src="cours.image" 
          :alt="cours.nom" 
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          loading="lazy"
          sizes="xs:100vw sm:50vw md:400px"
          width="400"
          height="420"
        />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95"></div>

          <div class="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div class="flex justify-end">
              <span class="px-4 py-1.5 text-xs font-black rounded-full bg-slate-950 text-white uppercase tracking-wider border border-slate-800">
                {{ cours.public }}
              </span>
            </div>
            <div class="space-y-3">
              <h2 class="text-2xl font-black text-white tracking-tight uppercase">{{ cours.nom }}</h2>
              <p class="text-sm text-slate-200/90 leading-relaxed font-medium">{{ cours.description }}</p>
              <div class="pt-2 flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider">
                <span>En savoir plus</span>
                <Icon name="heroicons:arrow-right" class="size-4" />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>