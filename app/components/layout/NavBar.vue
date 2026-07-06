<script setup lang="ts">
// État pour le menu mobile
const isMobileMenuOpen = ref(false)

// Liste des liens de navigation
const navLinks = [
  { name: 'À propos', to: '/about' },
  { name: 'Les cours', to: '/cours' },
  { name: 'FAQ', to: '/faq' },
]

// Fermer le menu mobile quand on clique sur un lien
const closeMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-surface-muted bg-surface/80 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      
      <NuxtLink to="/" class="flex items-center gap-2 group" @click="closeMenu">
        <div class="flex size-10 items-center justify-center rounded-xl bg-brand p-1.5 text-white group-hover:rotate-12 transition-transform overflow-hidden">
          <NuxtImg 
            src="/images/logo.png" 
            alt="Logo Monkey School" 
            class="h-full w-full object-contain"
            width="40"
            height="40"
            loading="eager"
          /> 
        </div>
        <span class="text-xl font-bold tracking-tight text-ink">
          Monkey<span class="text-brand">- School</span>
        </span>
      </NuxtLink>

      <div class="hidden md:flex md:items-center md:gap-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to" 
          :to="link.to"
          class="text-sm font-medium text-ink-muted transition-colors hover:text-brand"
        >
          {{ link.name }}
        </NuxtLink>
        
        <UiBaseButton to="/contact" size="sm">
          Contact
        </UiBaseButton>
      </div>

      <div class="flex md:hidden">
        <button 
          type="button" 
          class="text-ink-muted hover:text-brand"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu de navigation"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="size-8" />
        </button>
      </div>
    </div>

    <div 
      v-if="isMobileMenuOpen" 
      id="mobile-menu"
      class="border-b border-surface-muted bg-surface md:hidden"
    >
      <div class="space-y-1 px-4 pb-6 pt-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block rounded-lg px-3 py-4 text-base font-medium text-ink-muted hover:bg-surface-muted hover:text-brand"
          @click="closeMenu"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="pt-4">
          <UiBaseButton to="/contact" class="w-full" @click="closeMenu">
            Contact
          </UiBaseButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Applique la couleur orange uniquement aux liens simples de la nav, pas au bouton */
a.text-ink-muted.router-link-active {
  @apply text-brand;
}
</style>