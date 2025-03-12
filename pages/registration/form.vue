<template>
  <section class="main-section">
    <UContainer class="container-section">
      <div class="sm:max-w-[500px] mx-auto">
        <div class="step-header">
          <template v-for="(step, index) in RegistrationStep" :key="step.key">
            <div class="step-item" :class="[index <= stepActive && 'is-done']">
              <div class="step-item-icon">
                {{ index + 1 }}
              </div>
              <p class="step-item-title">
                {{ step.title }}
              </p>
            </div>
            <IconStepArrow
              v-if="index < RegistrationStep.length - 1"
              class="mb-6"
            />
          </template>
        </div>
        <UCard class="auth-shadow">
          <component
            :is="RegistrationStep[stepActive].component"
            @next="handleNext(RegistrationStep[stepActive].key)"
            @back="handleBack(RegistrationStep[stepActive].key)"
          />
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { FormOtp, FormPassword, FormCompleted } from "#components";

definePageMeta({
  layout: "auth",
  header: {
    class: "custom-shadow sticky top-0 z-40",
    title: "Daftar",
  },
});

const stepActive = ref(0);
const router = useRouter();

const RegistrationStep = [
  {
    key: "otp",
    title: "Verifikasi Email",
    component: FormOtp,
  },
  {
    key: "password",
    title: "Buat Password",
    component: FormPassword,
  },
  {
    key: "completed",
    title: "Selesai",
    component: FormCompleted,
  },
];

function handleNext() {
  stepActive.value++;
}

function handleBack(stepKey) {
  if (stepKey === "otp") {
    return router.push("/registration");
  }
  stepActive.value--;
}
</script>

<style scoped>
.main-section {
  @apply bg-white;
}
.container-section {
  @apply py-2 sm:py-5 lg:py-14;
}
.auth-shadow {
  box-shadow: 0px 3px 10px 0px #00000024;
}

.step-header {
  @apply flex items-center justify-center gap-2;
  @apply text-xs sm:text-base text-black/80;
  @apply mb-6 sm:mb-12;
}

.step-item {
  @apply flex flex-col items-center;
}

.step-item-icon {
  @apply rounded-full px-3 py-1 ring-1 ring-inset ring-black/25;
  @apply flex items-center justify-center;
  @apply text-black/25;
}

.step-item-title {
  @apply text-black/25 text-xs font-normal mt-1;
}

.step-item.is-done .step-item-icon {
  @apply bg-green-500 text-white ring-transparent;
}
.step-item.is-done .step-item-title {
  @apply text-green-500;
}
</style>