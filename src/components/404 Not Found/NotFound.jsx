import React from 'react';
import Layout from '../Layout/Layout';
import NotFoundImg from "../../assets/Not-Found-image.svg"

function NotFound() {
  return (
    <>
    <Layout>
    <div className='flex justify-center gap-16 w-screen'>
    <div className='flex flex-col border lg:w-1/3 my-4'>
       <h1 className='text-4xl'>Oppppps!</h1>
       <p>Parece que estas perdido rey.</p>
       <button>Ir a Inicio</button>
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