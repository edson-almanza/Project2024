import "./Skills.css"

const skills = [
  {
    title: 'HTML',
    years: '4 Years Experience',
  },
  {
    title: 'CSS',
    years: '4 Years Experience',
  },
  {
    title: 'LESS',
    years: '4 Years Experience',
  },
  {
    title: 'SASS',
    years: '4 Years Experience',
  },
  {
    title: 'JavaScript ',
    years: '4 Years Experience',
  },
  {
    title: 'PHP',
    years: '3 Years Experience',
  },
  {
    title: 'VUE.JS',
    years: '3 Years Experience',
  },
  {
    title: 'Magento',
    years: '2 Years Experience',
  },
  {
    title: 'Wordpress',
    years: '3 Years Experience',
  },
  {
    title: 'Shopify',
    years: '1 Year Experience',
  },
  {
    title: 'SquareSpace',
    years: '1 Year Experience',
  },
];

const Skills = () => {
  return (
    <div className="skills-row">
      {skills.map((skill, index) => (
        <div className="skills-column" key={index}>
          <h1>{skill.title}</h1>
          <p>{skill.years}</p>
        </div>
      ))}
    </div>
  );
}
export default Skills;