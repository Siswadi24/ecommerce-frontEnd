<template>
  <div>
    <div class="flex justify-between gap-4 items-center">
      <h3 class="text-lg font-medium">Alamat Saya</h3>
      <UButton icon="i-heroicons:plus" @click="openEditor = true">
        Tambah Alammat Saya
      </UButton>
    </div>
    <hr class="mt-5 mb-3 border-gray-200/60" />
    <h4 class="text-lg font-normal">Alamat</h4>
    <div class="divide-y">
      <div v-if="status === 'pending'" class="space-y-2 mt-4">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
      <template v-else>
        <FeatureProfileAddressCardItem
          v-for="address in addressList?.data"
          :key="address.uuid"
          :item="address"
          @change="handleChanges"
        />
      </template>
    </div>

    <FeatureProfileAddressModalMutation v-model:open="openEditor" />
  </div>
</template>

<script setup>
const openEditor = ref(false);

function handleChanges() {
  openEditor.value = true;
}

const { data: addressList, status } = useApi("/server/api/address/");

// const addressList = [
//   {
//     uuid: "8c438746-79c5-11ef-b707-97a05ceb87e2",
//     is_default: true,
//     receiver_name: "Azis Hapidin",
//     receiver_phone: "08888",
//     city: {
//       uuid: "ee8eb26c-78fe-11ef-bd77-9e4478916c69",
//       province: {
//         uuid: "ee8d857c-78fe-11ef-bd77-9e4478916c69",
//         name: "Bali",
//       },
//       external_id: 128,
//       name: "Kabupaten Gianyar",
//     },
//     district: "Bojong",
//     postal_code: "43222",
//     detail_address: "Jl. ABC No. 123",
//     address_note: "Dekat tugu pahlawan",
//     type: "home",
//   },
//   {
//     uuid: "953bc2be-79c5-11ef-b707-97a05ceb87e2",
//     is_default: false,
//     receiver_name: "Azis Hapidin",
//     receiver_phone: "08888",
//     city: {
//       uuid: "ee8eb26c-78fe-11ef-bd77-9e4478916c69",
//       province: {
//         uuid: "ee8d857c-78fe-11ef-bd77-9e4478916c69",
//         name: "Bali",
//       },
//       external_id: 128,
//       name: "Kabupaten Gianyar",
//     },
//     district: "Bojong",
//     postal_code: "43222",
//     detail_address: "Jl. ABC No. 123",
//     address_note: "Dekat tugu pahlawan",
//     type: "home",
//   },
// ];
</script>

<style lang="scss" scoped>
</style>