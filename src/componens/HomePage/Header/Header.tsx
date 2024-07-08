import React from 'react';
import Link from "next/link";
import "./header.sass"

const Header = () => {
    return (
        <header>
            <div className="container header">
                <div className="header_wrapper">
                    <div className="header_options">
                        <ul>
                            <li>
                                <Link href={"/single_product/661d5868c274b1ab819732bb"}>
                                    <p>РЕБ</p>
                                </Link>
                                <div className="border_gradient">
                                </div>
                            </li>
                            <li>
                                <Link href={'/target_sensors'}>
                                    <p>Датчики цілі</p>
                                </Link>
                                <div className="border_gradient">
                                </div>
                            </li>
                            <li>
                                <Link href={"/contact"}>
                                    <p>Контакти</p>
                                </Link>
                                <div className="border_gradient">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="header_slider">
                        <div className="header_slider_wrapper">
                            <div className="header_slider_content">
                                <h1>електронні системи</h1>
                                <p>Наш сайт містить електронні системи для виконання військових завдань</p>
                                <Link href={"/shop"}>
                                    <button>До каталогу</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;