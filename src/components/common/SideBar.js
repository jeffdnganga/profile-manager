import PropTypes from 'prop-types'
import React from 'react'
import { BiLink, BiUser } from 'react-icons/bi'
import { IoKeyOutline } from 'react-icons/io5'
import NavLink from './NavLink.js'

function SideBar(props) {

    const {
        navLinkStyle = 'mt-[20px!important]',
        linkStyle = 'hover:scale-[0px!important]',
        linkTitleStyle = 'hover:text-black hover:duration-100',
    } = props

    return (
        <div className='w-full'>
            <NavLink to={'/edit/basic-information'} icon={<BiUser size={25} />} linkTitle='Basic information' navLinkStyle={navLinkStyle} linkStyle={linkStyle} linkTitleStyle={linkTitleStyle} />
            <NavLink to={'/edit/links-and-social-networks'} icon={<BiLink size={25} />} linkTitle='Links and social networks' navLinkStyle={navLinkStyle} linkStyle={linkStyle} linkTitleStyle={linkTitleStyle} />
            <NavLink to={'/edit/change-password'} icon={<IoKeyOutline size={25} />} linkTitle='Change password' navLinkStyle={navLinkStyle} linkStyle={linkStyle} linkTitleStyle={linkTitleStyle} />
        </div>
    )
}

SideBar.propTypes = {
    navLinkStyle: PropTypes.string,
    linkStyle: PropTypes.string,
    linkTitleStyle: PropTypes.string,
    isMentor: PropTypes.bool
}

export default SideBar