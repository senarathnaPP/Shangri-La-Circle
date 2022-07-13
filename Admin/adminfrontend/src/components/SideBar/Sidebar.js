import React from 'react'
import SideBar from './SideBar.css'
import {SidebarData} from './SidebarData'

function Sidebar(){
    return(
        <div className='SideBar'>
            <ul className='SidebarList'> 
            {SidebarData.map((val, key) =>{
            return (
                <li key={key} 
                className="row"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                    window.location.pathname = val.link}}>
                     
                     <div>{val.icon} {val.title}</div>
                     </li>
            );
        })}
        </ul>
        </div>
    );
}

export default Sidebar;