<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
  >
    <Icon
      v-if="icon && !iconRight"
      :name="icon"
      :class="['pointer-events-none', iconSizeClasses[size], 'mr-2']"
    />

    <span><slot /></span>

    <Icon
      v-if="icon && iconRight"
      :name="icon"
      :class="['pointer-events-none', iconSizeClasses[size], 'ml-2']"
    />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :class="buttonClasses"
  >
    <Icon
      v-if="icon && !iconRight"
      :name="icon"
      :class="['pointer-events-none', iconSizeClasses[size], 'mr-2']"
    />

    <span><slot /></span>

    <Icon
      v-if="icon && iconRight"
      :name="icon"
      :class="['pointer-events-none', iconSizeClasses[size], 'ml-2']"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: 'primary' },
  variant: { type: String, default: 'solid' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  iconRight: { type: Boolean, default: false },
  to: { type: String, default: '' },
  type: { type: String, default: 'button' },
})

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base rounded-2xl',
}

const iconSizeClasses = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-5',
}

const variantClasses = {
  solid: {
    primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
    brand: 'bg-brand text-white hover:bg-brand/90 focus:ring-brand',
    ink: 'bg-ink text-white hover:bg-ink-muted focus:ring-ink',
    white: 'bg-white/10 text-white hover:bg-white/20 border border-white/10 focus:ring-white',
  },
  outline: {
    primary: 'border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary',
    brand: 'border-2 border-brand text-brand hover:bg-brand/5 focus:ring-brand',
    ink: 'border-2 border-ink text-ink hover:bg-ink/5 focus:ring-ink',
    white: 'border-2 border-white/30 text-white hover:bg-white/10 focus:ring-white',
  },
}

const buttonClasses = computed(() => [
  'inline-flex cursor-pointer items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  sizeClasses[props.size],
  variantClasses[props.variant][props.color],
])
</script>
