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
        {{ showingEmail }}
      </p>
      <form class="form-section">
        <UFormGroup class="text-center" :error="errorMessages">
          <BaseInputPin v-model="otpValue" />
        </UFormGroup>
        <div>
          <p
            v-if="isRunning"
            class="text-xs sm:text-sm text-black/20 text-center"
          >
            Mohon tunggu {{ displayValue }} detik untuk mengirim ulang.
          </p>
          <div v-else class="text-black/25 text-sm text-center">
            Tidak menerima kode?
            <UButton
              variant="link"
              :padded="false"
              color="blue"
              :loading="loadingResend"
              @click="emit('resend')"
            >
              Kirim Ulang
            </UButton>
          </div>
          <UButton
            block
            variant="outline"
            class="button-form-next-section"
            @click="handleSubmit"
            :loading="loading"
            :disabled="otpValue.length !== 6"
          >
            Berikutnya
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  loadingResend: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["next", "back", "resend"]);
const { registrationForm } = storeToRefs(useSession());
const otpValue = ref("");
const errorMessages = ref("");

const { maskEmail } = useMasking();
const showingEmail = computed(() => maskEmail(registrationForm.value.email));

const { startCountdown, displayValue, isRunning } = useCountdown();
startCountdown(60);

// onMounted(() => {
//   startCountdown(60);
// });

function handleSubmit() {
  if (otpValue.value.length !== 6) return;

  emit("next", {
    otp: otpValue.value,
  });
}

defineExpose({
  startCountdown: () => startCountdown(60),
  setError: (error) => {
    errorMessages.value = error;
  },
});
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