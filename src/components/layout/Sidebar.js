import { useState } from 'react';
import { SideMenu } from '../../utils/SideMenu'
import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/theme/logo.png'

const Sidebar = ({ sideOpen, setSideOpen }) => {
    const { pathname } = useLocation()
    const [subMenu, setSubMenu] = useState({
        open: false,
        acces: null
    })
    return (
        <div className={`${sideOpen ? 'aside-mini' : ''} `}>
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <Link to='/' className="brand-wrap">
                        <img src={logo} className="logo" alt="Nest Dashboard" />
                    </Link>
                    <div>
                        <button onClick={() => setSideOpen(!sideOpen)} className="btn btn-icon btn-aside-minimize"><i className="text-muted material-icons md-menu_open"></i></button>
                    </div>
                </div>
                <nav>
                    <ul className="menu-aside">
                        {SideMenu?.map((data, index) => 
                        <li key={index} className={`menu-item  ${pathname === data?.to ? 'active' : ''}  ${data?.children ? 'has-submenu' : ''} `}>
                            <NavLink
                                onClick={() => setSubMenu({ open: !subMenu.open, acces: data?.id })}
                                className={`menu-link`}
                                to={data?.to}
                            >
                                <i className={`${data?.icon}`}></i>
                                <span className="text">{data?.link}</span>
                            </NavLink>
                            {
                                data?.children?.map((data) =>
                                    <div  onClick={() => setSubMenu({ open: subMenu.open, acces: data?.id })} key={data?._id} className="submenu " style={{ display: `${((subMenu?.acces == data?.id) && subMenu.open) ? 'block' : 'none'}` }}>
                                        <NavLink
                                            className=''
                                            to={data?.to}
                                        >
                                            {data?.link}
                                        </NavLink>

                                    </div>)
                            }

                        </li>
                        )}
                    </ul>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    

                    <br />
                    <br />
                </nav>
                {/*   <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabindex="0" style={{ left: "0px", width: "0px", }}></div></div>

                <div className="ps__rail-y" style={{ top: '0px', height: '789px', right: '0px' }}><div className="ps__thumb-y" tabindex="0" style={{ top: '0px', height: '784px' }}></div></div>


                <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabindex="0" style={{ left: '0px', width: '0px' }}></div></div> */}
            </aside>
        </div>
    );
}

export default Sidebar;