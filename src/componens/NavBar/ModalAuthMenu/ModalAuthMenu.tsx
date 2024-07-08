import "./modal_auth_menu.sass"

const ModalAuthMenu = () => {
    return (
            <div className="auth_menu_form">
                <form className={"auth_form"}>
                    <div className="auth_menu_form_item">
                        <div className="auth_menu_form_email_item">
                            <label htmlFor="email_input">Email або номер телефону </label>
                            <input className={"email_input"} type="text"/>
                        </div>
                        <div className="auth_menu_form_password_item">
                            <label htmlFor="auth_menu_form_password">Пароль </label>
                            <input className={"auth_menu_form_password"} type="password"/>
                        </div>
                    </div>
                    <div className="auth_menu_remember_forgot_item">
                        <div className="menu_form_remember_me">
                            <input type="checkbox"/>
                            <span>Запам'ятати мене</span>
                        </div>
                        <div className="forgot_password">
                            Забули пароль ?
                        </div>
                    </div>
                    <button type={"submit"}>
                        Увійти
                    </button>
                </form>
            </div>
    );
};

export default ModalAuthMenu;