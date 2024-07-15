"use client"
import React, {useEffect, useState} from 'react';
import "./confirmOrder.sass"
import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import Spinner from "@/componens/Spinner/Spinner";
import PhoneInput from 'react-telephone-input';
import {IProduct} from "@/types/getAllProducts";
import Link from "next/link";

function inputAddressHandler (setIsFocusDepartments: any) {
    setTimeout(()=> {
        setIsFocusDepartments(false)
    }, 200)
}

function inputCityHandler (setIsFocus: any) {
    setTimeout(()=> {
        setIsFocus(false)
    }, 200)
}

function InputMask(props: { placeholder: string, mask: string }) {
    return null;
}

function allProductCount (products: any, storageItems: any) {
    let basketProductsPrice = 0;
    products.forEach((product: IProduct) => {
        storageItems.forEach((storageItem: any) => {
            if (product._id ==  storageItem.value.id) {
                basketProductsPrice += +product.price*storageItem.value.count
            }
        })
    })
    return basketProductsPrice
}

const ConfirmOrder = () => {
    const {
        confirmOrderName,
        confirmOrderSurName,
        confirmOrderAddress,
        confirmOrderEmail,
        confirmOrderTel,
        confirmOrderCity,
        confirmOrderSendData,
        resetConfirmOrderData,
        confirmOrderProducts,
        addCitiesNovaPoshta,
        chosenCityNovaPoshta
    } = useActions()
    const {name, surName, tel, address, city, email, products, send_success, loading} = useTypedSelector(state => state.confirmOrder)
    const {cities} = useTypedSelector(state => state.deliverySystem.novaPoshta)
    const [isFocus, setIsFocus] = useState(false)
    const {departments} = useTypedSelector(state => state.deliverySystem.novaPoshtaChosenCityReducer)
    const [isFocusDepartments, setIsFocusDepartments] = useState(false)
    const {addressDepartmentNovaPoshta} = useActions()
    const {chosenCity} = useTypedSelector(state => state.deliverySystem.novaPoshta)
    const [allPrice, setAllPrice] = useState(0);
    const {allProducts} = useTypedSelector(state => state)
    const {items} = useTypedSelector(state => state.localeStorageReducer)

    useEffect(()=> {
        // @ts-ignore
        confirmOrderProducts(items)
        resetConfirmOrderData()
        window.scrollTo(0, 0);
    }, [])
    useEffect(() => {
        let allPriceNumber = allProductCount(allProducts.products, items)
        setAllPrice(allPriceNumber)
    }, [allProducts.products, products, items]);
    return (
        <div className={"confirm_order_page"} >
            <div className="container">
                <h2>Оформити замовлення</h2>
                <div className="confirm_order_content">
                    <form>
                        <div className={"form_confirm_input"}>
                            <label htmlFor="confirm_input_name">Ім'я</label>
                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                confirmOrderName(event.target.value)
                            }} value={name} className={"confirm_input_name"} type="text"/>
                        </div>
                        <div className={"form_confirm_input"}>
                            <label htmlFor="confirm_input_surname">Прізвище</label>
                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                confirmOrderSurName(event.target.value)
                            }} value={surName} className={"confirm_input_surname"} type="text"/>
                        </div>
                        <div className={"form_confirm_input"}>
                            <label htmlFor="confirm_input_number">Телефон</label>
                            <PhoneInput
                                value={tel}
                                defaultCountry="ua"
                                onlyCountries={['ua']}
                                className={"confirm_input_number"}
                                onChange={(event: any) => {
                                    confirmOrderTel(event)
                                }}
                            />
                        </div>
                        <div className={"form_confirm_input"}>
                            <label htmlFor="confirm_input_email">Email</label>
                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                confirmOrderEmail(event.target.value)
                            }} value={email} className={"confirm_input_email"} type="email"/>
                        </div>

                        <div className={"form_confirm_input"}>
                            <label htmlFor="confirm_input_city">Місто або село</label>
                            <input onFocus={() => {
                                setIsFocus(true)
                            }} onBlur={() => {
                                inputCityHandler(setIsFocus)
                            }} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                confirmOrderCity(event.target.value)
                                addCitiesNovaPoshta(event.target.value)
                            }} value={city} className={"confirm_input_city"} type="text"/>
                            <div className="confirm_input_city_wrapper">
                                <div
                                    className={isFocus ? "form_confirm_input_choose_city active" : "form_confirm_input_choose_city"}>
                                    <ul>
                                        {cities.map(city => (
                                            <li onClick={(event) => {
                                                setIsFocus(false)
                                                confirmOrderCity(city.Present)
                                                chosenCityNovaPoshta(city)
                                            }}>{city.Present}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={"form_confirm_input"}>
                            <label htmlFor="confirm_input_address">Відділення або поштомат Нова пошта</label>
                            <input onFocus={() => {
                                setIsFocusDepartments(true)
                            }} onBlur={() => {
                                inputAddressHandler(setIsFocusDepartments)
                            }} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                confirmOrderAddress(event.target.value)
                                addressDepartmentNovaPoshta(event.target.value, chosenCity?.DeliveryCity)
                            }} value={address} className={"confirm_input_address"} type="text"/>
                            <div className="confirm_input_city_wrapper">
                                <div
                                    className={isFocusDepartments ? "form_confirm_input_list_of_departments active" : "form_confirm_input_list_of_departments"}>
                                    <ul>
                                        {departments.map(department => (
                                            <li onClick={(event) => {
                                                setIsFocusDepartments(false)
                                                confirmOrderAddress(department.Description)
                                            }}>
                                                {department.Description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </form>
                    <div className="confirm_order_delivery_data">
                        <div className="confirm_order_delivery_data_item sum_of_order">
                            <p>Сума замовлення:</p>
                            <p><strong>{allPrice + " грн"}</strong></p>
                        </div>
                        <div className="confirm_order_delivery_data_item delivery_system">
                            <p>Спосіб доставки: </p>
                            <p><strong>Нова пошта</strong></p>
                        </div>
                        <div className="confirm_order_delivery_data_item payment">
                            <p>Оплата: </p>
                            <p><strong>При отриманні товару</strong></p>
                        </div>
                        <div className="button_items">
                            {loading ?
                                <Spinner/> : send_success ? <div className={"form_confirm_success_items"}>
                                    <div className={"form_confirm_success"}>
                                        Замолення оформлено
                                    </div>
                                    <Link href={"/"}>
                                        <div className={"form_confirm_success_link"}>
                                            Повернутися на головну сторінку
                                        </div>
                                    </Link>
                                </div> : <button className={allPrice == 0 ? "button_submit" : "button_submit active"} onClick={(event) => {
                                    confirmOrderSendData(name, surName, tel, address, city, email, products, event, allPrice);
                                }} type={"submit"}>{allPrice == 0 ? "Замовлення відсутні" : "Оформити замовлення"}</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;