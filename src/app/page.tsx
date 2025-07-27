'use client'
import { useState } from 'react';
import { galleryData } from '@/data/artworkData';
import Lightbox from '@/components/ui/Lightbox';
import { ProfileCard } from '@/components/ProfileCard';
import { ArrowLeft } from 'lucide-react';

export default function HomePage() {
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  // Function to view a collection
  const handleViewCollection = (collection: any) => {
    setSelectedCollection(collection);
  };

  // Function to open the lightbox
  const openLightbox = (photo: any) => {
    setLightboxImage(photo);
  };

  // Main gallery view of all collections
  const renderGalleryOverview = () => (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:w-1/4">
        <ProfileCard />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-white animate-blink">Hema's Art Gallery</h1>
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {galleryData.map((collection) => (
            <div key={collection.id} className="w-80 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col items-center">
              <img src={collection.coverImage} alt={collection.title} className="w-full h-60 object-cover rounded-md mb-4 border border-gray-600" />
              <h2 className="text-xl font-bold mb-2 text-gray-100">{collection.title}</h2>
              <p className="text-sm text-gray-400 mb-4 text-center flex-grow">{collection.description}</p>
              <button onClick={() => handleViewCollection(collection)} className="mt-auto w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // View for a single selected collection's photos
  const renderCollectionDetails = () => (
    <div>
      <button
        onClick={() => setSelectedCollection(null)}
        className="mb-8 flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gallery
      </button>
      <h2 className="text-3xl font-bold mb-6 text-center text-white">{selectedCollection.title}</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {selectedCollection.photos.map((photo: any) => (
          <div key={photo.id} className="w-80 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col items-center cursor-pointer" onClick={() => openLightbox(photo)}>
            <img src={photo.image} alt={photo.title} className="w-full h-60 object-cover rounded-md mb-4 border border-gray-600" />
            <h3 className="text-lg font-bold text-gray-100">{photo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-black text-white p-8 min-h-screen">
      {selectedCollection ? renderCollectionDetails() : renderGalleryOverview()}
      {lightboxImage && <Lightbox item={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </main>
  );
}
