import React from 'react';
import {BsGithub,BsInstagram} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.instagram.com/nick_7703s/" target="_blank "><BsInstagram /></a>
            <a href="https://github.com/sardormirzakomilov" target="_blank "><BsGithub /></a>
            <a href="https://t.me/nick_7703s" target="_blank "><FaTelegramPlane /></a>
        </div>
    )
}

export default HeaderSocials