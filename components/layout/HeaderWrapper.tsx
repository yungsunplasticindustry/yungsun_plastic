'use client'

import SocialBar from './SocialBar'
import Header from './Header'

export default function HeaderWrapper() {
  return (
    <div className="sticky top-0 z-50">
      <SocialBar />
      <Header />
    </div>
  )
}
