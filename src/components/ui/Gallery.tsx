'use client'

import { useState } from 'react'
// For robustness, it's better to use a path alias like '@/data/artworks.json'
import artworks from '../../data/artworks.json' 
import ArtworkCard from '@/components/ui/ArtworkCard'
import Lightbox from '@/components/Lightbox'

// Add a `filterTag` prop to make the component reusable
export default function Gallery({ filterTag = 'painting' }) {
  const [lightboxItem, setLightboxItem] = useState(null)

  // This is now safer and won't crash if 'tags' is missing.
  const filteredItems = artworks.filter(art => 
    (art.tags || []).includes(filterTag)
  );

  if (filteredItems.length === 0) {
    return <p className="text-muted-foreground text-center">No '{filterTag}' items found.</p>
  }

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((art) => (
          <ArtworkCard
            key={art.id}
            artwork={art}
            onClick={() => setLightboxItem(art)}
          />
        ))}
      </div>

      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </>
  )
}