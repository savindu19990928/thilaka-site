export type WellnessGroup =
  | "Daily & General Wellness"
  | "Internal & Metabolic"
  | "Mobility & Structural"
  | "Personal & Life-Stage";

export type CategoryIconName =
  | "leaf"
  | "wind"
  | "activity"
  | "flower"
  | "sparkles"
  | "shield"
  | "droplets"
  | "scale"
  | "heart"
  | "smile"
  | "bone"
  | "sun";

export interface ProductCategory {
  slug: string;
  index: string;
  name: string;
  group: WellnessGroup;
  shortDescription: string;
  overview: string;
  guidancePoints: string[];
  recommendedForms: string[];
  iconName: CategoryIconName;
  featured: boolean;
  availabilityLabel: "Contact shop to confirm";
  relatedSlugs: string[];
}

export interface ProductForm {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  formatType: string;
  typicalUseContext: string;
  summary: string;
  detail: string;
  shopNote: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  guidanceNote: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface QualityPillar {
  index: string;
  title: string;
  summary: string;
  verificationNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_URL = "https://www.thilakaayurveda.lk";
export const SITE_LAST_UPDATED_ISO = "2026-11-23";
export const SITE_LAST_UPDATED_LABEL = "November 2026";

export const BUSINESS_INFO = {
  name: "Thilaka Ayurveda",
  tagline: "Traditional Ayurvedic knowledge. Personal care. Natural wellness.",
  establishedYear: "1982",
  establishedNote:
    "Established in 1982 according to Thilaka Ayurveda's official website.",
  address: "No. 38, Main Street, Ruwanwella, Sri Lanka",
  shortAddress: "No. 38, Main Street, Ruwanwella",
  phoneDisplay: "+94 36 226 6693",
  phoneHref: "tel:+94362266693",
  website: "https://www.thilakaayurveda.lk/",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Thilaka+Ayurveda,+No.+38,+Main+Street,+Ruwanwella,+Sri+Lanka",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=No.+38,+Main+Street,+Ruwanwella,+Sri+Lanka&output=embed",
  hoursAdvisory:
    "Please call +94 36 226 6693 before visiting to confirm current opening hours and public holiday arrangements.",
  catalogueNotice:
    "This website is a product catalogue only. Online purchases and orders are not available. To purchase a product, please visit our shop at No. 38, Main Street, Ruwanwella, Sri Lanka. Contact us to ask about product information or current availability before visiting.",
  medicalNotice:
    "Information on this website is provided for general product and business information. It is not a substitute for diagnosis, treatment or advice from a qualified healthcare professional. Product ingredients, directions, suitability and availability should be confirmed for each product before use.",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products/", label: "Products" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/quality/", label: "Quality & FAQs" },
  { href: "/contact/", label: "Contact" },
] as const;

export const WELLNESS_GROUPS: WellnessGroup[] = [
  "Daily & General Wellness",
  "Internal & Metabolic",
  "Mobility & Structural",
  "Personal & Life-Stage",
];

export const PRODUCT_FORMS: ProductForm[] = [
  {
    id: "churna",
    slug: "churna",
    name: "Churna",
    subtitle: "Fine Herbal Powders",
    formatType: "Dry milled botanical powder",
    typicalUseContext:
      "Mixed or taken as directed on verified manufacturer labels",
    summary: "Traditional powdered herbal preparations.",
    detail:
      "Finely milled botanical powders prepared from dried roots, barks, leaves, seeds, or spices according to traditional Ayurvedic formulations.",
    shopNote:
      "Ask at our Ruwanwella shop to review available Churna preparations, pack sizes, verified ingredients, and label directions.",
  },
  {
    id: "vati-gutika",
    slug: "vati-gutika",
    name: "Vati / Gutika",
    subtitle: "Herbal Tablets & Pills",
    formatType: "Compressed herbal tablets or pills",
    typicalUseContext:
      "Standardized individual servings per verified product label",
    summary: "Traditional herbal tablets or pills.",
    detail:
      "Measured traditional tablet and pill preparations formulated for convenient handling and clear, standardized serving guidance from product labels.",
    shopNote:
      "Speak with our staff in person or by phone to check current Vati / Gutika availability and manufacturer label details.",
  },
  {
    id: "medicated-oils",
    slug: "medicated-oils",
    name: "Medicated Oils",
    subtitle: "Herbal Infused Oils (Taila)",
    formatType: "Botanical oil infusion in glass or sealed bottle",
    typicalUseContext:
      "External or specified traditional applications (confirm label)",
    summary:
      "Herbal oils intended for specified applications. Product-specific directions must be confirmed.",
    detail:
      "Traditional herbal oil infusions prepared for external or specific traditional applications. Usage, warming instructions, and precautions vary by preparation.",
    shopNote:
      "Always confirm product-specific application directions, contraindications, and storage guidance at our shop before use.",
  },
  {
    id: "arishta-asava",
    slug: "arishta-asava",
    name: "Arishta / Asava",
    subtitle: "Fermented Herbal Liquids",
    formatType: "Classical fermented liquid decoction or infusion",
    typicalUseContext:
      "Measured liquid portions following verified label guidance",
    summary: "Traditional fermented herbal liquid preparations.",
    detail:
      "Classical liquid Ayurvedic preparations created through controlled natural fermentation of herbal decoctions or infusions.",
    shopNote:
      "Visit or call our Ruwanwella shop to ask about current Arishta / Asava preparations, bottle sizes, and label guidance.",
  },
  {
    id: "raw-herbs",
    slug: "raw-herbs",
    name: "Raw Herbs",
    subtitle: "Fresh & Dried Botanicals",
    formatType: "Whole, cut, fresh, or dried plant parts & spices",
    typicalUseContext:
      "Home infusions or practitioner-guided traditional preparations",
    summary: "Fresh or dried herbal ingredients, subject to availability.",
    detail:
      "Whole, cut, or dried traditional medicinal plant parts and spices selected for home or practitioner-directed preparations.",
    shopNote:
      "Because raw botanical availability varies by harvest and season, please call +94 36 226 6693 prior to visiting.",
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "digestive-health",
    index: "01",
    name: "Digestive Health",
    group: "Internal & Metabolic",
    shortDescription: "Products presented for digestive and gut wellness.",
    overview:
      "Explore traditional Ayurvedic preparations presented for digestive balance and everyday gut comfort. Specific product names, ingredients, pack sizes, and usage directions vary by formulation and are confirmed directly at our Ruwanwella shop.",
    guidancePoints: [
      "Enquire at the shop for available Churna, Vati / Gutika, or Arishta / Asava formulations in this category.",
      "Review label ingredients, storage notes, and preparation directions with our staff before purchase.",
      "Consult a qualified healthcare professional if you have an ongoing digestive condition or take regular medication.",
    ],
    recommendedForms: ["Churna", "Vati / Gutika", "Arishta / Asava", "Raw Herbs"],
    iconName: "leaf",
    featured: true,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["detox-and-cleansing", "diabetes-and-metabolic-health", "weight-management"],
  },
  {
    slug: "respiratory-care",
    index: "02",
    name: "Respiratory Care",
    group: "Daily & General Wellness",
    shortDescription: "Products presented for respiratory wellness and immunity.",
    overview:
      "Browse Ayurvedic categories featuring herbal preparations and traditional botanicals presented for respiratory comfort and seasonal care. Product availability and verified formulation details are confirmed in person or by telephone.",
    guidancePoints: [
      "Ask about traditional powders, syrups, liquids, or topical herbal balms and oils carried in store.",
      "Confirm suitability, age guidance, and product directions directly from verified packaging at the counter.",
      "Seek prompt medical care for persistent cough, fever, or breathing difficulties.",
    ],
    recommendedForms: ["Churna", "Arishta / Asava", "Medicated Oils", "Raw Herbs"],
    iconName: "wind",
    featured: true,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["immune-support", "elderly-care", "digestive-health"],
  },
  {
    slug: "joint-and-muscle-care",
    index: "03",
    name: "Joint & Muscle Care",
    group: "Mobility & Structural",
    shortDescription: "Products presented for joint and muscle wellness.",
    overview:
      "Traditional Sri Lankan and classical Ayurvedic preparations presented for everyday joint comfort, muscular care, and topical application routines. Specific products and external application oils are confirmed directly at the shop.",
    guidancePoints: [
      "Enquire about traditional medicated oils (Taila) and internal herbal preparations currently available.",
      "Confirm whether an oil is strictly for external use and verify warming or massage directions on the label.",
      "Consult a qualified healthcare professional for acute injuries, persistent swelling, or chronic joint symptoms.",
    ],
    recommendedForms: ["Medicated Oils", "Vati / Gutika", "Churna"],
    iconName: "activity",
    featured: true,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["bone-and-spine-health", "elderly-care", "respiratory-care"],
  },
  {
    slug: "womens-health",
    index: "04",
    name: "Women's Health",
    group: "Personal & Life-Stage",
    shortDescription: "Products presented for women's wellness.",
    overview:
      "Herbal formulations and traditional Ayurvedic preparations presented for women's general wellbeing across different life stages. Customers are encouraged to visit or call the shop to discuss product options and label guidance responsibly.",
    guidancePoints: [
      "Speak with our Ruwanwella shop team about currently stocked herbal liquids, tablets, and botanical preparations.",
      "Always inform staff and consult a qualified healthcare professional if you are pregnant, trying to conceive, or breastfeeding.",
      "Verify manufacturer ingredients and directions on each package prior to purchase at the shop.",
    ],
    recommendedForms: ["Arishta / Asava", "Vati / Gutika", "Churna", "Raw Herbs"],
    iconName: "flower",
    featured: false,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["skin-and-hair-care", "immune-support", "bone-and-spine-health"],
  },
  {
    slug: "skin-and-hair-care",
    index: "05",
    name: "Skin & Hair Care",
    group: "Personal & Life-Stage",
    shortDescription: "Products presented for skin and hair care.",
    overview:
      "Traditional herbal oils, cleansing powders, and botanical preparations presented for skin and hair care routines. Visit our shop at No. 38, Main Street, Ruwanwella to inspect specific items and packaging details.",
    guidancePoints: [
      "Enquire about traditional medicated hair oils, herbal skin powders, and dried botanical ingredients.",
      "Confirm full ingredient lists on product labels, particularly if you have sensitive skin or known plant allergies.",
      "External products should be patch-tested according to manufacturer directions.",
    ],
    recommendedForms: ["Medicated Oils", "Churna", "Raw Herbs"],
    iconName: "sparkles",
    featured: true,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["detox-and-cleansing", "womens-health", "oral-and-dental-care"],
  },
  {
    slug: "immune-support",
    index: "06",
    name: "Immune Support",
    group: "Daily & General Wellness",
    shortDescription: "Herbal products presented for general immune support.",
    overview:
      "Ayurvedic preparations and traditional botanicals presented for daily vitality and general immune support. Call or visit Thilaka Ayurveda to check which preparations are currently available in store.",
    guidancePoints: [
      "Ask about traditional rasayana-inspired powders, tablets, herbal liquids, and dried herbs stocked at the shop.",
      "Check product labels for age suitability, serving instructions, and storage guidance.",
      "General herbal support should never replace prescribed medical treatment.",
    ],
    recommendedForms: ["Churna", "Vati / Gutika", "Arishta / Asava", "Raw Herbs"],
    iconName: "shield",
    featured: true,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["respiratory-care", "elderly-care", "digestive-health"],
  },
  {
    slug: "detox-and-cleansing",
    index: "07",
    name: "Detox & Cleansing",
    group: "Internal & Metabolic",
    shortDescription: "Products presented for cleansing and detox-related wellness.",
    overview:
      "Herbal preparations and raw botanical ingredients traditionally presented for internal cleansing and balanced digestive routines. Confirm specific formulations and usage precautions in store.",
    guidancePoints: [
      "Request verified packaging information for available Churna, tablet, or fermented liquid preparations.",
      "Confirm duration of use and precautions directly from product labeling or a qualified Ayurvedic practitioner.",
      "Consult a healthcare professional before using cleansing herbs alongside prescription medicines.",
    ],
    recommendedForms: ["Churna", "Arishta / Asava", "Vati / Gutika", "Raw Herbs"],
    iconName: "droplets",
    featured: false,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["digestive-health", "skin-and-hair-care", "weight-management"],
  },
  {
    slug: "diabetes-and-metabolic-health",
    index: "08",
    name: "Diabetes & Metabolic Health",
    group: "Internal & Metabolic",
    shortDescription: "Products presented in relation to blood sugar and metabolic health.",
    overview:
      "Traditional herbal preparations presented in relation to metabolic balance and dietary wellness. Because blood sugar management requires careful clinical oversight, product choices must always be discussed responsibly with a qualified healthcare professional.",
    guidancePoints: [
      "Confirm exact product ingredients, pack sizes, and label instructions at our Ruwanwella counter.",
      "Never adjust or discontinue prescribed diabetes medication without direct guidance from your doctor.",
      "Call ahead to verify whether specific metabolic herbal items or raw botanicals are in stock.",
    ],
    recommendedForms: ["Vati / Gutika", "Churna", "Raw Herbs"],
    iconName: "heart",
    featured: false,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["weight-management", "digestive-health", "detox-and-cleansing"],
  },
  {
    slug: "weight-management",
    index: "09",
    name: "Weight Management",
    group: "Internal & Metabolic",
    shortDescription: "Products presented for weight-management purposes.",
    overview:
      "Traditional botanical powders, herbal tablets, and whole spices presented as part of balanced lifestyle and weight-management routines. Visit the shop to review available preparations and verified product labels.",
    guidancePoints: [
      "Ask our staff about herbal powders, tablets, or raw botanicals stocked in this category.",
      "Review complete product directions and dietary guidance directly on verified packaging.",
      "Speak with a qualified healthcare professional before starting any new wellness regimen.",
    ],
    recommendedForms: ["Churna", "Vati / Gutika", "Raw Herbs"],
    iconName: "scale",
    featured: false,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["diabetes-and-metabolic-health", "digestive-health", "detox-and-cleansing"],
  },
  {
    slug: "oral-and-dental-care",
    index: "10",
    name: "Oral & Dental Care",
    group: "Daily & General Wellness",
    shortDescription: "Products presented for oral and dental care.",
    overview:
      "Traditional Ayurvedic herbal tooth powders, oils, and botanical oral care products prepared with aromatic herbs and barks. Visit our shop in Ruwanwella to explore available everyday oral hygiene options.",
    guidancePoints: [
      "Enquire about herbal tooth powders (Churna) and traditional oral care oils carried in store.",
      "Confirm ingredients and daily use directions directly on the product label before purchase.",
      "Visit a qualified dentist promptly for toothache, bleeding gums, or dental infections.",
    ],
    recommendedForms: ["Churna", "Medicated Oils", "Raw Herbs"],
    iconName: "smile",
    featured: false,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["skin-and-hair-care", "respiratory-care", "immune-support"],
  },
  {
    slug: "bone-and-spine-health",
    index: "11",
    name: "Bone & Spine Health",
    group: "Mobility & Structural",
    shortDescription: "Products presented for bone and spinal wellness.",
    overview:
      "Traditional external medicated oils and classical Ayurvedic preparations presented for bone, back, and spinal wellness. Product availability, ingredients, and application instructions are confirmed at our physical shop.",
    guidancePoints: [
      "Ask our team about available external oils and traditional internal preparations in this category.",
      "Verify manufacturer instructions, precautions, and contraindications before use.",
      "Consult a qualified medical professional for back injuries, fractures, or nerve-related symptoms.",
    ],
    recommendedForms: ["Medicated Oils", "Vati / Gutika", "Arishta / Asava"],
    iconName: "bone",
    featured: true,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["joint-and-muscle-care", "elderly-care", "womens-health"],
  },
  {
    slug: "elderly-care",
    index: "12",
    name: "Elderly Care",
    group: "Personal & Life-Stage",
    shortDescription: "Products presented for age-related wellness and vitality.",
    overview:
      "Gentle traditional Ayurvedic oils, herbal liquids, and restorative preparations presented for senior comfort, mobility, and everyday vitality. Speak with our shop staff to check product details and suitability.",
    guidancePoints: [
      "Confirm available external oils and general vitality preparations suited for older adults.",
      "Always check potential interactions with existing prescriptions by consulting a qualified doctor or pharmacist.",
      "Call +94 36 226 6693 before travelling to Ruwanwella to confirm stock availability.",
    ],
    recommendedForms: ["Medicated Oils", "Arishta / Asava", "Vati / Gutika", "Churna"],
    iconName: "sun",
    featured: false,
    availabilityLabel: "Contact shop to confirm",
    relatedSlugs: ["joint-and-muscle-care", "bone-and-spine-health", "immune-support"],
  },
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: "Tradition",
    description:
      "Respect for Ayurvedic knowledge, classical preparation forms, and heritage passed down since 1982.",
  },
  {
    title: "Care",
    description:
      "Helpful, unhurried, and respectful customer attention when you visit our shop or call with questions.",
  },
  {
    title: "Quality",
    description:
      "Careful attention to product quality, authentic botanical ingredients, and accurate product information.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication about ingredients, preparation forms, shop availability, and scope of information.",
  },
  {
    title: "Responsibility",
    description:
      "Avoiding unsupported health claims and encouraging guidance from qualified healthcare professionals.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "in-shop-products",
    index: "01",
    title: "Traditional Ayurvedic Product Retail",
    subtitle: "In-Shop Purchase at Ruwanwella",
    description:
      "Browse traditional Ayurvedic medicines, classical herbal preparations, medicated oils, and natural wellness products in person at our No. 38, Main Street, Ruwanwella shop.",
    guidanceNote:
      "All purchases are completed physically at our shop. We do not sell, take payments, or ship orders online.",
  },
  {
    id: "product-guidance",
    index: "02",
    title: "Product Guidance & Availability Enquiries",
    subtitle: "Personal Attention Before & During Your Visit",
    description:
      "Customers can enquire in store or by telephone to learn about product categories, preparation forms, verified label information, and whether specific items are currently available.",
    guidanceNote:
      "General product guidance shared at the shop does not replace medical diagnosis or advice from a qualified healthcare professional.",
  },
  {
    id: "custom-preparations",
    index: "03",
    title: "Personalized Herbal Preparations",
    subtitle: "Subject to In-Shop Review & Confirmation",
    description:
      "Thilaka Ayurveda's existing service descriptions note personalized herbal preparations tailored to customer requirements. Please contact our Ruwanwella shop directly to confirm which formulations can currently be prepared and what consultation or authorization is required.",
    guidanceNote:
      "Preparation scope, lead times, and practitioner requirements are confirmed directly with the shop team.",
  },
  {
    id: "raw-herbs",
    index: "04",
    title: "Fresh & Dried Raw Herbal Ingredients",
    subtitle: "Seasonal Botanical Supply",
    description:
      "Our shop carries a selection of fresh and dried raw herbal ingredients used in traditional preparations. Availability and quantities depend on seasonal harvesting and current stock.",
    guidanceNote:
      "Please call +94 36 226 6693 ahead of your visit to check availability of specific raw herbs or quantities.",
  },
];

export const QUALITY_PILLARS: QualityPillar[] = [
  {
    index: "01",
    title: "Natural Herbal & Botanical Focus",
    summary:
      "Thilaka Ayurveda focuses on traditional Ayurvedic preparations and natural herbal ingredients sourced from established Sri Lankan and regional herbal supply channels.",
    verificationNote:
      "Specific origin, supplier details, and organic or registration status vary by individual product and should be verified on the item's label or by asking at the shop.",
  },
  {
    index: "02",
    title: "Traditional Preparation Forms",
    summary:
      "Our catalogue spans respected classical Ayurvedic dosage forms—including Churna powders, Vati / Gutika tablets, Medicated Oils, Arishta / Asava fermented liquids, and whole Raw Herbs.",
    verificationNote:
      "Preparation methods and batch-specific details depend on the manufacturer or preparation source for each item.",
  },
  {
    index: "03",
    title: "Verified Label & Usage Information",
    summary:
      "We are committed to honest, verifiable product communication. Customers visiting our counter can inspect product packaging, full ingredient lists, pack sizes, storage notes, and manufacturer directions directly.",
    verificationNote:
      "We do not publish blanket medical guarantees or unverified claims across products.",
  },
  {
    index: "04",
    title: "Responsible Health Guidance",
    summary:
      "Website information is strictly educational and informational. Visitors with existing health conditions, those taking prescription medicines, and individuals who are pregnant or breastfeeding are always encouraged to consult a qualified healthcare professional.",
    verificationNote:
      "Call +94 36 226 6693 or visit us at No. 38, Main Street, Ruwanwella for product-specific questions.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "where-located",
    question: "Where is the Thilaka Ayurveda shop located?",
    answer:
      "Our physical shop is located at No. 38, Main Street, Ruwanwella, Sri Lanka. You can call us on +94 36 226 6693 or open directions via Google Maps from our Contact page.",
  },
  {
    id: "buy-online",
    question: "Can I purchase or order products through this website?",
    answer:
      "No. This website is a product catalogue and information guide only. Online orders, shopping carts, online payments, product reservations, and delivery requests are not available. To purchase any product, please visit our physical shop in Ruwanwella.",
  },
  {
    id: "check-availability",
    question: "How can I check whether a specific product or raw herb is available?",
    answer:
      "Product and seasonal raw herb availability can change daily. Before travelling to Ruwanwella, please call us directly at +94 36 226 6693 or prepare an availability enquiry on our Contact page with the category or product name you are looking for.",
  },
  {
    id: "opening-hours",
    question: "What are Thilaka Ayurveda's opening hours?",
    answer:
      "Opening schedules may vary on weekends and Sri Lankan public or Poya holidays. Please call +94 36 226 6693 before visiting to confirm our current opening days and hours.",
  },
  {
    id: "product-forms",
    question: "What types of Ayurvedic product forms are available at Thilaka Ayurveda?",
    answer:
      "According to our product scope, we organize offerings across traditional forms including Churna (herbal powders), Vati / Gutika (herbal tablets or pills), Medicated Oils (herbal infused oils), Arishta / Asava (fermented herbal liquid preparations), and fresh or dried Raw Herbs, subject to shop availability.",
  },
  {
    id: "forms-difference",
    question: "What is the difference between Churna, Vati / Gutika, Medicated Oils, and Arishta / Asava?",
    answer:
      "Churna refers to finely ground dried herbal powders; Vati / Gutika are measured herbal tablets or pills; Medicated Oils (Taila) are botanical oil infusions intended for specified topical or traditional applications; and Arishta / Asava are traditional fermented herbal liquid preparations.",
  },
  {
    id: "custom-preparations",
    question: "Does Thilaka Ayurveda offer personalized or custom herbal preparations?",
    answer:
      "Thilaka Ayurveda's existing service descriptions note personalized herbal preparations. Please contact our Ruwanwella shop directly at +94 36 226 6693 to confirm which formulations can currently be prepared and what consultation or authorization requirements apply.",
  },
  {
    id: "raw-herbs",
    question: "Does Thilaka Ayurveda supply fresh and dried raw herbs?",
    answer:
      "Yes, fresh and dried raw herbal ingredients are part of our shop's offering, subject to seasonal harvesting and counter stock. Please call +94 36 226 6693 before visiting to check whether specific botanicals or quantities are currently available.",
  },
  {
    id: "verify-ingredients",
    question: "How can I verify ingredients, pack sizes, and usage directions before purchasing?",
    answer:
      "Because individual formulations, pack sizes, and directions vary by manufacturer and preparation, we encourage customers to review verified product labels directly at our Ruwanwella shop counter or call +94 36 226 6693 to ask about a specific product.",
  },
  {
    id: "medical-advice",
    question: "Does the website provide personal medical advice or diagnoses?",
    answer:
      "No. All descriptions on this website are general catalogue and business information only and do not substitute for diagnosis, treatment, or advice from a qualified healthcare professional. Always verify ingredients and directions for each product and seek professional guidance if you have a medical condition or take other medication.",
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getCategoryFaqs(category: ProductCategory): FaqItem[] {
  const formsList = category.recommendedForms.join(", ");
  return [
    {
      id: `${category.slug}-availability`,
      question: `How can I check availability of ${category.name} products at Thilaka Ayurveda?`,
      answer: `Call ${BUSINESS_INFO.phoneDisplay} or prepare an availability enquiry on our Contact page before visiting ${BUSINESS_INFO.address}. Our staff can confirm currently available ${formsList} preparations, pack sizes, and verified label ingredients in store.`,
    },
    {
      id: `${category.slug}-purchase`,
      question: `Can I buy ${category.name} products online from Thilaka Ayurveda?`,
      answer: `No. This website is a digital product catalogue only and does not support online ordering, payments, product reservations, or delivery. All ${category.name} products must be purchased in person at our shop in Ruwanwella.`,
    },
  ];
}
