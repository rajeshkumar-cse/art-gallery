// src/app/page.tsx
import type { Metadata } from 'next'
import artworks from '@/data/artworks.json'

export const metadata: Metadata = {
  title: "Hema's Art Gallery",
  description: 'A static gallery built with Next.js, Tailwind & Shadcn UI',
}

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-black">
      {/* Centered dark-blue heading */}
      <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">
        Hema's Art Gallery
      </h1>

      {/* Responsive grid of artwork cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((art) => (
          <article
            key={art.id}
            className="overflow-hidden rounded-2xl bg-white shadow-md"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {art.title}
              </h2>
              <p className="mt-2 text-gray-700">
                {art.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {art.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-sm rounded-full bg-gray-200 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
