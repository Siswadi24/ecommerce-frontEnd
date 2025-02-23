<template>
  <div class="flex flex-col gap-3 md:gap-6 pb-6">
    <section class="banner-section">
      <UContainer>
        <FeatureHomepageCarousel :items="items" />
      </UContainer>
    </section>
    <section class="category-section">
      <UContainer>
        <div class="category-section-card">
          <div class="category-section-header">
            <h2>Kategori</h2>
          </div>
          <div class="category-section-content">
            <FeatureHomepageCategoryItem
              v-for="i in 20"
              :key="`item-${i}`"
              title="Elektronik Rumah Tangga"
              image="https://s3-alpha-sig.figma.com/img/edca/a35b/7f9aaa343632dc902fb8ab0e9fe7c42c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ptd~txrRdvsIPUMuF0vho8kVFTdv1MJ-FGYMFwTAUj85sRTLUQ0KSTZv1dtY2c49sHOJNg2dE9qx0-95DgG10NNGUGGF16gk3G1OT0KQZnFAcFMJw7A7w6~hZ~3kBRzjzgOXoHZl--tycmcgh~JecyfiRX~5RhhRz6~WA2AYZYJWzcHWEb19ftV1aKaQW9NWdgSGIOONRQ65iBpfovh~eyEbZVlpvNnPI1cApspWyVlUGszveXIlv578tVDXl1MkQ809HGZ4w4N0E7mvT5ExlxvzTZtGserszcEnB4Vq3uYCgHc5-BQBSVTx~RNpAwJ5pp6hkSSJJjLxkGIcVa14kw__"
            />
          </div>
        </div>
      </UContainer>
    </section>
    <section class="product-section">
      <UContainer>
        <div class="product-section-header">
          <h2>Rekomendasi</h2>
        </div>
        <div class="product-section-content">
          <BaseProductCard
            v-for="i in 20"
            :key="`product-${i}`"
            title="Kawabata Sepatu Sandal Kasual Slingback Mules Kawabata Sepatu Sandal
        Kasual Slingback Mules…"
            price="150000"
            image="https://s3-alpha-sig.figma.com/img/6cfd/a34d/e1ea9cc712058355bfb715d9424081d8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b31m2C~WBO7DoiVbiueyhLmiG3yiZc8eS5VLwBxIfxjsEc2KMInG-R7tmMMaDw7oCdVlzoLjyhfmtR6sjobG3un80Jj5tJguL8JLBobL5XBl3pRdF7uKnkeYw8aLNh44vPmFzkpJnGQwNb1BpIrghP~bUruDb-dESOuPnaR9MSMZvPQ77hZjCZa0rXIBQm--lzQxLssyhGYD2NPQ5NttrtFcsR4Epeo81gUSF3LesTHK3RemNn2~MYJKhxmRNqf7PrzUuCwvQT4scEHchOdLDY7u7fSA1dNWIUIwv2-oL3I7wXPtm-DLHoiFb~4z2CM~O25wZ~ABQlPEn8OrlQeoOQ__"
            :slug="`products-${i}`"
          />
        </div>
      </UContainer>
    </section>

    <UContainer>
      <UButton
        color="white"
        class="font-normal px-1 md:px-28 hover:text-white hover:bg-primary dark:hover:text-white dark:hover:bg-primary"
      >
        Login Untuk Melihat Produk Lain
      </UButton>
    </UContainer>
  </div>
</template>

<script setup>
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<style scoped>
.banner-section {
  @apply bg-white py-3 md:py-7;
}

.category-section-card {
  @apply bg-white;
}

.category-section-header {
  @apply p-5;
  @apply border-b border-black/5;
}

.category-section-header h2 {
  @apply text-base md:text-xl text-black/55 font-medium;
  @apply uppercase;
}

.category-section-content {
  @apply grid grid-cols-3 sm:grid-cols-6 md:grid-cols-10;
}

.product-section-header {
  @apply bg-white;
  @apply border-b-4 border-primary;
  @apply p-5;
}

.product-section-header h2 {
  @apply text-base md:text-xl text-primary font-medium;
  @apply text-center uppercase;
}

.product-section-content {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 md:gap-3;
  @apply mt-3;
}
</style>