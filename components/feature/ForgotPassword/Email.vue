<template>
  <div>
    <div class="header-title-section">
      <UButton
        icon="i-heroicons:arrow-left"
        variant="link"
        @click="emit('back')"
      />
      <p class="text-xs sm:text-base dark:text-black">Reset Password</p>
    </div>
    <div class="container-form-section">
      <form class="form-input-section" @submit.prevent="handleSubmit">
        <UFormGroup :error="v$.email.$errors[0]?.$message">
          <UInput
            v-model="form.email"
            :ui="{
              color: {
                white: { outline: 'dark:bg-white dark:text-black/85' },
              },
            }"
            placeholder="Email"
            size="sm"
            class=""
          />
        </UFormGroup>
        <UButton
        type="submit"
          block
          variant="outline"
          class="button-next-form-section"
          :loading="loading"
          :disabled="v$.$invalid"
        >
          Berikutnya
        </UButton>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["next", "back"]);
const form = ref({
  email: "",
});

const rules = {
  email: { required, email },
};
const $externalResults = ref({});
const v$ = useVuelidate(rules, form, {
  $autoDirty: true,
  $externalResults,
});

async function handleSubmit() {
  $externalResults.value = {};
  const isValid = await v$.value.$validate();

  if (!isValid) {
    return;
  }

  emit("next", form.value);
}

defineExpose({
  setError: (error) => ($externalResults.value = error),
});
</script>
  
<style scoped>
.header-title-section {
  @apply flex gap-1.5 sm:gap-7 items-center;
}

.container-form-section {
  @apply px-8 pt-2 sm:px-16 sm:pb-16 sm:pt-9;
}

.form-input-section {
  @apply space-y-4 sm:space-y-6;
}

.button-next-form-section {
  @apply uppercase dark:hover:bg-primary-500 hover:bg-primary dark:hover:text-white hover:text-white;
}
</style>