import React from "react";
import { FeedContainer, Image, BestComment, Like } from "./style";
import { AiTwotoneLike } from "react-icons/ai";
const HoemFeed = ({ data }) => {
  return (
    <FeedContainer>
      <Image src="https://media.discordapp.net/attachments/909308714161410071/1088789299673186334/NoPoverty.png?width=1306&height=1306" />
      <BestComment>
        <span style={{ marginLeft: "40px" }} className="best">
          BEST |{" "}
        </span>{" "}
        HI
      </BestComment>
      <Like>
        <AiTwotoneLike style={{ width: "31px", height: "31px" }} />
        50
      </Like>
    </FeedContainer>
  );
};

export default HoemFeed;
