const countryCodeMap = {
    "Pakistan": "pk",
    "China": "cn",
    "South Korea": "kr",
    "Japan": "jp",
    "India": "in",
    "Malaysia": "my",
    "Thailand": "th",
    "Singapore": "sg",
    "Germany": "de",
    "France": "fr",
    "United Kingdom": "uk",
    "Netherlands": "nl",
    "Switzerland": "ch",
    "Russia": "ru",
    "United Arab Emirates": "ae",
    "Saudi Arabia": "sa",
    "Qatar": "qa",
    "Kuwait": "kw",
    "Nigeria": "ng",
    "Kenya": "ke",
    "South Africa": "za",
    "Ghana": "gh",
    "Egypt": "eg"
};

/**
  Sanitizes a brand name to create a URL-friendly string.
  Removes spaces, special characters, and common descriptive suffixes.
  @param {string} name - The original brand name.
  @returns {string} The sanitized brand name suitable for a URL.
 */
function sanitizeBrandNameForUrl(name) {
    let sanitized = name.toLowerCase();

    // Specific corrections for known issues or common transformations
    if (sanitized.includes("hermès")) {
        sanitized = "hermes"; // Ensure Hermès becomes hermes
    }
    if (sanitized.includes("dr. jart+")) {
        sanitized = "drjart"; // Specific for Dr. Jart+
    }
    if (sanitized.includes("k7l cosmetics")) {
        sanitized = "k7l"; // Specific for K7L Cosmetics
    }
    if (sanitized.includes("8seconds")) {
        sanitized = "8seconds"; // Specific for 8Seconds
    }
    if (sanitized.includes("boots no7")) {
        sanitized = "bootsno7"; // Specific for Boots No7
    }
    if (sanitized.includes("sharaf dg")) {
        sanitized = "sharaf"; // Specific for Sharaf DG
    }
    if (sanitized.includes("symphony")) {
        sanitized = "symphony"; // Specific for Symphony
    }
    if (sanitized.includes("dwp home")) {
        sanitized = "dwphome"; // Specific for DWP Home
    }
    if (sanitized.includes("aj")) {
        sanitized = "aj"; // Specific for AJ
    }
    if (sanitized.includes("mr. cod")) {
        sanitized = "mrcod"; // Specific for Mr. Cod
    }
    if (sanitized.includes("cafe libretto")) {
        sanitized = "cafelibretto"; // Specific for Cafe Libretto
    }
    if (sanitized.includes("le creuset")) {
        sanitized = "lecreuset"; // Specific for Le Creuset
    }
    if (sanitized.includes("jo malone london")) {
        sanitized = "jomalonelondon"; // Specific for Jo Malone London
    }


    // Remove text in parentheses or brackets and common descriptive words/phrases
    sanitized = sanitized.replace(/\s*\(.*?\)\s*/g, ''); // e.g., "(tech)", "(until 2021)"
    sanitized = sanitized.replace(/\s*\[.*?\]\s*/g, ''); // e.g., "[Damietta Brands]"
    sanitized = sanitized.replace(/\s*inc\.?\s*/g, ''); // "Inc."
    sanitized = sanitized.replace(/\s*co\.?\s*/g, ''); // "Co."
    sanitized = sanitized.replace(/\s*llc\.?\s*/g, ''); // "LLC."
    sanitized = sanitized.replace(/\s*ltd\.?\s*/g, ''); // "Ltd."
    sanitized = sanitized.replace(/\s*gmbh\s*/g, ''); // "GmbH"
    sanitized = sanitized.replace(/\s*kft\s*/g, ''); // "Kft"
    sanitized = sanitized.replace(/\s*corp\.?\s*/g, ''); // "Corp."
    sanitized = sanitized.replace(/\s*motors?\s*/g, ''); // "Motors", "Motor"
    sanitized = sanitized.replace(/\s*group\s*/g, ''); // "Group"
    sanitized = sanitized.replace(/\s*company\s*/g, ''); // "Company"
    sanitized = sanitized.replace(/\s*automobiles?\s*/g, ''); // "Automobiles", "Automobile"
    sanitized = sanitized.replace(/\s*vehicles?\s*/g, ''); // "Vehicles", "Vehicle"
    sanitized = sanitized.replace(/\s*electronics?\s*/g, ''); // "Electronics", "Electronic"
    sanitized = sanitized.replace(/\s*store(s?)\s*/g, ''); // "Store", "Stores"
    sanitized = sanitized.replace(/\s*bookstore\s*/g, ''); // "Bookstore"
    sanitized = sanitized.replace(/\s*perfumes?\s*/g, ''); // "Perfumes", "Perfume"
    sanitized = sanitized.replace(/\s*skincare\s*/g, ''); // "Skincare"
    sanitized = sanitized.replace(/\s*cosmetology\s*/g, ''); // "Cosmetology"
    sanitized = sanitized.replace(/\s*cosmetics?\s*/g, ''); // "Cosmetic"
    sanitized = sanitized.replace(/\s*beauty\s*/g, ''); // "Beauty"
    sanitized = sanitized.replace(/\s*fashion\s*/g, ''); // "Fashion"
    sanitized = sanitized.replace(/\s*original\s*/g, ''); // "Original"
    sanitized = sanitized.replace(/\s*branch\s*/g, ''); // "branch"
    sanitized = sanitized.replace(/\s*assembly and sales\s*/g, ''); // "assembly and sales"
    sanitized = sanitized.replace(/\s*hq\s*/g, ''); // "HQ"
    sanitized = sanitized.replace(/\s*by hemani\s*/g, ''); // Specific for 'WB by Hemani'
    sanitized = sanitized.replace(/\s*by huda\s*/g, ''); // Specific for 'Wishful Skincare (by Huda)'
    sanitized = sanitized.replace(/\s*formerly faces\s*/g, ''); // Specific for 'Wojooh Beauty (formerly Faces)'
    sanitized = sanitized.replace(/\s*telecom\s*/g, ''); // Specific for 'Telecom'


    // Replace spaces and specific punctuation with empty string
    sanitized = sanitized.replace(/[^a-z0-9]/g, '');
    
    // Handle specific abbreviations or problematic remnants
    sanitized = sanitized.replace(/j\./g, 'j'); // "J." for Junaid Jamshed
    sanitized = sanitized.replace(/dji/g, 'dji'); // Ensure DJI remains as is

    if (sanitized === "") {
        return "genericbrand"; // Fallback for extremely short/empty names after sanitization
    }

    return sanitized;
}


// The main data structure containing all brand information
const brandData = {
    "Asia": {
        "Pakistan": {
            "Electronics": [
                { name: "Orient", website: "orient.com.pk" },
                { name: "Dawlance", website: "dawlance.com.pk" },
                { name: "PEL", website: null },
                { name: "Waves", website: null },
                { name: "Haier", website: null },
                { name: "Gree", website: null },
                { name: "Changhong Ruba", website: null },
                { name: "Kenwood", website: null },
                { name: "Enviro", website: null },
                { name: "TCL", website: null }
            ],
            "Fashion": [
                { name: "Khaadi", website: "khaadi.com" },
                { name: "Gul Ahmed", website: null },
                { name: "Alkaram Studio", website: null },
                { name: "Junaid Jamshed (J.)", website: null },
                { name: "Nishat Linen", website: null },
                { name: "Sapphire", website: null },
                { name: "Bonanza Satrangi", website: null },
                { name: "Sana Safinaz", website: null },
                { name: "Generation", website: null },
                { name: "Beechtree", website: null }
            ],
            "Cosmetics": [
                { name: "Medora", website: "medora.pk" },
                { name: "Miss Rose", website: null },
                { name: "Christine", website: null },
                { name: "Rivaj UK", website: null },
                { name: "WB by Hemani", website: null },
                { name: "Luscious Cosmetics", website: null },
                { name: "Beautify by Amna", website: null },
                { name: "Glam Girl", website: null },
                { name: "Sweet Touch", website: null },
                { name: "Masarrat Misbah", website: null }
            ],
            "Furniture": [
                { name: "Interwood", website: "interwoodmobel.com" },
                { name: "Habitt", website: null },
                { name: "ChenOne", website: null },
                { name: "Index", website: null },
                { name: "Urban Galleria", website: null },
                { name: "HomeFactree", website: null },
                { name: "Bareeze Home", website: null },
                { name: "Dolce Vita", website: null },
                { name: "DWP Home", website: null },
                { name: "Malik Furniture", website: null }
            ],
            "Automotive": [
                { name: "Pak Suzuki", website: null },
                { name: "Honda Atlas", website: null },
                { name: "Toyota Indus", website: "toyota-indus.com" },
                { name: "Haval Pakistan", website: null },
                { name: "Kia Lucky Motors", website: null },
                { name: "MG Pakistan", website: null },
                { name: "Changan Master", website: null },
                { name: "Proton", website: null },
                { name: "DFSK", website: null },
                { name: "United Motors", website: null }
            ],
            "Tech & IT": [
                { name: "Systems Limited", website: null },
                { name: "NetSol Technologies", website: "netsoltech.com" },
                { name: "10Pearls", website: null },
                { name: "TRG Pakistan", website: null },
                { name: "Arbisoft", website: null },
                { name: "VentureDive", website: null },
                { name: "Cubix", website: null },
                { name: "CureMD", website: null },
                { name: "Folio3", website: null },
                { name: "Techlogix", website: null }
            ],
            "Restaurants": [
                { name: "Cheezious", website: "cheezious.com" },
                { name: "Hardee's", website: "hardees.com.pk" },
                { name: "KFC", website: "kfc.com.pk" },
                { name: "McDonald's", website: "mcdonalds.com.pk" },
                { name: "Mr. Cod", website: "mrcod.pk" },
                { name: "Cafe Libretto", website: "cafelibretto.com" },
                { name: "Albaik", website: "albaik.com" },
                { name: "Foodpanda (Delivery Platform)", website: "foodpanda.pk" },
                { name: "Pizza Hut", website: "pizzahut.com.pk" },
                { name: "Dominos Pizza", website: "dominos.com.pk" }
            ],
            "Clocks": [
                { name: "Rado", website: "rado.com" },
                { name: "Citizen", website: "citizenwatch.com" },
                { name: "Seiko", website: "seikowatches.com" },
                { name: "Orient", website: "orientwatch.jp" },
                { name: "Titan", website: "titan.co.in" }
            ],
            "Kitchen Cookware": [
                { name: "National", website: "nationalcookware.com" },
                { name: "Dawlance", website: "dawlance.com.pk" },
                { name: "Kenwood", website: "kenwood-electronics.pk" },
                { name: "Orient", website: "orient.com.pk" }
            ],
            "Perfumes": [
                { name: "Junaid Jamshed (J.)", website: "junaidjamshed.com" },
                { name: "Hemani", website: "hemanitraders.com.pk" },
                { name: "Luscious Cosmetics", website: "lusciouscosmetics.com" }
            ]
        },
        "China": {
            "Electronics": [
                { name: "Xiaomi", website: "mi.com" },
                { name: "Huawei", website: null },
                { name: "Haier", website: null },
                { name: "Hisense", website: null },
                { name: "TCL", website: null },
                { name: "Oppo", website: null },
                { name: "Vivo", website: null },
                { name: "DJI", website: null },
                { name: "Lenovo", website: null },
                { name: "Gree", website: null }
            ],
            "Smartphones": [
                { name: "Xiaomi", website: null },
                { name: "Oppo", website: "oppo.com" },
                { name: "Vivo", website: null },
                { name: "Huawei", website: null },
                { name: "OnePlus", website: null },
                { name: "Realme", website: null },
                { name: "ZTE", website: null },
                { name: "Honor", website: null },
                { name: "Meizu", website: null },
                { name: "Nubia", website: null }
            ],
            "Laptops": [
                { name: "Lenovo", website: "lenovo.com" },
                { name: "Huawei", website: null },
                { name: "Chuwi", website: null },
                { name: "Honor", website: null },
                { name: "Teclast", website: null },
                { name: "Xiaomi", website: null },
                { name: "Tongfang", website: null },
                { name: "Hasee", website: null },
                { name: "Jumper", website: null },
                { name: "Tsinghua Tongfang", website: null }
            ],
            "Automotive": [
                { name: "BYD", website: "byd.com" },
                { name: "NIO", website: null },
                { name: "XPeng", website: null },
                { name: "Geely", website: null },
                { name: "Chery", website: null },
                { name: "Great Wall", website: null },
                { name: "SAIC Motor", website: null },
                { name: "FAW", website: null },
                { name: "BAIC", website: null },
                { name: "Dongfeng", website: null }
            ],
            "Fashion & E-comm": [
                { name: "Shein", website: "shein.com" },
                { name: "Alibaba", website: null },
                { name: "JD.com", website: null },
                { name: "Meituan", website: null },
                { name: "Douyin", website: null },
                { name: "Tmall", website: null },
                { name: "Taobao", website: null },
                { name: "Anzheng Fashion Group", website: null },
                { name: "Peacebird", website: null },
                { name: "Bosideng", website: null }
            ],
            "Clocks": [
                { name: "Xiaomi", website: "mi.com" },
                { name: "Huawei", website: "huawei.com" },
                { name: "Lenovo", website: "lenovo.com" }
            ],
            "Kitchen Cookware": [
                { name: "Joyoung", website: "joyoung.com" },
                { name: "Supor", website: "supor.com" },
                { name: "Xiaomi", website: "mi.com" }
            ],
            "Perfumes": [
                { name: "Reclassified Perfumes", website: null }, // Generic for now
                { name: "Guangzhou Perfume Co.", website: null } // Example
            ]
        },
        "South Korea": {
            "Electronics & Tech": [
                { name: "Samsung", website: "samsung.com" },
                { name: "LG", website: null },
                { name: "SK Hynix", website: null },
                { name: "Hyundai Mobis", website: null },
                { name: "Coway", website: null },
                { name: "Daewoo", website: null },
                { name: "CJ Corporation", website: null },
                { name: "Lotte", website: null },
                { name: "Kakao", website: null },
                { name: "Naver", website: null }
            ],
            "Smartphones": [
                { name: "Samsung", website: "samsung.com" },
                { name: "LG (until 2021)", website: null },
                { name: "Pantech", website: null }
            ],
            "Automotive": [
                { name: "Hyundai", website: "hyundai.com" },
                { name: "Kia", website: null },
                { name: "Genesis", website: null },
                { name: "SsangYong", website: null }
            ],
            "Cosmetics": [
                { name: "Innisfree", website: "innisfree.com" },
                { name: "Etude House", website: null },
                { name: "Missha", website: null },
                { name: "Laneige", website: null },
                { name: "Sulwhasoo", website: null },
                { name: "The Face Shop", website: null },
                { name: "Tony Moly", website: null },
                { name: "Nature Republic", website: null },
                { name: "Dr. Jart+", website: null },
                { name: "Banila Co", website: null }
            ],
            "Fashion": [
                { name: "Ader Error", website: null },
                { name: "Gentle Monster", website: null },
                { name: "Wooyoungmi", website: null },
                { name: "System", website: null },
                { name: "Stylenanda", website: null },
                { name: "8Seconds", website: null },
                { name: "SPAO", website: null },
                { name: "Musinsa", website: "musinsa.com" },
                { name: "SJYP", website: null },
                { name: "Pushbutton", website: null }
            ],
            "Clocks": [
                { name: "Samsung", website: "samsung.com" },
                { name: "LG", website: "lg.com" }
            ],
            "Kitchen Cookware": [
                { name: "LocknLock", website: "locknlock.com" },
                { name: "Happycall", website: "happycall.co.kr" },
                { name: "Samsung", website: "samsung.com" }
            ],
            "Perfumes": [
                { name: "Innisfree", website: "innisfree.com" },
                { name: "Etude House", website: "etudehouse.com" }
            ]
        },
        "Japan": {
            "Electronics": [
                { name: "Sony", website: "sony.com" },
                { name: "Panasonic", website: null },
                { name: "Toshiba", website: null },
                { name: "Sharp", website: null },
                { name: "Fujitsu", website: null },
                { name: "Hitachi", website: null },
                { name: "NEC", website: null },
                { name: "Casio", website: null },
                { name: "JVC", website: null },
                { name: "Mitsubishi Electric", website: null }
            ],
            "Automotive": [
                { name: "Toyota", website: "toyota.com" },
                { name: "Honda", website: null },
                { name: "Nissan", website: null },
                { name: "Mazda", website: null },
                { name: "Suzuki", website: null },
                { name: "Subaru", website: null },
                { name: "Mitsubishi Motors", website: null },
                { name: "Isuzu", website: null },
                { name: "Daihatsu", website: null },
                { name: "Lexus", website: null }
            ],
            "Cosmetics": [
                { name: "Shiseido", website: "shiseido.com" },
                { name: "SK-II", website: null },
                { name: "Hada Labo", website: null },
                { name: "DHC", website: null },
                { name: "Kose", website: null },
                { name: "Canmake", website: null },
                { name: "Majolica Majorca", website: null },
                { name: "Hada Nature", website: null },
                { name: "Rohto", website: null },
                { name: "FANCL", website: null }
            ],
            "Clocks": [
                { name: "Seiko", website: "seikowatches.com" },
                { name: "Citizen", website: "citizenwatch.com" },
                { name: "Casio", website: "casio.com" }
            ],
            "Kitchen Cookware": [
                { name: "Zojirushi", website: "zojirushi.com" },
                { name: "Tiger Corporation", website: "tiger-corporation.com" },
                { name: "Panasonic", website: "panasonic.com" }
            ],
            "Perfumes": [
                { name: "Shiseido", website: "shiseido.com" },
                { name: "Kanebo", website: "kanebo-global.com" }
            ]
        },
        "India": {
            "Electronics": [
                { name: "Micromax", website: "micromaxinfo.com" },
                { name: "Lava", website: null },
                { name: "Intex", website: null },
                { name: "Karbonn", website: null },
                { name: "boAt", website: null },
                { name: "Zebronics", website: null },
                { name: "Portronics", website: null },
                { name: "Realme (India branch)", website: null },
                { name: "iBall", website: null },
                { name: "Onida", website: null }
            ],
            "Fashion": [
                { name: "FabIndia", website: "fabindia.com" },
                { name: "Biba", website: null },
                { name: "W for Women", website: null },
                { name: "Manyavar", website: null },
                { name: "Allen Solly", website: null },
                { name: "Pantaloons", website: null },
                { name: "AND", website: null },
                { name: "Global Desi", website: null },
                { name: "Raymond", website: null },
                { name: "UCB India", website: null }
            ],
            "Cosmetics": [
                { name: "Lakmé", website: "lakmeindia.com" },
                { name: "Lotus Herbals", website: null },
                { name: "Biotique", website: null },
                { name: "VLCC", website: null },
                { name: "Himalaya", website: null },
                { name: "Mamaearth", website: null },
                { name: "Sugar", website: null },
                { name: "MyGlamm", website: null },
                { name: "Forest Essentials", website: null },
                { name: "Colorbar", website: null }
            ],
            "Furniture": [
                { name: "Godrej Interio", website: null },
                { name: "Urban Ladder", website: "urbanladder.com" },
                { name: "Pepperfry", website: null },
                { name: "Nilkamal", website: null },
                { name: "Durian", website: null },
                { name: "Wooden Street", website: null },
                { name: "HomeTown", website: null },
                { name: "Evok", website: null },
                { name: "Royal Oak", website: null },
                { name: "IKEA India", website: null }
            ],
            "Automotive": [
                { name: "Tata Motors", website: "tatamotors.com" },
                { name: "Mahindra", website: null },
                { name: "Maruti Suzuki", website: null },
                { name: "Ashok Leyland", website: null },
                { name: "Hero MotoCorp", website: null },
                { name: "Bajaj Auto", website: null },
                { name: "TVS", website: null },
                { name: "Eicher Motors", website: null },
                { name: "Ola Electric", website: null },
                { name: "Ather Energy", website: null }
            ],
            "Tech & IT": [
                { name: "Infosys", website: "infosys.com" },
                { name: "TCS", website: null },
                { name: "Wipro", website: null },
                { name: "HCL", website: null },
                { name: "Tech Mahindra", website: null },
                { name: "Zoho", website: null },
                { name: "Freshworks", website: null },
                { name: "Paytm", website: null },
                { name: "Flipkart", website: null },
                { name: "Byju’s", website: null }
            ],
            "Clocks": [
                { name: "Titan", website: "titan.co.in" },
                { name: "Ajanta", website: "ajantaclocks.com" },
                { name: "HMT", website: "hmtwatches.in" }
            ],
            "Kitchen Cookware": [
                { name: "Prestige", website: "ttkprestige.com" },
                { name: "Hawkins", website: "hawkinscookers.com" },
                { name: "Butterfly", website: "butterflyindia.com" }
            ],
            "Perfumes": [
                { name: "Engage", website: "engagefragrance.com" },
                { name: "Fogg", website: "fogg.in" },
                { name: "Titan Skinn", website: "skinn.in" }
            ]
        },
        "Malaysia": {
            "Electronics": [
                { name: "Pensonic", website: "pensonic.com" },
                { name: "Khind", website: null },
                { name: "Mistral", website: null },
                { name: "Faber", website: null },
                { name: "Panasonic Malaysia", website: null },
                { name: "Singer Malaysia", website: null },
                { name: "Elba", website: null },
                { name: "Midea", website: null },
                { name: "LG Malaysia", website: null },
                { name: "Toshiba Malaysia", website: null }
            ],
            "Fashion": [
                { name: "Zalora", website: "zalora.com.my" },
                { name: "Padini", website: null },
                { name: "Bonia", website: null },
                { name: "Voir", website: null },
                { name: "Poney", website: null },
                { name: "Carlo Rino", website: null },
                { name: "F.O.S", website: null },
                { name: "Vincci", website: null },
                { name: "Larrie", website: null },
                { name: "Bata Malaysia", website: null }
            ],
            "Cosmetics": [
                { name: "Safi", website: "safi.com.my" },
                { name: "Silkygirl", website: null },
                { name: "Elianto", website: null },
                { name: "Tanamera", website: null },
                { name: "Nutox", website: null },
                { name: "SimplySiti", website: null },
                { name: "Enchanteur", website: null },
                { name: "Sendayu Tinggi", website: null },
                { name: "Forest Colour", website: null },
                { name: "Cosmoderm", website: null }
            ],
            "Furniture": [
                { name: "IKEA Malaysia", website: "ikea.com/my" },
                { name: "Lorenzo", website: null },
                { name: "Cellini", website: null },
                { name: "Rozel", website: null },
                { name: "Tekkashop", website: null },
                { name: "MajuHome", website: null },
                { name: "Kinsen", website: null },
                { name: "Hin Lim", website: null },
                { name: "Lavino", website: null },
                { name: "More Design", website: null }
            ],
            "Automotive": [
                { name: "Perodua", website: "perodua.com.my" },
                { name: "Proton", website: null },
                { name: "Modenas", website: null },
                { name: "Inokom", website: null },
                { name: "Naza Automotive", website: null },
                { name: "DRB-HICOM", website: null }
            ],
            "Clocks": [
                { name: "Seiko", website: "seikowatches.com" },
                { name: "Citizen", website: "citizenwatch.com" }
            ],
            "Kitchen Cookware": [
                { name: "Pensonic", website: "pensonic.com" },
                { name: "Khind", website: "khind.com" }
            ],
            "Perfumes": [
                { name: "Safi", website: "safi.com.my" },
                { name: "Silkygirl", website: "silkygirl.com" }
            ]
        },
        "Thailand": {
            "Electronics": [
                { name: "AJ", website: "ajthai.com" },
                { name: "TCL Thailand", website: null },
                { name: "Sharp Thai", website: null },
                { name: "Haier Thailand", website: null },
                { name: "Samsung Thailand", website: null },
                { name: "Panasonic Thai", website: null },
                { name: "Toshiba Thailand", website: null }
            ],
            "Fashion": [
                { name: "Greyhound Original", website: "greyhound.co.th" },
                { name: "Flynow", website: null },
                { name: "Disaya", website: null },
                { name: "Jaspal", website: null },
                { name: "Issue", website: null },
                { name: "Theatre", website: null },
                { name: "Soda", website: null },
                { name: "Senada", website: null },
                { name: "CPS Chaps", website: null },
                { name: "Misty Mynx", website: null }
            ],
            "Cosmetics": [
                { name: "Mistine", website: "mistine.co.th" },
                { name: "Beauty Buffet", website: null },
                { name: "Srichand", website: null },
                { name: "Oriental Princess", website: null },
                { name: "Cathy Doll", website: null },
                { name: "Cute Press", website: null },
                { name: "Snail White", website: null },
                { name: "Namman Muay", website: null },
                { name: "BSC Cosmetology", website: null },
                { name: "DHC Thailand", website: null }
            ],
            "Furniture": [
                { name: "SB Furniture", website: "sbfurniture.com" },
                { name: "Index Living Mall", website: null },
                { name: "Modernform", website: null },
                { name: "Koncept Furniture", website: null },
                { name: "Chic Republic", website: null },
                { name: "Hafele Thailand", website: null }
            ],
            "Automotive": [
                { name: "Toyota Thailand", website: "toyota.co.th" },
                { name: "Isuzu Thailand", website: null },
                { name: "Mitsubishi Thailand", website: null },
                { name: "Honda Thailand", website: null },
                { name: "Nissan Thailand", website: null },
                { name: "Thai Rung Union Car", website: null }
            ],
            "Clocks": [
                { name: "Seiko", website: "seikowatches.com" },
                { name: "Citizen", website: "citizenwatch.com" }
            ],
            "Kitchen Cookware": [
                { name: "Zebra", website: "zebra-th.com" },
                { name: "Seagull", website: "seagull-brand.com" }
            ],
            "Perfumes": [
                { name: "Mistine", website: "mistine.co.th" },
                { name: "Oriental Princess", website: "orientalprincess.com" }
            ]
        },
        "Singapore": {
            "Electronics": [
                { name: "Creative Technology", website: null },
                { name: "Razer Inc.", website: "razer.com" },
                { name: "Aztech", website: null },
                { name: "TP-Link SG", website: null },
                { name: "Prism+", website: null },
                { name: "iNo Mobile", website: null },
                { name: "Oppo Singapore", website: null }
            ],
            "Fashion": [
                { name: "Charles & Keith", website: "charleskeith.com" },
                { name: "Love Bonito", website: null },
                { name: "The Editor’s Market", website: null },
                { name: "Fayth", website: null },
                { name: "Collate The Label", website: null },
                { name: "Klarra", website: null }
            ],
            "Cosmetics": [
                { name: "Allies of Skin", website: "alliesofskin.com" },
                { name: "Re:Erth", website: null },
                { name: "DrGL", website: null },
                { name: "IDS Skincare", website: null },
                { name: "Porcelain Skin", website: null },
                { name: "Sigi Skin", website: null }
            ],
            "Furniture": [
                { name: "Castlery", website: "castlery.com" },
                { name: "HipVan", website: null },
                { name: "FortyTwo", website: null },
                { name: "Scanteak", website: null },
                { name: "Commune", website: null },
                { name: "Nook & Cranny", website: null },
                { name: "Originals", website: null }
            ],
            "Automotive": [
                { name: "Hyundai Asia Pacific HQ", website: null },
                { name: "Toyota Singapore", website: null },
                { name: "Honda Singapore", website: null },
                { name: "Cycle & Carriage", website: "cyclecarriage.com" },
                { name: "Komoco", website: null }
            ],
            "Clocks": [
                { name: "Seiko", website: "seikowatches.com" },
                { name: "Citizen", website: "citizenwatch.com" }
            ],
            "Kitchen Cookware": [
                { name: "Mayer", website: "mayer.sg" },
                { name: "EuropAce", website: "europace.com.sg" }
            ],
            "Perfumes": [
                { name: "Allies of Skin", website: "alliesofskin.com" } // Example, if they branch into fragrance
            ]
        }
    },
    "Europe": {
        "Germany": {
            "Electronics": [
                { name: "Bosch", website: "bosch.com" },
                { name: "Siemens", website: "siemens.com" },
                { name: "Grundig", website: "grundig.com" },
                { name: "Medion", website: "medion.com" },
                { name: "Loewe", website: "loewe.tv" },
                { name: "Blaupunkt", website: "blaupunkt.com" },
                { name: "Beurer", website: null },
                { name: "Gigaset", website: null },
                { name: "Metz", website: null },
                { name: "Elgato", website: null }
            ],
            "Fashion": [
                { name: "Hugo Boss", website: null },
                { name: "Adidas", website: null },
                { name: "Puma", website: null },
                { name: "Escada", website: null },
                { name: "MCM", website: null },
                { name: "Tom Tailor", website: null },
                { name: "Jil Sander", website: null },
                { name: "s.Oliver", website: null },
                { name: "Marc O’Polo", website: null },
                { name: "Bogner", website: null }
            ],
            "Automotive": [
                { name: "BMW", website: null },
                { name: "Mercedes-Benz", website: null },
                { name: "Volkswagen", website: null },
                { name: "Porsche", website: null },
                { name: "Audi", website: null },
                { name: "Opel", website: null },
                { name: "MAN", website: null },
                { name: "Daimler Truck", website: null },
                { name: "Alpina", website: null },
                { name: "Smart", website: null }
            ],
            "Furniture": [
                { name: "IKEA Germany", website: null },
                { name: "Hülsta", website: null },
                { name: "Rolf Benz", website: null },
                { name: "Nolte Möbel", website: null },
                { name: "Musterring", website: null },
                { name: "Vitra", website: null },
                { name: "Interlübke", website: null },
                { name: "Rauch", website: null },
                { name: "Team 7", website: null },
                { name: "KARE", website: null }
            ],
            "Cosmetics": [
                { name: "Nivea", website: null },
                { name: "Dr. Hauschka", website: null },
                { name: "Weleda", website: null },
                { name: "Balea", website: null },
                { name: "Artdeco", website: null },
                { name: "Essence", website: null },
                { name: "Catrice", website: null },
                { name: "Annemarie Börlind", website: null },
                { name: "Lavera", website: null },
                { name: "Sans Soucis", website: null }
            ],
            "Clocks": [
                { name: "Junghans", website: "junghans.de" },
                { name: "Kieninger", website: "kieninger.com" },
                { name: "Hermle", website: "hermle-clocks.com" }
            ],
            "Kitchen Cookware": [
                { name: "WMF", website: "wmf.com" },
                { name: "Fissler", website: "fissler.com" },
                { name: "Zwilling J.A. Henckels", website: "zwilling.com" }
            ],
            "Perfumes": [
                { name: "Hugo Boss", website: "hugoboss.com" },
                { name: "Escada", website: "escada.com" },
                { name: "Montblanc", website: "montblanc.com" }
            ]
        },
        "France": {
            "Electronics": [
                { name: "Thomson", website: null },
                { name: "Archos", website: null },
                { name: "Withings", website: null },
                { name: "Parrot Drones", website: null },
                { name: "Netatmo", website: null },
                { name: "Orange (telecom tech)", website: null },
                { name: "Alcatel-Lucent", website: null }
            ],
            "Fashion": [
                { name: "Louis Vuitton", website: null },
                { name: "Chanel", website: null },
                { name: "Dior", website: null },
                { name: "Givenchy", website: null },
                { name: "Hermès", website: null },
                { name: "Balmain", website: null },
                { name: "Lacoste", website: null },
                { name: "Saint Laurent", website: null },
                { name: "Celine", website: null },
                { name: "Chloé", website: null }
            ],
            "Automotive": [
                { name: "Renault", website: null },
                { name: "Peugeot", website: null },
                { name: "Citroën", website: null },
                { name: "Bugatti", website: null },
                { name: "DS Automobiles", website: null },
                { name: "Alpine", website: null },
                { name: "Venturi", website: null },
                { name: "Ligier", website: null }
            ],
            "Furniture": [
                { name: "Roche Bobois", website: null },
                { name: "Ligne Roset", website: null },
                { name: "Gautier", website: null },
                { name: "Maisons du Monde", website: null },
                { name: "La Redoute Interiors", website: null },
                { name: "Alinéa", website: null },
                { name: "Habitat", website: null }
            ],
            "Cosmetics": [
                { name: "L'Oréal", website: null },
                { name: "Yves Rocher", website: null },
                { name: "Guerlain", website: null },
                { name: "Bioderma", website: null },
                { name: "Clarins", website: null },
                { name: "Vichy", website: null },
                { name: "La Roche-Posay", website: null },
                { name: "Lancôme", website: null },
                { name: "Caudalie", website: null },
                { name: "Sisley Paris", website: null }
            ],
            "Clocks": [
                { name: "Cartier", website: "cartier.com" },
                { name: "Breguet", website: "breguet.com" }
            ],
            "Kitchen Cookware": [
                { name: "Le Creuset", website: "lecreuset.com" },
                { name: "Staub", website: "zwilling.com/staub" },
                { name: "Tefal", website: "tefal.com" }
            ],
            "Perfumes": [
                { name: "Chanel", website: "chanel.com" },
                { name: "Dior", website: "dior.com" },
                { name: "Guerlain", website: "guerlain.com" },
                { name: "Yves Saint Laurent", website: "ysl.com" },
                { name: "Hermès", website: "hermes.com" }
            ]
        },
        "United Kingdom": {
            "Electronics": [
                { name: "Dyson", website: null },
                { name: "Raspberry Pi", website: null },
                { name: "ARM (chip design)", website: null },
                { name: "Bowers & Wilkins", website: null },
                { name: "Pure Audio", website: null },
                { name: "Linn", website: null },
                { name: "Cambridge Audio", website: null }
            ],
            "Fashion": [
                { name: "Burberry", website: null },
                { name: "Alexander McQueen", website: null },
                { name: "Stella McCartney", website: null },
                { name: "Paul Smith", website: null },
                { name: "Ted Baker", website: null },
                { name: "ASOS", website: null },
                { name: "River Island", website: null },
                { name: "Reiss", website: null },
                { name: "Barbour", website: null },
                { name: "Topshop", website: null }
            ],
            "Automotive": [
                { name: "Rolls-Royce", website: null },
                { name: "Bentley", website: null },
                { name: "Aston Martin", website: null },
                { name: "Jaguar", website: null },
                { name: "Land Rover", website: null },
                { name: "Mini", website: null },
                { name: "McLaren", website: null },
                { name: "Vauxhall", website: null },
                { name: "Lotus", website: null }
            ],
            "Furniture": [
                { name: "DFS", website: null },
                { name: "Made.com", website: null },
                { name: "Heal’s", website: null },
                { name: "Habitat UK", website: null },
                { name: "Oak Furnitureland", website: null },
                { name: "Dwell", website: null },
                { name: "Loaf", website: null },
                { name: "The Cotswold Company", website: null }
            ],
            "Cosmetics": [
                { name: "The Body Shop", website: null },
                { name: "Lush", website: null },
                { name: "Charlotte Tilbury", website: null },
                { name: "Molton Brown", website: null },
                { name: "Rimmel London", website: null },
                { name: "Elemis", website: null },
                { name: "Soap & Glory", website: null },
                { name: "Neal’s Yard Remedies", website: null },
                { name: "Boots No7", website: null }
            ],
            "Clocks": [
                { name: "Accurist", website: "accurist.co.uk" },
                { name: "Rotary", website: "rotarywatches.com" }
            ],
            "Kitchen Cookware": [
                { name: "Le Creuset", website: "lecreuset.co.uk" },
                { name: "Prestige", website: "prestige.co.uk" },
                { name: "Stellar", website: "stellar.co.uk" }
            ],
            "Perfumes": [
                { name: "Jo Malone London", website: "jomalonelondon.com" },
                { name: "Penhaligon's", website: "penhaligons.com" },
                { name: "Burberry", website: "burberry.com" }
            ]
        },
        "Netherlands": {
            "Electronics": [
                { name: "Philips", website: null },
                { name: "NXP Semiconductors", website: null },
                { name: "TomTom", website: null },
                { name: "Trust", website: null },
                { name: "Nedap", website: null },
                { name: "Bambi", website: null }
            ],
            "Fashion": [
                { name: "Scotch & Soda", website: null },
                { name: "G-Star RAW", website: null },
                { name: "Suitsupply", website: null },
                { name: "Oilily", website: null },
                { name: "Daily Paper", website: null },
                { name: "Vlisco", website: null },
                { name: "WE Fashion", website: null },
                { name: "Vanilia", website: null }
            ],
            "Automotive": [
                { name: "Lightyear (solar EVs)", website: null },
                { name: "DAF Trucks", website: null },
                { name: "Etergo (electric scooters)", website: null },
                { name: "Donkervoort", website: null }
            ],
            "Furniture": [
                { name: "Leolux", website: null },
                { name: "Gispen", website: null },
                { name: "Pastoe", website: null },
                { name: "Montis", website: null },
                { name: "Moooi", website: null },
                { name: "Artifort", website: null },
                { name: "HAY (Dutch subsidiary)", website: null },
                { name: "Pols Potten", website: null }
            ],
            "Cosmetics": [
                { name: "Rituals", website: null },
                { name: "Marie-Stella-Maris", website: null },
                { name: "Naïf", website: null },
                { name: "Dr. Jetske Ultee", website: null },
                { name: "Zarqa", website: null },
                { name: "Hannah", website: null }
            ],
            "Clocks": [
                { name: "Karlsson", website: "karlssonclocks.com" },
                { name: "NeXtime", website: "nextime.eu" }
            ],
            "Kitchen Cookware": [
                { name: "Brabantia", website: "brabantia.com" },
                { name: "BK Cookware", website: "bkcookware.com" }
            ],
            "Perfumes": [
                { name: "Rituals", website: "rituals.com" }
            ]
        },
        "Switzerland": {
            "Electronics": [
                { name: "Logitech", website: null },
                { name: "Swatch (smartwatches)", website: null },
                { name: "u-blox", website: null },
                { name: "MyStrom", website: null },
                { name: "Schindler", website: null },
                { name: "Stadler Rail electronics", website: null }
            ],
            "Fashion": [
                { name: "Bally", website: null },
                { name: "Akris", website: null },
                { name: "Navyboot", website: null },
                { name: "Mammut", website: null },
                { name: "Freitag (bags)", website: null },
                { name: "JetSet", website: null }
            ],
            "Automotive": [
                { name: "Rinspeed (concept EVs)", website: null },
                { name: "Sbarro (concept cars)", website: null },
                { name: "Kyburz (EVs)", website: null }
            ],
            "Furniture": [
                { name: "De Sede", website: null },
                { name: "Vitra (also German-based)", website: null },
                { name: "Girsberger", website: null },
                { name: "USM Modular Furniture", website: null }
            ],
            "Cosmetics": [
                { name: "La Prairie", website: null },
                { name: "Valmont", website: null },
                { name: "Mettler 1929", website: null },
                { name: "Arbonne (Swiss roots)", website: null },
                { name: "Declare", website: null },
                { name: "Lubex", website: null }
            ],
            "Clocks": [
                { name: "Rolex", website: "rolex.com" },
                { name: "Patek Philippe", website: "patek.com" },
                { name: "Omega", website: "omegawatches.com" }
            ],
            "Kitchen Cookware": [
                { name: "Kuhn Rikon", website: "kuhnrikon.com" },
                { name: "Victorinox", website: "victorinox.com" }
            ],
            "Perfumes": [
                { name: "La Prairie", website: "laprairie.com" },
                { name: "Valmont", website: "valmont.com" }
            ]
        },
        "Russia": {
            "Electronics": [
                { name: "Yandex (tech)", website: null },
                { name: "Elari", website: null },
                { name: "Prestigio", website: null },
                { name: "BQ Russia", website: null },
                { name: "Rostelecom", website: null },
                { name: "Tion", website: null }
            ],
            "Fashion": [
                { name: "Bosco", website: null },
                { name: "Ulyana Sergeenko", website: null },
                { name: "Walk of Shame", website: null },
                { name: "ZASPORT", website: null },
                { name: "Spasibo", website: null },
                { name: "Sorelle", website: null },
                { name: "Viva Vox", website: null }
            ],
            "Automotive": [
                { name: "Lada (AvtoVAZ)", website: null },
                { name: "GAZ", website: null },
                { name: "Kamaz", website: null },
                { name: "UAZ", website: null },
                { name: "Aurus Motors", website: null },
                { name: "ZIL", website: null }
            ],
            "Furniture": [
                { name: "Shatura", website: null },
                { name: "Dyatkovo", website: null },
                { name: "Angstrom", website: null },
                { name: "Lazurit", website: null },
                { name: "Stolplit", website: null },
                { name: "InterDesign", website: null }
            ],
            "Cosmetics": [
                { name: "Natura Siberica", website: null },
                { name: "Black Pearl", website: null },
                { name: "Faberlic", website: null },
                { name: "Librederm", website: null },
                { name: "Planeta Organica", website: null },
                { name: "Teana", website: null }
            ],
            "Clocks": [
                { name: "Vostok", website: "vostok-watches.com" },
                { name: "Raketa", website: "raketa.com" }
            ],
            "Kitchen Cookware": [
                { name: "Neva Metal Posuda", website: null }
            ],
            "Perfumes": [
                { name: "Brocard", website: "brocard.ru" },
                { name: "Faberlic", website: "faberlic.com" }
            ]
        }
    },
    "Arabian Region": {
        "United Arab Emirates": {
            "Electronics & Tech": [
                { name: "Etisalat", website: "etisalat.ae" },
                { name: "du", website: "du.ae" },
                { name: "GlobalLinker", website: "uae.globallinker.com" },
                { name: "Jumbo Electronics", website: "jumbo.ae" },
                { name: "Sharaf DG", website: "sharaf.com" }, // Corrected from sharafdg.com
                { name: "Gear-up.me", website: "gear-up.me" },
                { name: "Noon (e-commerce, also electronics)", website: "noon.com" },
                { name: "Al-Futtaim Electronics", website: "alfuttaim.com" },
                { name: "iStyle UAE", website: "istyle.ae" },
                { name: "Virgin Megastore", website: "virginmegastore.ae" }
            ],
            "Fashion": [
                { name: "The Giving Movement", website: "thegivingmovement.com" },
                { name: "House of Nomad", website: "houseofnomad.ae" },
                { name: "Bouguessa", website: "bouguessa.com" },
                { name: "Bambah", website: "bambah.com" },
                { name: "Kage", website: "bykage.com" },
                { name: "Taller Marmo", website: "tallermarmo.com" },
                { name: "Symphony", website: "symphony.ae" }, // Corrected from symposium.ae
                { name: "Namshi (E-commerce fashion)", website: "namshi.com" },
                { name: "SIVVI", website: "sivvi.com" },
                { name: "Ounass", website: "ounass.ae" }
            ],
            "Cosmetics": [
                { name: "Huda Beauty", website: "hudabeauty.com" },
                { name: "Wishful Skincare (by Huda)", website: "hudabeauty.com/wishful" },
                { name: "Shiffa", website: "shiffa.com" },
                { name: "Kayali", website: "kayalifragrance.com" },
                { name: "Izil Beauty", website: "izilbeauty.com" },
                { name: "K7L Cosmetics", website: "k7l.com" },
                { name: "The Dubai Perfumery", website: null },
                { name: "Swiss Arabian Perfumes", website: "swissarabian.com" },
                { name: "Ajmal Perfumes", website: "ajmalperfume.com" },
                { name: "Rasasi Perfumes", website: "rasasi.com" }
            ],
            "Automotive (assembly and sales)": [
                { name: "W Motors", website: "wmotors.ae" },
                { name: "Al-Futtaim Motors", website: "toyota.ae" },
                { name: "Gargash Motors", website: "gargash.ae" },
                { name: "Arabian Automobiles", website: "nissan-dubai.com" },
                { name: "Al Nabooda Automobiles", website: "nabooda-auto.com" }
            ],
            "Clocks": [
                { name: "Ahmed Seddiqi & Sons", website: "seddiqi.com" } // Retailer example
            ],
            "Kitchen Cookware": [
                { name: "Sharaf DG", website: "sharaf.com" }, // Retailer example
                { name: "Jumbo Electronics", website: "jumbo.ae" } // Retailer example
            ],
            "Perfumes": [
                { name: "Ajmal Perfumes", website: "ajmalperfume.com" },
                { name: "Rasasi Perfumes", website: "rasasi.com" },
                { name: "Swiss Arabian Perfumes", website: "swissarabian.com" },
                { name: "Kayali", website: "kayalifragrance.com" }
            ]
        },
        "Saudi Arabia": {
            "Electronics & Telecom": [
                { name: "STC (Saudi Telecom Company)", website: "stc.com.sa" },
                { name: "Mobily", website: "mobily.com.sa" },
                { name: "Zain KSA", website: "sa.zain.com" },
                { name: "Extra Stores", website: "extra.com" },
                { name: "Jarir Bookstore (also electronics)", website: "jarir.com" }
            ],
            "Fashion": [
                { name: "Toby by Hatem Alakeel", website: "tobysa.com" },
                { name: "Abadia", website: "abadia.me" },
                { name: "Nora Al Shaikh", website: "noraalshaikh.com" },
                { name: "Lomar", website: "lomar.sa" },
                { name: "Leem", website: "leem.com" },
                { name: "Sotra Fashion", website: "sotraonline.com" },
                { name: "R9", website: null },
                { name: "Shein KSA", website: "shein.com" },
                { name: "Ounass KSA", website: "ounass.com/sa-en" },
                { name: "Namshi KSA", website: "namshi.com" }
            ],
            "Cosmetics": [
                { name: "Najd Beauty", website: null },
                { name: "Oud Elite", website: "oudelite.com" },
                { name: "Al Rehab Perfumes", website: "al-rehab.com" },
                { name: "Swiss Arabian (strong local market)", website: null },
                { name: "Golden Scent", website: "goldenscent.com" },
                { name: "Ajmal Perfumes Saudi", website: null },
                { name: "Boutiqaat (Kuwaiti but popular in KSA)", website: "boutiqaat.com" }
            ],
            "Automotive": [
                { name: "SNAM Motors", website: null },
                { name: "Lucid Motors KSA Factory", website: null },
                { name: "Ceer Motors", website: "ceer.sa" },
                { name: "Petromin Nissan", website: null },
                { name: "Al Jazirah Vehicles Agencies (Ford)", website: null }
            ],
            "Clocks": [
                { name: "Al-Hussaini Trading", website: null } // Retailer example
            ],
            "Kitchen Cookware": [
                { name: "Extra Stores", website: "extra.com" }, // Retailer example
                { name: "Jarir Bookstore", website: "jarir.com" } // Retailer example
            ],
            "Perfumes": [
                { name: "Oud Elite", website: "oudelite.com" },
                { name: "Al Rehab Perfumes", website: "al-rehab.com" },
                { name: "Golden Scent", website: "goldenscent.com" }
            ]
        },
        "Qatar": {
            "Electronics/Tech": [
                { name: "Vodafone Qatar", website: "vodafone.qa" },
                { name: "Ooredoo Qatar", website: "ooredoo.qa" },
                { name: "Starlink", website: "starlink.qa" },
                { name: "Techno Blue", website: "technoblue.com" }
            ],
            "Fashion": [
                { name: "Q Label", website: "qlabel.qa" },
                { name: "Wadha", website: "wadha.me" },
                { name: "Tiiya", website: null },
                { name: "Amici di Moda", website: null },
                { name: "Almotahajiba", website: "almotahajiba.com" }
            ],
            "Cosmetics": [
                { name: "Wojooh Beauty (formerly Faces)", website: null },
                { name: "Ajmal Qatar", website: null },
                { name: "QPerfumes", website: null },
                { name: "Paris Gallery Qatar", website: null }
            ],
            "Clocks": [
                { name: "Al Fardan Jewellery", website: null } // Retailer example
            ],
            "Kitchen Cookware": [
                { name: "Techno Blue", website: "technoblue.com" } // Retailer example
            ],
            "Perfumes": [
                { name: "QPerfumes", website: "qperfumes.com" },
                { name: "Ajmal Qatar", website: "ajmalperfume.com" }
            ]
        },
        "Kuwait": {
            "Electronics": [
                { name: "Xcite by Alghanim Electronics", website: "xcite.com" },
                { name: "Best Al-Yousifi", website: "best.com.kw" },
                { name: "Eureka", website: "eureka.com.kw" }
            ],
            "Fashion": [
                { name: "Bazaar Fashion Kuwait", website: null },
                { name: "Lulu Alateeq", website: null },
                { name: "Marzook", website: "marzook.co" },
                { name: "Thouq", website: "thouq.com" },
                { name: "Kuwait Fashion House", website: null }
            ],
            "Cosmetics": [
                { name: "K7L Cosmetics", website: "k7l.com" },
                { name: "Boutiqaat", website: "boutiqaat.com" },
                { name: "The Perfume Bar", website: null },
                { name: "Al Hunaidi Perfumes", website: null }
            ],
            "Clocks": [
                { name: "Behbehani Watch Co.", website: null } // Retailer example
            ],
            "Kitchen Cookware": [
                { name: "Xcite by Alghanim Electronics", website: "xcite.com" } // Retailer example
            ],
            "Perfumes": [
                { name: "K7L Cosmetics", website: "k7l.com" },
                { name: "Boutiqaat", website: "boutiqaat.com" }
            ]
        }
    },
    "Africa": {
        "Nigeria": {
            "Electronics": [
                { name: "Zinox Technologies", website: null },
                { name: "Afrione", website: null },
                { name: "Solo Phone", website: null }
            ],
            "Fashion": [
                { name: "Orange Culture", website: null },
                { name: "Lisa Folawiyo", website: null },
                { name: "House of Tara", website: null }
            ],
            "Cosmetics": [
                { name: "Arami Essentials", website: null },
                { name: "House of Tara", website: null },
                { name: "Epara Skincare", website: null }
            ],
            "Automotive": [
                { name: "Innoson Vehicle Manufacturing", website: null },
                { name: "Mikano Motors", website: null }
            ],
            "Clocks": [
                { name: "Timepiece Nigeria", website: null } // Retailer/local example
            ],
            "Kitchen Cookware": [
                { name: "Dangote", website: null } // Diversified conglomerate, might have kitchenware
            ],
            "Perfumes": [
                { name: "House of Tara", website: null } // Cosmetics brand with possible perfumes
            ]
        },
        "Kenya": {
            "Electronics": [
                { name: "Safaricom", website: null },
                { name: "Wiko Kenya", website: null }
            ],
            "Fashion": [
                { name: "Adele Dejak", website: null },
                { name: "KikoRomeo", website: null }
            ],
            "Cosmetics": [
                { name: "Pauline Cosmetics", website: null },
                { name: "Huddah Cosmetics", website: null }
            ],
            "Furniture": [
                { name: "Victoria Courts", website: null },
                { name: "Odds & Ends", website: null }
            ],
            "Clocks": [
                { name: "Kenya Time", website: null } // Generic/local example
            ],
            "Kitchen Cookware": [
                { name: "Ramtons", website: "ramtons.com" }
            ],
            "Perfumes": [
                { name: "Pauline Cosmetics", website: null }
            ]
        },
        "South Africa": {
            "Electronics": [
                { name: "Mecer", website: null },
                { name: "Onyx Connect", website: null },
                { name: "Takealot", website: null }
            ],
            "Fashion": [
                { name: "Maxhosa Africa", website: null },
                { name: "Thebe Magugu", website: null }
            ],
            "Cosmetics": [
                { name: "Africology", website: null },
                { name: "Lelive", website: null }
            ],
            "Furniture": [
                { name: "Coricraft", website: null },
                { name: "Weylandts", website: null }
            ],
            "Clocks": [
                { name: "Watch Republic", website: "watchrepublic.co.za" } // Retailer example
            ],
            "Kitchen Cookware": [
                { name: "Defy", website: "defy.co.za" },
                { name: "Russell Hobbs", website: "russellhobbs.co.za" }
            ],
            "Perfumes": [
                { name: "Africology", website: "africology-sa.com" }
            ]
        },
        "Ghana": {
            "Electronics": [
                { name: "RLG Communications", website: null }
            ],
            "Fashion": [
                { name: "Christie Brown", website: null },
                { name: "Duaba Serwaa", website: null }
            ],
            "Cosmetics": [
                { name: "R&R Luxury", website: null },
                { name: "Skin Gourmet", website: null }
            ],
            "Footwear": [
                { name: "Mawu Africa", website: null }
            ],
            "Clocks": [
                { name: "Ghana Clocks", website: null } // Generic/local example
            ],
            "Kitchen Cookware": [
                { name: "Nasco", website: null } // Appliance brand
            ],
            "Perfumes": [
                { name: "R&R Luxury", website: null }
            ]
        },
        "Egypt": {
            "Electronics": [
                { name: "El-Araby Group", website: null },
                { name: "Fresh Electric", website: null },
                { name: "Unionaire", website: null }
            ],
            "Fashion": [
                { name: "Okhtein", website: null },
                { name: "Dalydress", website: null },
                { name: "Mix & Match", website: null }
            ],
            "Furniture": [
                { name: "Mobica", website: null },
                { name: "[Damietta Brands]", website: null }
            ],
            "Cosmetics": [
                { name: "Eva Cosmetics", website: null },
                { name: "Infinity Pharma", website: null }
            ],
            "Clocks": [
                { name: "El-Araby Group", website: null } // Diversified electronics
            ],
            "Kitchen Cookware": [
                { name: "Fresh Electric", website: null }, // Appliance brand
                { name: "Zanussi Egypt", website: null }
            ],
            "Perfumes": [
                { name: "Eva Cosmetics", website: null }
            ]
        }
    }
};

// Populate missing websites using the defined pattern
for (const continentKey in brandData) {
    for (const countryKey in brandData[continentKey]) {
        const countryCode = countryCodeMap[countryKey];
        if (!countryCode) {
            console.warn(`No country code found for country: ${countryKey}. Skipping website generation for its brands.`);
            continue;
        }
        for (const categoryKey in brandData[continentKey][countryKey]) {
            const brands = brandData[continentKey][countryKey][categoryKey];
            brands.forEach(brand => {
                // Only generate if website is currently null (i.e., not explicitly provided)
                if (brand.website === null) {
                    const sanitizedName = sanitizeBrandNameForUrl(brand.name);
                    // Removed country code from generated URL
                    brand.website = `www.${sanitizedName}.com`;
                }
            });
        }
    }
}


// DOM Element References
const continentNav = document.getElementById('continent-nav');
const aboutSection = document.getElementById('about-section');
const countryListSection = document.getElementById('country-list');
const categoryListSection = document.getElementById('category-list');
const brandListSection = document.getElementById('brand-list');
const themeToggleButton = document.getElementById('theme-toggle'); // Get the theme toggle button

const currentContinentName = document.getElementById('current-continent-name');
const currentCountryName = document.getElementById('current-country-name');
const currentCategoryName = document.getElementById('current-category-name');
const currentBrandCountryName = document.getElementById('current-brand-country-name');

const countriesContainer = document.getElementById('countries-container');
const categoriesContainer = document.getElementById('categories-container');
const brandsContainer = document.getElementById('brands-container');

// State variables to keep track of the current navigation path
let activeContinent = null;
let activeCountry = null;
let activeCategory = null;

/**
 * Hides all content sections to prepare for displaying a new one.
 */
function hideAllSections() {
    aboutSection.classList.add('hidden-section');
    countryListSection.classList.add('hidden-section');
    categoryListSection.classList.add('hidden-section');
    brandListSection.classList.add('hidden-section');
}

/**
 * Renders the continent navigation buttons.
 * This is the initial view of the directory.
 */
function renderContinents() {
    continentNav.innerHTML = ''; // Clear previous buttons
    const continentImageMap = {
        "Asia": "asia.jpeg",
        "Europe": "europe.jpeg",
        "Arabian Region": "arabia.jpeg", // Using 'arabian.jpg' for Arabian Region
        "Africa": "africa.jpeg"
    };

    Object.keys(brandData).forEach(continent => {
        const button = document.createElement('button');
        button.classList.add('continent-button');
        button.dataset.continent = continent; // Store continent name for later use
        button.addEventListener('click', () => showCountries(continent));

        const img = document.createElement('img');
        img.src = `pics/${continentImageMap[continent]}`;
        img.alt = continent;
        img.classList.add('continent-image');

        const span = document.createElement('span');
        span.textContent = continent;

        button.appendChild(img);
        button.appendChild(span);
        continentNav.appendChild(button);
    });
    // Show the "About" section by default or when returning to continents view
    hideAllSections();
    // The HTML structure now places #content-area (which contains #about-section) before #continent-nav
    // So, we just need to ensure the about section is visible.
    aboutSection.classList.remove('hidden-section');
}

/**
 * Displays the list of countries for a selected continent.
 * @param {string} continent - The name of the selected continent.
 */
function showCountries(continent) {
    activeContinent = continent;
    activeCountry = null; // Reset country selection when moving up
    activeCategory = null; // Reset category selection when moving up

    hideAllSections();
    countryListSection.classList.remove('hidden-section');
    currentContinentName.textContent = continent; // Update the header
    countriesContainer.innerHTML = ''; // Clear previous country buttons

    const countries = brandData[continent];
    if (countries) {
        Object.keys(countries).forEach(country => {
            const button = document.createElement('button');
            button.classList.add('country-button');
            button.textContent = country;
            button.dataset.country = country; // Store country name
            button.addEventListener('click', () => showCategories(continent, country));
            countriesContainer.appendChild(button);
        });
    }
}

/**
 * Displays the list of categories for a selected country.
 * @param {string} continent - The name of the current continent.
 * @param {string} country - The name of the selected country.
 */
function showCategories(continent, country) {
    activeCountry = country;
    activeCategory = null; // Reset category selection when moving up

    hideAllSections();
    categoryListSection.classList.remove('hidden-section');
    currentCountryName.textContent = country; // Update the header
    categoriesContainer.innerHTML = ''; // Clear previous category buttons

    const categories = brandData[continent][country];
    if (categories) {
        Object.keys(categories).forEach(category => {
            const button = document.createElement('button');
            button.classList.add('category-button');
            button.textContent = category;
            button.dataset.category = category; // Store category name
            button.addEventListener('click', () => showBrands(continent, country, category));
            categoriesContainer.appendChild(button);
        });
    }
}

/**
 * Displays the list of brands for a selected category.
 * @param {string} continent - The name of the current continent.
 * @param {string} country - The name of the current country.
 * @param {string} category - The name of the selected category.
 */
function showBrands(continent, country, category) {
    activeCategory = category;

    hideAllSections();
    brandListSection.classList.remove('hidden-section');
    currentCategoryName.textContent = category; // Update the header
    currentBrandCountryName.textContent = country; // Update the header to show country context
    brandsContainer.innerHTML = ''; // Clear previous brands

    const brands = brandData[continent][country][category];
    if (brands && brands.length > 0) {
        brands.forEach(brand => {
            const listItem = document.createElement('li');
            listItem.classList.add('brand-item');

            const brandName = document.createElement('strong');
            brandName.textContent = brand.name;
            listItem.appendChild(brandName);

            if (brand.website) {
                const link = document.createElement('a');
                let fullUrl = brand.website;
                // Ensure the URL starts with http:// or https:// for proper linking
                if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
                    fullUrl = `http://${fullUrl}`;
                }
                link.href = fullUrl;
                link.textContent = brand.website;
                link.target = "_blank"; // Open in new tab
                link.rel = "noopener noreferrer"; // Security best practice
                listItem.appendChild(link);
            } else {
                // This block should ideally not be reached if generation works, but kept as fallback
                const noWebsite = document.createElement('span');
                noWebsite.textContent = "Website not available";
                noWebsite.style.fontSize = '0.8em';
                noWebsite.style.color = 'gray';
                listItem.appendChild(noWebsite);
            }
            brandsContainer.appendChild(listItem);
        });
    } else {
        const noBrandsMessage = document.createElement('li');
        noBrandsMessage.textContent = "No brands found for this category.";
        brandsContainer.appendChild(noBrandsMessage);
    }
}

/**
 * Handles clicks on the back buttons to navigate up the directory hierarchy.
 */
document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const target = event.target.dataset.target; // Get the target view from data-target attribute
        if (target === 'continents') {
            renderContinents();
        } else if (target === 'countries') {
            if (activeContinent) {
                showCountries(activeContinent);
            } else {
                renderContinents(); // Fallback if activeContinent is somehow lost
            }
        } else if (target === 'categories') {
            if (activeContinent && activeCountry) {
                showCategories(activeContinent, activeCountry);
            } else {
                showCountries(activeContinent); // Fallback if activeCountry is lost
            }
        }
    });
});

// --- Theme Toggle Logic ---
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleButton.textContent = isDark ? '💡' : '🌙';

    // Re-initialize 3D scene based on new theme
    init3D();    // Initialize new scene
    animate3D(); // Start animation loop for new scene
});

// Initial render for the directory content and 3D scene on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleButton.textContent = '💡';
    } else {
        themeToggleButton.textContent = '�';
    }
    renderContinents(); // Render the main content
    init3D();           // Initialize the 3D background
    animate3D();        // Start the 3D animation loop
});


// --- Three.js 3D Background Animation ---
let scene, camera, renderer, particles, animationFrameId; // Added animationFrameId for proper cleanup
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

// Function to dispose of Three.js resources
function dispose3D() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (scene) {
        scene.traverse(object => {
            if (object.isMesh || object.isPoints) {
                if (object.geometry) {
                    object.geometry.dispose();
                }
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            }
        });
        while(scene.children.length > 0){ 
            scene.remove(scene.children[0]); 
        }
    }
    if (renderer) {
        renderer.dispose();
        renderer = null; // Clear renderer reference
    }
    scene = null;
    camera = null;
    particles = null;
}


function init3D() {
    // Dispose of previous scene if it exists
    dispose3D();

    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Scene
    scene = new THREE.Scene();
    // Background color for 3D scene (subtle, or transparent to use CSS body background)
    scene.background = isDarkTheme ? new THREE.Color(0x0a0a1a) : null; // Dark blue for milky way, null for light theme to show CSS bg

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.z = isDarkTheme ? 15 : 10; // Further back for milky way, closer for waves

    // Renderer
    const canvas = document.getElementById('three-canvas');
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: !isDarkTheme }); // Alpha true for light theme
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Particles configuration based on theme
    let particleCount, particleSize, colorPalette, volumeWidth, volumeHeight, volumeDepth, offsetX;

    if (isDarkTheme) {
        // Milky Way configuration
        particleCount = 5000;
        particleSize = 0.05;
        colorPalette = [
            0xFFFFFF, // White
            0xF0F8FF, // AliceBlue
            0x87CEEB, // SkyBlue
            0x9370DB, // MediumPurple
            0xADD8E6, // LightBlue
            0xB0E0E6  // PowderBlue
        ];
        volumeWidth = window.innerWidth / 100; // Spread across more of the screen
        volumeHeight = window.innerHeight / 100;
        volumeDepth = 50; // Deeper field
        offsetX = 0; // Centered
    } else {
        // Sea Waves configuration
        particleCount = 2000;
        particleSize = 0.02;
        colorPalette = [
            0xFFD700, // Gold
            0xFFA07A, // Light Salmon
            0xADD8E6, // Light Blue
            0x90EE90, // Light Green
            0xEE82EE, // Violet
            0xFFC0CB, // Pink
            0x87CEEB  // Sky Blue
        ];
        volumeWidth = 5; // Width of the "line"
        volumeHeight = 15; // Height of the "line"
        offsetX = 10; // Offset to place it on the right side
        volumeDepth = 10; // Depth of the "line"
    }

    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
        // Position particles within the defined volume
        positions[i * 3] = (Math.random() * volumeWidth) - (volumeWidth / 2) + offsetX;
        positions[i * 3 + 1] = (Math.random() * volumeHeight) - (volumeHeight / 2);
        positions[i * 3 + 2] = (Math.random() * volumeDepth) - (volumeDepth / 2);

        // Initial velocities for subtle movement
        velocities[i * 3] = (Math.random() - 0.5) * 0.005;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

        // Assign random color from palette
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        color.setHex(randomColor);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: particleSize,
        vertexColors: true,
        transparent: true,
        opacity: isDarkTheme ? 0.5 : 0.7, // More opaque for light theme
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Add subtle light sources
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Event listeners for mouse interaction (for camera movement)
    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('mouseup', onMouseUp, false);

    // Handle window resizing
    window.addEventListener('resize', onWindowResize, false);
}

function onMouseDown(event) {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

function onMouseMove(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;

    // Rotate the particle system based on mouse movement
    particles.rotation.y += deltaX * 0.002;
    particles.rotation.x += deltaY * 0.002;

    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

function onMouseUp(event) {
    isDragging = false;
}

function onWindowResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function animate3D() {
    animationFrameId = requestAnimationFrame(animate3D);

    if (!particles || !renderer || !camera) return; // Ensure Three.js elements are initialized

    const positions = particles.geometry.attributes.position.array;
    const velocities = particles.geometry.attributes.velocity.array;
    const now = Date.now() * 0.0001;

    const isDarkTheme = document.body.classList.contains('dark-theme');

    for (let i = 0; i < positions.length / 3; i++) {
        // Update position based on velocity
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        if (!isDarkTheme) {
            // Light theme: Add a subtle wave-like motion
            positions[i * 3 + 1] += Math.sin(now + i * 0.1) * 0.001; // Vertical wave
            positions[i * 3 + 2] += Math.cos(now + i * 0.1) * 0.001; // Depth wave

            // Reset particles for "sea waves" effect on the right side
            const volumeWidth = 5;
            const volumeHeight = 15;
            const volumeDepth = 10;
            const offsetX = 10;

            if (positions[i * 3] > offsetX + volumeWidth / 2) positions[i * 3] = offsetX - volumeWidth / 2;
            if (positions[i * 3] < offsetX - volumeWidth / 2) positions[i * 3] = offsetX + volumeWidth / 2;

            if (positions[i * 3 + 1] > volumeHeight / 2) positions[i * 3 + 1] = -volumeHeight / 2;
            if (positions[i * 3 + 1] < -volumeHeight / 2) positions[i * 3 + 1] = volumeHeight / 2;

            if (positions[i * 3 + 2] > volumeDepth / 2) positions[i * 3 + 2] = -volumeDepth / 2;
            if (positions[i * 3 + 2] < -volumeDepth / 2) positions[i * 3 + 2] = volumeDepth / 2;

        } else {
            // Dark theme: Reset particles for "milky way" effect (full screen)
            const volumeWidth = window.innerWidth / 100;
            const volumeHeight = window.innerHeight / 100;
            const volumeDepth = 50;

            if (positions[i * 3] > volumeWidth / 2) positions[i * 3] = -volumeWidth / 2;
            if (positions[i * 3] < -volumeWidth / 2) positions[i * 3] = volumeWidth / 2;

            if (positions[i * 3 + 1] > volumeHeight / 2) positions[i * 3 + 1] = -volumeHeight / 2;
            if (positions[i * 3 + 1] < -volumeHeight / 2) positions[i * 3 + 1] = volumeHeight / 2;

            if (positions[i * 3 + 2] > volumeDepth / 2) positions[i * 3 + 2] = -volumeDepth / 2;
            if (positions[i * 3 + 2] < -volumeDepth / 2) positions[i * 3 + 2] = volumeDepth / 2;
        }
    }

    particles.geometry.attributes.position.needsUpdate = true; // Mark positions as updated

    // Continuous rotation for particles if not dragging
    if (!isDragging) {
        particles.rotation.y += isDarkTheme ? 0.0001 : 0.0005; // Slower drift for milky way
    }

    renderer.render(scene, camera);
}
