<template>
  <header class="header-seller">
    <UButton
      :padded="false"
      class="md:hidden top-4 left-4 bg-primary text-white p-1 rounded"
      @click="$emit('toggle-sidebar')"
    >
      <UIcon name="i-heroicons:bars-3-20-solid" class="dark:text-white" />
    </UButton>

    <UBreadcrumb :links="breadCrumb" :ui="ui" />
    <UDropdown :items="profileItems">
      <template #default="{ open }">
        <div class="flex gap-1 md:gap-2 items-center">
          <UAvatar :alt="dataDummy.seller.username" />
          <p>{{ dataDummy.seller.username }}</p>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="w-4 md:w-4 h-4 md:h-4 transition-all"
            :class="[open && 'rotate-180']"
          />
        </div>
      </template>
    </UDropdown>
  </header>
</template>

<script setup>
defineEmits(["toggle-sidebar"]);

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

const route = useRoute();
const breadCrumb = computed(() => {
  const defaultBreadCrumb = [{ label: "Beranda" }];

  if (!route.meta?.breadCrumb || !Array.isArray(route.meta?.breadCrumb)) {
    return defaultBreadCrumb;
  }

  return [...defaultBreadCrumb, ...route.meta?.breadCrumb];
});

const profileItems = [
  [
    {
      label: "Switch to Customer",
      icon: "i-heroicons-arrow-path",
    },
    {
      label: "Logout",
      icon: "i-heroicons-arrow-right-on-rectangle",
    },
  ],
];

const ui = {
  active: "dark:text-slate-800 text-slate-800",
  inactive: "text-black/50",
  base: "font-normal text-xs sm:text-sm md:text-lg",
};
</script>

<style scoped>
.header-seller {
  @apply bg-white dark:bg-white px-1 md:px-4 py-1 md:py-3;
  @apply shadow;
  @apply fixed top-0 left-0 right-0 z-50;
  @apply flex justify-between items-center gap-1 md:gap-2;
  @apply text-xs md:text-base;
}
</style>