import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Connect from './connect';
import DropdownMenu from './dropdown';

const borderRadiusValue = '0 4rem 0 0';
const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen1(false);
    setIsOpen2(true);
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(true);
  };
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open('https://drive.google.com/file/d/1IYfni3TK4KTWWh11V58tELi-fwOoGyk8/view?usp=sharing');
  };
  return (
    <Section id="about-me" className="p-6 flex flex-col justify-center items-center bg-white md:flex-row md:p-32">
      <article>
        <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
          About Me
        </h1>
        <p className="text-lg text-left py-4">
          Hello! I’m Sathya Naga Sai Vakacharla, a skilled software developer with
          expertise in the MERN stack and a strong foundation in Full-Stack Development.
          I hold a Bachelor’s degree in Mathematics, Statistics, and Computer Science
          and am currently pursuing a Master’s degree in Computer Applications (MCA).
          My educational background, combined with hands-on experience in software development,
          equips me with the skills to tackle complex challenges and deliver innovative solutions.
          I thrive in collaborative environments and have contributed to multiple projects that
          showcase my technical expertise and passion for technology.
          {showFullText ? (
            <>
              <br />
              <br />
              I have dedicated over 1,300 hours to mastering software engineering fundamentals,
              focusing on collaboration and problem-solving. Throughout this journey, I have
              successfully built 30+ projects, enhancing my proficiency in Algorithms, Data
              Structures, and a diverse range of technologies, including the MERN stack.
              <br />
              <br />
              I take pride in my accomplishments, including my contribution to the
              Samsung Innovation Campus (SIC), where I gained certification in
              Coding and Programming. During this program, I collaborated on projects
              that showcased my ability to develop efficient solutions and honed my skills
              in software development. This experience strengthened my expertise in
              programming and reinforced my commitment to creating impactful
              technological solutions.
              <br />
              <br />
              I’m passionate about various personal interests and hobbies.
              In my free time, I enjoy playing shuttle (badminton),
              which helps me stay active and also watching movies.
              Additionally, I have a deep interest in reading books,
              particularly Purāṇas and Itihāsa, which provide valuable
              insights into history, culture, and philosophy.
              <br />
              <br />
              For job opportunities or collaborations, please feel free to reach out
            </>
          ) : null}
        </p>
        <button className="underline pb-10" type="button" onClick={handleReadMoreClick}>
          {showFullText ? 'Read Less' : 'Read More'}
        </button>

        <Connect />
        <Button button handleClick={handleResumeClick}>Get my resume</Button>
      </article>
      <article className="md:flex-col md:pl-5 w-full">
        <DropdownMenu title="Languages" items={['JavaScript', 'Java', 'Python', 'Go']} isOpen={isOpen1} toggleDropdown={toggleDropdown1} />
        <DropdownMenu title="Frameworks" items={['React', 'NodeJS', 'SQLite', 'MongoDB']} isOpen={isOpen2} toggleDropdown={toggleDropdown2} />
        <DropdownMenu title="Tools" items={['Git', 'GitHub', 'VS Code', 'Chrome Dev Tools']} isOpen={isOpen3} toggleDropdown={toggleDropdown3} />
      </article>
    </Section>
  );
};

export default About;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
