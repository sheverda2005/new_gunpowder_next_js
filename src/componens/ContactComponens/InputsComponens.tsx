'use client';
import React, {useEffect} from 'react';
import PhoneInput from "react-telephone-input";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import Spinner from "@/componens/Spinner/Spinner";

const InputsComponens = () => {
    const {inputFeedbackName, inputFeedbackNumber, inputFeedbackEmail, inputFeedbackMessage, confirmFeedbackMessage, clearFeedBackData} = useActions()
    const {name, number, message, email, loading, success} = useTypedSelector(state => state.feedback)
    useEffect(()=> {
        clearFeedBackData()
    }, [])
    return (
        <div className="feedback_inputs">
            <div className="feedback_inputs_userData">
                <input onChange={(event) => {
                    inputFeedbackName(event.target.value)
                }} value={name} placeholder={"Ім'я"} type="text"/>
                <PhoneInput
                    value={number}
                    defaultCountry="ua"
                    onlyCountries={['ua']}
                    placeholder={"Телефон"}
                    onChange={(event: any) => {
                        inputFeedbackNumber(event)
                    }}
                />
                <input onChange={(event) => {
                    inputFeedbackEmail(event.target.value)
                }} value={email} placeholder={"Email"} type="email"/>
            </div>
            <div className="feedback_inputs_massage">
                                    <textarea onChange={(event) => {
                                        inputFeedbackMessage(event.target.value)
                                    }} value={message} placeholder={"Повідомлення"}/>
            </div>
            <div className="button_send_message">
                {loading ? <Spinner/>
                    :
                    success ? <div className={"send_message_done"}>
                            Ваше повідомлення відправлено
                        </div> :
                        <button onClick={() => {
                            confirmFeedbackMessage(name, number, email, message)
                        }}>Надіслати
                        </button>
                }
            </div>
        </div>

    );
};

export default InputsComponens;