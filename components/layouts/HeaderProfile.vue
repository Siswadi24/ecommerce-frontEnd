<template>
    <div class="header-profile">
        <UContainer class="header-profile-container">
            <UButton color="white" variant="link" :padded="false" class="px-3" to="/registration">Daftar</UButton>
            <UButton color="white" variant="link" :padded="false" class="px-3" to="/login">Login</UButton>
        </UContainer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header-profile {
    @apply bg-primary;
    @apply py-2;
    @apply text-white;
}

.header-profile-container {
    @apply flex justify-end;
    @apply divide-x divide-gray-50/50;
}
</style>