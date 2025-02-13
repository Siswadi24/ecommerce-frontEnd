<template>
  <NuxtLink class="category-item" to="/">
    <img
      :src="image"
      alt=""
    />
    <p>{{ title }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.category-item {
  @apply p-1 md:p-2;
  @apply border-b border-r border-black/5;

  @apply hover:shadow hover:border-black/15;
}

.category-item img {
  @apply aspect-[1/1];
  @apply w-full;
}

.category-item p {
  @apply text-[8px] line-clamp-3 sm:line-clamp-none sm:text-xs md:text-sm text-center text-black/80;
}
</style>