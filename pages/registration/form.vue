<template>
  <section class="main-section">
    <UContainer class="container-section">
      <UCard class="auth-shadow">
        <component
          :is="FeatureForgotPasswordStep[stepActive].component"
          @next="handleNext(FeatureForgotPasswordStep[stepActive].key)"
          @back="handleBack(FeatureForgotPasswordStep[stepActive].key)"
        />
      </UCard>
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

const FeatureForgotPasswordStep = [
  {
    key: "otp",
    component: FormOtp,
  },
  {
    key: "password",
    component: FormPassword,
  },
  {
    key: "completed",
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
  @apply sm:max-w-[500px] mx-auto;
}
</style>