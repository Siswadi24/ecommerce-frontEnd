<template>
  <UContainer class="main-container">
    <UCard>
      <div class="cart-header">
        <div class="w-[50%]">Produk</div>
        <div class="text-center w-[15%]">Harga Satuan</div>
        <div class="text-center w-[15%]">Kuantitas</div>
        <div class="text-center w-[15%]">Total Harga</div>
        <div class="text-center w-[5%]">Aksi</div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h3 class="text-sm text-black/85 font-medium">Produk Name</h3>
      </template>
      <div class="cart-items">
        <div v-for="i in 5" :key="`product-${i}`" class="cart-items-product">
          <div class="w-[50%]">
            <div class="cart-items-product-name">
              <img
                src="https://picsum.photos/1920/1080?random=1"
                class="aspect-[1/1] w-20"
                alt="product"
              />
              <p class="line-clamp-2 text-black/85">
                Kaos Game Over Pixelo - T-shirt / Tees Gamer PS Nintendo Game
                Retro & Kaos 90an
              </p>
              <div class="cart-items-product-variations">
                <p>Variasi:</p>
                <p>Hitam, XXXL</p>
              </div>
            </div>
          </div>
          <div class="text-center w-[15%]">Rp {{ formatNumber(195000) }}</div>
          <div class="flex justify-center w-[15%]">
            <BaseInputQuantity />
          </div>
          <div class="text-center w-[15%] text-primary">
            {{ formatNumber(195000) }}
          </div>
          <div class="text-center w-[5%]">
            <UButton variant="link" color="black" class="dark:text-black">
              Hapus
            </UButton>
          </div>
        </div>
      </div>
    </UCard>

    <UCard
      :ui="{
        header: {
          padding: paddingCheckoutFooter,
        },
        body: {
          padding: paddingCheckoutFooter,
        },
        footer: {
          padding: paddingCheckoutFooter,
        },
        divide: 'divide-dashed',
      }"
    >
      <template #header>
        <div class="header-voucher-section">
          <div class="header-voucher-text-section">
            <IconVoucher />
            <p class="dark:text-black/85">Voucher Putra's Store</p>
          </div>
          <UButton variant="link" color="blue" @click="openVoucher = true">
            Gunakan/masukan voucher
          </UButton>
        </div>
      </template>

      <template #default>
        <div class="voucher-coin-section">
          <div class="voucher-coin-item-section">
            <UCheckbox>
              <template #label>
                <div class="voucher-coin-icon-section">
                  <IconCoin />
                  <span class="dark:text-black/85 font-medium"
                    >Koin Putra's Store</span
                  >
                </div>
              </template>
            </UCheckbox>
            <span class="font-medium text-xs sm:text-sm text-gray-500"
              >Saldo Koin Tidak Mencukupi
            </span>
            <div class="voucher-coin-amount-section">
              <span class="text-gray-300">Rp 0</span>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="footer-price-result-section">
          <div class="footer-price-result-section-header">
            <div>
              <div class="footer-price-product">
                <span class="dark:text-black/85">Total ({{ 1 }} produk):</span>
                <span class="text-primary font-normal text-xs md:text-2xl">
                  {{ formatNumber(195000) }}
                </span>
              </div>
              <div class="footer-price-product-discount">
                <span class="dark:text-black/85">Hemat</span>
                <span class="text-primary">104RB</span>
              </div>
            </div>
            <UButton
              class="px-9 min-w-52 justify-center"
              @click="handleCheckout"
            >
              Checkout
            </UButton>
          </div>
        </div>
      </template>
    </UCard>

    <ModalVoucher v-model="openVoucher" />
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  header: {
    showProfile: true,
    showSearch: true,
    title: "Keranjang Belanja",
  },
});

const openVoucher = ref(false);

const paddingCheckoutFooter = "py-1.5 px-2 sm:py-2 sm:px-4 md:py-3 md:px-7";

const router = useRouter();

function handleCheckout() {
  //Hit API
  console.log("To Halaman Checkout");
  router.push("/checkout");
}
</script>

<style scoped>
.main-container {
  @apply py-5;
  @apply flex flex-col gap-5;

  @apply min-w-[800px];
}

.cart-header {
  @apply flex items-center;
  @apply text-gray-500 text-xs sm:text-sm font-normal;
}

.cart-items {
  @apply grid grid-cols-1 divide-y;
  @apply overflow-x-auto;
}

.cart-items-product {
  @apply flex items-center gap-1.5 sm:gap-2.5;
  @apply text-gray-500 text-xs sm:text-sm font-normal;
  @apply py-2.5 sm:py-5;
}

.cart-items-product-name {
  @apply flex gap-3 text-xs sm:text-sm items-center;
}

.cart-items-product-variations {
  @apply w-40;
}

.header-voucher-section {
  @apply flex justify-end gap-40;
}

.header-voucher-text-section {
  @apply flex gap-1 items-center;
  @apply font-medium;
}

.voucher-coin-section {
  @apply flex justify-end;
}

.voucher-coin-item-section {
  @apply flex items-center gap-5;
}

.voucher-coin-icon-section {
  @apply flex gap-1.5 sm:gap-2;
}

.voucher-coin-amount-section {
  @apply flex flex-1 justify-end;
  @apply min-w-48;
}

.footer-price-result-section {
  @apply flex justify-end items-center;
}

.footer-price-result-section-header {
    @apply flex gap-4;
}

.footer-price-product {
  @apply flex items-center gap-1;
}

.footer-price-product-discount {
  @apply flex gap-6 text-sm font-normal justify-end;
}
</style>