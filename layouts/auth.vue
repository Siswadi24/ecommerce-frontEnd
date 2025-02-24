<template>
  <div class="auth-layout">
    <LayoutsHeaderWhite />
    <main class="main-layout">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>

<script setup>
</script>

<style scoped>
.auth-layout {
  @apply flex flex-col;
  @apply min-h-screen;
  min-width: fit-content;
}

.main-layout {
  @apply flex-1;
  @apply bg-slate-300;
}
</style>