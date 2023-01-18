import FacebookLogo from '../../assets/Facebook-logo.svg';
import InstagramLogo from '../../assets/Instagram-logo.svg';
import WhatsappLogo from '../../assets/Whatsapp-logo.svg';
import TwitterLogo from '../../assets/Twitter-logo.svg';

export default function Footer() {
    return (
        <footer className="bg-details text-primary dark:bg-gray-900 w-full h-fit flex flex-col justify-center items-center py-16">
            <div className="flex justify-between w-5/6 flex-wrap -sm:justify-center -sm:gap-8">

                <div className="py-16">
                    <ul className="dark:text-gray-400 w-[11rem]">
                        <li className="mb-4">
                            <span><strong className="font-bold">Ayuda</strong></span>
                            <div className="w-full bg-black h-[1px]"></div>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contacto</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Sobre Nosotros</a>
                        </li>
                    </ul>
                </div>

                <div className="py-16">
                    <ul className="dark:text-gray-400 w-[11rem]">
                        <li className="mb-4">
                            <span><strong className="font-bold">Cuenta</strong></span>
                            <div className="w-full bg-black h-[1px]"></div>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Registro</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Ingresar</a>
                        </li>
                    </ul>
                </div>

                <div className="py-16">
                    <ul className="dark:text-gray-400">
                        <li className="mb-4">
                            <span><strong className="font-bold">Redes Sociales</strong></span>
                            <div className="w-full bg-black h-[1px]"></div>
                        </li>
                        <div className="flex justify-center items-center gap-3 flex-nowrap">
                            <a href="https//www.facebook.com" target="_blank">
                                <img src={FacebookLogo} alt="Loading..." className='w-8 h-8' />
                            </a>
                            <a href="https//www.instagram.com" target="_blank">
                                <img src={InstagramLogo} alt="Loading..." className='w-8 h-8' />
                            </a>
                            <a href="https//www.whatsapp.com" target="_blank">
                                <img src={WhatsappLogo} alt="Loading..." className='w-8 h-8' />
                            </a>
                            <a href="https//www.facebook.com" target="_blank">
                                <img src={TwitterLogo} alt="Loading..." className='w-8 h-8' />
                            </a>
                        </div>
                    </ul>
                </div>

            </div>

            <div className='w-full flex items-center justify-center font-extrabold text-primary'>
                TechStore Copyright ® 2023
            </div>
        </footer>
    )
};