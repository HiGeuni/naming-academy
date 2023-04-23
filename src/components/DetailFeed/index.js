import React from "react";
import { DetailContainer, ShadowWrapper, StyledImg } from "./style";
import Comments from "components/Comments";

const DetailFeed = ({ id }) => {
  return (
    <DetailContainer>
      <ShadowWrapper>
        <StyledImg src="https://media.discordapp.net/attachments/909308714161410071/1088789299673186334/NoPoverty.png?width=1306&height=1306" />
        <Comments />
      </ShadowWrapper>
    </DetailContainer>
  );
};

export default DetailFeed;
