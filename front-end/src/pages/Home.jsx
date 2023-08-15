import Header from "../components/Header";
import { Panel } from "../components/Panel";
import Tabs from "../components/tabs";
import Footer from "../components/Footer";
import { TabsProvider } from "../context/TabsContext";
import { useContext, useEffect } from "react";
import { PageContext } from "../context/PageContext";

const Home = () => {
  const { setIsDetailPage } = useContext(PageContext);

  useEffect(() => {
    setIsDetailPage(false);
  }, [setIsDetailPage]);

  return (
    <>
      <Header />
      <TabsProvider>
        <Tabs />
        <Panel />
      </TabsProvider>
      <Footer />
    </>
  );
};

export default Home;
