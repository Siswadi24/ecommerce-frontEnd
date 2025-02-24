<template>
  <div class="default-layout">
    <LayoutsHeaderOrange />
    <main class="main-layout">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>

<script setup>
// import { LayoutsHeaderOrange } from "#components";
</script>

<style scoped>
.default-layout {
  @apply flex flex-col;
  @apply min-h-screen;
  min-width: fit-content;
}

.main-layout {
  @apply flex-1;
  @apply bg-[#F5F5F5];
}

/* Layout Utama */
/* .default-layout {
    @apply flex flex-col min-h-screen bg-red-200;
} */

/* Main Content */
/* .main-layout {
    @apply flex-1 bg-slate-600;
} */

/* Header Styling */
/* .header-orange {
    @apply text-white flex flex-col;
    height: 120px;
} */

/* Bagian Atas Header */
/* .header-orange .header-top {
    @apply bg-primary py-2;
} */

/* .header-top-container {
    @apply flex justify-end divide-x divide-gray-50/50;
} */

/* Bagian Bawah Header */
/* .header-orange .header-bottom {
    @apply bg-gradient-to-b from-primary to-[#FF6633] flex-1;
} */

/* .header-bottom-container {
    @apply flex justify-between items-center gap-2 h-full;
} */

/* Search Bar Responsif */
/* .search-bar {
    @apply flex-1 w-full;
} */
</style>