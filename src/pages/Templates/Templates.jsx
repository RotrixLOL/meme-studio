import { Button, Card } from "flowbite-react";

import { Title, Text, MemeCard } from "../../components";
import { useFetch } from "../../hooks";

const Templates = () => {
  const { data, loading, error } = useFetch(
    "https://api.imgflip.com/get_memes"
  );

  return (
    <>
      <Title>Templates</Title>
      <div className="flex flex-1 flex-wrap mx-3">
        {loading && (
          <Text position="center" size="7xl" sm_size="3xl">
            Loading...
          </Text>
        )}

        {error && (
          <Text position="center" size="5xl" sm_size="3xl">
            An error ocurred.
          </Text>
        )}

        {data &&
          data.data.memes.map((item) => (
            <MemeCard
              meme={item}
              button={{
                name: "Edit",
                href: `/edit?img=${encodeURIComponent(item.url)}&name=${
                  item.name
                }`,
              }}
              key={item.name}
            />
          ))}
      </div>
    </>
  );
};

export default Templates;
