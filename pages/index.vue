<template>
  <div>
    <section class="banner-section">
      <UContainer>
        <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden max-w-[796px] max-h-[235px] mx-auto"
          indicators
        >
          <img :src="item" class="w-full" draggable="false" />
        </UCarousel>
      </UContainer>
    </section>
    <section class="category-section"></section>
    <section class="product-section"></section>
  </div>
</template>

<script setup>
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<style scoped>
.banner-section {
    @apply bg-white py-3 md:py-7;
    /* @apply  */
}
</style>