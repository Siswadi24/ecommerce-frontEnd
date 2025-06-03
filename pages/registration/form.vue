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
            ref="formStepElement"
            v-bind="customProps"
            :is="RegistrationStep[stepActive].component"
            @next="handleNext(RegistrationStep[stepActive].key, $event)"
            @back="handleBack(RegistrationStep[stepActive].key)"
            @resend="handleResendOtp"
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

const session = useSession();
const { tokenCookie, token, profile, registrationForm } = storeToRefs(session);
const stepActive = ref(0);
const router = useRouter();
const formStepElement = ref();

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

//Step Check OTP
const {
  status: statusValidate,
  error: errorValidate,
  execute: validateOtp,
} = useSubmit("/server/api/check-otp-register");

//Step Resend OTP
const { status: statusResend, execute: resendOtp } = useSubmit(
  "/server/api/resend-otp",
  {
    onResponse({ response }) {
      if (response.ok) {
        formStepElement.value.startCountdown();
      }
    },
  }
);

function handleResendOtp() {
  resendOtp({
    email: registrationForm.value.email,
  });
}

//Step Verify Register
const {
  status: statusRegister,
  error: errorRegister,
  execute: verifyRegister,
  data: dataRegister,
} = useSubmit("/server/api/verify-register");

//Step Get Profile
const { execute: getProfile, status: statusProfile } = useApi(
  "/server/api/profile",
  {
    immediate: false,
    onResponse({ response }) {
      if (response.ok) {
        profile.value = response._data.data;
        session.resetRegistrationForm();
        stepActive.value++;
      }
    },
  }
);

const customProps = computed(() => {
  switch (RegistrationStep[stepActive.value].key) {
    case "otp":
      return {
        loading: statusValidate.value === "pending",
        loadingResend: statusResend.value === "pending",
      };

    case "password":
      return {
        loading:
          statusRegister.value === "pending" ||
          statusProfile.value === "pending",
      };

    default:
      return {};
  }
});

async function handleNext(step, value) {
  switch (step) {
    case "otp":
      formStepElement.value.setError("");
      //TODO Hit API OTP
      await validateOtp({
        email: registrationForm.value.email,
        otp: value.otp,
      });

      if (errorValidate.value) {
        formStepElement.value.setError(
          errorValidate.value.data?.meta?.validations?.otp?.[0]
        );
        return;
      }

      if (statusValidate.value === "success") {
        registrationForm.value.otp = value.otp;
        stepActive.value++;
      }

      // console.log(value);
      // stepActive.value++;
      break;
    case "password":
      formStepElement.value.setError({});

      //TODO Hit API OTP
      await verifyRegister({
        email: registrationForm.value.email,
        otp: registrationForm.value.otp,
        password: value.password,
        password_confirmation: value.password,
      });

      if (errorRegister.value) {
        formStepElement.value.setError(
          errorRegister.value.data?.meta?.validations || {}
        );
        return;
      }

      if (statusRegister.value === "success") {
        registrationForm.value.password = value.password;
        registrationForm.value.password_confirmation = value.password;

        token.value = dataRegister.value.data?.token;
        tokenCookie.value = dataRegister.value.data?.token;

        getProfile();
      }

      // console.log(value);
      // stepActive.value++;
      break;

    default:
      break;
  }
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