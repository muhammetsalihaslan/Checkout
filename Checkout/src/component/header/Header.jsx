import './Header.css';
import { BsFillBasketFill } from "react-icons/bs";

const Header = () => {
    return (
        <div className="header d-flex justify-content-between ">
            <h1 className="head1 ">CheckOut</h1>
            <div className="icon display-5 m-4"><BsFillBasketFill/></div>

            
        </div>
    )
}

export default Header;