<template>
  <div
    :class="[
      'searchbar',
      {
        'no-padded': !padded,
      },
    ]"
  >
    <input placeholder="CEK: Flash Sale Rp17 Lokal!" />
    <UButton
      icon="i-heroicons:magnifying-glass"
      class="px-6"
      v-bind="attribute"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
});

const attribute = computed(() => {
  if (!props.padded) {
    return {
      ui: {
        rounded: "rounded-none",
      },
    };
  }
  return {};
});
</script>

<style scoped>
.searchbar {
  @apply bg-white;
  @apply flex items-center;
  @apply rounded-sm;
  @apply dark:text-black;
  /* @apply w-full max-w-[500px] md:w-full; */
}

.searchbar:not(.no-padded) {
  @apply p-1;
}

.searchbar.no-padded {
  @apply border-2 border-primary;
}

.searchbar input {
  @apply outline-none px-1 md:px-3 w-full;
  @apply flex-1;
  @apply dark:bg-white;
}
</style>
