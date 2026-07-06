<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}>()

useSiteSeo({
  title: 'Page introuvable',
  description: 'La page que tu cherches n\'existe pas ou a été déplacée.',
  noIndex: true,
})

const handleClear = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-[60vh] bg-surface flex items-center justify-center px-6 py-20">
    <div class="text-center max-w-md space-y-6">
      <span class="text-8xl font-black text-brand italic">{{ props.error.statusCode }}</span>
      <h1 class="text-2xl font-black text-ink uppercase tracking-tight">
        {{ props.error.statusCode === 404 ? 'Page introuvable' : 'Une erreur est survenue' }}
      </h1>
      <p class="text-sm text-ink-muted font-medium">
        {{ props.error.statusMessage || props.error.message || 'La page que tu cherches n\'existe pas ou a été déplacée.' }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <UiBaseButton to="/" color="brand" size="lg">
          Retour à l'accueil
        </UiBaseButton>
        <UiBaseButton color="ink" size="lg" @click="handleClear">
          Réessayer
        </UiBaseButton>
      </div>
    </div>
  </div>
</template>
