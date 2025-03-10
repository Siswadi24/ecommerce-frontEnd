<template>
  <div>
    <div class="flex gap-1.5 sm:gap-7 items-center">
      <UButton icon="i-heroicons:arrow-left" variant="link" />
      <p class="text-xs sm:text-base dark:text-black">Reset Password</p>
    </div>
    <div class="px-8 pt-2 sm:px-16 sm:pb-16 sm:pt-9">
      <form class="space-y-4 sm:space-y-6">
        <UFormGroup>
          <UInput
            :ui="{
              color: {
                white: { outline: 'dark:bg-white dark:text-black/85' },
              },
            }"
            placeholder="Email"
            size="sm"
          />
        </UFormGroup>
        <UButton
          block
          variant="outline"
          class="uppercase dark:hover:bg-primary-500 hover:bg-primary dark:hover:text-white hover:text-white"
        >
          Berikutnya
        </UButton>
      </form>
    </div>
  </div>
</template>
  
<script setup>
</script>
  
<style lang="scss" scoped>
</style>