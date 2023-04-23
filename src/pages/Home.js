import Feeds from "components/Feeds";
import Layout from "components/Layout";
import Menu from "components/Menu";
import { useEffect, useState } from "react";
import "styles/global.css";

function Home() {
  const [isBest, setIsBest] = useState(true);

  useEffect(() => {
    // isBest가 변화할 때마다 보여지는 리스트 수정
  }, [isBest]);
  return (
    <Layout>
      <Menu isBest={isBest} setIsBest={setIsBest} />
      <Feeds />
    </Layout>
  );
}

export default Home;
