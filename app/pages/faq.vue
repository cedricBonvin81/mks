<script setup lang="ts">
const faqs = ref([
  {
    question: "À quel âge peut-on commencer l'escalade ?",
    answer: "Chez Monkey-School, nous accueillons les enfants dès 3 ans. Les groupes sont divisés par âge et par niveau pour que chaque petit singe progresse en toute sécurité avec des exercices adaptés.",
    isOpen: true
  },
  {
    question: "Faut-il avoir son propre matériel ?",
    answer: "Pas du tout ! Pour tous les cours, que ce soit en collectif ou en privé, nous fournissons tout le matériel nécessaire (chaussures, baudriers, cordes, systèmes d'assurage). Si tu as ton propre matériel, n'hésite pas à l'apporter. C'est toujours mieux de grimper avec son propre matériel.",
    isOpen: false
  },
  {
    question: "Je n'ai jamais grimpé, est-ce un problème ?",
    answer: "C'est justement pour ça qu'on est là ! La majorité de nos nouveaux membres n'ont jamais touché une paroi. On commence par les bases du mouvement et de la sécurité. Tu verras, on progresse très vite.",
    isOpen: false
  },
  {
    question: "Où se déroulent exactement les cours ?",
    answer: "Tous nos entraînements ont lieu au Crans-Montana Sports Center (Route de la Moubra 73). C'est une infrastructure de top niveau qui nous permet de grimper toute l'année, peu importe la météo.",
    isOpen: false
  },
  {
    question: "Est-il possible de faire un cours d'essai ?",
    answer: "Bien sûr ! La 'vibe' de la team est importante. Contacte-nous par mail ou téléphone pour planifier une séance d'essai et voir si l'esprit Monkey-School te plaît.",
    isOpen: false
  },
  {
    question: "Puis-je payer les cours en plusieurs fois ?",
    answer: "Oui, tout à fait ! Nous proposons des facilités de paiement pour les cours collectifs. Il suffit de nous le préciser lors de l'inscription pour que l'on arrange cela ensemble de manière simple.",
    isOpen: false
  },
  {
    question: "Les parents peuvent-ils rester regarder ?",
    answer: "Pendant les cours enfants, les parents peuvent s'installer confortablement à l'espace café du centre sportif juste en face de la salle d'escalade. C'est l'endroit idéal pour observer les progrès de loin !",
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value.forEach((item, idx) => {
    if (idx === index) {
      item.isOpen = !item.isOpen
    } else {
      item.isOpen = false
    }
  })
}

useSiteSeo({
  title: 'FAQ',
  description: 'Questions fréquentes sur les cours d\'escalade Monkey School à Crans-Montana : âge, matériel, tarifs, lieu, cours d\'essai et paiement.',
})
</script>

<template>
  <div class="w-full bg-surface py-12 sm:py-20">
    <div class="container-page max-w-4xl">
      
      <div class="text-center mb-12 sm:mb-20">
        <span class="text-sm font-semibold uppercase tracking-widest text-brand">Aide & Infos</span>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Tes questions, <span class="text-brand">nos réponses</span>
        </h1>
        <p class="mt-4 text-lg text-ink-muted mx-auto max-w-2xl">
          Tout ce qu'il faut savoir avant de rejoindre la team et de t'élancer sur les parois de Crans-Montana.
        </p>
      </div>

      <div class="space-y-4">
        <div 
            v-for="(item, index) in faqs" 
            :key="index"
            class="group overflow-hidden rounded-3xl border bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            :class="item.isOpen ? 'border-brand bg-brand-light/10' : 'border-slate-100 bg-white'"
        >
          <button 
            @click="toggleFaq(index)"
            :aria-expanded="item.isOpen"
            :aria-controls="`faq-answer-${index}`"
            class="flex w-full items-center justify-between p-2 text-left sm:p-8"
          >
            <span class="text-lg font-bold text-ink sm:text-xl">
              {{ item.question }}
            </span>
            <div 
              class="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand transition-transform duration-300"
              :class="{ 'rotate-180': item.isOpen }"
            >
              <Icon name="heroicons:chevron-down" class="size-5" />
            </div>
          </button>

          <div 
            v-show="item.isOpen"
            :id="`faq-answer-${index}`"
            role="region"
            class="px-6 pb-6 sm:px-8 sm:pb-6"
          >
            <div class="h-px w-full bg-slate-100 mb-4"></div>
            <p class="text-base leading-relaxed text-ink-muted">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-[2rem] border border-slate-100 bg-white p-8 text-center sm:mt-24 sm:p-12 shadow-sm">
        <h3 class="text-2xl font-bold text-ink sm:text-3xl">Toujours un doute ?</h3>
        <p class="mt-3 text-base text-ink-muted max-w-md mx-auto">
          Si tu n'as pas trouvé ta réponse ici, pas de stress. La tribu est là pour ça.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <UiBaseButton 
            to="/contact" 
            color="brand" 
            size="lg"
            class="w-full sm:w-auto shadow-md shadow-brand/10 hover:shadow-lg transition-shadow"
          >
            Contacter la team
          </UiBaseButton>
          <a 
            href="tel:+41795190484" 
            class="flex items-center gap-2 font-bold text-ink hover:text-brand transition-colors"
          >
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-brand">
              <Icon name="heroicons:phone" class="size-4.5" />
            </div>
            +41 79 519 04 84
          </a>
        </div>
      </div>

    </div>
  </div>
</template>