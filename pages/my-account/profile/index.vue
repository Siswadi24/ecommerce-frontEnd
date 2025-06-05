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
      <UAvatar
        :src="imageProfile"
        size="3xl"
        alt="Siswadi Perdana Putraa"
        img-class="object-cover"
      />
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
          <span v-if="profile.username" class="profile-item-text">
            {{ profile.username || "-" }}
          </span>
          <UInput v-else v-model="profile.username" class="flex-1" />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nama</p>
          <UInput v-model="profile.name" class="flex-1" />
        </div>

        <div class="profile-item">
          <p class="profile-item-title">Email</p>
          <div class="flex gap-2 items-center">
            <span class="profile-item-text"> {{ profile.email || "-" }}</span>
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
            <span class="profile-item-text">{{ profile.phone || "-" }}</span>
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
          <UInput v-model="profile.store_name" class="flex-1" />
        </div>

        <div class="profile-item">
          <p class="profile-item-title">Jenis Kelamin</p>
          <URadioGroup
            v-model="profile.gender"
            :ui="{
              fieldset: 'sm:flex gap-2',
            }"
            :options="['Laki-laki', 'Perempuan', 'Lainnya']"
            class="flex-1"
          />
        </div>

        <div class="profile-item">
          <p class="profile-item-title">Tanggal Lahir</p>
          <BaseDatePicker v-model="profile.birth_date" />
        </div>

        <div class="mt-4">
          <UButton label="Simpan" class="text-xs sm:text-sm dark:text-white" />
        </div>
      </div>

      <!-- Bagian kanan untuk avatar (hanya tampil di desktop) -->
      <div class="hidden sm:flex flex-col w-72 pl-6 gap-5 items-center">
        <UAvatar :src="imageProfile" size="3xl" alt="Siswadi Perdana Putra" />
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
const session = useSession();
const { profile } = storeToRefs(session);

const inputFileElement = ref();

const temporaryPhoto = ref();

const imageProfile = computed(() => {
  if (temporaryPhoto.value) {
    return window.URL.createObjectURL(temporaryPhoto.value);
  }
  return profile.value.photo_url;
});

function handleChooseFile() {
  inputFileElement.value.value = null;
  inputFileElement.value.click();
}

function handleUploadFile(event) {
  const file = event.target.files[0];
  const allowedExtensions = [".jpeg", ".png"];
  const fileExtension = file.name.split(".").pop();

  if (!allowedExtensions.includes(`.${fileExtension}`)) {
    alert(`Format file tidak didukung. Silakan upload file ${propsDef.accept}`);
    return;
  }

  if (file.size > 1024000) {
    alert("Ukuran file melebihi batas maksimum");
    return;
  }

  temporaryPhoto.value = file;
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