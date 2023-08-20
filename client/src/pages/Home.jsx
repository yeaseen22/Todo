import Layout from '../Components/layout/Layout';
import Section from '../Components/section/Section';
import Login from '../Components/login/login'

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
    <>
      <login />
      <Layout>
      <Section title="Experiences" items={experiences} />
      <Section title="Educations" items={educations} />
    </Layout>
    </>
  );
};

export default Home;
