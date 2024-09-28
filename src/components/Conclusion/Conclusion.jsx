import "./Conclusion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Conclusion() {
  return (
    <section className="conclusion" id="conclusion">
      <div className="conclusion-content">
        <h1>Conclusion</h1>
        <p>
          In the fast-paced digital age, web development is the foundation of
          your online success. It’s more than just coding; it’s about building a
          platform that grows with your business, adapts to new challenges, and
          continues to meet the needs of your audience. Don’t just be present
          online—thrive with a website that reflects your vision and goals.
        </p>
        <p>
          <i>
            “Our website transformed our business, connecting us with a global
            audience and driving unprecedented growth.”
          </i>
        </p>
      </div>
      <div className="faq-container">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <Faq
          faqQuestion="What is web development, and why is it important?"
          faqAns="Web development is the process of building and maintaining
              websites. It's crucial because it allows businesses to establish a
              strong online presence, reach a wider audience, and stay
              competitive in the digital age."
        />
        <Faq
          faqQuestion="What is the difference between front-end and back-end development?"
          faqAns="Front-end development deals with the visual and interactive
              aspects of a website, while back-end development handles the
              server-side logic, databases, and application functionality."
        />
        <Faq
          faqQuestion="How long does it take to develop a website?"
          faqAns="The time varies based on complexity. A simple website might take a
              few weeks, while a more complex one could take several months."
        />
        <Faq
          faqQuestion="What is responsive design, and why is it important?"
          faqAns="Responsive design ensures a website looks and works well on all
              devices. It's important because it improves user experience and
              search engine rankings."
        />
        <Faq
          faqQuestion="How can I keep my website secure?"
          faqAns="Keep your website secure by Downdating it regularly, using strong
              passwords, installing SSL certificates, and implementing security
              measures like firewalls."
        />
      </div>
    </section>
  );
}

function Faq({ faqQuestion, faqAns }) {
  const [isActive, setIsActive] = useState(false);

  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq ${isActive ? "active" : ""}`}>
      <div className="faq-btn" onClick={toggleFaq}>
        {faqQuestion}
        <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} />
      </div>
      <div
        className="panel"
        style={{
          maxHeight: isActive ? "200px" : "0px",
          transition: "max-height 0.3s ease",
        }}
      >
        <p>{faqAns}</p>
      </div>
    </div>
  );
}

export default Conclusion;
