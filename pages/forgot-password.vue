<template>
  <section class="main-section">
    <UContainer class="container-section">
      <UCard class="auth-shadow">
        <!-- <FeatureForgotPasswordEmail/> -->
        <!-- <FeatureForgotPasswordOtp /> -->
        <!-- <FeatureForgotPassword /> -->
        <component
          :is="FeatureForgotPasswordStep[stepActive].component"
          ref="formStepElement"
          @next="handleNext(FeatureForgotPasswordStep[stepActive].key, $event)"
          @back="handleBack(FeatureForgotPasswordStep[stepActive].key)"
          @resend="handleResendOtp"
        />
      </UCard>
    </UContainer>
  </section>
</template>

<script setup>
import { FeatureForgotPasswordEmail, FormOtp, FormPassword } from "#components";
import { email } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
  header: {
    class: "custom-shadow sticky top-0 z-40",
    title: "Reset Password",
  },
});

const stepActive = ref(0);
const router = useRouter();
const nuxtApp = useNuxtApp();
const formStepElement = ref();
const session = useSession();
const { registrationForm, token, tokenCookie, profile } = storeToRefs(session);

const FeatureForgotPasswordStep = [
  {
    key: "forgot-password",
    component: FeatureForgotPasswordEmail,
  },
  {
    key: "otp",
    component: FormOtp,
  },
  {
    key: "password",
    component: FormPassword,
  },
];

//Fetch API Untuk Request Forgot Password untuk dapat mengirimkan OTP
const {
  execute: request,
  status: statusRequest,
  error: errorRequest,
} = useSubmit("/server/api/forgot-password/request-otp");

//Fetch API Untuk Check OTP
const {
  execute: validateOtp,
  status: statusValidateOtp,
  error: errorValidateOtp,
} = useSubmit("/server/api/forgot-password/check-otp");

//Fetch API Untuk Resend OTP
const {
  execute: resendOtp,
  status: statusResendOtp,
  error: errorResendOtp,
} = useSubmit("/server/api/forgot-password/resend-otp", {
  onResponse({ response }) {
    if (response.ok) {
      formStepElement.value.startCountdown();
    }
  },
  onRequestError({ error }) {
    console.log(error);
  },
});

//Fungsi untuk resend OTP
function handleResendOtp() {
  resendOtp({
    email: registrationForm.value.email,
  });
}

//Fetch API Untuk Reset Password
const {
  execute: resetPassword,
  status: statusResetPassword,
  error: errorResetPassword,
  data: dataResetPassword,
} = useSubmit("/server/api/forgot-password/reset-password");

//Fetch API Untuk Get Profile
const { execute: getProfile, status: statusProfile } = useApi(
  "/server/api/profile",
  {
    immediate: false,
    onResponse({ response }) {
      if (response.ok) {
        profile.value = response._data.data;
        session.resetRegistrationForm();
        nuxtApp.runWithContext(() => {
          navigateTo("/my-account/profile");
        });
      }
    },
  }
);

const customProps = computed(() => {
  switch (FeatureForgotPasswordStep[stepActive.value].key) {
    case "forgot-password":
      return {
        loading: statusRequest.value === "pending",
      };

    case "otp":
      return {
        loading: statusValidateOtp.value === "pending",
        loadingResend: statusResendOtp.value === "pending",
      };

    case "password":
      return {
        loading:
          statusResetPassword.value === "pending" ||
          statusProfile.value === "pending",
      };

    default:
      break;
  }
});

async function handleNext(stepKey, value) {
  switch (stepKey) {
    case "forgot-password":
      await request({
        email: value.email,
      });
      if (errorRequest.value) {
        formStepElement.value.setError(
          errorRequest.value.data?.meta?.validations || {}
        );
        return;
      }
      if (statusRequest.value === "success") {
        registrationForm.value.email = value.email;
        stepActive.value++;
      }
      break;

    case "otp":
      await validateOtp({
        email: registrationForm.value.email,
        otp: value.otp,
      });
      if (errorValidateOtp.value) {
        formStepElement.value.setError(
          errorValidateOtp.value.data?.meta?.validations?.otp?.[0]
        );
        return;
      }
      if (statusValidateOtp.value === "success") {
        registrationForm.value.otp = value.otp;
        stepActive.value++;
      }
      break;

    case "password":
      await resetPassword({
        email: registrationForm.value.email,
        otp: registrationForm.value.otp,
        password: value.password,
        password_confirmation: value.password,
      });

      if (errorResetPassword.value) {
        formStepElement.value.setError(
          error.value.data?.meta?.validations || {}
        );
        return;
      }

      if (statusResetPassword.value === "success") {
        registrationForm.value.password = value.password;
        registrationForm.value.password_confirmation = value.password;

        token.value = dataResetPassword.value.data?.token;
        tokenCookie.value = dataResetPassword.value.data?.token;

        getProfile();
      }
      break;

    default:
      stepActive.value++;
      break;
  }
}

function handleBack(stepKey) {
  if (stepKey === "forgot-password") {
    return router.push("/login");
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