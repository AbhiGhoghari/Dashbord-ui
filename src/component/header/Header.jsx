
import "./header.css"
import { GoQuestion } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaCaretDown } from "react-icons/fa";
const Header = ()=>{
    return(
        <div className="header">
            <div className="section-name">
                <h1>Payments</h1>
                <span style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:".5em"}}>
                    <GoQuestion className="li-icon"/>
                    <p className="how">How it works ?</p>
                </span>
            </div>

            <div className="search">
                <CiSearch className="li-icon"/>
                <input type="text" placeholder="Search features, tutorials, etc." />
            
            </div>
            
            <div className="header-end">
                <div className="round">
                <TfiAnnouncement className="li-icon" />
                </div>
                <div className="round">
                <FaCaretDown  className="li-icon" />
                </div>

                
            </div>
        </div>
    );
}

export default Header;