import React from "react";
import { Title } from "../../components";

const About = () => {
  return (
    <div className="h-[100vh]">
      <Title>RotrixX - Developer</Title>
      <h3 className="flex justify-center font-medium text-3xl">
        I'm a Full-Stack Web Developer.
      </h3>
      <p className="flex justify-center text-xl mt-2 mx-64">
        Meme Studio is one of my projects that you can find in my github repo.
        You can use it to literally create memes.
      </p>
      <h5 className="flex justify-center text-3xl mx-64">✨Who am I</h5>
      <p className="flex justify-center text-xl mt-2 mx-64">
        I am the developer of this page. I'm not kidding when saying that I am
        13 years old! I like to code all day. I'm from Spain 🇪🇸.
      </p>
    </div>
  );
};

export default About;
