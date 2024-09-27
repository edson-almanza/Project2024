
import './Projects.css';

const projects = [
    {
        title: 'DESIGN PORTFOLIO',
        description: 'PHP, HTML, CSS',
        image: '/images/page1.png'
      },
      {
        title: 'MAGICFIBER PAGE',
        description: 'WORDPRESS, HTML, CSS',
        image: '/images/page2.png'
      },
      {
        title: 'ALTURAPHOTO CATALOG',
        description: 'MAGENTO, PHP, HTML, CSS, JAVASCRIPT',
        image: '/images/page3.png'
      },
      {
        title: 'USER REPORT PAGE',
        description: 'VUE.JS, QUASAR, HTML, SASS, JAVASCRIPT',
        image: '/images/page4.png'
      }
];

const Projects = ({setActive}) => {
  return (
    <section className="projects">
      <div className='projects-title'>
        <h1>Projects</h1>
        <button className="about-me-button" onClick={() => setActive('Contact')}>CONTACT ME</button>
      </div>
      <div className="projects-row">
        {projects.map((project, index) => (
          <div className="projects-column" key={index}>
            <img className='projects-image' src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;