<template>
  <div
    class="flex flex-col justify-center items-center gap-6 sm:px-16 sm:pb-16 pt-5"
  >
    <UIcon
      name="i-heroicons:check-circle-solid"
      class="h-20 sm:h-36 w-20 sm:w-36 text-green-500"
    />
    <p class="text-xs sm:text-sm text-center text-black/80">
      Pendaftaran anda berhasil dan anda akan diarahkan ke halaman homepage
      dalam {{ 3 }} detik
    </p>
    <UButton block class="dark:text-white" to="/"> Arahkan Sekarang </UButton>
  </div>
</template>

<script setup>
const router = useRouter();
const { startCountdown, displayValue } = useCountdown();

function redirectToHomePage() {
  router.replace("/");
}

startCountdown(3, redirectToHomePage);
</script>

<style lang="scss" scoped>
</style>