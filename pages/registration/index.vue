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
          <h2 class="dark:text-black text-sm sm:text-base">Daftar</h2>
          <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
            <UFormGroup
              :error="v$.email.$errors?.[0]?.$message"
              :ui="{
                size: {
                  xs: '2xs',
                },
              }"
            >
              <UInput
                v-model="registrationForm.email"
                :ui="{
                  color: {
                    white: { outline: 'dark:bg-white dark:text-black/85' },
                  },
                  size: {
                    lg: 'text-xs sm:text-sm',
                  },
                  padding: {
                    xs: 'px-3 py-2',
                  },
                }"
                placeholder="Masukan Email"
                size="lg"
              />
            </UFormGroup>

            <UButton
              :ui="{
                variant: {
                  solid: 'dark:text-white',
                },
              }"
              type="submit"
              block
              class="uppercase text-xs sm:text-sm hover:shadow-lg hover:rounded-lg"
              :loading="status === 'pending'"
            >
              Berikutnya
            </UButton>
          </form>

          <UDivider
            label="ATAU"
            class="my-4"
            :ui="{
              label: 'text-gray-300 font-normal',
            }"
          />
          <BaseButtonGoogleSignIn />
          <p class="text-sm font-normal text-black/25 text-center mt-8">
            Punya akun?
            <NuxtLink to="/login" class="text-primary">Log In</NuxtLink>
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
  
<script setup>
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
  header: {
    title: "Daftar",
  },
  middleware: ['must-not-auth'],
});

const router = useRouter();
const { registrationForm } = storeToRefs(useSession());

const rules = {
  email: { required, email },
};

const $externalResults = ref({});

const v$ = useVuelidate(rules, registrationForm, {
  $autoDirty: true,
  $externalResults,
});

const { status, error, execute } = useSubmit("/server/api/register");

async function handleSubmit() {
  $externalResults.value = {};

  const isValid = await v$.value.$validate();
  if (!isValid) return;

  //Fetch API
  await execute({
    email: registrationForm.value.email,
  });

  if (error.value) {
    $externalResults.value = error.value.data?.meta?.validations || {};
    return;
  }

  if (status.value === "success") {
    router.push("/registration/form");
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