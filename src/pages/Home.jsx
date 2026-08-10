import Button from '../components/Button';
import FoodCard from '../components/FoodCard';
import TestimonialCard from '../components/TestimonialCard';
import { menuItems } from '../data/menuData';

const features = [
  {
    icon: '✦',
    title: 'Fresh ingredients',
    text: 'Thoughtfully sourced, always in season.',
  },
  {
    icon: '♨',
    title: 'Expert chefs',
    text: 'Simple ideas cooked with real care.',
  },
  {
    icon: '♡',
    title: 'Cozy atmosphere',
    text: 'A warm seat for every occasion.',
  },
];

const reviews = [
  {
    name: 'Maya S.',
    role: 'Local guide',
    review:
      'Every plate was balanced, beautiful, and completely comforting.',
  },
  {
    name: 'David R.',
    role: 'Regular guest',
    review:
      'The kind of neighbourhood restaurant you want to bring everyone to.',
  },
  {
    name: 'Anika P.',
    role: 'First visit',
    review:
      'Warm service, gorgeous room, and the pasta was unforgettable.',
  },
];

function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow eyebrow--light">
            Seasonal kitchen · New Delhi
          </p>

          <h1>
            Taste the
            <br />
            <em>moment.</em>
          </h1>

          <p>
            Fresh ingredients, honest flavours, and unforgettable dining
            experiences.
          </p>

          <div className="button-row">
            <Button to="/menu">View the menu</Button>
            <Button to="/reservations" variant="light">
              Book a table
            </Button>
          </div>
        </div>

        <a className="scroll-cue" href="#featured">
          Scroll to discover <span>↓</span>
        </a>
      </section>

      <section className="section" id="featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A little taste</p>
              <h2>Made to be shared.</h2>
            </div>

            <Button to="/menu" variant="text">
              Explore full menu →
            </Button>
          </div>

          <div className="card-grid">
            {menuItems.slice(2, 5).map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Why Delicious Hub</p>

            <h2>
              The simple things,
              <br />
              <em>done beautifully.</em>
            </h2>
          </div>

          <div className="features">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <span>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">From our guests</p>
            <h2>Kind words at our table.</h2>
          </div>

          <div className="testimonial-grid">
            {reviews.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="eyebrow eyebrow--light">
            Your table is waiting
          </p>

          <h2>Ready for a memorable meal?</h2>

          <Button to="/reservations" variant="light">
            Reserve a table
          </Button>
        </div>
      </section>
    </>
  );
}

export default Home;