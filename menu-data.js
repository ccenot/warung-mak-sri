/**
 * ===================================================================
 * MAK SRI KITCHEN - MENU DATA
 * 100% Olahan Spesial Ayam Mak Sri Kitchen
 * ===================================================================
 */

const MAK_SRI_CONFIG = {
  storeName: "Mak Sri Kitchen",
  tagline: "Ayam Popcorn & Aneka Olahan Ayam Juara",
  whatsappNumber: "62895703265466",
  address: "Jl. Veteran, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55164",
  operatingHours: "Senin - Minggu: 10:00 - 22:00 WIB",
  googleMapsUrl: "https://www.google.com/maps/place/Mak+Sri+Kitchen/@-7.8074317,110.3917577,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a57e0a995bb3b:0x508a72bef1b55946!8m2!3d-7.807437!4d110.3943326!16s%2Fg%2F11nw80yppn?entry=ttu",
  instagramUrl: "https://www.instagram.com/maksrikitchen"
};

const MENU_ITEMS = [
  {
    "id": "lauk-koloke",
    "name": "Koloke (Ayam Asam Manis)",
    "category": "saus",
    "badge": "Best Seller 🔥",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Asam Manis",
    "price": 46000,
    "desc": "Ayam crispy dengan saos asam manis oriental khas Mak Sri Kitchen (saos dibungkus terpisah agar tetap renyah).",
    "image": "assets/images/menu-koloke.jpg"
  },
  {
    "id": "lauk-cah-jamur",
    "name": "Ayam Cah Jamur",
    "category": "saus",
    "badge": "Favorit Gurih",
    "tagClass": "tag-gurih",
    "spiceLevel": "Gurih Sedap",
    "price": 46000,
    "desc": "Aneka sayur segar, aneka jamur pilihan, dan potongan daging ayam empuk ditumis gurih meresap.",
    "image": "assets/images/menu-cah-jamur.jpg"
  },
  {
    "id": "lauk-saos-keju",
    "name": "Ayam Saos Keju",
    "category": "saus",
    "badge": "Keju Lumer 🧀",
    "tagClass": "tag-gurih",
    "spiceLevel": "Creamy Cheese",
    "price": 46000,
    "desc": "Ayam renyah berpadu dengan cocolan saos keju creamy gurih spesial (saos dibungkus terpisah).",
    "image": "assets/images/menu-saos-keju.jpg"
  },
  {
    "id": "lauk-lada-garam",
    "name": "Ayam Lada Garam",
    "category": "saus",
    "badge": "Pedas Gurih 🌶️",
    "tagClass": "tag-pedas",
    "spiceLevel": "Level Pedas Pas",
    "price": 46000,
    "desc": "Ayam goreng crispy renyah ditumis dengan racikan bumbu cabai rawit, bawang putih wangi, dan garam gurih.",
    "image": "assets/images/menu-lada-garam.jpg"
  },
  {
    "id": "lauk-telur-asin",
    "name": "Ayam Telur Asin Mak Sri",
    "category": "saus",
    "badge": "Varian Premium",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Gurih Creamy",
    "price": 52000,
    "desc": "Diolah dengan baluran saos telur asin (salted egg) asli racikan rahasia Mak Sri Kitchen yang wangi dan gurih nagih.",
    "image": "assets/images/menu-telur-asin.jpg"
  },
  {
    "id": "lauk-tepung-oat",
    "name": "Ayam Tepung Oat",
    "category": "saus",
    "badge": "Extra Crispy",
    "tagClass": "tag-gurih",
    "spiceLevel": "Gurih Renyah",
    "price": 52000,
    "desc": "Potongan ayam fillet juicy dibalut gandum/oatmeal panggang renyah, gurih, dan tekstur kriuk unik.",
    "image": "assets/images/menu-tepung-oat.jpg"
  },
  {
    "id": "lauk-lada-hitam",
    "name": "Ayam Lada Hitam",
    "category": "saus",
    "badge": "Blackpepper ♨️",
    "tagClass": "tag-pedas",
    "spiceLevel": "Hangat Pedas",
    "price": 52000,
    "desc": "Potongan ayam empuk dimasak saus blackpepper pekat dengan sensasi pedas hangat rempah khas.",
    "image": "assets/images/menu-lada-hitam.jpg"
  },
  {
    "id": "lauk-tahu-tausi",
    "name": "Ayam Tahu Tausi",
    "category": "saus",
    "badge": "Resep Klasik",
    "tagClass": "tag-gurih",
    "spiceLevel": "Gurih Fermentasi",
    "price": 55000,
    "desc": "Olahan ayam segar dan tahu sutra lembut, disajikan dengan bumbu tausi kedelai hitam gurih (saos dibungkus terpisah).",
    "image": "assets/images/menu-tahu-tausi.jpg"
  },
  {
    "id": "goreng-bawang-jahe",
    "name": "Ayam Bawang Jahe",
    "category": "goreng",
    "badge": "Aroma Wangi",
    "tagClass": "tag-gurih",
    "spiceLevel": "Sedap Hangat",
    "price": 46000,
    "desc": "Ayam goreng diolah dengan tumisan bumbu irisan bawang dan jahe segar beraroma wangi memikat.",
    "image": "assets/images/menu-bawang-jahe.jpg"
  },
  {
    "id": "goreng-mentega",
    "name": "Ayam Goreng Mentega",
    "category": "goreng",
    "badge": "Best Seller 🔥",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Manis Gurih",
    "price": 46000,
    "desc": "Ayam goreng dengan karamelisasi saus mentega aromatik dan kecap inggris legit khas oriental.",
    "image": "assets/images/menu-mentega.jpg"
  },
  {
    "id": "goreng-ngohiang",
    "name": "Ayam Goreng Ngohiang",
    "category": "goreng",
    "badge": "Rempah Khas 🌟",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Five-Spice Gurih",
    "price": 46000,
    "desc": "Ayam goreng dengan aroma bumbu rempah five-spice (ngohiang) tradisional yang harum dan gurih meresap.",
    "image": "assets/images/menu-ngohiang.jpg"
  },
  {
    "id": "goreng-kecap",
    "name": "Ayam Goreng Kecap",
    "category": "goreng",
    "badge": "Manis Gurih",
    "tagClass": "tag-gurih",
    "spiceLevel": "Kecap Manis",
    "price": 46000,
    "desc": "Ayam goreng dimasak kuah kecap manis gurih oriental beraroma bawang bombay sedap.",
    "image": "assets/images/menu-ayam-kecap.jpg"
  },
  {
    "id": "goreng-kering",
    "name": "Ayam Goreng Kering",
    "category": "goreng",
    "badge": "Renyah Pol",
    "tagClass": "tag-gurih",
    "spiceLevel": "Original Gurih",
    "price": 46000,
    "desc": "Ayam goreng kering bumbu marinasi rempah, berkulit renyah garing dengan daging empuk lembut.",
    "image": "assets/images/menu-goreng-kering.jpg"
  },
  {
    "id": "goreng-masak-pedas",
    "name": "Ayam Masak Pedas",
    "category": "goreng",
    "badge": "Pedas Nampol 🌶️",
    "tagClass": "tag-pedas",
    "spiceLevel": "Pedas Rica",
    "price": 46000,
    "desc": "Olahan ayam bumbu rica cabai merah pedas mantap khas racikan dapur Mak Sri Kitchen.",
    "image": "assets/images/menu-masak-pedas.jpg"
  },
  {
    "id": "goreng-saos-inggris",
    "name": "Ayam Goreng Saos Inggris Mak Sri",
    "category": "goreng",
    "badge": "Spesial Mak Sri",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Gurih Asam Manis",
    "price": 52000,
    "desc": "Ayam goreng renyah disiram racikan saos inggris spesial Mak Sri Kitchen yang wangi gurih menggugah selera.",
    "image": "assets/images/menu-saos-inggris.jpg"
  },
  {
    "id": "goreng-korea",
    "name": "Ayam Goreng Korea",
    "category": "goreng",
    "badge": "Korean Yangnyeom",
    "tagClass": "tag-pedas",
    "spiceLevel": "Manis Pedas",
    "price": 52000,
    "desc": "Ayam goreng crispy bersalut saus manis gurih pedas ala Korea dengan taburan biji wijen sangrai.",
    "image": "assets/images/menu-ayam-korea.jpg"
  },
  {
    "id": "kulit-original",
    "name": "Kulit Crispy Original",
    "category": "kulit",
    "badge": "Super Kriuk ✨",
    "tagClass": "tag-hemat",
    "spiceLevel": "Gurih Asin",
    "price": 33000,
    "desc": "Kulit ayam goreng tepung super renyah dan gurih, camilan favorit tanpa kuah yang bikin ga bisa berhenti.",
    "image": "assets/images/menu-kulit-original.jpg"
  },
  {
    "id": "kulit-saos-keju",
    "name": "Kulit Crispy Saos Keju",
    "category": "kulit",
    "badge": "Cocolan Keju 🧀",
    "tagClass": "tag-gurih",
    "spiceLevel": "Keju Creamy",
    "price": 38000,
    "desc": "Kulit ayam goreng renyah kriuk disajikan lengkap dengan cocolan saus keju cheddar creamy lumer.",
    "image": "assets/images/menu-kulit-keju.jpg"
  },
  {
    "id": "kulit-telur-asin",
    "name": "Kulit Crispy Telur Asin",
    "category": "kulit",
    "badge": "Salted Egg 🌟",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Salted Egg",
    "price": 38000,
    "desc": "Kulit ayam goreng crispy dibalut racikan saus kuning telur asin (salted egg) gurih wangi daun kari.",
    "image": "assets/images/menu-kulit-saltedegg.jpg"
  },
  {
    "id": "nasi-goreng-ayam",
    "name": "Nasi Goreng Ayam",
    "category": "nasi-sup",
    "badge": "Best Seller 🍚",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Gurih Khas",
    "price": 33000,
    "desc": "Nasi goreng resep kuno oriental khas Mak Sri Kitchen dengan suwiran ayam gurih dan aroma smokey wajan.",
    "image": "assets/images/menu-nasgor-ayam.jpg"
  },
  {
    "id": "nasi-goreng-kriuk",
    "name": "Nasi Goreng Kriuk",
    "category": "nasi-sup",
    "badge": "Favorit Kenyang",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Gurih Renyah",
    "price": 40000,
    "desc": "Nasi goreng resep kuno spesial dengan topping irisan ayam goreng tepung renyah berlimpah.",
    "image": "assets/images/menu-nasgor-kriuk.jpg"
  },
  {
    "id": "nasi-siram-ayam",
    "name": "Nasi Siram Ayam",
    "category": "nasi-sup",
    "badge": "Kuah Hangat",
    "tagClass": "tag-gurih",
    "spiceLevel": "Lembut Gurih",
    "price": 38000,
    "desc": "Nasi putih hangat disiram kuah kental sayuran segar, telur, dan potongan ayam empuk yang menenangkan.",
    "image": "assets/images/menu-nasi-siram.jpg"
  },
  {
    "id": "nasi-ayam-jamur",
    "name": "Nasi Ayam Jamur",
    "category": "nasi-sup",
    "badge": "Kecap Oriental",
    "tagClass": "tag-gurih",
    "spiceLevel": "Manis Gurih",
    "price": 48000,
    "desc": "Nasi putih hangat dengan tumisan daging ayam dan jamur gurih berbumbu saus kecap oriental kental.",
    "image": "assets/images/menu-nasi-ayam-jamur.jpg"
  },
  {
    "id": "nasi-fuyunghay-ayam",
    "name": "Fu Yung Hay Ayam",
    "category": "nasi-sup",
    "badge": "Menu Klasik 🍳",
    "tagClass": "tag-bestseller",
    "spiceLevel": "Asam Manis",
    "price": 42000,
    "desc": "Omelet telur tebal renyah isi cacahan daging ayam dan sayuran, disajikan dengan saos asam manis segar (saos dibungkus terpisah).",
    "image": "assets/images/menu-fuyunghay.jpg"
  },
  {
    "id": "sup-ayam-sosis",
    "name": "Sup Ayam Sosis",
    "category": "nasi-sup",
    "badge": "Sup Segar",
    "tagClass": "tag-hemat",
    "spiceLevel": "Gurih Hangat",
    "price": 48000,
    "desc": "Sup kuah kental hangat menyehatkan dengan isian daging ayam empuk, potongan sosis, dan kuah kaldu kaya rasa.",
    "image": "assets/images/menu-sup-sosis.jpg"
  },
  {
    "id": "sup-asparagus-ayam",
    "name": "Sup Asparagus Ayam",
    "category": "nasi-sup",
    "badge": "Sup Premium",
    "tagClass": "tag-gurih",
    "spiceLevel": "Lembut Gurih",
    "price": 48000,
    "desc": "Sup kuah kental hangat dengan asparagus lembut, suwiran daging ayam, dan serabut telur gurih nikmat.",
    "image": "assets/images/menu-sup-asparagus.jpg"
  },
  {
    "id": "tofu-siram-ayam",
    "name": "Tofu Siram Ayam",
    "category": "nasi-sup",
    "badge": "Tahu Sutra",
    "tagClass": "tag-gurih",
    "spiceLevel": "Gurih Halus",
    "price": 46000,
    "desc": "Egg tofu sutra goreng lembut disiram kuah kental kaya bumbu dengan cacahan daging ayam melimpah.",
    "image": "assets/images/menu-tofu-siram.jpg"
  },
  {
    "id": "cah-buncis-ayam",
    "name": "Cah Baby Buncis Ayam",
    "category": "nasi-sup",
    "badge": "Sayur Segar",
    "tagClass": "tag-hemat",
    "spiceLevel": "Gurih Renyah",
    "price": 35000,
    "desc": "Baby buncis muda segar ditumis renyah kres-kres dengan potongan daging ayam gurih aromatik.",
    "image": "assets/images/menu-buncis-ayam.jpg"
  }
];
