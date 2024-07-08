import "./burger_menu.sass"
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import {burgerMenuActive} from "@/store/actions/burgerMenuActions";
import Link from "next/link";

const BurgerMenu = () => {
    const {active} = useTypedSelector(state => state.modalMenu.burgerMenu)
    const {burgerMenuActive} = useActions()
    return (
        <div className={"burger_menu"} >
            <div onClick={()=> {
                burgerMenuActive()
            }} className={active ? "burger_menu_content active": "burger_menu_content"}>
                <div className="burger_menu_item one"></div>
                <div className="burger_menu_item two"></div>
                <div className="burger_menu_item tree"></div>
            </div>
            <div className={active ? "burgerMenuModalItem active" : "burgerMenuModalItem"}>
                <ul onClick={()=> {
                    burgerMenuActive()
                }}>
                    <Link href={"/"}>
                        <li>Головна</li>
                    </Link>
                    <Link href={"/shop"}>
                        <li>Магазин</li>
                    </Link>
                    <Link href={"/about_us"}>
                        <li>Про нас</li>
                    </Link>
                    <Link href={"/contact"}>
                        <li>Контакти</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;