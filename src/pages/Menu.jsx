import { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { menuItems } from '../data/menuData';

const categories = [
  'All',
  'Starters',
  'Main Course',
  'Desserts',
  'Drinks',
];

function Menu() {
  // useState stores the category currently chosen by the visitor.
  const [category, setCategory] = useState('All');

  const visibleItems =
    category === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <>
      <section className="page-hero page-hero--menu">
        <div className="container">
          <p className="eyebrow eyebrow--light">Food &amp; drink</p>

          <h1>
            Something for
            <br />
            <em>every appetite.</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Our menu</p>
            <h2>Seasonal, soulful, simple.</h2>
            <p>We let beautiful ingredients lead the way.</p>
          </div>

          <div className="filter-row" aria-label="Menu categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? 'filter active' : 'filter'}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="card-grid menu-grid">
            {visibleItems.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;