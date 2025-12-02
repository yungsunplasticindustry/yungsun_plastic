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

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Homepage FAQs
export const homepageFAQs = [
  {
    question: "What packaging machinery does Yungsun Plastic Industry offer?",
    answer: "Yungsun Plastic Industry offers a complete range of industrial packaging machinery including carton sealer machines, strapping machines, conveyor systems, pallet wrapping machines, shrink tunnel sealers, and more. We serve businesses across Pakistan with high-quality packaging solutions."
  },
  {
    question: "Where is Yungsun Plastic Industry located?",
    answer: "Yungsun Plastic Industry is located in Lahore, Punjab, Pakistan. We serve customers throughout Pakistan and offer delivery and installation services for all our packaging machinery."
  },
  {
    question: "How can I get a quote for packaging equipment?",
    answer: "You can request a quote by visiting our Contact page, using the Request Quote button on any product page, or contacting us directly via WhatsApp or email at info@yungsunplastic.com. We typically respond within 24 business hours."
  },
  {
    question: "Do you provide installation and after-sales support?",
    answer: "Yes, Yungsun Plastic Industry provides complete installation services and comprehensive after-sales support including maintenance, spare parts, and technical assistance for all machinery purchased from us."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including food & beverage, pharmaceuticals, textiles, manufacturing, logistics, e-commerce, and any business requiring professional packaging solutions."
  }
]

// Contact Page FAQs
export const contactFAQs = [
  {
    question: "What are Yungsun Plastic Industry's business hours?",
    answer: "Our business hours are Monday to Friday 9:00 AM to 6:00 PM, and Saturday 9:00 AM to 2:00 PM. We are closed on Sundays."
  },
  {
    question: "How quickly will I receive a response to my inquiry?",
    answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, you can reach us directly via WhatsApp or phone."
  },
  {
    question: "Do you offer site visits for large orders?",
    answer: "Yes, we offer complimentary site visits for large orders to assess your requirements and recommend the best packaging solutions for your facility."
  }
]

// Products Page FAQs
export const productsFAQs = [
  {
    question: "What types of packaging materials do you offer?",
    answer: "We offer stretch films, POF shrink films, PP strapping rolls, packing tapes, air bags for cushioning, and various other packaging consumables alongside our machinery."
  },
  {
    question: "Do you sell both manual and automatic machines?",
    answer: "Yes, we offer manual, semi-automatic, and fully automatic versions of most of our packaging machinery to suit different production volumes and budgets."
  },
  {
    question: "Can I see a demonstration before purchasing?",
    answer: "Yes, we offer product demonstrations at our facility in Lahore. Contact us to schedule a visit and see our machinery in operation."
  },
  {
    question: "What warranty do your machines come with?",
    answer: "Our machines come with manufacturer warranties that vary by product. Warranty details are provided with each quote and order confirmation."
  }
]

// Category-specific FAQ generators
export function generateCategoryFAQs(categoryName: string, categorySlug: string) {
  const categoryFAQs: Record<string, Array<{ question: string; answer: string }>> = {
    "carton-sealer-machine": [
      {
        question: "What is a carton sealer machine used for?",
        answer: "A carton sealer machine is used to automatically seal the top and/or bottom flaps of cardboard boxes using tape. It increases packaging efficiency and ensures consistent, secure sealing for shipping and storage."
      },
      {
        question: "What types of carton sealers are available?",
        answer: "We offer semi-automatic carton sealers (operator feeds boxes) and fully automatic carton sealers (conveyor-fed for high-volume production). Both top-and-bottom and top-only sealing options are available."
      },
      {
        question: "How do I choose the right carton sealer for my business?",
        answer: "Consider your daily box volume, box size range, available space, and budget. Our team can help recommend the ideal machine based on your specific requirements."
      }
    ],
    "strapping-machine": [
      {
        question: "What is a strapping machine?",
        answer: "A strapping machine applies plastic (PP or PET) straps around packages or pallets to secure them for shipping. It provides consistent tension and secure sealing for heavy or multiple packages."
      },
      {
        question: "What's the difference between semi-automatic and automatic strapping?",
        answer: "Semi-automatic strapping machines require the operator to place the strap around the package, while automatic machines feed the strap automatically. Automatic machines are faster and ideal for high-volume operations."
      },
      {
        question: "Do you supply strapping materials as well?",
        answer: "Yes, we supply PP strap rolls and PET strapping materials compatible with our machines and other brands."
      }
    ],
    "stretch-film": [
      {
        question: "What is stretch film used for?",
        answer: "Stretch film is used to wrap and secure products on pallets for shipping and storage. It provides protection against dust, moisture, and tampering while keeping items stable during transport."
      },
      {
        question: "What's the difference between hand stretch film and machine stretch film?",
        answer: "Hand stretch film is applied manually using hand dispensers, suitable for low-volume operations. Machine stretch film is designed for pallet wrapping machines and offers faster, more consistent wrapping for high volumes."
      },
      {
        question: "What thickness of stretch film should I use?",
        answer: "Thickness depends on load weight and stability needs. We offer various gauges and can recommend the right thickness based on your specific application."
      }
    ],
    "pof-shrink": [
      {
        question: "What is POF shrink film?",
        answer: "POF (Polyolefin) shrink film is a clear, food-safe packaging material that shrinks tightly around products when heat is applied. It's ideal for retail packaging, gift baskets, and food products."
      },
      {
        question: "Is POF shrink film safe for food packaging?",
        answer: "Yes, POF shrink film is FDA-approved for direct food contact and is commonly used for packaging food products, cosmetics, and pharmaceuticals."
      },
      {
        question: "What equipment do I need to use POF shrink film?",
        answer: "You'll need a shrink wrapping machine or L-bar sealer combined with a heat tunnel. We offer complete shrink wrapping systems for various production volumes."
      }
    ],
    "conveyor": [
      {
        question: "What types of conveyors do you offer?",
        answer: "We offer roller conveyors, belt conveyors, and gravity conveyors designed for packaging lines. They can be customized to integrate with your existing machinery."
      },
      {
        question: "Can conveyors be integrated with other packaging machines?",
        answer: "Yes, our conveyors are designed to integrate seamlessly with carton sealers, strapping machines, and other packaging equipment to create efficient production lines."
      }
    ],
    "pallete-wrapping-machine": [
      {
        question: "What is a pallet wrapping machine?",
        answer: "A pallet wrapping machine automatically wraps stretch film around palletized goods to secure them for shipping and storage. It ensures consistent wrapping and reduces film waste compared to manual wrapping."
      },
      {
        question: "What's the difference between turntable and rotary arm wrappers?",
        answer: "Turntable wrappers rotate the pallet while the film carriage moves up and down. Rotary arm wrappers keep the pallet stationary while the arm rotates around it - ideal for unstable or heavy loads."
      }
    ],
    "plastic-baskets": [
      {
        question: "What are industrial plastic baskets used for?",
        answer: "Industrial plastic baskets are used for storage, transport, and organization of products in warehouses, factories, and retail environments. They're durable, stackable, and reusable."
      },
      {
        question: "Are your plastic baskets food-safe?",
        answer: "Yes, we offer food-grade plastic baskets suitable for food processing, agriculture, and retail applications."
      }
    ],
    "plastic-palletes": [
      {
        question: "What are the advantages of plastic pallets over wooden pallets?",
        answer: "Plastic pallets are more durable, hygienic, consistent in size, and don't require fumigation for export. They're ideal for food, pharmaceutical, and clean room applications."
      },
      {
        question: "Are plastic pallets recyclable?",
        answer: "Yes, our plastic pallets are made from recyclable materials and can be recycled at end of life, making them an environmentally responsible choice."
      }
    ],
    "pp-strap-roll": [
      {
        question: "What is PP strap roll?",
        answer: "PP (Polypropylene) strap roll is a plastic strapping material used with strapping machines to secure packages, cartons, and pallets for shipping."
      },
      {
        question: "What sizes of PP strap are available?",
        answer: "We offer PP straps in various widths (9mm to 19mm) and thicknesses to suit different load weights and strapping machine requirements."
      }
    ],
    "packing-tape": [
      {
        question: "What types of packing tape do you offer?",
        answer: "We offer BOPP (clear and brown) packing tape, printed tape with custom branding, masking tape, and specialty tapes for various packaging applications."
      },
      {
        question: "Can I get custom printed packing tape?",
        answer: "Yes, we offer custom printed tape with your company logo and branding. Minimum order quantities apply for custom printing."
      }
    ],
    "shrink-turner-sealer-machine": [
      {
        question: "What is a shrink turner sealer machine?",
        answer: "A shrink turner sealer machine combines an L-bar sealer with a shrink tunnel to wrap products in shrink film. The turner mechanism allows products to be wrapped from multiple angles for complete coverage."
      },
      {
        question: "What products are suitable for shrink wrapping?",
        answer: "Shrink wrapping is ideal for retail products, gift items, food products, books, DVDs, software, cosmetics, and any products requiring tamper-evident or retail-ready packaging."
      }
    ],
    "air-bag": [
      {
        question: "What are air bags used for in packaging?",
        answer: "Air bags (air cushions or dunnage bags) are used to fill void spaces in packages and containers, providing cushioning protection during shipping and preventing product movement and damage."
      },
      {
        question: "Are air bags environmentally friendly?",
        answer: "Our air bags are made from recyclable materials and use minimal plastic compared to traditional void fill like packing peanuts. They can be deflated for easy recycling."
      }
    ]
  }
  
  return categoryFAQs[categorySlug] || [
    {
      question: `What ${categoryName} products does Yungsun offer?`,
      answer: `Yungsun Plastic Industry offers a complete range of ${categoryName} solutions for industrial and commercial applications. Contact us for specific product information and pricing.`
    },
    {
      question: `How can I get pricing for ${categoryName}?`,
      answer: `You can request pricing by using the Request Quote button on any product page, or contact us directly via phone, email, or WhatsApp. We provide customized quotes based on your specific requirements.`
    }
  ]
}

// Legal pages FAQs
export const privacyFAQs = [
  {
    question: "How does Yungsun Plastic Industry protect my personal data?",
    answer: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
  },
  {
    question: "Does Yungsun share my information with third parties?",
    answer: "We do not sell or rent your personal information. We only share data with service providers who assist in operating our website, or when required by law."
  },
  {
    question: "How can I request deletion of my data?",
    answer: "You can request deletion of your personal data by contacting us at info@yungsunplastic.com. We will process your request in accordance with applicable data protection laws."
  }
]

export const termsFAQs = [
  {
    question: "What is Yungsun's return policy?",
    answer: "Returns are accepted within 7 days of delivery for unused products in original packaging. Custom orders and modified equipment are non-refundable."
  },
  {
    question: "What warranty coverage does Yungsun provide?",
    answer: "Our products come with manufacturer warranties that vary by product type. Warranty terms are provided with your order confirmation. Warranty does not cover damage from misuse or unauthorized modifications."
  },
  {
    question: "What payment methods does Yungsun accept?",
    answer: "We accept cash and bank transfers. Payment terms are agreed upon at the time of order confirmation. All prices are quoted in Pakistani Rupees (PKR) unless otherwise specified."
  }
]

export const cookieFAQs = [
  {
    question: "What cookies does Yungsun Plastic Industry use?",
    answer: "We use essential cookies for website functionality, analytics cookies (Vercel Analytics) to understand site usage, and functional cookies to remember your preferences like shopping cart items."
  },
  {
    question: "How can I manage cookie settings?",
    answer: "You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling cookies may affect website functionality."
  }
]

// About/Company Info FAQs
export const companyFAQs = [
  {
    question: "How long has Yungsun Plastic Industry been in business?",
    answer: "Yungsun Plastic Industry has been serving Pakistan's packaging industry for many years, establishing ourselves as a trusted provider of industrial packaging machinery and supplies."
  },
  {
    question: "What makes Yungsun different from other packaging suppliers?",
    answer: "We offer a complete one-source solution for all packaging needs - from machinery to consumables. Our experienced team provides personalized service, installation support, and ongoing maintenance."
  },
  {
    question: "Do you serve customers outside of Lahore?",
    answer: "Yes, we serve customers throughout Pakistan. We offer delivery and installation services nationwide for our machinery products."
  }
]

// Gallery FAQs
export const galleryFAQs = [
  {
    question: "Can I visit Yungsun's facility to see machines in operation?",
    answer: "Yes, we welcome facility visits. Contact us to schedule an appointment to see our machinery demonstrations and discuss your packaging requirements in person."
  },
  {
    question: "Do you have videos of your machines in operation?",
    answer: "Yes, we have demonstration videos available. Contact us or visit our showroom to see our machines in action."
  }
]

// Downloads FAQs
export const downloadsFAQs = [
  {
    question: "Where can I find product specifications and catalogs?",
    answer: "Product specifications, catalogs, and technical documentation are available on our Downloads page. You can also request specific documentation by contacting our sales team."
  },
  {
    question: "Are installation guides available for your machines?",
    answer: "Yes, installation guides and user manuals are provided with every machine purchase. Additional documentation can be requested from our technical support team."
  }
]

// Certificates FAQs
export const certificatesFAQs = [
  {
    question: "Are Yungsun's products certified?",
    answer: "Yes, our products meet relevant quality and safety standards. Specific certifications vary by product type. Contact us for certification details for specific products."
  },
  {
    question: "Do you provide certificates for plastic basket specifications?",
    answer: "Yes, we provide detailed specification sheets for our plastic basket range including dimensions, load capacity, and material specifications."
  }
]

// Cart FAQs
export const cartFAQs = [
  {
    question: "How does the quote request process work?",
    answer: "Add products to your cart, then click 'Request Quote'. Fill in your contact details and requirements, and our team will prepare a customized quote within 24 business hours."
  },
  {
    question: "Can I save my cart for later?",
    answer: "Yes, your cart items are automatically saved in your browser. They will remain available when you return to the site on the same device."
  }
]
