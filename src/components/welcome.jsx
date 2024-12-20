import styled from 'styled-components';
import Connect from './connect';
import headlineShapes from '../assets/headline-shapes.svg';

const borderRadiusValue = '0 0 0 4rem';
const Welcome = () => (
  <Section id="headline" className="p-6 flex flex-col justify-center items-center pt-40 pb-32 bg-white md:p-56 mt-14">
    <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
      I’m Sathya Naga Sai Vakacharla 👋
      <br />
      Glad to see you!
    </h1>
    <p className="text-lg text-left py-4">
      I’m a software developer with a passion for creating digital experiences.
      I’m currently working as an Engineer at Tata Consultancy Services (TCS) and I
      specialize in web development and software engineering. Explore my work, and
      let’s bring your projects to life.
      Got a coding project in mind? Let’s chat! 🚀
    </p>
    <Connect />
  </Section>
);

export default Welcome;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${headlineShapes});
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
