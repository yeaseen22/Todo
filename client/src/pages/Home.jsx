import Layout from '../Components/layout/Layout';
import Section from '../Components/section/Section';

const experiences = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];

const educations = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];

const Home = () => {
  return (
    <Layout>
      <Section title="Experiences" items={experiences} />
      <Section title="Educations" items={educations} />
    </Layout>
  );
};

export default Home;
