<template>
    <div class="default-layout">
        <header class="header-orange">
            <div class="header-top">
                <UContainer class="header-top-container">
                    <UButton color="white" variant="link" :padded="false" class="px-3">Daftar</UButton>
                    <UButton color="white" variant="link" :padded="false" class="px-3">Login</UButton>
                </UContainer>
            </div>
            <div class="header-bottom">
                <UContainer class="header-bottom-container">
                    <BaseLogo />
                    <LayoutsSearchBar class="flex-1" />
                    <UButton variant="link">
                        <IconCart />
                    </UButton>
                </UContainer>
            </div>
        </header>
        <main class="main-layout">
            <slot />
        </main>
        <footer>Footer</footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.default-layout {
    @apply flex flex-col;
    /* @apply w-full; */
    @apply min-h-screen;
    @apply bg-red-200;
}

.main-layout {
    @apply flex-1;
    @apply bg-slate-600;
}

.header-orange {
    @apply text-white;
    @apply flex flex-col;
    height: 120px;
}

.header-orange .header-top {
    @apply bg-primary;
    @apply py-2;
}

.header-top-container {
    @apply flex justify-end;
    @apply divide-x divide-gray-50/50;
}

.header-orange .header-bottom {
    @apply bg-gradient-to-b from-primary to-[#FF6633];
    @apply flex-1;
}

.header-bottom-container{
    @apply flex justify-between items-center gap-2;
    @apply h-full;
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