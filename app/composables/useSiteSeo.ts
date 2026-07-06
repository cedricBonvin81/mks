const SITE_NAME = 'Monkey School'
const DEFAULT_OG_IMAGE = '/images/hero.jpg'

export function useSiteSeo(options: {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string>
  noIndex?: MaybeRefOrGetter<boolean>
}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string

  const title = computed(() => {
    const t = toValue(options.title)
    return t.includes('Monkey') ? t : `${t} | ${SITE_NAME}`
  })

  const description = computed(() => toValue(options.description))
  const imagePath = computed(() => toValue(options.image ?? DEFAULT_OG_IMAGE))

  const canonical = computed(() => `${siteUrl}${route.path}`)
  const ogImage = computed(() => {
    const img = imagePath.value
    return img.startsWith('http') ? img : `${siteUrl}${img}`
  })

  const robots = computed(() =>
    toValue(options.noIndex ?? false) ? 'noindex, nofollow' : 'index, follow'
  )

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: canonical,
    ogType: 'website',
    ogLocale: 'fr_CH',
    ogSiteName: SITE_NAME,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    robots,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
