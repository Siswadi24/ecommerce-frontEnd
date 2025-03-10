<template>
  <section class="bg-primary">
    <UContainer class="grid grid-cols-1 sm:grid-cols-2 h-full py-10 sm:py-20">
      <div class="flex flex-col gap-5 py-2 text-white text-center sm:flex justify-center items-center">
        <div class="flex flex-col gap-14 text-white text-center">
          <h1 class="text-base sm:text-7xl dark:text-white">Putra's <span class="text-primary-200 sm:text-white hover:text-primary-200">Store</span></h1>
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
          <form class="mt-7 space-y-7">
            <UFormGroup
              :ui="{
                size: {
                  xs: '2xs',
                },
              }"
            >
              <UInput
                :ui="{
                  color: {
                    white: { outline: 'dark:bg-white dark:text-black/85' },
                  },
                  size: {
                    xs: 'text-xs',
                  },
                  padding: {
                    xs: 'px-3 py-2',
                  },
                }"
                placeholder="No. Handphone/Email"
                size="lg"
              />
            </UFormGroup>
            <UFormGroup
              :ui="{
                size: {
                  xs: '2xs',
                },
              }"
            >
              <UInput
                :ui="{
                  color: {
                    white: { outline: 'dark:bg-white dark:text-black/85' },
                  },
                  size: {
                    xs: 'text-xs',
                  },
                  padding: {
                    xs: 'px-3 py-2',
                  },
                }"
                placeholder="Password"
                size="lg"
              />
            </UFormGroup>
            <div>
              <UButton block>Log in</UButton>
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
          <UButton block color="white">
            <img src="~/assets/images/google.png" class="w-6 h-6" />
            Google
          </UButton>
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
definePageMeta({
  layout: "auth",
  header: {
    title: "Log in",
  },
});
</script>

<style lang="scss" scoped>
</style>