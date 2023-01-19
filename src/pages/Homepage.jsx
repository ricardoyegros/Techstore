import Carousel from "../components/Carrousel/Carrousel";
import Layout from "../components/Layout/Layout";
import { RefactSideBar } from "../components/SideBar/RefactSideBar";
import { SmCarousel } from "../components/SmCarousel/SmCarousel";
import { useWindowSize } from "../hooks/useWindowSize";
import { deviceType } from "../utils/deviceType";

export default function HomePage() {
  const images = ["carrousel1.jpg", "carrousel2.jpg", "carrousel3.jpg"];
  const windowSize = useWindowSize();
  const device = deviceType(windowSize?.width);
  return (
    <Layout>
      <Carousel images={images} showButtons={true} />
      <SmCarousel device={device} />
      <RefactSideBar />
      <h1>
        Width x height: {windowSize?.width} x {windowSize?.height}
      </h1>
      <h2>Type: {device} </h2>
    </Layout>
  );
};