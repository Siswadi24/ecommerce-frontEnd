<template>
  <UContainer class="flex flex-col gap-2 sm:gap-5 py-2 sm:py-5">
    <UCard class="address-section">
      <div class="flex gap-1 sm:gap-2 text-primary items-center">
        <UIcon name="i-heroicons:map-pin-16-solid" />
        <span class="text-xs sm:text-base">Alamat Pengiriman</span>
      </div>
      <div class="flex gap-10 mt-5 items-center text-xs sm:text-base">
        <div>
          <p class="font-bold text-black/80">Siswadi Perdana</p>
          <p class="font-bold text-black/80">(+6285666775430)</p>
        </div>
        <p class="text-black/80">
          Desa Kedalon RT 06 RW 05, Kec. Kedaton, Kab. Bandung
        </p>
        <UBadge color="primary" variant="outline" class="font-normal"
          >Utama</UBadge
        >
        <UButton variant="link" color="blue" @click="openAddress = true"
          >Ubah</UButton
        >
      </div>
    </UCard>

    <div class="bg-white divide-y divide-dashed">
      <div class="p-6">
        <div class="flex justify-between items-center">
          <span class="w-[33%] text-xs md:text-lg text-black/85 font-normal">
            Produk Dipesan
          </span>
          <span class="w-[16%]" />
          <span
            class="w-[16%] text-xs sm:text-sm font-normal text-right text-black/55"
          >
            Harga Satuan
          </span>
          <span
            class="w-[16%] text-xs sm:text-sm font-normal text-right text-black/55"
          >
            Jumlah
          </span>
          <span
            class="w-[16%] text-xs sm:text-sm font-normal text-right text-black/55"
          >
            Subtotal Produk
          </span>
        </div>
        <p class="text-xs sm:text-sm text-black/85 my-2 sm:my-4">Nama Toko</p>
        <div>
          <div class="flex justify-between items-center gap-2 sm:gap-4">
            <div
              class="w-[33%] text-xs md:text-lg text-black/85 font-normal flex gap-2 items-center"
            >
              <img
                src="https://picsum.photos/1920/1080?random=1"
                alt="product"
                class="aspect-[1/1] w-10 sm:w-20 object-cover"
              />
              <p class="line-clamp-1 text-xs sm:text-sm text-black/80">
                PRIVACY MATTE/ CLEAR GLOSSY / PRIVACY GLOSSY
              </p>
            </div>
            <div class="w-[16%]">
              <p class="line-clamp-1 text-xs sm:text-sm text-black/40">
                Variasi: Vermont Camel, L
              </p>
            </div>
            <div
              class="w-[16%] text-xs sm:text-sm font-normal text-right text-black/55"
            >
              Rp{{ formatNumber(249000) }}
            </div>
            <div
              class="w-[16%] text-xs sm:text-sm font-normal text-right text-black/55"
            >
              {{ formatNumber(15) }}
            </div>
            <div
              class="w-[16%] text-xs sm:text-sm font-normal text-right text-black/55"
            >
              Rp{{ formatNumber(375000) }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex divide-x divide-dashed bg-blue-50/20">
        <div
          class="flex gap-1.5 sm:gap-4 py-1.5 sm:py-4 px-1.5 sm:px-6 items-center w-[200px] md:w-[480px]"
        >
          <span class="text-xs sm:text-base dark:text-black/85 font-normal">Pesan:</span>
          <UInput
            placeholder="(Optional) Tinggalkan Pesan ke Penjual"
            class="flex-1"
          />
        </div>
        <div class="flex-1 divide-y divide-dashed">
          <div class="grid grid-cols-3 px-6 py-9 font-medium">
            <p class="text-xs sm:text-sm text-black/80">Opsi Pengiriman</p>
            <div>
              <div class="flex justify-between gap-1 sm:gap-2 items-center">
                <p class="text-xs sm:text-sm text-black/80">REG</p>
                <UButton
                  variant="link"
                  color="blue"
                  :padded="false"
                  @click="openCourier = true"
                >
                  Ubah
                </UButton>
              </div>
              <p class="text-xs text-gray-400 font-normal mt-2">
                Garansi tiba:13-15 agust
              </p>
            </div>
            <p class="text-xs sm:text-sm text-black/80 text-right">
              Rp{{ formatNumber(375000) }}
            </p>
          </div>
          <div>
            <UButton variant="link" class="hover:no-underline" @click="openCourier = true">
                <div class="flex items-center gap-1 text-green-700">
                    <IconTruck />
                    <span class="text-xs sm:text-sm">Garansi tiba: 13-15 Ags</span>
                </div>
                <div class="flex items-center">
                    <span class="text-xs sm:text-sm text-gray-400">dengan J&T Jemari</span>
                    <UIcon name="i-heroicons:chevron-right" class="text-gray-400" />
                </div>
            </UButton>
          </div>
        </div>
      </div>

      <div class="flex justify-end px-6 py-4 items-center gap-3 bg-blue-50/20">
        <span class="text-xs sm:text-sm text-black/55">Total Pesanan ({{ 1 }} produk):</span>
        <span class="text-xs sm:text-sm text-primary font-medium">Rp{{ formatNumber(375000) }}</span>
      </div>
    </div>

    <ModalAddress v-model:open="openAddress" />
    <ModalCourier v-model:open="openCourier" />
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  header: {
    showProfile: true,
    title: "Checkout",
  },
});

const openAddress = ref(false);
const openCourier = ref(false);
</script>

<style lang="scss" scoped></style>
