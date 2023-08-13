import Header from "../components/Header";
import { Panel } from "../components/Panel";
import Tabs from "../components/tabs";
import Footer from "../components/Footer";
import { TabsProvider } from "../context/TabsContext";

const Home = () => {
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
