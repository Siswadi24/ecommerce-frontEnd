<template>
  <section class="bg-white">
    <UContainer class="py-2 sm:py-5 lg:py-14">
      <UCard class="auth-shadow sm:max-w-[500px] mx-auto">
        <!-- <FeatureForgotPasswordEmail/> -->
        <!-- <FeatureForgotPasswordOtp /> -->
        <!-- <FeatureForgotPassword /> -->
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
import {
  FeatureForgotPasswordEmail,
  FeatureForgotPasswordOtp,
  FeatureForgotPassword,
} from "#components";

definePageMeta({
  layout: "auth",
  header: {
    class: "custom-shadow sticky top-0 z-40",
    title: "Reset Password",
  },
});

const stepActive = ref(0);
const router = useRouter();

const FeatureForgotPasswordStep = [
  {
    key: "forgot-password",
    component: FeatureForgotPasswordEmail,
  },
  {
    key: "otp",
    component: FeatureForgotPasswordOtp,
  },
  {
    key: "password",
    component: FeatureForgotPassword,
  },
];

function handleNext(stepKey) {
  if (stepKey === "password") {
    alert("success reset password");
    console.log("success reset password");
    return router.push("/login");
  }
  stepActive.value++;
}

function handleBack(stepKey) {
  if (stepKey === "forgot-password") {
    return router.push("/login");
  }
  stepActive.value--;
}
</script>

<style scoped>
.auth-shadow {
  box-shadow: 0px 3px 10px 0px #00000024;
}
</style>