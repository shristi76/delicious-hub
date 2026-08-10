import Button from '../components/Button';

function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container">
          <p className="eyebrow eyebrow--light">Our story</p>
          <h1>Rooted in good things.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <img
            className="story-image"
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1100&q=80"
            alt="Warmly lit restaurant bar"
          />

          <div className="copy">
            <p className="eyebrow">Since 2016</p>
            <h2>A neighbourhood table with a big heart.</h2>

            <p>
              Delicious Hub began with a small dining room, a wood-fired oven,
              and a belief that food tastes better when it brings people
              together. Today, that belief still guides every plate we make.
            </p>

            <p>
              We cook with the seasons, welcome our farmers by name, and leave
              a little room for happy surprises.
            </p>

            <Button to="/reservations">Join us for dinner</Button>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container value-grid">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Serve joy, simply.</h2>
            <p>
              We make thoughtful food and offer generous hospitality so every
              guest feels right at home.
            </p>
          </div>

          <div>
            <p className="eyebrow">Our vision</p>
            <h2>Make every meal matter.</h2>
            <p>
              To be the place you come back to—for celebrations, Tuesday
              dinners, and everything between.
            </p>
          </div>

          <div>
            <p className="eyebrow">Our values</p>
            <h2>Care in every detail.</h2>
            <p>
              Seasonality, curiosity, kindness, and respect for the people who
              grow our food.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column two-column--reverse">
          <div className="copy">
            <p className="eyebrow">Meet the chef</p>
            <h2>Elena Marlow</h2>

            <p>
              Chef Elena finds inspiration in coastal Indian cooking, local
              produce, and the pleasure of a table full of friends. Her food is
              bright, soulful, and never too serious.
            </p>

            <p className="signature">— Elena</p>
          </div>

          <img
            className="story-image"
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1100&q=80"
            alt="Chef preparing a dish"
          />
        </div>
      </section>
    </>
  );
}

export default About;