
import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown , faHouse , faClipboardList , faWallet} from "@fortawesome/free-solid-svg-icons";
import pfp from "../assets/pfp.png"
import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import squeare from "../assets/four-squares-button-of-view-options.png"
import { PiChartBar } from "react-icons/pi";
import { IoVolumeHighOutline } from "react-icons/io5";
import { PiNavigationArrow } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TbDiscount2 } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="profile">
                <div className="profile-image">
                    <img src={pfp} alt="demo.png" width={45} />
                </div>
                <div className="profile-data">
                    <p className="profile-name">Nishyan</p>
                    <a className="visit-store">Visit Store</a>
                </div>
                <FontAwesomeIcon className="icon down" icon={faAngleDown} />
            </div>

            <nav>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <GrHomeRounded className="li-icon"/>
                        <p className="nav-p">Home</p>
                    </li>
                    <li className="nav-li">
                       <LuClipboardList className="li-icon" />
                       <p className="nav-p">Orders</p>
                    </li>
                    <li className="nav-li">
                        <img src={squeare} className="li-icon " />
                        <p className="nav-p">Products</p>
                    </li>
                    <li className="nav-li">
                    <BsTruck className="li-icon" />
                        <p className="nav-p">Delivery</p>
                    </li>
                    <li className="nav-li">
                        <IoVolumeHighOutline className="li-icon"  />
                        <p className="nav-p">Marketing</p>
                    </li>
                    <li className="nav-li">
                        <PiChartBar className="li-icon"  />
                        <p className="nav-p">Analytics</p>
                    </li>
                    <li className="nav-li  active">
                        <MdPayments className="li-icon"  />
                        <p className="nav-p">Payments</p>
                    </li>
                    <li className="nav-li">
                        <PiNavigationArrow className="li-icon"  />
                        <p className="nav-p">Tools</p>
                    </li>
                    <li className="nav-li">
                        <TbDiscount2 className="li-icon" />
                        <p className="nav-p">Discounts</p>
                    </li>
                    <li className="nav-li">
                        <GoPeople className="li-icon"  />
                        <p className="nav-p">Audience</p>
                    </li>
                    <li className="nav-li">
                        <IoColorPaletteOutline className="li-icon"  />
                        <p className="nav-p">Appearance</p>
                    </li>
                    <li className="nav-li">
                        <IoFlashOutline className="li-icon"  />
                        <p className="nav-p">Plugins</p>
                    </li>
                
                </ul>
            </nav>

            <div className="footer">
                <div className="wallet-wrapper">
                    <CiWallet className="icon  li-icon-f"   />
                </div>
                <div className="footer-credits">
                    <p>Available credits</p>
                    <p>222.10</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;