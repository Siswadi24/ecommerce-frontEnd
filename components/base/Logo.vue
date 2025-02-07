<template>
    <UButton :color="color" variant="link" :padded="false" to="/" class="logo">Putra's Store</UButton>
</template>

<script setup>
defineProps({
    color: {
        type: String,
        default: 'white',
        validator: (propsValue) => ['white', 'orange'].includes(propsValue)
    }
})
</script>

<style scoped>
.logo{
    @apply text-sm sm:text-2xl font-normal;
    @apply no-underline;
}
</style>