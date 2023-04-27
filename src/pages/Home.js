import Feeds from "components/Feeds";
import Layout from "components/Layout";
import Menu from "components/Menu";
import { useEffect, useState } from "react";
import "styles/global.css";
import { fetchFeeds } from "hooks/Feed";
function Home() {
  const [isBest, setIsBest] = useState(true);
  const [feedData, setFeedData] = useState(null);

  useEffect(() => {
    // fetchFeeds()
    //   .then((d) => setFeedData(d.data))
    //   .catch((e) => console.error(e));
  }, []);

  return (
    <Layout>
      <Menu isBest={isBest} setIsBest={setIsBest} />
      {/* <Feeds data={feedData} /> */}
    </Layout>
  );
}

export default Home;
