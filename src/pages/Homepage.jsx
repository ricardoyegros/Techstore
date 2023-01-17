import Carousel  from "../components/Carrousel/Carrousel";
import Layout from "../components/Layout/Layout";

export default function HomePage() {
  const images = ["carrousel1.jpg", "carrousel2.jpg", "carrousel3.jpg"];
  return (
    <Layout>
      <Carousel images={images} showButtons={true} />
    </Layout>
  );
};