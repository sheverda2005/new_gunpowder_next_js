import React, {FC} from 'react';
import './modal_menu.sass'
import {useActions} from "@/hooks/useActions";
import ModalAuthMenu from "../ModalAuthMenu/ModalAuthMenu";
import ModalBasketMenu from "../ModalBasketMenu/ModalBasketMenu";
import {useTypedSelector} from "@/hooks/useTypedSelector";

interface IModalMenu {
    active: boolean,
    title: string
}
const ModalMenu: FC<IModalMenu> = ({active, title}) => {
    const {profileActive, basketActive} = useTypedSelector(state => state.modalMenu.modalMenu)
    const {modalActiveMenuActionsFalse, modalActiveBasketActionsFalse, modalActiveProfileActionsFalse} = useActions()
    return (
        <>
            <div className={active ? "modal_menu active" : "modal_menu"}>
                <div className={active ? "modal_menu_content active" : "modal_menu_content"}>
                    <div className="modal_menu_content_title_and_exit">
                        <div className="modal_menu_content_title">
                            {title}
                        </div>
                        <div className="modal_menu_content_exit" onClick={() => {
                            modalActiveMenuActionsFalse()
                            modalActiveBasketActionsFalse()
                            modalActiveProfileActionsFalse()
                        }}>
                            <div className="modal_menu_content_exit_item one"></div>
                            <div className="modal_menu_content_exit_item two"></div>
                        </div>
                    </div>
                    {profileActive ? <ModalAuthMenu/> : ""}
                    {basketActive ? <ModalBasketMenu/> : ""}
                </div>
            </div>
        </>

    );
};

export default ModalMenu;