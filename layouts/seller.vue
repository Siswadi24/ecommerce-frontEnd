<template>
  <div class="seller-layout">
    <LayoutsHeaderSeller @toggle-sidebar="handleToggleSidebar"/>

    <!-- <UButton
      :padded="false"
      class="menu-btn md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded"
    >
      <UIcon
        v-if="!isSidebarOpen"
        name="i-heroicons:bars-3-20-solid"
        @click="handleToggleSidebar"
      />
    </UButton> -->

    <aside
      class="seller-sidebar"
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full': !isSidebarOpen,
        'md:translate-x-0': true,
      }"
    >
      <UButton
        variant="link"
        @click="isSidebarOpen = false"
        class="close-btn md:hidden absolute top-4 right-4 z-50"
      >
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-black" />
      </UButton>
      <LayoutsSidebar :items="sidebarItems" />
    </aside>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false);

const sidebarItems = [
  {
    label: "Pesanan",
    icon: "i-heroicons-clipboard-document-list-solid",
    to: "/",
  },
  {
    label: "Produk",
    icon: "i-heroicons:inbox-stack-solid",
    children: [
      {
        label: "Produk Saya",
        to: "/",
      },
      {
        label: "Tambah Produk",
        to: "/",
      },
    ],
  },
  {
    label: "Voucher",
    icon: "i-heroicons:receipt-percent-solid",
  },
  {
    label: "Keuangan",
    icon: "i-heroicons:banknotes-solid",
    children: [
      {
        label: "Balancing",
        to: "/",
      },
    ],
  },
];

function handleToggleSidebar() {
  isSidebarOpen.value = true;

  console.log("status sidebar: ", isSidebarOpen.value);
}
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
  @apply top-[38px] sm:top-14;
  @apply w-[240px];
  @apply transition-transform duration-300;
  /* top: 56px; */
  /* width: 240px; */
}

.menu-btn {
  @apply md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded;
}

.close-btn {
  @apply md:hidden absolute top-4 right-4 z-50;
}

/* Animasi Sidebar */
/* .translate-x-0 {
  transform: translateX(0);
}

.-translate-x-full {
  transform: translateX(-100%);
} */
</style>