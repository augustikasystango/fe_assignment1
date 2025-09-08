import "./Home.css";
const Home = () => {
  return (
    <>
      <a href="#main-content" className="skip-link" >
        Skip to main content
      </a>
      <h1 id="hero-heading">Welcome to Our Website</h1>
      <h2>
        We are glad to have you here. Explore our pages to learn more about us
        and get in touch.
      </h2>

      <div className="head-container">
        <div className="box-one">
          <img
            src="/images/mountains.webp"
            alt="Beautiful landscape with mountains and lake"
          />
        </div>

        <p aria-label="dummy-text" className="box-one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?m doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut d quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </p>
      </div>


      <main id="main-content">
        <section aria-labelledby="gallery-heading">

          <figure id="gallery-heading" className="box-two" aria-label="series of images of a mountain " role="group">
            <img
              src="/images/mountains.webp"
              alt="Beautiful landscape with mountains and lake"
            />
            <img
              src="/images/mountains.webp"
              alt="Beautiful landscape with mountains and lake"
            />
            <img
              src="/images/mountains.webp"
              alt="Beautiful landscape with mountains and lake"
            />
            <img
              src="/images/mountains.webp"
              alt="Beautiful landscape with mountains and lake"
            />
          </figure>

          <p aria-label="dummy-text" className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </section>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Our Features</h2>
          <h3>Accessibility First</h3>
          <p>We build with inclusivity in mind.</p>
          <h3>Responsive Design</h3>
          <p>Our site works on all screen sizes.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Accessible Site</p>
      </footer>
    </>
  );
};

export default Home;
