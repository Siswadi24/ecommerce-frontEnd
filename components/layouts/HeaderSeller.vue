<template>
  <header class="header-seller">
    <UButton
      :padded="false"
      class="md:hidden top-4 left-4 bg-primary text-white p-1 rounded"
      @click="$emit('toggle-sidebar')"
    >
      <UIcon name="i-heroicons:bars-3-20-solid" class="dark:text-white"/>
    </UButton>
    
    <UBreadcrumb :links="breadCrumb" :ui="ui" />
    <UDropdown :items="profileItems">
      <template #default="{ open }">
        <div class="flex gap-1 md:gap-2 items-center">
          <UAvatar alt="Siswadi Perdana Putra" />
          <p>Siswadi Perdana</p>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="w-4 md:w-4 h-4 md:h-4 transition-all"
            :class="[open && 'rotate-180']"
          />
        </div>
      </template>
    </UDropdown>
  </header>
</template>

<script setup>
defineEmits(["toggle-sidebar"]);

const route = useRoute();
const breadCrumb = computed(() => {
  const defaultBreadCrumb = [{ label: "Beranda" }];

  if (!route.meta?.breadCrumb || !Array.isArray(route.meta?.breadCrumb)) {
    return defaultBreadCrumb;
  }

  return [...defaultBreadCrumb, ...route.meta?.breadCrumb];
});

const profileItems = [
  [
    {
      label: "Switch to Customer",
      icon: "i-heroicons-arrow-path",
    },
    {
      label: "Logout",
      icon: "i-heroicons-arrow-right-on-rectangle",
    },
  ],
];

const ui = {
  active: "dark:text-slate-800 text-slate-800",
  inactive: "text-black/50",
  base: "font-normal text-xs sm:text-sm md:text-lg",
};
</script>

<style scoped>
.header-seller {
  @apply bg-white dark:bg-white px-1 md:px-4 py-1 md:py-3;
  @apply shadow;
  @apply fixed top-0 left-0 right-0 z-50;
  @apply flex justify-between items-center gap-1 md:gap-2;
  @apply text-xs md:text-base;
}
</style>