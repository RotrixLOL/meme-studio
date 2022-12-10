import { Button, Card } from "flowbite-react";
import Text from "../../components/Text/Text";

const Home = () => {
  const cards = [
    {
      title: "Discover new Memes",
      subtitle: "You can see other people's memes",
      button: "Discover",
      href: "discover",
      outline: false,
    },
    {
      title: "Go and create your first meme",
      subtitle: "With Meme Studio it's very easy.",
      button: "Create",
      href: "templates",
      outline: true,
    },
  ];

  return (
    <div className="h-[100vh]">
      {/* <h1 className="text-7xl">Hello</h1>
      <h1 className="text-4xl">Hello</h1>
      <h1 className="text-5xl">Hello</h1>
      <h1 className="text-3xl">Hello</h1> */}
      <Text size="7xl" sm_size="4xl" position="center">
        Creating memes couldn't be easier
      </Text>
      <Text
        size="5xl"
        sm_size="3xl"
        position="center"
        gradient="from-blue-400 to-blue-600 dark:from-indigo-400 dark:to-blue-500"
      >
        Improved experience with Meme Studio
      </Text>
      <div className="flex flex-col sm:flex-row flex-wrap mt-24 mx-5">
        {cards.map((item, i) => (
          <Card className="basis-1/2" key={i}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
              {item.subtitle}
            </p>
            <Button
              outline={!item.outline}
              gradientDuoTone="cyanToBlue"
              className="w-max"
              href={`/${item.href}`}
            >
              {item.button}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
