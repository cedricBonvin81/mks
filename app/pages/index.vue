<script setup lang="ts">
// On récupère juste les données pour compter ou lier proprement
const { coursCollectifs, coursPrives } = useCours()

// L'URL de l'image qui fonctionne nickel chez toi
const imageUrl = "/images/hero.jpg"

// ==========================================
// 📢 TON BLOC FLASH INFOS / NEWS
// ==========================================


useHead({
  title: 'Monkey School - École d’Escalade à Crans-Montana'
})
</script>

<template>
  <div class="w-full bg-surface min-h-screen pb-20">
    
    <section class="relative h-[80vh] bg-slate-950 flex items-center overflow-hidden">
      <NuxtImg 
        :src="imageUrl" 
        alt="Grimpeur en Valais" 
        loading="eager"
        format="webp"
        class="absolute inset-0 w-full h-full object-cover opacity-45 scale-105" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20"></div>

      <div class="container-page max-w-6xl relative z-10 px-6">
        <div class="max-w-3xl space-y-6">
          <span class="inline-block px-4 py-1.5 text-xs font-black rounded-full bg-brand text-slate-950 uppercase tracking-widest italic shadow-lg">
            Crans-Montana, Valais
          </span>
          <h1 class="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase italic leading-[0.95]">
            L'escalade en <span class="text-brand">tribu</span> ou sur-mesure.
          </h1>
          <p class="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed">
            Retrouve le geste primaire, la force pure et la connexion avec la matière. Rejoins la <strong>Monkey-School</strong> pour repousser tes limites en toute confiance.
          </p>
          <div class="pt-4 flex flex-wrap gap-4">
            <UiBaseButton to="#bienfaits" color="brand" size="lg" class="px-8 py-4 font-black uppercase tracking-tight italic">
              Pourquoi l'escalade ?
            </UiBaseButton>
            <UiBaseButton 
            to="/cours"         
            color="ink" 
            size="md" 
            class="font-black uppercase tracking-tight italic"
          >
            Nos Cours...
            <Icon name="heroicons:arrow-right" class="size-4 ml-2" />
          </UiBaseButton>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page max-w-6xl -mt-12 relative z-20 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-4 group hover:border-brand/30 transition-all">
          <div class="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
            <Icon name="heroicons:check-badge" class="size-6" />
          </div>
          <div>
            <h4 class="font-black text-ink uppercase text-xs sm:text-sm italic">Tout est inclus</h4>
            <p class="text-xs text-ink-muted font-medium mt-0.5">Entrées à la salle, baudriers, cordes et chaussons.</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-4 group hover:border-brand/30 transition-all">
          <div class="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
            <Icon name="heroicons:user-group" class="size-6" />
          </div>
          <div>
            <h4 class="font-black text-ink uppercase text-xs sm:text-sm italic">Coachs Passionnés</h4>
            <p class="text-xs text-ink-muted font-medium mt-0.5">Un encadrement pro axé sur le plaisir et la sécurité.</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-4 group hover:border-brand/30 transition-all">
          <div class="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
            <Icon name="heroicons:calendar" class="size-6" />
          </div>
          <div>
            <h4 class="font-black text-ink uppercase text-xs sm:text-sm italic">Flexibilité Totale</h4>
            <p class="text-xs text-ink-muted font-medium mt-0.5">Créneaux fixes à l'année ou séances libres sur demande.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWS FLASH -->
    <section class="container-page max-w-6xl mt-12 mb-6 px-6">
      <div class=" p-5 ">
        
        <div class="flex items-center gap-2 mb-4">
          <span class="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
          <h2 class="text-xs font-black uppercase tracking-widest text-ink-muted">Infos Flash</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <div class="flex items-center gap-3">
            <Icon name="heroicons:sparkles" class="size-5 text-brand shrink-0" />
            <p class="text-xs sm:text-sm font-bold text-ink uppercase tracking-tight italic">
              Inscriptions ouvertes ! Réserve ta place pour la nouvelle saison.
            </p>
          </div>

          <div class="flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-200/60 pt-4 md:pt-0 md:pl-6">
            <Icon name="heroicons:exclamation-triangle" class="size-5 text-red-500 shrink-0" />
            <p class="text-xs sm:text-sm font-bold text-ink uppercase tracking-tight italic">
              <strong class="font-black text-red-500">⚠️ ATTENTION :</strong> <span class="italic underline">Fermeture du 6 janv. au 21 fév. </span> (indépendamment de notre volonté).
            </p>
          </div>

        </div>

     

      </div>
    </section>

    <!-- POURQUOI GRIMPPER -->

    <div class="w-full bg-slate-100 py-24 border-y border-slate-100">
      
      <section id="bienfaits" class="container-page max-w-6xl mx-auto px-6 space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight italic">Pourquoi l'escalade ?</h2>
          <p class="text-sm text-ink-muted font-medium">Bien plus qu'un entraînement complet, une école de la vie.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-3">
            <span class="text-4xl">🧠</span>
            <h3 class="text-lg font-black text-ink uppercase italic">Le Mental & Focus</h3>
            <p class="text-xs text-ink-muted font-medium leading-relaxed">
              Face au mur, le bruit extérieur disparaît. L'escalade développe la concentration, la résolution de problèmes complexes et la gestion du stress.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-3">
            <span class="text-4xl">💪</span>
            <h3 class="text-lg font-black text-ink uppercase italic">Le Corps en Harmonie</h3>
            <p class="text-xs text-ink-muted font-medium leading-relaxed">
              Pas de mouvements traumatisants. On travaille la force profonde, l’équilibre, la souplesse et la coordination de manière 100% naturelle et ludique.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-3">
            <span class="text-4xl">🤝</span>
            <h3 class="text-lg font-black text-ink uppercase italic">La Confiance Mutuelle</h3>
            <p class="text-xs text-ink-muted font-medium leading-relaxed">
              Tenir la corde de l'autre crée des liens forts. On apprend la responsabilité, le dépassement de soi et le respect de son partenaire.
            </p>
          </div>
        </div>

      </section>
    </div>

    <!-- ESPRIT MONKEY SCHOOL -->

    <section class="container-page max-w-6xl mt-24 px-6">
      <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="border-l-4 border-brand pl-4">
            <h2 class="text-3xl sm:text-4xl font-black text-ink uppercase tracking-tight italic">L'esprit Monkey School</h2>
          </div>
          <p class="text-sm text-ink-muted font-medium leading-relaxed">
            À Crans-Montana, notre priorité est de proposer une escalade décomplexée, axée à 100% sur la convivialité, le partage et la progression au rythme de chacun. 
          </p>
          <ul class="space-y-3 text-xs font-bold text-ink uppercase italic">
            <li class="flex items-center gap-3"><Icon name="heroicons:bolt" class="text-brand size-5 shrink-0" /> Un esprit de partage et d'entraide avant tout</li>
            <li class="flex items-center gap-3"><Icon name="heroicons:home" class="text-brand size-5 shrink-0" /> Une vraie tribu où tout le monde trouve sa place</li>
            <li class="flex items-center gap-3"><Icon name="heroicons:sun" class="text-brand size-5 shrink-0" /> Du bloc aux voies dans un cadre de qualité</li>
          </ul>
        </div>
        
        <div class="h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
          <NuxtImg 
            src="/images/main.jpg" 
            alt="Ambiance grimpe" 
            format="webp"
            class="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>

    <!-- TROUVE TA FORMULE -->

    <div class="w-full bg-slate-50 py-24 border-y border-slate-100 mt-24">
      
      <section class="container-page max-w-6xl mx-auto px-6 space-y-8">
        
        <div class="text-center max-w-xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight italic">Trouve ta formule</h2>
          <p class="text-xs text-ink-muted font-medium mt-1">Trois formats simples selon tes envies et ton emploi du temps.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-2">
              <h4 class="font-black text-ink uppercase italic">Cours Collectifs</h4>
              <p class="text-xs text-ink-muted font-medium">Pour tous les âges, des enfants aux adultes. Un rendez-vous hebdomadaire toute l'année pour évoluer et progresser avec sa tribu.</p>
            </div>
            <span class="text-xs font-black text-brand uppercase tracking-wider block">Dès 3 ans • Collectif</span>
          </div>
          
          <div class="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-2">
              <h4 class="font-black text-ink uppercase italic">Séances Privées</h4>
              <p class="text-xs text-ink-muted font-medium">Coaching 100% sur-mesure seul ou à plusieurs (max 4). Des conseils ciblés pour exploser ton niveau.</p>
            </div>
            <span class="text-xs font-black text-brand uppercase tracking-wider block">Tous âges • Flexibilité totale</span>
          </div>
          
          <div class="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm">
            <div class="space-y-2">
              <h4 class="font-black text-ink uppercase italic">En Famille</h4>
              <p class="text-xs text-ink-muted font-medium">Un forfait unique d'1h30 pour grimper avec toute sa tribu (parents + enfants) et créer des souvenirs forts.</p>
            </div>
            <span class="text-xs font-black text-brand uppercase tracking-wider block">Forfait unique • Tribu</span>
          </div>
        </div>

        <div class="text-center pt-4">
          <NuxtLink to="/cours" class="inline-flex items-center gap-2 text-sm font-black uppercase text-ink hover:text-brand border-b-2 border-slate-900 pb-1 hover:border-brand transition-all italic">
            Voir le détail de nos cours
            <Icon name="heroicons:arrow-right" class="size-4" />
          </NuxtLink>
        </div>

      </section>
    </div>

    <section class="container-page max-w-6xl mt-24 px-6">
      <div class="bg-slate-900 rounded-[2.5rem] text-white p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-xl">
        
        <NuxtImg 
          src="/images/bloc-femme.jpg" 
          alt="Fond grimpeuse qui grimpe sur un bloc" 
          format="webp"
          width="400"
          height="400"
          sizes="sm:100vw md:50vw lg:400px"
          class="absolute inset-0 w-full h-full object-cover opacity-20" 
          quality="80"
        />
        
        <div class="absolute inset-0 bg-gradient-to-r from-brand/10 to-transparent opacity-50"></div>
        
        <div class="max-w-2xl mx-auto space-y-4 relative z-10">
          <h2 class="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tight leading-none">Prêt à franchir le pas ?</h2>
          <p class="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            Rejoins la session qui te correspond ou écris-nous pour planifier ton prochain défi vertical à Crans-Montana.
          </p>
        </div>

        <div class="relative z-10 pt-4 flex flex-wrap justify-center gap-4">
          <UiBaseButton to="/cours" color="brand" size="lg" class="px-10 py-4 font-black uppercase tracking-tight italic shadow-lg shadow-brand/20">
            Explorer les cours
          </UiBaseButton>
          <UiBaseButton to="/contact" color="white" size="lg" class="px-10 py-4 font-black uppercase tracking-tight italic bg-white/10 text-white hover:bg-white/20 border-white/10">
            Nous contacter
          </UiBaseButton>
        </div>

      </div>
    </section>

  </div>
</template>