import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Tarik Ermis | Expert Full Stack & Blockchain Developer",
          description:
            "Tarik Ermis, a seasoned Full Stack Web Developer and Blockchain Expert, specializes in creating innovative web and mobile applications. Discover a portfolio showcasing a blend of technical expertise and creative solutions.",
          image: "https://avatars.githubusercontent.com/u/31302793?v=4",
          url: "https://tarik.n3tz.io",
          keywords: [
            "Tarik Ermis",
            "Full Stack Developer",
            "Blockchain Developer",
            "Web Development",
            "Mobile App Development",
            "React.js",
            "Vue.js",
            "Node.js",
            "Express.js",
            "React Native",
            "Solidity",
            "JavaScript",
            "TypeScript",
            "Python",
            "PHP",
            "SEO",
            "Web Applications",
            "Mobile Applications",
            "Webshop Development",
            "Redux",
            "Angular",
            "Docker",
            "AWS",
            "Azure Developer",
            "Firebase",
            "Portfolio",
          ],
        }}
      />

      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
