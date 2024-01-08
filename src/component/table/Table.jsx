import "./table.css"
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Table = ()=>{
    
    return(
        <div className="table">
            <div className="table-header">
             <div className="table-search">
                <CiSearch className="li-icon"/>
                <input type="text" placeholder="Search features, tutorials, etc." />
            
            </div>
            <div style={{marginRight:"2em"}} className="select table-sort">
                    <p>Sort</p>
                    <BiSortAlt2  className="li-icon" />
                </div>

                <div className="select">
                    <FiDownload className="li-icon" />
                </div>
            </div>

            <table style={{marginTop:"1em" , width:"100%"}}>
  <tr style={{backgroundColor:"#f2f2f2" , }}>
    <th style={{textAlign:"left"}}>Order ID</th>
    <th>Order Date</th>
    <th style={{textAlign:"right"}}>Order amount</th>
    <th style={{textAlign:"right"}}>Transacrion fees</th>
  </tr>
  <tr class="highlighted-row">
    <td className="order-id" style={{textAlign:"left" , color:"#146eb4" , fontWeight:"500"}}>#281209</td>
    <td style={{textAlign:"center"}}>7 July, 2023</td>
    <td style={{textAlign:"right"}}><span>&#8377;</span>1,278.23</td>
    <td style={{textAlign:"right"}}><span>&#8377;</span>22</td>
  </tr>
  <tr class="highlighted-row">
    <td className="order-id" style={{textAlign:"left" , color:"#146eb4" , fontWeight:"500"}}>#281209</td>
    <td style={{textAlign:"center"}}>7 July, 2023</td>
    <td style={{textAlign:"right"}}><span>&#8377;</span>1,278.23</td>
    <td style={{textAlign:"right"}}><span>&#8377;</span>22</td>
  </tr>
  <tr class="highlighted-row">
    <td className="order-id" style={{textAlign:"left" , color:"#146eb4" , fontWeight:"500"}}>#281209</td>
    <td style={{textAlign:"center"}}>7 July, 2023</td>
    <td style={{textAlign:"right"}}><span>&#8377;</span>1,278.23</td>
    <td style={{textAlign:"right"}}><span>&#8377;</span>22</td>
  </tr>


</table>

<div className="table-footer">
    <div style={{display:"flex"}}>
              <div style={{ gap:"1em"}} className="select table-sort">
                     <FaChevronLeft  className="li-icon" />
                    <p>Previous</p>
                    
                </div>
                <div className="pages">
                    <span className="page">1</span>
                    <span className="page">...</span>
                    <span className="page page-active">10</span>
                    <span className="page">11</span>
                    <span className="page">12</span>
                    <span className="page">13</span>
                    <span className="page">14</span>
                    <span className="page">15</span>
                    <span className="page">16</span>
                    <span className="page">17</span>
                    <span className="page">18</span>
                </div>

                <div style={{marginRight:"2em"}} className="select table-sort">
                    <p>Next</p>
                    <FaAngleRight  className="li-icon" />
                </div>
    </div>
</div>
        </div>
    );
}

export default Table