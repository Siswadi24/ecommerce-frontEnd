<template>
  <div>
    <div class="flex gap-1.5 sm:gap-7 items-center">
      <UButton
        icon="i-heroicons:arrow-left"
        variant="link"
        @click="emit('back')"
      />
      <p class="text-xs sm:text-base dark:text-black">Atur Password Kamu</p>
    </div>
    <div class="px-8 pt-2 sm:px-16 sm:pb-16 sm:pt-9">
      <form class="space-y-4 sm:space-y-6">
        <p class="text-xs sm:text-base text-center text-black/80">
          Buat Password Kamu
        </p>
        <UFormGroup>
          <BaseInputPassword v-model="password" placeholder="Password" />
        </UFormGroup>

        <ul>
          <li
            v-for="validation in validationMessage"
            :key="validation.key"
            class="text-sm py-1"
            :class="{
              'text-red-500': !isContain[validation.key],
              'text-green-500': isContain[validation.key],
            }"
          >
            {{ validation.message }}
            <UIcon
              :name="
                isContain[validation.key]
                  ? 'i-heroicons:check-circle'
                  : 'i-heroicons:x-circle'
              "
              class="w-5 h-5 -mb-1.5"
            />
          </li>
        </ul>

        <UButton
          block
          variant="outline"
          class="uppercase dark:hover:bg-primary-500 hover:bg-primary dark:hover:text-white hover:text-white"
          @click="emit('next')"
        >
          Berikutnya
        </UButton>
      </form>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["next", "back"]);
const password = ref("");

const validationMessage = [
  { message: "Min. satu karakter huruf kecil", key: "lowercase" },
  { message: "Min. satu karakter huruf besar", key: "uppercase" },
  { message: "8-16 Karakter", key: "validLength" },
  {
    message:
      "Hanya huruf, angka, dan tanda baca yang umum yang dapat digunakan",
    key: "allowedChar",
  },
];

const isContain = reactive({
  lowercase: false,
  uppercase: false,
  validLength: false,
  allowedChar: false,
});

function hasLowerCase(str) {
  return /[a-z]/.test(str);
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}

function hasValidLength(str) {
  return str.length >= 8 && str.length <= 16;
}

function hasAllowedChars(str) {
  return /^[a-zA-Z0-9,.!?-]+$/.test(str);
}

watch(password, (newValue) => {
  isContain.lowercase = hasLowerCase(newValue);
  isContain.uppercase = hasUpperCase(newValue);
  isContain.validLength = hasValidLength(newValue);
  isContain.allowedChar = hasAllowedChars(newValue);
});
</script>

<style lang="scss" scoped>
</style>