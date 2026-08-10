function GalleryCard({ image, title, onClick }) {
  return (
    <button
      className="gallery-card"
      onClick={onClick}
      aria-label={`View ${title}`}
    >
      <img src={image} alt={title} />
      <span>{title}</span>
    </button>
  );
}

export default GalleryCard;