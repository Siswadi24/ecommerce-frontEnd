<template>
  <div>
    <div class="header-title-section">
      <UButton
        icon="i-heroicons:arrow-left"
        variant="link"
        @click="emit('back')"
      />
      <p class="text-xs sm:text-base dark:text-black">Reset Password</p>
    </div>
    <div class="container-form-section">
      <form class="form-input-section">
        <UFormGroup>
          <UInput
            :ui="{
              color: {
                white: { outline: 'dark:bg-white dark:text-black/85' },
              },
            }"
            placeholder="Email"
            size="sm" class=""
          />
        </UFormGroup>
        <UButton
          block
          variant="outline"
          class="button-next-form-section"
          @click="emit('next')"
        >
          Berikutnya
        </UButton>
      </form>
    </div>
  </div>
</template>
  
<script setup>
const emit = defineEmits(["next", "back"]);
</script>
  
<style scoped>
.header-title-section {
  @apply flex gap-1.5 sm:gap-7 items-center;
}

.container-form-section {
  @apply px-8 pt-2 sm:px-16 sm:pb-16 sm:pt-9;
}

.form-input-section {
  @apply space-y-4 sm:space-y-6;
}

.button-next-form-section {
  @apply uppercase dark:hover:bg-primary-500 hover:bg-primary dark:hover:text-white hover:text-white;
}
</style>