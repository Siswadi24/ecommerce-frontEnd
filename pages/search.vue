<template>
  <UContainer id="search-section">
    <div class="search-filter">
      <div class="filter-title">
        <IconFilter />
        <h2>Filter</h2>
      </div>
      <div class="filter-item">
        <h3 class="dark:text-black">Batas Harga</h3>
        <div class="flex gap-1 sm:gap-2 items-center">
          <UInput
            type="Number"
            placeholder="Rp MIN"
            :ui="{
              color: {
                white: {
                  outline:
                    'bg-white dark:bg-white text-gray-900 dark:text-text-black',
                },
              },
            }"
          />
          <div class="h-[1px] w-10 bg-gray-300" />
          <UInput
            type="Number"
            placeholder="Rp MAX"
            :ui="{
              color: {
                white: {
                  outline:
                    'bg-white dark:bg-white text-gray-900 dark:text-text-black',
                },
              },
            }"
          />
        </div>
        <UButton block class="py-1 sm:py-2">TERAPKAN</UButton>
      </div>
      <hr />
      <div class="filter-item">
        <h3 class="dark:text-black">Berdasarkan Kategori</h3>
        <div class="flex flex-col gap-1 sm:gap-2">
          <UCheckbox label="Kategori 1" />
          <UCheckbox label="Kategori 2" />
          <UCheckbox label="Kategori 3" />
          <UCheckbox label="Kategori 4" />
        </div>
        <UButton block class="py-1 sm:py-2">TERAPKAN</UButton>
      </div>
    </div>
    <div class="search-result">
      <div class="search-keyword">
        <IconLamp />
        <p>Hasil Pencarian Untuk '<span>Baju Hitam</span>'</p>
      </div>
      <div class="search-sort">
        <div class="search-sort-control">
          <p>Urutkan</p>
          <UButton class="px-1.5 md:px-6">Termurah</UButton>
          <UButton color="white" class="px-1.5 md:px-6">Termahal</UButton>
        </div>
        <div class="search-sort-pagination">
          <p><span>1</span>/17</p>
          <div>
            <UButton
              icon="i-heroicons:chevron-left-20-solid"
              color="gray"
              size="xs"
              class="dark:bg-gray-50"
              disabled
            />
            <UButton
              icon="i-heroicons:chevron-right-20-solid"
              color="gray"
              size="xs"
              class="dark:bg-white/5 bg-black/5"
            />
          </div>
        </div>
      </div>
      <div class="search-content">
        <BaseProductCard
          v-for="i in 20"
          :key="`product-${i}`"
          title="Kawabata Sepatu Sandal Kasual Slingback Mules Kawabata Sepatu Sandal
        Kasual Slingback Mules…"
          price="150000"
          sale="20"
          image="https://s3-alpha-sig.figma.com/img/6cfd/a34d/e1ea9cc712058355bfb715d9424081d8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b31m2C~WBO7DoiVbiueyhLmiG3yiZc8eS5VLwBxIfxjsEc2KMInG-R7tmMMaDw7oCdVlzoLjyhfmtR6sjobG3un80Jj5tJguL8JLBobL5XBl3pRdF7uKnkeYw8aLNh44vPmFzkpJnGQwNb1BpIrghP~bUruDb-dESOuPnaR9MSMZvPQ77hZjCZa0rXIBQm--lzQxLssyhGYD2NPQ5NttrtFcsR4Epeo81gUSF3LesTHK3RemNn2~MYJKhxmRNqf7PrzUuCwvQT4scEHchOdLDY7u7fSA1dNWIUIwv2-oL3I7wXPtm-DLHoiFb~4z2CM~O25wZ~ABQlPEn8OrlQeoOQ__"
        />
      </div>
      <div class="flex justify-center mt-1 sm:mt-4 md:mt-8">
        <UPagination
          v-model="page"
          :page-count="5"
          :total="items.length"
          :inactive-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-2 md:px-3 py-1',
          }"
          :active-button="{
            class: 'px-2 md:px-3 py-1',
          }"
          :prev-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-2 md:px-3 py-1',
          }"
          :next-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-2 md:px-3 py-1',
          }"
          :ui="{
            wrapper: 'space-x-1 sm:space-x-2 md:space-x-4',
            base: 'text-xs sm:text-sm md:text-base lg:text-xl font-light dark:font-light',
            default: {
                prevButton: {
                    icon: 'i-heroicons:chevron-left'
                },
                nextButton: {
                    icon: 'i-heroicons:chevron-right'
                }
            }
          }"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const page = ref(1);
const items = ref(Array(55));
</script>

<style scoped>
#search-section {
  @apply py-3 md:py-6 flex gap-2 md:gap-4;
}

.search-filter {
  @apply flex flex-col gap-1 sm:gap-3 md:gap-5;
  @apply w-40 sm:w-48;
}

.filter-title {
  @apply flex gap-1 md:gap-2 items-center;
}

.filter-title h2 {
  @apply text-xs md:text-base font-bold text-black/80;
  @apply uppercase;
}

.filter-item {
  @apply flex flex-col gap-2 sm:gap-5;
}

.filter-item h3 {
  @apply text-xs sm:text-sm text-black/80 font-medium;
}

.search-result {
  @apply flex-1;
}

.search-keyword {
  @apply flex gap-1 md:gap-2 items-center;
  @apply text-gray-600;
}

.search-keyword span {
  @apply text-primary;
}

.search-sort {
  @apply flex items-center gap-1 sm:gap-2 justify-between;
  @apply px-1.5 md:px-5 py-2;
  @apply bg-black/5;
  @apply mt-2 sm:mt-4;
}

.search-sort-control {
  @apply flex items-center gap-1 sm:gap-2 md:gap-3;
}

.search-sort-control p {
  @apply text-xs sm:text-sm text-gray-600 font-normal;
}

.search-sort-pagination {
  @apply flex items-center gap-1 sm:gap-2 md:gap-3;
}

.search-sort-pagination p {
  @apply text-xs sm:text-sm text-black/80 font-normal;
}

.search-sort-pagination span {
  @apply text-primary;
}

.search-content {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-1.5 md:gap-2;
  @apply mt-3;
}
</style>