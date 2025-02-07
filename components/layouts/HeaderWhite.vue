<template>
    <header class="header-white">
        <LayoutsHeaderProfile v-if="route.meta?.header?.showProfile" />
        <div class="header-bottom">
            <UContainer class="header-bottom-container">
                <div class="flex gap-1 md:gap-4 items-center">
                    <BaseLogo color="orange" />
                    <template v-if="route.meta?.header?.title">
                        <hr class="w-[1px] h-5 bg-primary">
                        <p class="text-xs md:text-xl">{{ route.meta?.header?.title }}</p>
                    </template>
                </div>
                <LayoutsSearchBar v-if="route.meta?.header?.showSearch" class="w-1/2" :padded="false" />
            </UContainer>
        </div>
    </header>
</template>

<script setup>
const route = useRoute()

// const meta = {
//     showProfile: false,
//     title: 'Keranjang',
//     showSearch: false,
// }
</script>

<style scoped>
.header-bottom-container {
    @apply flex justify-between items-center gap-5 md:gap-10;
    @apply py-3 md:py-7;
}
</style>