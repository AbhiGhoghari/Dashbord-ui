import "./Payments.css"
import { IoChevronDownSharp } from "react-icons/io5";
import Table from "../table/table";
const Payments = ()=>{
    return(
        <div className="payment">
            <div className="section-header">
                <h1>Overview</h1>
                <div className="select">
                    <p>Last Month</p>
                    <IoChevronDownSharp className="li-icon" />
                </div>
            </div>

            <div className="overview">
                    <div className="card">
                        <p className="card-title">
                            Online orders
                        </p>
                        <p className="card-price">
                            231
                        </p>
                    </div>
                    <div className="card">
                    <p className="card-title">
                            Amount received
                        </p>
                        <p className="card-price">
                        <span>&#8377;</span> 23,92,312.19
                        </p>
                    </div>
            </div>

            <div className="transection">
                <h1>Transections | This Month</h1>
                <Table />
            </div>
        </div>
    );
}

export default Payments