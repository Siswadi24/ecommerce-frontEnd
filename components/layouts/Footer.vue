<template>
    <footer class="footer">
        <UContainer class="footer-container">
            <div class="footer-top">
                <div>
                    <h3>Layanan Pelanggan</h3>
                    <nav>
                        <ul>
                            <li v-for="(layanan, index) in layananPelanggan" :key="`${layanan}-${index}`">
                                <UButton variant="link" :padded="false" size="xs" class="footer-text">
                                    {{ layanan }}
                                </UButton>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>Jelajahi Putra's Store</h3>
                    <nav>
                        <ul>
                            <li v-for="jelajah in jelajahi" :key="jelajah">
                                <UButton variant="link" :padded="false" size="xs" class="footer-text">
                                    {{ jelajah }}
                                </UButton>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div>
                        <h3>Pembayaran</h3>
                        <div class="flex flex-wrap gap-2">
                            <div class="footer-item">
                                <img src="~/assets/images/seabank.png" alt="gambar SEABANK">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/bca.png" alt="gambar BCA">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/bni.png" alt="gambar BNI">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/bri.png" alt="gambar BRI">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/bsi.png" alt="gambar BSI">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/mandiri.png" alt="gambar MANDIRI">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/permata.png" alt="gambar PERMATA">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/alfamart.png" alt="gambar ALFAMART">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/cimb.png" alt="gambar CIMB">
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 md:mt-6">
                        <h3>Pengiriman</h3>
                        <div class="flex flex-wrap gap-2">
                            <div class="footer-item">
                                <img src="~/assets/images/jne.png" alt="gambar JNE">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/jnt.png" alt="gambar JNT">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/ninja.png" alt="gambar NINJA">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/sicepat.png" alt="gambar SICEPAT">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/gosend.png" alt="gambar GOSEND">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/spx.png" alt="gambar SPX">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/pos.png" alt="gambar POS">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/IdExpress.png" alt="gambar ID EXPRESS">
                            </div>
                            <div class="footer-item">
                                <img src="~/assets/images/grab.png" alt="gambar GRAB EXPRESS">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Ikuti Kami</h3>
                        <nav>
                            <ul>
                                <li>
                                    <UButton variant="link" :padded="false" size="xs" class="footer-text">
                                        <template #leading>
                                            <img src="~/assets/images/facebook.png" alt="Faceebok">
                                        </template>
                                        Facebook
                                    </UButton>
                                </li>
                                <li>
                                    <UButton variant="link" :padded="false" size="xs" class="footer-text">
                                        <template #leading>
                                            <img src="~/assets/images/instagram.png" alt="Instagram">
                                        </template>
                                        Instagram
                                    </UButton>
                                </li>
                                <li>
                                    <UButton variant="link" :padded="false" size="xs" class="footer-text">
                                        <template #leading>
                                            <img src="~/assets/images/twitter.png" alt="Twitter">
                                        </template>
                                        Twitter
                                    </UButton>
                                </li>
                                <li>
                                    <UButton variant="link" :padded="false" size="xs" class="footer-text">
                                        <template #leading>
                                            <img src="~/assets/images/linkedin.png" alt="Linkedin">
                                        </template>
                                        LinkedIn
                                    </UButton>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="mt-3 md:mt-6">
                        <h3>Keamanan</h3>
                        <div class="flex flex-wrap gap-2">
                            <div class="footer-item size-lg">
                                <img src="~/assets/images/certified.png" alt="gambar CERTIFIED">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Dowload Aplikasi Kami</h3>
                    <div class="flex gap-1 md:gap-3">
                        <img src="~/assets/images/qrcode.png" alt="">
                        <div class="flex flex-col gap-1 md:gap-2">
                            <img src="~/assets/images/playstore.png" alt="Google Play">
                            <img src="~/assets/images/appstore.png" alt="App Store">
                            <img src="~/assets/images/appgalery.png" alt="App Galery">
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-text">© Putra's {{ YearCopyright }}. Hak Cipta Dilindungi</p>
                <div class="flex">
                    <span class="footer-text">Negara:</span>
                    <div class="sm:grid grid-cols-2 lg:flex divide-x divide-black/20">
                        <UButton v-for="country in country" :key="country" variant="link" :padded="false" class="footer-text px-1">
                            {{ country }}
                        </UButton>
                    </div>
                </div>
            </div>
        </UContainer>
    </footer>
</template>

<script setup>
const YearCopyright = new Date().getFullYear()

const layananPelanggan = [
    'Bantuan',
    'Metode Pembayaran',
    'IbooyyPay',
    'Koin Putra\'s',
    'Lacak Pesanan Pembeli',
    'Lacak Pengiriman Penjual',
    'Gratis Ongkir',
    'Pengembalian Barang dan Dana',
    'Garansi',
    'Hubungi Kami'
]

const jelajahi = [
    'Tentang Kami',
    'Karir',
    'Kebijakan Putra\'s Store',
    'Kebijakan Privasi',
    'Blog',
    'Putra\'s Mall',
    'Seller Center',
    'Flash Sale',
    'Kontak Media',
    'Putra\'s Afiliate',
]

const country = [
    'Indonesia',
    'Malaysia',
    'Thailand',
    'Vietnam',
    'Singapore',
    'Timor Leste',
    'Brunei Darussalam',
    'Thailand',
    'China',
]
</script>

<style scoped>
.footer {
    @apply border-t-4 border-primary;
    @apply bg-gray-50;
    @apply text-black;
}

.footer-container {
    @apply flex flex-col;
}

.footer-top {
    @apply grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5;
    @apply pt-10 pb-8;
    @apply border-b;
}

.footer h3 {
    @apply font-bold text-xs;
    @apply mt-5 md:mb-5;
}

.footer-text {
    @apply text-xs text-black/65;
    @apply font-normal;
}

.footer-item {
    @apply w-[60px] h-[30px];
    @apply bg-white rounded-sm p-1 shadow;
}

.footer-item.size-lg {
    @apply w-[112px] h-[52px];
}

.footer-bottom {
    @apply sm:grid grid-cols-2;
    @apply py-3 md:py-10;
    @apply lg:flex lg:justify-between;
}
</style>