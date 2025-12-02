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
  "url": "https://Yungsunplastic.com",
  "logo": "https://Yungsunplastic.com/images/uploads/2023/11/yungsunplasticindustry-logo-2.png",
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
    "email": "info@Yungsunplastic.com",
    "areaServed": "PK",
    "availableLanguage": ["en", "ur"]
  },
  "sameAs": [
    "https://www.facebook.com/Yungsunplastic",
    "https://www.linkedin.com/company/Yungsunplastic",
    "https://www.youtube.com/@Yungsunplastic"
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
  const baseUrl = "https://Yungsunplastic.com"
  
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
