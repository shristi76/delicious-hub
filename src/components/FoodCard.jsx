function FoodCard({ name, description, price, image }) {
  return (
    <article className="food-card reveal">
      <img src={image} alt={name} />
      <div className="food-card__body">
        <div className="food-card__title"><h3>{name}</h3><span>{price}</span></div>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default FoodCard;
