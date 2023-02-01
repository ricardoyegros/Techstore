import React from 'react';
import Layout from '../Layout/Layout';
import NotFoundImg from "../../assets/Not-Found-image.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <Layout>
    <div className='flex justify-center gap-9 w-screen'>
    <div className='flex flex-col gap-5 border rounded-lg lg:w-1/3 my-4 p-5'>
       <h1 className='text-4xl text-center'>Oppppps!</h1>
       <p className='text-center text-xl'>Parece que estas perdido rey.</p>
     <Link className='text-center' to={"/"}><button className="bg-secondary rounded-lg p-3 my-4">Ir a Inicio</button></Link>
    </div>
    <div>
        <img src={NotFoundImg} alt="404_notFound_Img" />
    </div>

    </div>
    </Layout>
    </>
  )
}

export default NotFound;