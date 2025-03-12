<template>
  <div>
    <div class="flex gap-1.5 sm:gap-7 items-center">
      <UButton
        icon="i-heroicons:arrow-left"
        variant="link"
        @click="emit('back')"
      />
      <p class="text-xs sm:text-base dark:text-black">Masukan Kode OTP</p>
    </div>
    <div class="px-8 pt-2 sm:px-16 sm:pb-16 sm:pt-9">
      <p class="text-xs sm:text-base text-center text-black/80">
        Kode OTP telah dikirim via e-mail <br />ke
      </p>
      <p
        class="text-sm sm:text-base text-center mt-2 text-black/80 font-medium"
      >
        danaperdanaputra32@gmail.com
      </p>
      <form class="space-y-8 mt-8 sm:mt-16 sm:space-y-16">
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
            class="uppercase mt-1 sm:mt-2 dark:hover:bg-primary-500 hover:bg-primary dark:hover:text-white hover:text-white"
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
  
<style lang="scss" scoped>
</style>