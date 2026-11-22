import {
  BUSINESS_INFO,
  FAQS,
  PRODUCT_CATEGORIES,
  PRODUCT_FORMS,
  SERVICES,
  SITE_LAST_UPDATED_ISO,
  SITE_URL,
  getCategoryFaqs,
  type ProductCategory,
} from "./site-data";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildOpenGraph(
  title: string,
  description: string,
  path: string
) {
  return {
    type: "website" as const,
    locale: "en_LK",
    siteName: BUSINESS_INFO.name,
    url: `${SITE_URL}${path}`,
    title,
    description,
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Thilaka Ayurveda — No. 38, Main Street, Ruwanwella, Sri Lanka",
      },
    ],
  };
}

export function buildGlobalGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": ORG_ID,
        name: BUSINESS_INFO.name,
        url: `${SITE_URL}/`,
        description:
          "Traditional Ayurvedic medicine shop and herbal-product retailer in Ruwanwella, Sri Lanka. Established in 1982 according to its official website. Digital product catalogue only; purchases are made in person at the shop.",
        foundingDate: BUSINESS_INFO.establishedYear,
        telephone: BUSINESS_INFO.phoneDisplay,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
          width: 556,
          height: 492,
        },
        image: `${SITE_URL}/images/og-cover.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 38, Main Street",
          addressLocality: "Ruwanwella",
          addressCountry: "LK",
        },
        hasMap: BUSINESS_INFO.mapsDirectionsUrl,
        areaServed: [
          {
            "@type": "Place",
            name: "Ruwanwella, Sri Lanka",
          },
          {
            "@type": "Country",
            name: "Sri Lanka",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: BUSINESS_INFO.phoneDisplay,
          contactType: "customer service",
          areaServed: "LK",
          availableLanguage: ["en", "si"],
        },
        knowsAbout: [
          "Ayurvedic medicine",
          "Herbal preparations",
          "Churna",
          "Vati / Gutika",
          "Medicated Oils",
          "Arishta / Asava",
          "Raw Herbs",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: BUSINESS_INFO.name,
        description:
          "Discover Thilaka Ayurveda in Ruwanwella, Sri Lanka. Browse traditional Ayurvedic product categories, herbal preparation forms, and ways to contact or visit the shop.",
        inLanguage: "en-LK",
        publisher: {
          "@id": ORG_ID,
        },
      },
    ],
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildHomePageGraph(): Record<string, unknown> {
  const featured = PRODUCT_CATEGORIES.filter((c) => c.featured);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Thilaka Ayurveda | Ayurvedic Products in Ruwanwella, Sri Lanka",
        description:
          "Discover Thilaka Ayurveda in Ruwanwella, Sri Lanka. Explore traditional Ayurvedic product categories, herbal preparations and ways to contact or visit the shop.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      {
        "@type": "ItemList",
        name: "Featured Ayurvedic Product Categories",
        numberOfItems: featured.length,
        itemListElement: featured.map((cat, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: cat.name,
          description: cat.shortDescription,
          url: `${SITE_URL}/products/${cat.slug}/`,
        })),
      },
    ],
  };
}

export function buildProductsCatalogueGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/products/#webpage`,
        url: `${SITE_URL}/products/`,
        name: "Ayurvedic Product Catalogue | Thilaka Ayurveda",
        description:
          "Browse Thilaka Ayurveda's 12 traditional Ayurvedic product categories and 5 classical herbal preparation forms. Catalogue only; purchases are made in shop at Ruwanwella.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products/" },
      ]),
      {
        "@type": "ItemList",
        name: "Thilaka Ayurveda Product Categories",
        numberOfItems: PRODUCT_CATEGORIES.length,
        itemListElement: PRODUCT_CATEGORIES.map((cat, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: cat.name,
          description: cat.shortDescription,
          url: `${SITE_URL}/products/${cat.slug}/`,
        })),
      },
      {
        "@type": "DefinedTermSet",
        name: "Traditional Ayurvedic Product Forms",
        description:
          "Classical Ayurvedic dosage and botanical formats categorized at Thilaka Ayurveda.",
        hasDefinedTerm: PRODUCT_FORMS.map((form) => ({
          "@type": "DefinedTerm",
          name: form.name,
          description: `${form.summary} ${form.detail}`,
        })),
      },
    ],
  };
}

export function buildCategoryPageGraph(
  category: ProductCategory
): Record<string, unknown> {
  const url = `${SITE_URL}/products/${category.slug}/`;
  const matchingForms = PRODUCT_FORMS.filter((f) =>
    category.recommendedForms.includes(f.name)
  );
  const categoryFaqs = getCategoryFaqs(category);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `${category.name} — Ayurvedic Products | Thilaka Ayurveda`,
        description: category.overview,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products/" },
        { name: category.name, path: `/products/${category.slug}/` },
      ]),
      {
        "@type": "ItemList",
        name: `Traditional Preparation Forms for ${category.name}`,
        numberOfItems: matchingForms.length,
        itemListElement: matchingForms.map((form, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: form.name,
          description: form.summary,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: categoryFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildAboutPageGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/#webpage`,
        url: `${SITE_URL}/about/`,
        name: "About Thilaka Ayurveda (Est. 1982) | Ruwanwella, Sri Lanka",
        description:
          "Family-operated Ayurvedic medicine business in Ruwanwella, Sri Lanka, established in 1982 according to its official website.",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about/" },
      ]),
    ],
  };
}

export function buildServicesPageGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/services/#webpage`,
        url: `${SITE_URL}/services/`,
        name: "Ayurvedic Shop Services in Ruwanwella | Thilaka Ayurveda",
        description:
          "In-shop Ayurvedic product retail, availability enquiries, personalized herbal preparations (confirmed in shop), and seasonal raw herbs in Ruwanwella.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
      ]),
      {
        "@type": "ItemList",
        name: "Thilaka Ayurveda Shop Services",
        numberOfItems: SERVICES.length,
        itemListElement: SERVICES.map((svc, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "Service",
            name: svc.title,
            description: svc.description,
            provider: { "@id": ORG_ID },
            areaServed: {
              "@type": "Place",
              name: "Ruwanwella, Sri Lanka",
            },
          },
        })),
      },
    ],
  };
}

export function buildQualityPageGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/quality/#webpage`,
        url: `${SITE_URL}/quality/`,
        name: "Quality, Herbal Sourcing & FAQs | Thilaka Ayurveda",
        description:
          "Transparent approach to herbal ingredients, traditional forms, label verification, and answers to 10 frequently asked questions about Thilaka Ayurveda.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Quality & FAQs", path: "/quality/" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildContactPageGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact/#webpage`,
        url: `${SITE_URL}/contact/`,
        name: "Visit & Contact Thilaka Ayurveda | Ruwanwella Shop",
        description:
          "Visit Thilaka Ayurveda at No. 38, Main Street, Ruwanwella, Sri Lanka or call +94 36 226 6693 to check opening hours and product availability.",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": ORG_ID },
        dateModified: SITE_LAST_UPDATED_ISO,
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact/" },
      ]),
    ],
  };
}
