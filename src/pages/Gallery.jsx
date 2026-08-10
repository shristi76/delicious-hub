import { useState } from 'react';
import GalleryCard from '../components/GalleryCard';
import { galleryImages } from '../data/menuData';

function Gallery() {
  // null means no image is currently open in the lightbox.
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="page-hero page-hero--gallery">
        <div className="container">
          <p className="eyebrow eyebrow--light">
            Around Delicious Hub
          </p>

          <h1>
            Gather, toast,
            <br />
            <em>taste.</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">The good stuff</p>
            <h2>See you at the table.</h2>
            <p>Click a moment to take a closer look.</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <GalleryCard
                key={item.title}
                {...item}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className="lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox__close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;