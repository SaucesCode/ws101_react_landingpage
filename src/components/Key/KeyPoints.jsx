import "./KeyPoints.css";

function KeyPoints() {
  return (
    <section className="key" id="key">
      <h1>The Importance of Web Development</h1>
      <div className="key-container">
        <KeyBox
          keyimg="internet.png"
          keytitle="Building Online Presence"
          keydescription="Your website is often the first point of contact between you and your
        audience. It’s more than just a digital storefront—it’s your brand’s
        identity online. A well-crafted website ensures that your message
        reaches a global audience, providing them with the information they
        need, right when they need it. In today’s competitive market, an
        effective online presence is crucial for establishing credibility and
        trust."
        />
        <KeyBox
          keyimg="ui.png"
          keytitle="Enhancing User Experience"
          keydescription="Web development isn’t just about aesthetics; it’s about creating a
            seamless and enjoyable experience for your users. From intuitive
            navigation to fast load times and responsive design, every element
            of web development contributes to how users interact with your site.
            A positive user experience not only keeps visitors on your site
            longer but also increases the likelihood of conversions and customer
            loyalty."
        />
        <KeyBox
          keyimg="bar-graph-with-dollar-sign.png"
          keytitle="Boosting Business Growth"
          keydescription="A well-developed website is a powerful tool for driving business
            growth. It’s where your customers can learn about your products,
            make purchases, and engage with your brand. By integrating features
            like e-commerce, blogs, and customer support, web development helps
            you expand your reach, generate leads, and increase sales. In a
            digital world, your website is your most valuable asset for
            achieving business success."
        />
        <KeyBox
          keyimg="virtual-reality.png"
          keytitle="Keeping Up with Technology"
          keydescription="The digital landscape is constantly evolving, and staying up to date
            with the latest web technologies is essential. From mobile
            responsiveness to integrating cutting-edge features like AI chatbots
            or dynamic content, web development ensures that your website
            remains relevant and competitive. Investing in modern web
            development practices means you’re always a tool ahead in delivering
            what your audience expects."
        />
      </div>
    </section>
  );
}

function KeyBox({ keyimg, keytitle, keydescription }) {
  return (
    <div className="key-box">
      <img src={keyimg} alt="globe" />
      <h3>{keytitle}</h3>
      <p>{keydescription}</p>
    </div>
  );
}

export default KeyPoints;
