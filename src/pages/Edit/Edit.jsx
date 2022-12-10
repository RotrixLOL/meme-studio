import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsPNG } from "react-component-export-image";

import { Input, MemeCard, Title } from "../../components";

const Edit = () => {
  const [params] = useSearchParams();
  const img = params.get("img");
  const name = params.get("name");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  return (
    <div className="mx-5">
      <Title>Edit this template</Title>
      <div className="flex flex-row">
        <MemeCard
          texts={[text1, text2, text3, text4]}
          meme={{ name: name, url: img }}
        />

        <div className="flex flex-col ml-5">
          <Input
            onChange={(e) => setText1([e.target.value])}
            value={text1}
            id={`text1`}
            title={`Text 1`}
            type="text"
            required
          />
          <Input
            onChange={(e) => setText2([e.target.value])}
            value={text2}
            id={`text2`}
            title={`Text 2`}
            type="text"
          />
          <Input
            onChange={(e) => setText3([e.target.value])}
            value={text3}
            id={`text3`}
            title={`Text 3`}
            type="text"
          />
          <Input
            onChange={(e) => setText4([e.target.value])}
            value={text4}
            id={`text4`}
            title={`Text 4`}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
