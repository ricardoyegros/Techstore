import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../components/Carrousel/Carrousel";
import Layout from "../components/Layout/Layout";
import { Products } from "../components/Products/Products";
import { SmCarousel } from "../components/SmCarousel/SmCarousel";
import { useWindowSize } from "../hooks/useWindowSize";
import { getAllProducts } from "../redux/actions/getAllProducts";
import { getAllCategorys } from "../redux/actions/getAllCategorys";
import { getAllBrands } from "../redux/actions/getAllBrands";
import { deviceType } from "../utils/deviceType";

export default function HomePage() {
  const images = ["carrousel1.jpg", "carrousel2.jpg", "carrousel3.jpg"];
  const windowSize = useWindowSize();
  const device = deviceType(windowSize?.width);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllProducts());
    dispatch(getAllCategorys());
    dispatch(getAllBrands());
  },[])
  return (
    <Layout>
      <Carousel images={images} showButtons={true} />
      <SmCarousel device={device} />
      <Products />
      <h2 className="text-center font-bold mt-10">Encontranos en nuestra sucursal central en: <span className="mx-1 text-secondary font-bold hover:cursor-pointer"><a href="https://www.google.com.ar/maps/place/Av.+S.+Mart%C3%ADn+1200,+Buenos+Aires/@-34.6076522,-58.4488568,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca119269bacf:0x76816aca401dc325!8m2!3d-34.6076566!4d-58.4466681" target="_blank"> Av. San Martin 1200 CBA </a></span></h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.861951624267!2d-58.448856784842!3d-34.60765216521308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca119269bacf%3A0x76816aca401dc325!2sAv.%20S.%20Mart%C3%ADn%201200%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1674591879478!5m2!1ses-419!2sar" className="w-full h-72 p-7" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Layout>
  );
};