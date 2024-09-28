import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h2>Welcome to the World of Web Development</h2>
        <p>
          Web development is the backbone of the digital world, powering
          everything from your favorite websites to complex online services.
          Explore our site to learn more about why web development is crucial in
          today's connected world.
        </p>
        <p className="dyk">
          <i>
            <strong>
              Did you know that over 90% of consumers research a product online
              before making a purchase? A strong web presence can make or break
              a business.
            </strong>
          </i>
        </p>
        <a href="#about">
          <button>Learn More</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
