<template>
    <div class="searchbar">
        <input placeholder="CEK: Flash Sale Rp17 Lokal!"/>
        <UButton icon="i-heroicons:magnifying-glass" class="px-6"/>
    </div>
</template>

<script setup>

</script>

<style scoped>
.searchbar {
    @apply bg-white;
    @apply p-1;
    @apply flex items-center;
    @apply rounded-sm;
    @apply dark:text-black;
    /* @apply w-full max-w-[500px] md:w-full; */
}

.searchbar input {
    @apply outline-none px-1 md:px-3 w-full;
    @apply flex-1;
    @apply dark:bg-white;
}
</style>