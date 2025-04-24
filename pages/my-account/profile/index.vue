<template>
  <div class="text-black">
    <h3 class="font-medium text-sm sm:text-lg">Profile Saya</h3>
    <p class="text-xs sm:text-sm text-black/65">
      Kelola informasi profil Anda untuk mengontrol, mengatur, dan melindungi
      akun Anda.
    </p>

    <hr class="mt-1.5 sm:mt-5 mb-1.5 sm:mb-8 border-gray-200/60" />

    <!-- Avatar hanya muncul di atas pada mode mobile -->
    <div class="flex flex-col items-center gap-5 sm:hidden">
      <UAvatar size="3xl" alt="Siswadi Perdana Putra" />
      <UButton
        color="white"
        label="Pilih Gambar"
        class="text-xs sm:text-sm"
        @click="handleChooseFile"
      />
      <input
        class="hidden"
        type="file"
        ref="inputFileElement"
        accept=".jpeg, .png"
        @change="handleUploadFile"
      />
      <ul class="text-xs sm:text-sm font-normal text-black/55">
        <li>Ukuran gambar: maksimum 1 MB</li>
        <li>Format gambar: JPEG, PNG</li>
      </ul>
    </div>

    <div
      class="flex flex-col sm:flex-row divide-x sm:divide-x-0 items-start gap-6 sm:gap-0"
    >
      <div class="flex-1 pr-6 flex flex-col mt-1.5 sm:mt-0 gap-2 sm:gap-8">
        <div class="profile-item">
          <p class="profile-item-title">Username</p>
          <span class="profile-item-text">Siswadi Perdana Putra</span>
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nama</p>
          <UInput class="flex-1" />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Email</p>
          <div class="flex gap-2 items-center">
            <span class="profile-item-text">Siswadi Perdana Putra</span>
            <UButton
              color="blue"
              :padded="false"
              variant="link"
              label="Ubah"
              class="underline"
              to="/my-account/profile/change-email"
            />
          </div>
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nomor Telepon</p>
          <div class="flex gap-2 items-center">
            <span class="profile-item-text">085666554454</span>
            <UButton
              color="blue"
              :padded="false"
              variant="link"
              label="Ubah"
              class="underline"
              to="/my-account/profile/change-phone"
            />
          </div>
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nama Toko</p>
          <UInput class="flex-1" />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Jenis Kelamin</p>
          <URadioGroup
            :ui="{
              fieldset: 'sm:flex gap-2',
            }"
            :options="['Laki-laki', 'Perempuan', 'Lainnya']"
            class="flex-1"
          />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Tanggal Lahir</p>
          <BaseDatePicker />
        </div>
        <div class="mt-4">
          <UButton label="Simpan" class="text-xs sm:text-sm dark:text-white" />
        </div>
      </div>

      <!-- Bagian kanan untuk avatar (hanya tampil di desktop) -->
      <div class="hidden sm:flex flex-col w-72 pl-6 gap-5 items-center">
        <UAvatar size="3xl" alt="Siswadi Perdana Putra" />
        <UButton
          color="white"
          label="Pilih Gambar"
          class="text-xs sm:text-sm"
          @click="handleChooseFile"
        />
        <input
          class="hidden"
          type="file"
          ref="inputFileElement"
          accept=".jpeg, .png"
          @change="handleUploadFile"
        />
        <ul class="text-xs sm:text-sm font-normal text-black/55">
          <li>Ukuran gambar: maksimum 1 MB</li>
          <li>Format gambar: JPEG, PNG</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
const inputFileElement = ref();

function handleChooseFile() {
  inputFileElement.value.value = null;
  inputFileElement.value.click();
}

function handleUploadFile() {
  alert("Hit Database");
}
</script>
  
  <style scoped>
.profile-item {
  @apply flex flex-col sm:flex-row sm:gap-11 items-start sm:items-center;
}

.profile-item-title {
  @apply text-black/55 text-xs sm:text-sm;
  @apply w-full sm:w-24;
  @apply text-left sm:text-right;
}

.profile-item-text {
  @apply profile-item-title;
  @apply text-black/80;
  @apply text-left;
  @apply w-[unset];
}
</style>