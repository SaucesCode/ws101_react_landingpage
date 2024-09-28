import "./More.css";

function More() {
  return (
    <section class="more" id="more">
      <h2>Web Development Tools & Resources</h2>
      <p>
        <strong>
          Utilizing the right tools and resources can significantly streamline
          the web development process. Here are some essential tools and
          resources that every web developer should know:
        </strong>
      </p>
      <div class="tools-container">
        <Tools
          toolnum="1"
          toolTitle="Code Editors"
          tooldesc="Tools like Visual Studio Code, Sublime Text, and Atom provide robust
        environments for writing and managing code."
        />
        <Tools
          toolnum="2"
          toolTitle="Version Control"
          tooldesc="Git is the industry standard for version control, helping developers
            track changes and collaborate on projects."
        />
        <Tools
          toolnum="3"
          toolTitle="Frameworks"
          tooldesc="Popular frameworks like React, Angular, and Vue.js streamline the
            development of complex front-end applications."
        />
        <Tools
          toolnum="4"
          toolTitle="CSS Proprocessors"
          tooldesc="SASS and LESS simplify the process of writing and maintaining CSS,
            making it more efficient and scalable."
        />
        <Tools
          toolnum="5"
          toolTitle="Task Runners"
          tooldesc="Tools like Gulp and Webpack automate repetitive tasks, such as
            minifying files and optimizing images, saving time and effort."
        />
        <Tools
          toolnum="6"
          toolTitle="Web Hosting"
          tooldesc="Services like GitHub Pages, Netlify, and Vercel provide reliable
            hosting solutions for deploying your websites"
        />
        <Tools
          toolnum="7"
          toolTitle="Learning Resources"
          tooldesc="Platforms like freeCodeCamp, Codecademy, and MDN Web Docs offer
            valuable tutorials and documentation for learning and mastering web
            development."
        />
        <Tools
          toolnum="8"
          toolTitle="Browser Developer Tools"
          tooldesc="Built-in tools in browsers like Chrome and Firefox allow developers
            to inspect, debug, and test their code in real time, making it
            easier to troubleshoot and optimize websites."
        />
      </div>
      <p class="botton-text">
        <i>
          <strong>
            Leveraging these tools and resources can help you build high-quality
            websites more efficiently and stay current with industry standards.
          </strong>
        </i>
      </p>
    </section>
  );
}

function Tools({ toolnum, toolTitle, tooldesc }) {
  return (
    <div className="tool">
      <div className="circle">{toolnum}</div>
      <h3>{toolTitle}</h3>
      <p>{tooldesc}</p>
    </div>
  );
}

export default More;
