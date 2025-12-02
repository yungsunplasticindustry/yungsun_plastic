'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import RequestQuoteModal from '@/components/modals/RequestQuoteModal'

interface QuoteContextType {
  openQuoteModal: (productName?: string) => void
  closeQuoteModal: () => void
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [productName, setProductName] = useState<string>()

  const openQuoteModal = (product?: string) => {
    setProductName(product)
    setIsOpen(true)
  }

  const closeQuoteModal = () => {
    setIsOpen(false)
    setProductName(undefined)
  }

  return (
    <QuoteContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <RequestQuoteModal 
        isOpen={isOpen}
        onClose={closeQuoteModal}
        productName={productName}
      />
    </QuoteContext.Provider>
  )
}

export function useQuote() {
  const context = useContext(QuoteContext)
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider')
  }
  return context
}
