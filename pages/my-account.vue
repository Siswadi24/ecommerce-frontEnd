<template>
  <UContainer class="py-5 flex gap-7">
    <div class="w-44 py-4 dark:text-black/80">
      <div class="flex gap-3 items-center text-xs sm:text-base">
        <UAvatar alt="Siswadi Perdana Putra" />
        <span class="text-xs sm:text-base">Siswadi Perdana Putra</span>
      </div>
      <hr class="border-gray-200/50" />

      <LayoutsSidebar :items="links" class="my-account-sidebar" />
    </div>

    <div class="flex-1">
      <UCard>
        <NuxtPage />
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
const links = [
  {
    label: "Akun Saya",
    icon: "i-heroicons:user",
    defaultOpen: true,
    children: [
      {
        label: "Profil",
        to: "/my-account/profile",
      },
      {
        label: "Alamat",
        to: "/my-account/address",
      },
      {
        label: "Ubah Password",
        to: "/my-account/change-password",
      },
    ],
  },
  {
    label: "Pesanan",
    icon: "i-heroicons:clipboard-document-list",
    to: "/my-account/orders",
  },
];
</script>

<style scoped>
.my-account-sidebar :deep(.sidebar-item-icon) {
  @apply text-blue-700;
}
</style>