<template>
    <nav>
        <ul class="flex flex-col gap-3 md:gap-4">
            <li v-for="(item, index) in items" :key="`nav-${item.label}-${index}`">
                <LayoutsSidebarItem :item="item"/>
            </li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({
    items : {
        type: Array,
        default: () => []
    },
});
</script>

<style lang="scss" scoped>

</style>e