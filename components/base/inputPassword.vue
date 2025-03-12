<template>
  <UInput
    v-model="model"
    placeholder="Password"
    size="lg"
    :type="showPassword ? 'text' : 'password'"
    :ui="{
      color: { white: { outline: 'dark:bg-white dark:text-black/85' } },
    }"
  >
    <!-- <template #trailing>
      <UButton
        :icon="showPassword ? 'i-heroicons:eye' : 'i-heroicons:eye-slash'"
        variant="link"
        color="white"
        @click="showPassword = !showPassword" class="dark:text-black/80"
      />
    </template> -->
  </UInput>
</template>
  
<script setup>
const model = defineModel({
  type: String,
});

const showPassword = ref(false);
</script>
  
<style lang="scss" scoped></style>
  