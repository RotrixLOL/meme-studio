import React, { useRef } from "react";
import { Button, Card, TextInput } from "flowbite-react";
import { Rnd } from "react-rnd";
import { exportComponentAsPNG } from "react-component-export-image";

import Text from "../Text/Text";
import { useState } from "react";

const MemeCard = ({ meme, button, texts }) => {
  //   const [rnd, setRnd] = useState({
  //     width: 30,
  //     height: 20,
  //     x: 10,
  //     y: 30,
  //   });
  const memeImage = useRef();
  memeImage.ref = memeImage;
  const [fileName, setFileName] = useState();

  return (
    <Card className="w-1/4" key={meme.name}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {meme.name}
      </h5>
      <div className={`${texts && "border border-black border-dashed"}`}>
        <div className={`relative`} ref={memeImage}>
          <img
            src={meme.url}
            alt={meme.name}
            className="flex-1 object-contain justify-center"
          />
          {texts && (
            <>
              {texts.map(
                (item, i) =>
                  item != "" && (
                    <Rnd
                      //   default={{
                      //     x: rnd.x,
                      //     y: rnd.y,
                      //     width: rnd.width,
                      //     height: rnd.height,
                      //   }}
                      //   size={{ width: rnd.width, height: rnd.height }}
                      //   position={{ x: rnd.x, y: rnd.y }}
                      //   onDragStop={(e, d) => setRnd((prev) => ({ x: d.x, y: d.y, ...prev }))}
                      //   onResizeStop={(e, direction, ref, delta, position) => {
                      //     setRnd((prev) => ({
                      //       width: ref.style.width,
                      //       height: ref.style.height,
                      //       ...prev,
                      //     }));
                      //   }}
                      resizeGrid={[10, 10]}
                      dragGrid={[10, 10]}
                      className="absolute text-full-div dark:text-black"
                      key={i}
                    >
                      <Text>{item}</Text>
                    </Rnd>
                  )
              )}
              <Text div_style="h-[1rem] text-xs absolute bottom-1 p-1 text-white bg-[#000] bg-opacity-50">
                Meme Studio
              </Text>
            </>
          )}
        </div>
      </div>
      {button && (
        <Button
          className="flex justify-end font-black"
          size="lg"
          gradientDuoTone="cyanToBlue"
          href={button.href}
          onClick={button.onClick}
        >
          {button.name}
        </Button>
      )}
      {texts && (
        <>
          <TextInput
            placeholder="File Name (default is meme title)"
            onChange={(e) => setFileName(e.target.value)}
          />
          <Button
            className="flex justify-end font-black"
            size="lg"
            gradientDuoTone="cyanToBlue"
            onClick={() =>
              exportComponentAsPNG(memeImage, {
                fileName: fileName || meme.name,
              })
            }
          >
            Download
          </Button>
        </>
      )}
    </Card>
  );
};

export default MemeCard;
