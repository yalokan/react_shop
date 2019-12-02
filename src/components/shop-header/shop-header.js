import React from 'react';
import './shop-header.css';
import { Link } from "react-router-dom";
import ShoppingCartTable from "../shopping-cart-table/index"
import {connect} from "react-redux";


const ShopHeader = ({items, total}) => {
    return(
        <header className="shop-header row">
            <Link to="/">
              <div className="logo text-dark"> Book Store </div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {items.length} items (${total })
                </div>
            </Link>
        </header>
    )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal,
    };
};

export default connect(mapStateToProps)(ShopHeader);
