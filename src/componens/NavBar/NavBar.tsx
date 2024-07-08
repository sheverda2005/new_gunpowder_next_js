"use client"
import Link from "next/link";
import "./navBar.sass"
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import ModalMenu from "@/componens/NavBar/ModalMenu/ModalMenu";
import BurgerMenu from "@/componens/NavBar/BurgerMenu/BurgerMenu";


const NavBar = () => {
    const {active, profileActive} = useTypedSelector(state => state.modalMenu.modalMenu)
    const {activeSearch} = useTypedSelector(state => state.search.searchMenu)
    const {modalActiveMenuActionsTrue, searchMenuModalTrue, modalActiveProfileActionsTrue, modalActiveBasketActionsTrue} = useActions()
    return (
        <nav>
            <ModalMenu title={profileActive ? "Увійти": "Кошик"}  active={active} />
            {/*<SearchModal active={activeSearch} />*/}
            <div className="contact_panel">
                <div className="container contact_panel">
                    <div className="contact_info">
                        <a href={"tel:380687366557"} className="contact_number">
                            <img src="/image/call.svg" alt="Call"/>
                            <span>+38 068 73 66 557</span>
                        </a>
                        <a href={"mailto:nsewerda04@gmail.com"} className="contact_email">
                            <img src="/image/mail.svg" alt="mail"/>
                            <span>nsewerda04@gmail.com</span>
                        </a>
                    </div>
                    <div className="contact_user_data">
                        {/*<NavLink to={"/comparison"} className="user_data_link comparison_link">*/}
                        {/*    <img src="/image/compare.svg" alt="compare"/>*/}
                        {/*    <span>Порівняння</span>*/}
                        {/*</NavLink>*/}
                        {/*<NavLink to={"/chosen"} className="user_data_link chosen_link">*/}
                        {/*    <img src="/image/heart.svg" alt="heart"/>*/}
                        {/*    <span>Обране</span>*/}
                        {/*</NavLink>*/}
                        <div className="user_data_link profil_link"  onClick={()=> {
                            modalActiveMenuActionsTrue()
                            modalActiveProfileActionsTrue()
                        }} >
                            <img src="/image/account.svg" alt="account"/>
                            <span>Профіль</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"main_menu"}>
                <div className="container main_menu">
                    <div className="logo_main_menu_item">
                        <Link href={'/'}>
                            <img className={"main_menu_logo"} src="/image/logo.svg" alt=""/>
                        </Link>
                    </div>
                    <BurgerMenu/>
                    <menu>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    Головна
                                </Link>
                            </li>
                            <li>
                                <Link href={"/shop"}>
                                    Магазин
                                </Link>
                            </li>
                            <li className={"li_drop_down"}>
                                Покупцям
                                <img className={"down_arrow"} src="/image/down-arrow.svg" alt="down-arrow"/>
                                <div className="drop_down_menu">
                                    <div className="drop_down_menu_content">
                                        <Link href={'/about_us'}>
                                            <div className="drop_down_menu_item">
                                                Про нас
                                            </div>
                                        </Link>
                                        <Link href={'/delivery_payment'}>
                                            <div className="drop_down_menu_item">
                                                Доставка і оплата
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href={'/contact'}>
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </menu>
                    <div className="search_basket">
                        {/*<div onClick={()=> {*/}
                        {/*    searchMenuModalTrue()*/}
                        {/*}} className="menu_search">*/}
                        {/*    <img src="/image/search-b.svg" alt="search"/>*/}
                        {/*    <span>Пошук</span>*/}
                        {/*</div>*/}
                        <div  onClick={()=> {
                            modalActiveMenuActionsTrue()
                            modalActiveBasketActionsTrue()
                        }}  className="menu_basket">
                            <img src="/image/shopping-cart-b.svg" alt="basket"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;