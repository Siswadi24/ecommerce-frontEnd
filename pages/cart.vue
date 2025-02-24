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
</style>