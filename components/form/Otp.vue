<template>
  <div>
    <div class="header-title-section">
      <UButton
        icon="i-heroicons:arrow-left"
        variant="link"
        @click="emit('back')"
      />
      <p class="text-xs sm:text-base dark:text-black">Masukan Kode OTP</p>
    </div>
    <div class="container-form-section">
      <p class="text-xs sm:text-base text-center text-black/80">
        Kode OTP telah dikirim via e-mail <br />ke
      </p>
      <p
        class="text-sm sm:text-base text-center mt-2 text-black/80 font-medium"
      >
        danaperdanaputra32@gmail.com
      </p>
      <form class="form-section">
        <UFormGroup>
          <BaseInputPin v-model="otpValue" />
        </UFormGroup>
        <div>
          <p class="text-xs sm:text-sm text-black/20 text-center">
            Mohon tunggu {{ 47 }} detik untuk mengirim ulang.
          </p>
          <UButton
            block
            variant="outline"
            class="button-form-next-section"
            @click="emit('next')"
          >
            Berikutnya
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
const otpValue = ref("");
const emit = defineEmits(["next", "back"]);
</script>
  
<style scoped>
.header-title-section {
  @apply flex gap-1.5 sm:gap-7 items-center;
}

.container-form-section {
  @apply px-8 pt-2 sm:px-16 sm:pb-16 sm:pt-9;
}

.form-section {
  @apply space-y-8 mt-8 sm:mt-16 sm:space-y-16;
}

.button-form-next-section {
  @apply uppercase mt-1 sm:mt-2 dark:hover:bg-primary-500 hover:bg-primary dark:hover:text-white hover:text-white;
}
</style>