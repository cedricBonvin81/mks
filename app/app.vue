<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      name: 'Monkey School',
      description: 'École d\'escalade à Crans-Montana. Cours collectifs, privés et en famille pour tous les âges, dès 3 ans.',
      url: siteUrl,
      image: `${siteUrl}/images/hero.jpg`,
      telephone: '+41795190484',
      email: 'info@monkey-school.ch',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Route de la Moubra 73',
        addressLocality: 'Crans-Montana',
        postalCode: '3963',
        addressCountry: 'CH',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 46.307,
        longitude: 7.474,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: 'Horaires variables selon les cours. Contactez-nous pour les créneaux disponibles.',
      },
      sameAs: [],
    }),
  }],
})
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen bg-surface">
      <LayoutNavBar />
      <main>
        <NuxtPage />
      </main>
      <LayoutFooter />
    </div>
  </NuxtLayout>
</template>
