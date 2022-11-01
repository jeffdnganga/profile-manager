import { Link } from 'react-router-dom'

function NavLink({ to, icon, linkTitle, navLinkStyle, linkStyle, linkTitleStyle }) {
    return (
        <div className={`text-youngtal-dark-blue mx-[10px] mt-[25px] ${navLinkStyle ? navLinkStyle : ""}`}>
            <Link to={to} className={`flex hover:scale-110 ${linkStyle ? linkStyle : ""}`}>
                {icon}
                <h2 className={`text-[16px] font-normal tracking-widest text-youngtal-dark-gray ml-[15px] active:text-black ${linkTitleStyle ? linkTitleStyle : ""}`}>{linkTitle}</h2>
            </Link>
        </div>
    )
}

export default NavLink