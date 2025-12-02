interface JsonLdProps {
  data: Record<string, unknown>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(data).replace(/</g, '\\u003c') 
      }}
    />
  )
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yungsun Plastic Industry",
  "url": "https://yungsunplastic.com",
  "logo": "https://yungsunplastic.com/images/uploads/2023/11/yungsunplasticindustry-logo-2.png",
  "description": "Pakistan's leading provider of industrial packaging machinery and equipment",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-300-1234567",
    "contactType": "sales",
    "email": "info@yungsunplastic.com",
    "areaServed": "PK",
    "availableLanguage": ["en", "ur"]
  },
  "sameAs": [
    "https://www.facebook.com/yungsunplastic",
    "https://www.linkedin.com/company/yungsunplastic",
    "https://www.youtube.com/@yungsunplastic"
  ]
}

// Product Schema Generator
export function generateProductSchema(product: any, category: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images,
    "category": category.name,
    "manufacturer": {
      "@type": "Organization",
      "name": "Yungsun Plastic Industry"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PKR",
      "price": "Contact for pricing",
      "seller": {
        "@type": "Organization",
        "name": "Yungsun Plastic Industry"
      }
    }
  }
}

// BreadcrumbList Schema Generator
export function generateBreadcrumbSchema(items: Array<{ label: string; href?: string }>) {
  const baseUrl = "https://yungsunplastic.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `${baseUrl}${item.href}` : undefined
    }))
  }
}

// LocalBusiness Schema for better local SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yungsunplastic.com/#localbusiness",
  "name": "Yungsun Plastic Industry",
  "image": "https://yungsunplastic.com/images/uploads/2023/11/yungsunplasticindustry-logo-2.png",
  "url": "https://yungsunplastic.com",
  "telephone": "+92-300-1234567",
  "email": "info@yungsunplastic.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "postalCode": "54000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.5204,
    "longitude": 74.3587
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "PKR",
  "paymentAccepted": "Cash, Bank Transfer"
}

// WebSite Schema for site-wide search
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Yungsun Plastic Industry",
  "url": "https://yungsunplastic.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://yungsunplastic.com/products?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
