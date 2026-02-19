export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description: string;
  fullDescription: string;
  location: string;
  area: string;
  year: string;
  images: string[];
  features: string[];
  architect?: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "limestone-residence",
    title: "Limestone Residence",
    category: "Konut",
    image: "/hero.jpg",
    aspect: "aspect-[3/4]",
    description: "Doğal malzemeleri çağdaş tasarımla harmanlayan modern bir konut şaheseri.",
    fullDescription: "Limestone Residence, geleneksel Akdeniz mimarisinin çağdaş tasarım ilkeleriyle uyumlu bir birleşimini temsil eder. Proje, yerel kireçtaşının güzelliğini sergileyerek hem zamansız hem de modern hissettiren bir yapı oluşturur. Geniş cam alanlar, mahremiyeti korurken çevredeki peyzajla bağlantıyı sürdürerek iç mekanlara doğal ışığın dolmasına olanak tanır.",
    location: "Bodrum, Turkey",
    area: "450 sqm",
    year: "2024",
    images: [
      "/hero.jpg",
      "/hero.jpg",
      "/hero.jpg",
    ],
    features: [
      "Yerel malzemelerle sürdürülebilir tasarım",
      "Açık plan yaşam alanları",
      "Deniz manzaralı sonsuzluk havuzu",
      "Doğal taş cepheler",
      "Enerji verimli sistemler",
    ],
    architect: "Atelier Architecture",
    client: "Özel",
  },
  {
    id: "2",
    slug: "the-vault-gallery",
    title: "The Vault Gallery",
    category: "Kültürel",
    image: "/hero.jpg",
    aspect: "aspect-[4/3]",
    description: "Modern sanat eserlerini ilham verici bir ortamda sergilemek için tasarlanmış çağdaş bir sanat galerisi mekanı.",
    fullDescription: "The Vault Gallery, mimari tasarımı aracılığıyla çağdaş sanatı kutlayan, özel olarak inşa edilmiş bir kültürel mekandır. Bina, esnek sergi alanları, dikkatle kontrol edilen doğal aydınlatma ve sanat eserlerinin merkezde yer almasına olanak tanıyan minimalist bir estetik özelliğe sahiptir. Tasarım, hassas sanat eserlerini korumak için sürdürülebilir malzemeler ve yenilikçi iklim kontrol sistemleri içerir.",
    location: "Istanbul, Turkey",
    area: "1,200 sqm",
    year: "2023",
    images: [
      "/hero.jpg",
      "/hero.jpg",
      "/hero.jpg",
    ],
    features: [
      "Esnek sergi alanları",
      "Doğal ışık kontrol sistemleri",
      "İklim kontrollü galeriler",
      "Halka açık avlu",
      "Erişilebilirlik odaklı tasarım",
    ],
    architect: "Atelier Architecture",
    client: "İstanbul Sanat Vakfı",
  },
  {
    id: "3",
    slug: "meridian-office-tower",
    title: "Meridian Office Tower",
    category: "Ticari",
    image: "/hero.jpg",
    aspect: "aspect-[3/4]",
    description: "Sürdürülebilir tasarımla kentsel silüeti yeniden tanımlayan şık bir yüksek katlı ofis binası.",
    fullDescription: "Meridian Office Tower, işlevselliği estetik mükemmellikle birleştirerek modern ticari mimarinin bir kanıtıdır. Bina, esnek ofis alanları, son teknoloji tesisler ve sürdürülebilir tasarım öğeleri içerir. Cephe, akıllı gölgeleme sistemleri ve yeşil bina teknolojileri içererek, çevresel etkiyi en aza indirirken rahat bir çalışma ortamı yaratır.",
    location: "Ankara, Turkey",
    area: "15,000 sqm",
    year: "2023",
    images: [
      "/hero.jpg",
      "/hero.jpg",
      "/hero.jpg",
    ],
    features: [
      "LEED Gold sertifikalı",
      "Akıllı bina sistemleri",
      "Yeşil çatı terası",
      "Esnek ofis düzenleri",
      "Premium olanaklar",
    ],
    architect: "Atelier Architecture",
    client: "Meridian Development",
  },
  {
    id: "4",
    slug: "casa-serena",
    title: "Casa Serena",
    category: "Konut",
    image: "/hero.jpg",
    aspect: "aspect-[4/5]",
    description: "Kesintisiz iç-dış mekan bağlantılarıyla modern yaşam için tasarlanmış huzurlu bir aile evi.",
    fullDescription: "Casa Serena, düşünceli tasarım aracılığıyla huzurlu yaşam kavramını somutlaştırır. Konut, çevredeki bahçelerle sorunsuz bir şekilde bağlanan açık, akıcı alanlar içerir. Doğal malzemeler ve nötr renk paleti sakin bir atmosfer yaratırken, büyük pencereler peyzaj manzaralarını çerçeveler. Tasarım, gün boyunca farklı aktivitelere uyum sağlayan esnek alanlarla aile yaşamını önceliklendirir.",
    location: "Antalya, Turkey",
    area: "380 sqm",
    year: "2024",
    images: [
      "/hero.jpg",
      "/hero.jpg",
      "/hero.jpg",
    ],
    features: [
      "Kesintisiz iç-dış mekan yaşamı",
      "Özel bahçe alanları",
      "Aile dostu tasarım",
      "Doğal malzeme paleti",
      "Sürdürülebilir enerji sistemleri",
    ],
    architect: "Atelier Architecture",
    client: "Özel",
  },
  {
    id: "5",
    slug: "urban-courtyard",
    title: "Urban Courtyard",
    category: "Kamusal Alan",
    image: "/hero.jpg",
    aspect: "aspect-[4/3]",
    description: "Düşünceli kentsel tasarım aracılığıyla toplulukları bir araya getiren canlı bir kamusal alan.",
    fullDescription: "Urban Courtyard, ihmal edilmiş bir kentsel alanı gelişen bir topluluk merkezine dönüştürür. Tasarım, sessiz tefekkürden aktif rekreasyona kadar farklı aktiviteler için çoklu bölgeler yaratır. Yerli bitkilendirme, sürdürülebilir malzemeler ve erişilebilir yollar, mekanın herkese açık olmasını sağlar. Proje, düşünceli tasarımın kentsel mahalleleri nasıl canlandırabileceğini ve topluluk bağlarını nasıl güçlendirebileceğini gösterir.",
    location: "Izmir, Turkey",
    area: "2,500 sqm",
    year: "2023",
    images: [
      "/hero.jpg",
      "/hero.jpg",
      "/hero.jpg",
    ],
    features: [
      "Topluluk buluşma alanları",
      "Yerli bitki peyzajı",
      "Erişilebilir tasarım",
      "Sürdürülebilir drenaj sistemleri",
      "Kamusal sanat entegrasyonu",
    ],
    architect: "Atelier Architecture",
    client: "İzmir Belediyesi",
  },
  {
    id: "6",
    slug: "horizon-pavilion",
    title: "Horizon Pavilion",
    category: "Kültürel",
    image: "/hero.jpg",
    aspect: "aspect-[3/4]",
    description: "Mimarlık ve peyzaj arasındaki ilişkiyi kutlayan minimalist bir pavyon.",
    fullDescription: "Horizon Pavilion, çevredeki peyzajın manzaralarını çerçevelemek için tasarlanmış düşünsel bir mekandır. Minimalist yapı, güçlü bir mimari ifade yaratmak için basit malzemeler - beton, cam ve çelik - kullanır. Pavyon, kültürel etkinlikler, sergiler ve sessiz tefekkür için bir mekan olarak hizmet eder. Tasarımı, yapılı form ile doğal çevre arasındaki bağlantıyı vurgular.",
    location: "Cappadocia, Turkey",
    area: "320 sqm",
    year: "2024",
    images: [
      "/hero.jpg",
      "/hero.jpg",
      "/hero.jpg",
    ],
    features: [
      "Minimalist tasarım felsefesi",
      "Panoramik peyzaj manzaraları",
      "Çok amaçlı kültürel mekan",
      "Sürdürülebilir yapı",
      "Doğal ortamla entegrasyon",
    ],
    architect: "Atelier Architecture",
    client: "Kapadokya Kültür Vakfı",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0]; // İlk projeye dön
  }
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) {
    return projects[projects.length - 1]; // Son projeye git
  }
  return projects[currentIndex - 1];
}
