function TestimonialCard({ name, review, role }) {
  return (
    <article className="testimonial reveal">
      <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
      <p>“{review}”</p>
      <strong>{name}</strong><span>{role}</span>
    </article>
  );
}

export default TestimonialCard;
