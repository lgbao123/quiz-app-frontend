import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBars } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { useState } from 'react';

const SideBar = (props) => {
    const { collapsed, image, toggled, handleToggleSidebar } = props;
    const [newcollapsed, setCollapsed] = useState(collapsed)
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={newcollapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <FaBars className='far-bar' onClick={() => { setCollapsed(!newcollapsed) }} />
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Admin
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            dashboard
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> components </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            icon={<FaRegLaughWink />}
                            title="Bao"
                        >
                            <MenuItem> 1</MenuItem>
                            <MenuItem> 2</MenuItem>
                            <MenuItem> 3</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>

            </ProSidebar>
        </>
    )
}

export default SideBar;