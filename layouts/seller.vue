<template>
    <div class="seller-layout">
        <LayoutsHeaderSeller />
        <aside class="seller-sidebar">
            <LayoutsSidebar :items="sidebarItems" />
        </aside>
        <main class="main-content">
            <slot />
        </main>
    </div>
</template>

<script setup>
const sidebarItems = [
    {
        label: 'Pesanan',
        icon: 'i-heroicons-clipboard-document-list-solid',
        to: '/'
    },
    {
        label: 'Produk',
        icon: 'i-heroicons:inbox-stack-solid',
        children: [
            {
                label: 'Produk Saya',
                to: '/'
            },
            {
                label: 'Tambah Produk',
                to: '/'
            }
        ]
    },
    {
        label: 'Voucher',
        icon: 'i-heroicons:receipt-percent-solid',
    },
    {
        label: 'Keuangan',
        icon: 'i-heroicons:banknotes-solid',
        children: [
            {
                label: 'Balancing',
                to: '/'
            }
        ]
    }
]
</script>

<style scoped>
.seller-layout {
    @apply flex flex-col;
    @apply min-h-screen;
    @apply relative;
    @apply text-slate-800;
}

.main-content {
    @apply flex-1;
    @apply dark:bg-black/10 bg-black/10;
}

.seller-sidebar {
    @apply bg-white;
    @apply p-1 md:p-4;
    @apply fixed left-0 bottom-0;
    top: 56px;
    width: 240px;
}
</style>