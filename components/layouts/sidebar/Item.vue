<template>
  <div>
    <DefineItem v-slot="{ icon, label }">
    <div class="flex gap-1 md:gap-2 items-center hover:text-primary">
      <UIcon v-if="icon" :name="icon" class="w-2 md:w-4 h-2 md:h-4" />
      <p class="text-xs md:text-sm">{{ label }}</p>
    </div>
  </DefineItem>
  <NuxtLink v-if="!item.children" :to="item.to">
    <ReuseItem v-bind="item" />
  </NuxtLink>
  
  <template v-else>
    <UAccordion
      :items="[
        {
          label: item.label,
          icon: item.icon,
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
        <div class="pl-6 md:pl-6 flex flex-col gap-1 md:gap-2">
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

<style lang="scss" scoped></style>