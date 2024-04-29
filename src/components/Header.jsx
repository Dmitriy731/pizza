import { Link } from "react-router-dom";
import logo from '../assets/img/pizza-logo.svg'
import {Button} from './';

function Header (props) {

    const {basket} = props.header;

    return(
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img width="38" src={logo} alt="Pizza logo" />
                    </Link>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Link to="/basket">
                        <Button className="button--cart" basket={basket} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;