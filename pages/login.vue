<template>
  <section class="main-section">
    <UContainer class="container-login-section">
      <div class="container-main-title">
        <div class="container-main-title-heading">
          <h1 class="text-base sm:text-7xl dark:text-white">
            Putra's
            <span class="text-primary-200 sm:text-white hover:text-primary-200"
              >Store</span
            >
          </h1>
          <p class="text-xs sm:text-base dark:text-white">
            Tempat Belanja Online No. 1<br />untuk semua kalangan
          </p>
        </div>
      </div>

      <div>
        <UCard
          :ui="{
            rounded: 'rounded-sm',
          }"
          class="sm:w-96"
        >
          <h2 class="dark:text-black text-sm sm:text-base">Log in</h2>
          <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
            <UFormGroup
              :error="v$.phone_email.$errors[0]?.$message"
              :ui="{
                wrapper: 'mt-5',
                size: {
                  xs: '2xs',
                },
              }"
            >
              <UInput
                v-model="form.phone_email"
                :ui="{
                  color: {
                    white: { outline: 'dark:bg-white dark:text-black/85' },
                  },
                  size: {
                    xs: 'text-xs sm:text-sm',
                  },
                  padding: {
                    xs: 'px-3 py-2 my-3',
                  },
                }"
                placeholder="Masukan No. Handphone/Email"
                size="xs"
              />
            </UFormGroup>
            <UFormGroup
              :error="v$.password.$errors[0]?.$message"
              :ui="{
                size: {
                  xs: '2xs',
                },
              }"
            >
              <BaseInputPassword
                v-model="form.password"
                placeholder="Masukan password anda"
              />
            </UFormGroup>
            <div>
              <UButton
                type="submit"
                class="mt-5"
                block
                :loading="status === 'pending' || statusProfile === 'pending'"
                >Log in</UButton
              >
              <UButton
                variant="link"
                color="blue"
                :padded="false"
                class="mt-2"
                to="/forgot-password"
              >
                Lupa password
              </UButton>
            </div>
          </form>

          <UDivider
            label="ATAU"
            class="my-4"
            :ui="{
              label: 'text-gray-300 font-normal',
            }"
          />
          <BaseButtonGoogleSignIn class="mt-4"/>
          <p class="text-sm font-normal text-black/25 text-center mt-8">
            Baru di Putra's Store?
            <NuxtLink to="/registration" class="text-primary">Daftar</NuxtLink>
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { email, helpers, minLength, required } from "@vuelidate/validators";
import { useApi } from "~/composables/use-api";

const password = ref("");
const session = useSession();
const { profile, token: tokenSession } = storeToRefs(session);
const token = useCookie("access_token");

const nuxtApp = useNuxtApp();

definePageMeta({
  layout: "auth",
  header: {
    title: "Log in",
  },
  middleware: ["must-not-auth"],
});

const form = ref({
  phone_email: "",
  password: "",
});

const rules = {
  phone_email: {
    required,
    isValidUsername: helpers.withMessage("value is not valid", (value) => {
      if (value) {
        if (/^\d{4}/.test(value)) {
          //Checking phone number
          return /^\d+$/.test(value);
        }

        //Cheking Email
        return email.$validator(value);
      }
      return true;
    }),
  },
  password: { required, minLength: minLength(8) },
};

const $externalResults = ref({});

const v$ = useVuelidate(rules, form, {
  $autoDirty: true,
  $externalResults,
});

//Post Fetch Login
const { data, status, execute, error } = useSubmit("/server/api/login");

//Get Fetch Profile From API
const { execute: getProfile, status: statusProfile } = useApi(
  "/server/api/profile",
  {
    immediate: false,
    onResponse({ response }) {
      if (response.ok) {
        profile.value = response._data?.data;

        nuxtApp.runWithContext(() => {
          navigateTo("/");
        });
      }
    },
  }
);

//Handle Submit Form Login
async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  //Fetch API
  await execute(form.value);

  if (error.value) {
    $externalResults.value = error.value.data?.meta?.validations || {};
    return;
  }

  if (status.value === "success" && data.value?.data?.token) {
    tokenSession.value = data.value?.data?.token;
    token.value = data.value?.data?.token;
    // profile.value = {}
    getProfile();
  }
}
</script>

<style scoped>
.main-section {
  @apply bg-primary;
}

.container-login-section {
  @apply grid grid-cols-1 sm:grid-cols-2 h-full py-10 sm:py-20;
}

.container-main-title {
  @apply flex flex-col gap-5 py-2 text-white text-center sm:flex justify-center items-center;
}

.container-main-title-heading {
  @apply flex flex-col gap-14 text-white text-center;
}
</style>