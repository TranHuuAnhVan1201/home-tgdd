import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './scss/Header.scss'
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

function Header(props) {
    const setNumberCarts = useSelector(state => state.GetCarts);
    const [role, setRole] = useState(null);
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            var decoded = jwtDecode(localStorage.getItem("token"));
            setRole(decoded.role);
        }
    }, []);
    const onLogout = () => {
        localStorage.removeItem("token");
        history.push("/");
        window.setTimeout(window.location.reload.bind(window.location), 10);
    }
    return (
        <header>
            <div className="wrap-main">
                <nav>
                    <li className="logo">
                        <Link to="/">LaptopNCT</Link>
                    </li>
                    <form id="search-site" action="/tim-kiem" method="GET">
                        <input type="text" name="key" id="search-keyword" className="topinput" aria-label="Bạn tìm gì..."  placeholder="Bạn cần tìm Laptop gì ?" defaultValue=""/>
                        <button className="btntop" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <div className="menu-info">
                        <li className="carts" id="carts">
                            <Link to="/carts">
                                <i className="roundy">{setNumberCarts.numberCart}</i>
                                <span>Giỏ hàng</span>
                            </Link>
                        </li>
                        <div className="menu-right">
                            <li><Link to="/about">Về chúng tôi</Link></li>
                            <li><Link to="/policy">Bảo hành</Link></li>
                            <li><Link to="/pay">Trả góp</Link></li>
                            <li><Link to="/contact">Liên hệ</Link></li>
                            <li><Link to="/new">Tin tức</Link></li>
                            <li> {(role) ? (<Link to="/Login"> Tên: {role}</Link>) : <Link to="/Login"> Đăng nhập</Link>}</li>
                            {/* <Link to="/Login"> { (role) ? "Tên: " + role : " Đăng nhập"}</Link>  */}
                            <li> {(role) ? (<Link onClick={onLogout}> Logout</Link>) : <Link to="/Register"> Đăng ký</Link>}</li>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="clr" />
            <div className="wrap-nav">
                <nav>
                    <li>
                        <Link to="/ultralbook">Gaming Render</Link>
                    </li>
                    <li>
                        <Link to="/ultralbook">Ultralbook</Link>
                    </li>
                    <li>
                        <Link to="/dell">Laptop Dell</Link>
                    </li>
                    <li>
                        <Link to="/hp">Laptop HP</Link>
                    </li>
                    <li>
                        <Link to="/lenovo">Laptop Lenovo</Link>
                    </li>
                    <li>
                        <Link to="/apple">Laptop Apple</Link>
                    </li>
                    <li>
                        <Link to="/acer">Laptop Acer</Link>
                    </li>
                    <li>
                        <Link to="/asus">Laptop Asus</Link>
                    </li>
                    <li>
                        <Link to="/msi">Laptop MSI</Link>
                    </li>
                    <li>
                        <Link to="/microsoftsurface">Microsoft Surface</Link>
                    </li>
                    <li>
                        <Link to="/samsung">Samsung</Link>
                    </li>
                    <li>
                        <Link to="/sony">Laptop Sony</Link>
                    </li>
                    
                </nav>
            </div>
        </header>
    );
}

export default Header;