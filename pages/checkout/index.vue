<template>
  <UContainer class="main-container">
    <UCard class="address-section">
      <div class="address-section-title">
        <UIcon name="i-heroicons:map-pin-16-solid" />
        <span class="text-xs sm:text-base">Alamat Pengiriman</span>
      </div>
      <div class="address-section-content">
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

    <!-- Mobile Version -->
    <div class="mobile-version-main-section">
      <!-- Header -->
      <div class="p-4 sm:p-6">
        <!-- Nama Toko -->
        <p class="text-sm text-black/85 my-4">Nama Toko</p>

        <!-- Produk -->
        <div class="mobile-version-header-title">
          <img
            src="https://picsum.photos/1920/1080?random=1"
            alt="product"
            class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
          />

          <div class="mobile-version-header-title-product">
            <p class="text-xs sm:text-sm font-semibold text-black/80">
              PRIVACY MATTE/ CLEAR GLOSSY / PRIVACY GLOSSY
            </p>
            <p class="text-xs text-black/55 mt-1">Variasi: Vermont Camel, L</p>
          </div>

          <!-- Harga, Jumlah, Subtotal -->
          <div class="mobile-version-price-product-section">
            <p class="text-xs text-black/55">
              Harga Satuan: Rp{{ formatNumber(249000000) }}
            </p>
            <p class="text-xs text-black/55">Jumlah: {{ formatNumber(15) }}</p>
            <p class="text-xs text-black/55">
              Subtotal Produk: Rp{{ formatNumber(375000000) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Input Pesan dan Pengiriman -->
      <div class="mobile-version-message-user-section">
        <!-- Input Pesan -->
        <div class="mobile-version-message-user-section-input">
          <span class="text-sm font-normal text-black/85">Pesan:</span>
          <UInput
            placeholder="(Optional) Tinggalkan Pesan ke Penjual"
            class="flex-1"
            :ui="{
              color: {
                white: {
                  outline: 'dark:bg-white dark:text-black/85',
                },
              },
            }"
          />
        </div>

        <!-- Info Pengiriman -->
        <div class="p-4 sm:p-6 flex-1">
          <div class="mobile-version-courier">
            <p class="text-sm text-black/80">Opsi Pengiriman</p>
            <UButton
              variant="link"
              color="blue"
              :padded="false"
              @click="openCourier = true"
            >
              Ubah
            </UButton>
          </div>

          <p class="text-xs text-gray-400 font-normal">
            Garansi tiba: 13-15 Agustus
          </p>

          <UButton
            variant="link"
            class="hover:no-underline mt-4"
            @click="openCourier = true"
            :padded="false"
          >
            <div class="mobile-version-courier-option">
              <IconTruck />
              <span class="text-xs sm:text-sm"
                >J&T Jemari - Garansi tiba: 13-15 Ags
              </span>
              <UIcon name="i-heroicons:chevron-right" class="text-gray-400" />
            </div>
          </UButton>
        </div>
      </div>

      <!-- Total Pesanan -->
      <div class="mobile-version-order-section">
        <span class="text-sm text-black/55">
          Total Pesanan ({{ 100000 }} produk):
        </span>
        <span class="text-sm font-medium text-primary">
          Rp{{ formatNumber(375000000000000000000000000000) }}
        </span>
      </div>
    </div>

    <!-- Desktop Version -->
    <div class="desktop-version-main-section">
      <div class="p-6">
        <div class="dekstop-version-header-title">
          <span class="w-[33%] text-xs md:text-lg text-black/85 font-normal">
            Produk Dipesan
          </span>
          <span class="w-[16%]" />
          <span class="w-[16%]"> Harga Satuan </span>
          <span class="w-[16%]"> Jumlah </span>
          <span class="w-[16%]"> Subtotal Produk </span>
        </div>
        <p class="text-xs sm:text-sm text-black/85 my-2 sm:my-4">Nama Toko</p>
        <div>
          <div class="dekstop-version-header-product">
            <div class="dekstop-version-header-product-title">
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
            <div class="w-[16%]">Rp{{ formatNumber(249000) }}</div>
            <div class="w-[16%]">
              {{ formatNumber(15) }}
            </div>
            <div class="w-[16%]">Rp{{ formatNumber(375000) }}</div>
          </div>
        </div>
      </div>

      <div class="dekstop-version-body-section">
        <div class="dekstop-version-body-section-message-input">
          <span class="text-xs sm:text-base dark:text-black/85 font-normal">
            Pesan:
          </span>
          <UInput
            placeholder="(Optional) Tinggalkan Pesan ke Penjual"
            class="flex-1"
            :ui="{
              color: {
                white: {
                  outline: 'dark:bg-white dark:text-black/85',
                },
              },
            }"
          />
        </div>
        <div class="dekstop-version-body-section-courier">
          <div class="dekstop-version-title-courier">
            <p class="text-xs sm:text-sm text-black/80">Opsi Pengiriman</p>
            <div>
              <div class="dekstop-version-title-courier-option">
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
            <UButton
              variant="link"
              class="hover:no-underline"
              @click="openCourier = true"
            >
              <div class="dekstop-version-courier-warranty">
                <IconTruck />
                <span class="text-xs sm:text-sm">Garansi tiba: 13-15 Ags</span>
              </div>
              <div class="dekstop-version-courier-type">
                <span class="text-xs sm:text-sm text-gray-400">
                  dengan J&T Jemari
                </span>
                <UIcon name="i-heroicons:chevron-right" class="text-gray-400" />
              </div>
            </UButton>
          </div>
        </div>
      </div>

      <div class="dekstop-version-footer-section">
        <span class="text-xs sm:text-sm text-black/55">
          Total Pesanan ({{ 1 }} produk):
        </span>
        <span class="text-xs sm:text-sm text-primary font-medium">
          Rp{{ formatNumber(375000) }}
        </span>
      </div>
    </div>

    <UCard>
      <template #header>
        <div class="header-voucher-section">
          <div class="header-voucher-title"><IconVoucher /> Voucher Syopo</div>
          <UButton
            :padded="false"
            variant="link"
            color="blue"
            @click="openVoucher = true"
            class="text-xs sm:text-base"
          >
            Pilih Voucher
          </UButton>
        </div>
      </template>
      <template #default>
        <div class="body-coin-section">
          <div class="body-coin-section-title">
            <IconCoin />
            <p class="text-black/85 text-xs">Koin Syopo</p>
          </div>
          <p class="font-medium text-xs sm:text-sm text-gray-400">
            Koin tidak dapat ditukarkan
          </p>
          <div class="body-coin-section-value">
            <span class="text-gray-300 text-xs sm:text-base">[-Rp0]</span>
            <UCheckbox disabled />
          </div>
        </div>
      </template>
    </UCard>

    <div class="bg-white">
      <div class="payment-option-section">
        <span class="text-black/80 text-xs sm:text-base">Pilih Pembayaran</span>
        <URadioGroup
          v-model="paymentSelected"
          :options="paymentList"
          :ui-radio="{
            wrapper: 'items-center py-2',
            color: 'dark:bg-white dark:text-primary',
          }"
        >
          <template #label="{ option }">
            <div class="payment-option-section-items">
              <div class="payment-option-section-items-image">
                <img :src="option.image" />
              </div>
              <p class="font-normal text-xs sm:text-sm">{{ option.label }}</p>
            </div>
          </template>
        </URadioGroup>
      </div>

      <div class="price-footer-section">
        <table class="price-summary">
          <tbody>
            <tr>
              <td>
                <span class="text-xs sm:text-sm text-black/55">Subtotal untuk Produk</span>
              </td>
              <td class="text-xs sm:text-base text-right min-w-44 text-black/80">
                Rp{{ formatNumber(1000) }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="text-xs sm:text-sm text-black/55">Total Ongkos Kirim</span>
              </td>
              <td class="text-xs sm:text-base text-right min-w-44 text-black/80">
                Rp{{ formatNumber(1000) }}
              </td>
            </tr>
            <tr>
              <td><span class="text-xs sm:text-sm text-black/55">Biaya Layanan</span></td>
              <td class="text-xs sm:text-base text-right min-w-44 text-black/80">
                Rp{{ formatNumber(1000) }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="text-sm text-black/55">Total Pembayaran</span>
              </td>
              <td
                class="text-right min-w-44 text-black/80 font-semibold sm:font-normal text-xl sm:text-3xl text-primary"
              >
                Rp{{ formatNumber(1000) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="button-order-section">
        <UButton
          class="w-52 justify-center dark:text-white"
          @click="handlePayment"
        >
          Buat Pesanan
        </UButton>
      </div>
    </div>

    <ModalAddress v-model:open="openAddress" />
    <ModalCourier v-model:open="openCourier" />
    <ModalVoucher v-model="openVoucher" />
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

const router = useRouter();

const paymentSelected = ref("bni_va");
const paymentList = computed(() => [
  {
    value: "bni_va",
    label: "Bank BNI",
    image: "/images/logo-bni.webp",
  },
  {
    value: "qris",
    label: "QRIS",
    image: "/images/qris.png",
  },
]);

const openVoucher = ref(false);
const openAddress = ref(false);
const openCourier = ref(false);

function handlePayment() {
  // TODO: Hit API
  router.push("/checkout/payment/12312312");
}
</script>

<style scoped>
.main-container {
  @apply flex flex-col gap-2 sm:gap-5 py-2 sm:py-5;
}

.address-section-title {
  @apply flex gap-1 sm:gap-2 text-primary items-center;
}

.address-section-content {
  @apply flex gap-10 mt-5 items-center text-xs sm:text-base;
}

.mobile-version-main-section {
  @apply sm:hidden bg-white divide-y divide-dashed;
}

.mobile-version-header-title {
  @apply flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6;
}

.mobile-version-header-title-product {
  @apply flex-1;
}

.mobile-version-price-product-section {
  @apply flex sm:hidden justify-between w-full mt-4 gap-1.5;
}

.mobile-version-message-user-section {
  @apply flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-dashed bg-blue-50/20;
}

.mobile-version-message-user-section-input {
  @apply p-4 sm:p-6 flex items-center gap-4 w-full sm:w-[480px];
}

.mobile-version-courier {
  @apply flex justify-between items-center mb-2;
}

.mobile-version-courier-option {
  @apply flex items-center gap-1 text-green-700;
}

.mobile-version-order-section {
  @apply flex justify-end px-4 sm:px-6 py-4 items-center gap-2 bg-blue-50/20;
}

.desktop-version-main-section {
  @apply hidden sm:block bg-white divide-y divide-dashed;
}

.dekstop-version-header-title {
  @apply flex justify-between items-center;
}

.dekstop-version-header-title span:nth-child(n + 3) {
  @apply text-xs sm:text-sm font-normal text-right text-black/55;
}

.dekstop-version-header-product {
  @apply flex justify-between items-center gap-2 sm:gap-4;
}

.dekstop-version-header-product div:nth-child(n + 3) {
  @apply text-xs sm:text-sm font-medium text-right text-black/90;
}

.dekstop-version-header-product-title {
  @apply w-[33%] text-xs md:text-lg text-black/85 font-normal flex gap-2 items-center;
}

.dekstop-version-body-section {
  @apply flex divide-x divide-dashed bg-blue-50/20;
}

.dekstop-version-body-section-message-input {
  @apply flex gap-1.5 sm:gap-4 py-1.5 sm:py-4 px-1.5 sm:px-6 w-[200px] md:w-[480px];
}

.dekstop-version-body-section-courier {
  @apply flex-1 divide-y divide-dashed;
}

.dekstop-version-title-courier {
  @apply grid grid-cols-3 px-6 py-9 font-medium;
}

.dekstop-version-title-courier-option {
  @apply flex justify-between gap-1 sm:gap-2 items-center;
}

.dekstop-version-courier-warranty {
  @apply flex items-center gap-1 text-green-700;
}

.dekstop-version-courier-type {
  @apply flex items-center;
}

.dekstop-version-footer-section {
  @apply flex justify-end px-6 py-4 items-center gap-3 bg-blue-50/20;
}

.header-voucher-section {
  @apply flex justify-between gap-2;
}

.header-voucher-title {
  @apply flex gap-1.5 sm:gap-2 items-center font-normal text-xs sm:text-lg dark:text-black/85;
}

.body-coin-section {
  @apply flex gap-1.5 sm:gap-7 items-center;
}

.body-coin-section-title {
  @apply flex gap-1 sm:gap-2 items-center font-normal text-xs sm:text-lg;
}

.body-coin-section-value {
  @apply flex-1 flex justify-end items-center gap-2;
}

.payment-option-section {
  @apply flex p-6 gap-14;
}

.payment-option-section-items {
  @apply flex gap-2 sm:gap-4 items-center;
}

.payment-option-section-items-image {
  @apply w-9 sm:w-12 h-9 sm:h-12 border rounded-sm p-2 flex justify-center items-center;
}

.price-footer-section {
  @apply flex justify-end p-6 bg-yellow-50/30;
  @apply border-t border-gray-100;
}

.price-summary tr:not(:first-child) td {
  @apply py-1 sm:py-3;
}

.price-summary tr:first-child td {
  @apply py-1 sm:pb-3;
}
.price-summary tr:last-child td {
  @apply pb-0 pt-10 border-t border-dashed border-gray-100;
}

.button-order-section {
  @apply flex p-6 justify-end;
  @apply border-t border-gray-100 border-dashed;
  @apply bg-yellow-50/30;
}
</style>
