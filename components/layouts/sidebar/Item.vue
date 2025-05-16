<template>
  <div>
    <DefineItem v-slot="{ icon, label }">
      <div class="sidebar-item">
        <UIcon v-if="icon" :name="icon" class="sidebar-item-icon" />
        <p class="sidebar-item-label">{{ label }}</p>
      </div>
    </DefineItem>
    <NuxtLink
      v-if="!item.children"
      :to="item.to"
      :active-class="
        item.exact ? 'router-link-active is-exact' : 'router-link-active'
      "
    >
      <ReuseItem v-bind="item" />
    </NuxtLink>

    <template v-else>
      <UAccordion
        :items="[
          {
            defaultOpen: $route.path.includes(item.children?.[0]?.to),
            ...item,
          },
        ]"
        :ui="{
          item: {
            color: 'text-slate-800',
            padding: 'pb-0',
          },
        }"
      >
        <template #default="{ open, item: parent }">
          <div
            class="flex gap-1 md:gap-2 items-center hover:text-primary"
            role="button"
          >
            <ReuseItem v-bind="parent" class="flex-1" />
            <!-- <UIcon v-if="parent.icon" :name="parent.icon" class="w-2 md:w-4 h-2 md:h-4" />
                    <p class="text-xs md:text-sm flex-1">{{ parent.label }}</p> -->
            <UIcon
              name="i-heroicons-chevron-down-20-solid"
              class="w-1 md:w-4 h-1 md:h-4 transition-all"
              :class="[open && 'rotate-180']"
            />
          </div>
        </template>
        <template #item>
          <div
            class="flex flex-col pl-6 md:pl-8 gap-1.5 md:gap-3 mt-1.5 sm:mt-3"
          >
            <LayoutsSidebarItem
              v-for="(child, index) in item.children"
              :key="`child-${child.label}-${index}`"
              :item="child"
            />
          </div>
        </template>
      </UAccordion>
    </template>
  </div>
</template>

<script setup>
// import { NuxtLink } from '#components';

defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const [DefineItem, ReuseItem] = createReusableTemplate();
</script>

<style scoped>
.sidebar-item {
  @apply flex gap-1 md:gap-2 items-center hover:text-primary;
}

.sidebar-item-icon {
  @apply w-2 md:w-6 h-2 md:h-6;
}

.sidebar-item-label {
  @apply text-xs md:text-sm;
}

.router-link-active.is-exact.router-link-exact-active, .router-link-active:not(.is-exact) {
  @apply text-primary font-semibold;
}
</style>