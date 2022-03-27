import Image from 'next/image'
import logo from '../assets/logo3.png'
import { FaSearch } from 'react-icons/fa'
import { GiDiamonds } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti'

const style = {
    wrapper: `h-16 w-full flex items-center justify-around py-5 px-4 bg-white`,
    logo: `object-contain cursor-pointer`,
    icon: `text-3xl text-gray-400 cursor-pointer`,
}

const CardFooter = () => {
    return (
        <div className={style.wrapper}>
            <Image
                src={logo}
                height={35}
                width={35}
                alt='logo-logo'
                className={style.logo}
            />
            <FaSearch className={style.icon} />
            <GiDiamonds className={style.icon} />
            <TiMessages className={style.icon} />
        </div>
    )
}

export default CardFooter
