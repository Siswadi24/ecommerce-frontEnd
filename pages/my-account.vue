<template>
  <UContainer class="flex flex-col sm:flex-row py-1.5 sm:py-5 gap-1.5 sm:gap-7">
    <div class="w-44 py-4 dark:text-black/80">
      <div class="flex gap-3 items-center text-xs sm:text-base">
        <UAvatar :alt="session.profile.name" />
        <span class="text-xs sm:text-base">{{ session.profile.name }}</span>
      </div>

      <hr class="border-gray-200/50 my-1" />

      <LayoutsSidebar :items="links" class="my-account-sidebar" />
    </div>

    <div class="flex-1">
      <ClientOnly>
        <component :is="wrapper">
          <NuxtPage />
        </component>
      </ClientOnly>
    </div>
  </UContainer>
</template>

<script setup>
import { UCard } from "#components";
const route = useRoute();

definePageMeta({
  middleware: ["must-auth"],
});

const session = useSession();

const wrapper = computed(() => {
  return route.meta.wrapper || UCard;
});

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
  @apply h-5 w-5;
}
</style>