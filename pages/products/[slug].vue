<template>
  <UContainer as="section" class="main-container">
    <UBreadcrumb :links="links" :ui="uiBreadcrumb" />
    <UCard>
      <div class="product-briefing">
        <div class="product-images">
          <FeatureProductDetailCarousel :items="items" />
        </div>
        <div class="product-information">
          <div class="product-title">
            <h2>{{ dataDummy.name }}</h2>
            <div class="product-summary">
              <div class="product-summary-item">
                <span>{{ dataDummy.rating }}</span>
                <BaseRating :model-value="dataDummy.rating" disabled />
              </div>
              <div class="product-summary-item">
                <span>{{ dataDummy.rating_count }}</span>
                <span class="product-summary-item-description">Penilaian</span>
              </div>
              <div class="product-summary-item">
                <span>{{ dataDummy.sale_count }}</span>
                <span class="product-summary-item-description">Terjual</span>
              </div>
            </div>
          </div>
          <div class="product-price">
            <p class="text-gray-400 line-through font-normal">
              Rp{{ formatNumber(249000) }}
            </p>
            <p class="text-primary font-normal text-sm md:text-3xl">
              Rp{{ formatNumber(125000) }}
            </p>
            <UBadge class="text-white dark:text-white">50% Off</UBadge>
          </div>
          <div class="product-variant">
            <div class="product-variant-items">
              <div
                v-for="variation in dataDummy.variations"
                :key="variation.name"
                class="flex gap-2 md:gap-2 items-center"
              >
                <p class="w-28 text-black/55 text-xs md:text-sm">
                  {{ variation.name }}
                </p>
                <div class="product-variant-value">
                  <UButton
                    v-for="values in variation.values"
                    :key="`${variation.name}-${values}`"
                    color="white"
                    :ui="{
                      base: 'min-w-2.5 md:min-w-20 justify-center',
                      padding: {
                        sm: 'px-1.5 py-2',
                        md: 'px-2 py-2',
                      },
                    }"
                  >
                    {{ values }}
                  </UButton>
                </div>
              </div>
            </div>
          </div>
          <div class="product-kuantitas">
            <p class="w-28 text-black/55 text-xs md:text-sm">Kuantitas</p>
            <BaseInputQuantity v-model="quantity" />
          </div>
          <UButton
            variant="soft"
            :ui="{
              variant: {
                soft: 'dark:text-{color}-500 dark:bg-{color}-50 dark:hover:bg-primary-50',
              },
            }"
            class="mt-6 md:mt-6"
          >
            <IconCartPlus />
            Masukan Keranjang
          </UButton>
          <hr class="my-5" />
          <div class="flex gap-5">
            <div class="flex gap-2">
              <img src="~/assets/images/garansi.png" />
              <p class="text-black/80 text-xs md:text-sm">Garansi Putra's</p>
            </div>
            <p class="text-black/55 text-xs md:text-sm">
              Dapatkan barang pesananmu atau uang kembali
            </p>
          </div>
        </div>
      </div>
    </UCard>
    <UCard>
      <div class="product-seller">
        <div class="product-seller-avatar">
          <UAvatar :alt="dataDummy.seller.store_name" size="3xl" />
          <div>
            <h3 class="dark:text-black/80">
              {{ dataDummy.seller.store_name }}
            </h3>
            <UButton
              color="white"
              size="xs"
              class="text-primary mt-2"
              :to="`/shop/${dataDummy.seller.username}`"
            >
              <IconShop />
              Lihat Toko
            </UButton>
          </div>
        </div>
        <div class="w-[1px] bg-slate-200" />
        <div class="product-seller-info">
          <div class="product-seller-info-rating">
            <p class="text-black/40 w-36">Penilaian</p>
            <p class="text-primary">{{ dataDummy.seller.rating_count }}</p>
          </div>
          <div class="product-seller-info-joined">
            <p class="text-black/40 w-36">Bergabung</p>
            <p class="text-primary">{{ dataDummy.seller.join_date }}</p>
          </div>
          <div class="product-seller-info-product-count">
            <p class="text-black/40 w-36">Produk</p>
            <p class="text-primary">{{ dataDummy.seller.product_count }}</p>
          </div>
        </div>
      </div>
    </UCard>
    <UCard>
      <div class="spesification-product-section">
        <div class="spesification-product-section-header-title">
          <h3>Spesifikasi Produk</h3>
        </div>
        <div class="spesification-product-section-content-items">
          <div class="spesification-product-section-content-items-list">
            <p>Kategori</p>
            <div>
              <UBreadcrumb
                :links="[
                  {
                    label: dataDummy.category.parent.name,
                    to: '/',
                  },
                  {
                    label: dataDummy.category.name,
                    to: `/categories/${dataDummy.category.parent.slug}/${dataDummy.category.slug}`,
                  },
                ]"
                :ui="{
                  ...uiBreadcrumb,
                  active: 'dark:text-[#0055AA] text-[#0055AA]',
                  li: 'text-xs md:text-sm',
                }"
              />
            </div>
          </div>
          <div class="spesification-product-section-content-items-list">
            <p>Stok</p>
            <div>{{ dataDummy.stock }}</div>
          </div>
          <div class="spesification-product-section-content-items-list">
            <p>Dikirim dari</p>
            <div>{{ dataDummy.seller.send_from.city.name }}</div>
          </div>
        </div>
        <div class="spesification-product-section-header-title">
          <h3>Deskripsi Produk</h3>
        </div>
        <div
          v-text="dataDummy.description"
          class="text-xs md:text-sm text-black/80 whitespace-pre-line"
        />
      </div>
    </UCard>
    <UCard>
      <h3 class="text-lg font-normal text-black/80">Penilaian Produk</h3>
      <div class="reviews-product-section">
        <div class="reviews-product-rating-star">
          <p class="text-primary text-sm md:text-lg">
            <span class="text-xl md:text-3xl">{{ dataDummy.rating }}</span> dari
            5
          </p>
          <BaseRating
            :model-value="dataDummy.rating"
            disabled
            size="sm"
            class="mt-2"
          />
        </div>
        <div class="reviews-product-rating-filter">
          <UButton
            variant="outline"
            size="xs"
            class="min-w-24 text-xs md:text-sm justify-center dark:hover:bg-primary-50"
          >
            Semua
          </UButton>
          <div class="reviews-product-filter-category">
            <UButton
              v-for="(i, index) in 5"
              :key="`rating-${i}`"
              color="white"
              size="xs"
              class="min-w-24 text-xs md:text-sm justify-center dark:hover:bg-primary-50"
            >
              {{ i }} Bintang ({{ dataDummy.review_summary[index + 1] || 0 }})
            </UButton>
          </div>
          <UButton
            color="white"
            size="xs"
            class="min-w-24 text-xs md:text-sm justify-center"
          >
            Dengan Komentar ({{ dataDummy.review_summary.with_description }})
          </UButton>
          <UButton
            color="white"
            size="xs"
            class="min-w-24 text-xs md:text-sm justify-center"
          >
            Dengan Media ({{ dataDummy.review_summary.with_attachment }})
          </UButton>
        </div>
      </div>
      <div class="reviews-comment-section">
        <div v-for="i in 5" :key="`review-${i}`" class="flex gap-3 py-4">
          <UAvatar alt="Irsyaad" size="lg" />
          <div class="flex-1">
            <p class="dark:text-black/80">Irsyaad</p>
            <BaseRating :model-value="4" disabled class="mt-1" />
            <div class="reviews-comment-date-variations-section">
              <p>2024-04-10 05:27</p>
              |
              <p>Variasi: Vermont Camel, L</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end pt-5">
        <BasePagination v-model="page" :total="reviews.length" />
      </div>
    </UCard>
    <div class="product-other-seller-section">
      <div class="product-other-seller-section-header">
        <h4 class="uppercase text-black/55 font-medium">
          Produk lain dari toko ini
        </h4>
        <UButton
          variant="link"
          class="font-thin"
          :padded="false"
          :to="`/shop/${dataDummy.seller.username}`"
        >
          Lihat Semua <UIcon name="i-heroicons:chevron-right" />
        </UButton>
      </div>
      <div class="product-other-seller-section-content">
        <BaseProductCard
          v-for="product in dataDummy.other_product"
          :key="`product-${product.uuid}`"
          :title="product.name"
          :price="product.price"
          :image="product.image_url"
          :slug="product.slug"
          :sale="product.sale_count"
          :discount="product.price_discount_percentage"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const page = ref(1);
const reviews = ref(Array(55));

//Quantity Default
const quantity = ref(1);

//data dummy sementara
const dataDummy = computed(() => {
  return {
    uuid: "ebfbf3ac-8010-11ef-9abb-3dda8f3f8c01",
    name: "[FUKUSTUDIO] Vermont Polo Knit Shirt | Kemeja Polo Lengan Pendek Premium | Kaos Polo Knit Kerah | Polo Shirt Pria Premium",
    slug: "produk-100",
    price: 100000,
    price_sale: 80000,
    rating: 4,
    rating_count: 2,
    sale_count: 0,
    price_discount_percentage: 20,
    stock: 68,
    category: {
      slug: "makanan",
      name: "Makanan",
      description: null,
      parent: {
        slug: "makanan-minuman",
        name: "Makanan & Minuman",
        description: null,
      },
    },
    description:
      "Vermont Polo Shirt \n Soft hand-feel and breathable characteristic \n\n Material : Grade A Premium Knit \n Model menggunakan size L \n Tinggi : 174 cm | Berat : 67 kg",
    weight: 9,
    length: 34,
    width: 34,
    height: 97,
    video_url: "http://localhost:8000/storage/attachment.mp4",
    seller: {
      username: "azizah",
      store_name: "Azizah Store",
      photo_url:
        "http://localhost:8000/storage/user-photo/iAdzpaTT8wNzF58ZQ67Ys4YwTzFnQHW3tLFY3msm.jpg",
      product_count: 33,
      rating_count: 66,
      join_date: "2 weeks ago",
      send_from: {
        uuid: "8c438746-79c5-11ef-b707-97a05ceb87e2",
        is_default: true,
        receiver_name: "Azis Hapidin",
        receiver_phone: "08888",
        city: {
          uuid: "ee8eb26c-78fe-11ef-bd77-9e4478916c69",
          province: {
            uuid: "ee8d857c-78fe-11ef-bd77-9e4478916c69",
            name: "Bali",
          },
          external_id: 128,
          name: "Kabupaten Gianyar",
        },
        district: "Bojong",
        postal_code: "43222",
        detail_address: "Jl. ABC No. 123",
        address_note: "Dekat tugu pahlawan",
        type: "home",
      },
    },
    images: [
      "http://localhost:8000/storage/attachment2.jpg",
      "http://localhost:8000/storage/attachment4.jpg",
      "http://localhost:8000/storage/attachment1.jpg",
      "http://localhost:8000/storage/attachment3.jpg",
    ],
    variations: [
      {
        name: "Ukuran",
        values: ["M", "L", "XL", "XXL", "XXXL", "XXXXL"],
      },
      {
        name: "Warna",
        values: ["Hitam", "Kuning", "Biru", "Merah", "Putih", "Abu-Abu"],
      },
    ],
    review_summary: {
      1: 0,
      2: 15,
      3: 10,
      4: 0,
      5: 1,
      with_attachment: 2,
      with_description: 2,
    },
    other_product: [
      {
        uuid: "ebd71974-8010-11ef-9abb-3dda8f3f8c01",
        name: "Produk 26",
        slug: "produk-26",
        price: 86971,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment1.jpg",
        stock: 66,
      },
      {
        uuid: "ebd984de-8010-11ef-9abb-3dda8f3f8c01",
        name: "Produk 31",
        slug: "produk-31",
        price: 95979,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment1.jpg",
        stock: 79,
      },
      {
        uuid: "ebe6e782-8010-11ef-9abb-3dda8f3f8c01",
        name: "Produk 58",
        slug: "produk-58",
        price: 51470,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment4.jpg",
        stock: 59,
      },
      {
        uuid: "ebec2e90-8010-11ef-9abb-3dda8f3f8c01",
        name: "Produk 68",
        slug: "produk-68",
        price: 37069,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment3.jpg",
        stock: 75,
      },
      {
        uuid: "ebf0821a-8010-11ef-9abb-3dda8f3f8c01",
        name: "Produk 77",
        slug: "produk-77",
        price: 92435,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment1.jpg",
        stock: 95,
      },
      {
        uuid: "ebf563c0-8010-11ef-9abb-3dda8f3f8c01",
        name: "Produk 87",
        slug: "produk-87",
        price: 65521,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment2.jpg",
        stock: 12,
      },
    ],
  };
});

//link breadcrumb
const links = computed(() => [
  {
    label: "Syopo",
    to: "/",
  },
  {
    label: dataDummy.value.category.parent.name,
    to: `/`,
  },
  {
    label: dataDummy.value.category.name,
    to: `/categories/${dataDummy.value.category.parent.slug}/${dataDummy.value.category.slug}`,
  },
  {
    label: dataDummy.value.name,
  },
]);

//ui breadcrumb
const uiBreadcrumb = {
  active: "dark:text-black/80 text-black/80",
  inactive: "dark:text-[#0055AA] text-[#0055AA]",
  li: "dark:text-black/80 text-black/80",
  base: "font-normal",
};

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<style scoped>
.main-container {
  @apply flex flex-col gap-1.5 md:gap-5 py-1.5 md:py-5;
}

.product-briefing {
  @apply flex gap-8;
}

.product-information {
  @apply flex-1;
}

.product-title h2 {
  @apply dark:text-black;
}

.product-summary {
  @apply flex gap-1 sm:gap-2 md:gap-4;
  @apply mt-1 md:mt-2;
  @apply divide-x;
}

.product-summary > div:not(:first-child) {
  @apply pl-1.5 md:pl-4;
}

.product-summary-item {
  @apply flex gap-1 md:gap-2 items-center;
}

.product-summary-item span {
  @apply underline underline-offset-4;
  @apply text-primary;
}

span.product-summary-item-description {
  @apply no-underline;
  @apply text-black/80 text-[10px] md:text-sm;
}

.product-price {
  @apply flex gap-2 md:gap-4 items-center;
  @apply my-2 md:my-3;
  @apply bg-gray-50;
  @apply p-2 md:p-4;
}

.product-variant-items {
  @apply flex flex-col gap-6 sm:gap-6 md:gap-6;
}

.product-variant-value {
  @apply flex flex-wrap gap-1.5 sm:gap-2;
}

.product-kuantitas {
  @apply flex gap-3 md:gap-3 items-center mt-6 sm:mt-6 md:mt-6;
}

.product-seller {
  @apply flex gap-1.5 md:gap-6 items-stretch;
}

.product-seller-avatar {
  @apply flex gap-6 items-center w-96;
}

.product-seller-info {
  @apply grid grid-cols-2 items-center flex-1;
}

.product-seller-info-rating {
  @apply flex gap-2 text-sm;
}

.product-seller-info-joined {
  @apply flex gap-2 text-sm;
}

.product-seller-info-product-count {
  @apply flex gap-2 text-sm;
}

.spesification-product-section {
  @apply flex flex-col gap-6;
}

.spesification-product-section-header-title {
  @apply bg-gray-50;
  @apply p-3;
}

.spesification-product-section-header-title h3 {
  @apply text-lg font-normal text-black/80 dark:text-black/80;
}

.spesification-product-section-content-items {
  @apply flex flex-col gap-4;
}

.spesification-product-section-content-items-list {
  @apply flex gap-2;
}

.spesification-product-section-content-items-list > p {
  @apply text-black/40 text-xs md:text-sm w-40;
}

.spesification-product-section-content-items-list > div {
  @apply text-xs md:text-sm font-normal text-black;
}

.reviews-product-section {
  @apply mt-3;
  @apply border border-primary-100/80 bg-primary-50/30 rounded-sm p-3 md:p-8 flex gap-8 items-center;
}

.reviews-product-rating-star {
  @apply flex flex-col items-center;
}

.reviews-product-rating-filter {
  @apply flex flex-wrap gap-2 items-center;
}

.reviews-product-filter-category {
  @apply flex flex-row-reverse gap-2;
}

.reviews-comment-section {
  @apply flex flex-col;
  @apply mt-1;
  @apply divide-y;
}

.reviews-comment-date-variations-section {
  @apply flex gap-1;
  @apply mt-0.5;
  @apply text-black/55 text-xs;
}

.product-other-seller-section {
  @apply flex flex-col gap-1.5 md:gap-4 mt-2;
}

.product-other-seller-section-header {
  @apply flex justify-between gap-2 items-center;
}

.product-other-seller-section-content {
  @apply grid grid-cols-6 gap-1.5 md:gap-3;
}
</style>