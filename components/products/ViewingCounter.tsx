'use client'

import { useState, useEffect } from 'react'
import { Users } from 'lucide-react'

export default function ViewingCounter() {
  const [viewCount, setViewCount] = useState(0)

  useEffect(() => {
    // Initial random count between 10-40
    const initialCount = Math.floor(Math.random() * 30) + 10
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setViewCount(initialCount)

    // Update count every 5-10 seconds
    const interval = setInterval(() => {
      setViewCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3 // -3 to +3
        const newCount = prev + change
        // Keep within 10-40 range
        return Math.max(10, Math.min(40, newCount))
      })
    }, Math.random() * 5000 + 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
      <Users className="h-4 w-4" />
      <span className="font-medium">{viewCount} users are viewing this product right now</span>
    </div>
  )
}
