import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navigation = () => {
    const cartStyle = {
        background: "#F59E0D",
        display: "flex",
        padding: '6px 12px',
        borderRadius: '50px'
    }

    const { cart } = useContext(CartContext);
    return (
        <>
            <nav className="container max-auto flex item-center justify-between py-4">
                <div>
                    <Link to="/">
                        <img style={{ height: 45, marginLeft: 100 }} src="/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <ul className="flex item-center">
                    <li className=""><Link to="/">Home</Link></li>
                    <li className="ml-6"><Link to="/products">Products</Link></li>
                    <li className="ml-6"><Link to="/cart">
                        <div style={cartStyle}>
                            <span>{cart.totalItems}</span>
                            <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                        </div>
                    </Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;