<template>
  <div>
    <h3 class="text-xl font-medium">Ganti Email</h3>
    <hr class="mt-5 mb-11 border-gray-200/60" />
    <form>
      <UFormGroup
        :ui="{
          wrapper: 'flex gap-16',
          container: 'w-96',
          label: {
            wrapper: 'pt-2',
            base: 'font-normal text-black/55 text-base'
          },
        }"
        label="Email Baru"
      >
        <UInput size="lg" placeholder="Masukan Email-mu"/>
        <UButton label="Selanjutnya" class="mt-8"/>
      </UFormGroup>
    </form>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>