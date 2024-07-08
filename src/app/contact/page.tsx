import PhoneInput from "react-telephone-input";
import "./contacs.sass"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Контакти",
    description: 'Контакти для звернень покупців нашого магазину'
}

const ContactPage = () => {
    // const {inputFeedbackName, inputFeedbackNumber, inputFeedbackEmail, inputFeedbackMessage, confirmFeedbackMessage, clearFeedBackData} = useActions()
    // const {name, number, message, email, loading, success} = useTypedSelector(state => state.feedback)
    // useEffect(()=> {
    //     window.scrollTo(0,0);
    //     clearFeedBackData()
    // }, [])
    return (
        <div className={"contact_page"} >
            <div className="container">
                <div className="contact_page_content">
                    <h2>Контакти</h2>
                    <div className="contact_page_content_items">
                        <div className="contact_us">
                            <div className="call_us">
                                <div className="call_us_title">
                                    <img src="/image/contact_page_call_us.svg" alt="call us"/>
                                    Зателефонувати нам
                                </div>
                                <div className="numbers">
                                    <span>+38 (068) 736 65 57</span>
                                    {/*<span>+38 (000) 000 00 00</span>*/}
                                    {/*<span>+38 (000) 000 00 00</span>*/}
                                </div>
                            </div>
                            <div className="email">
                                <div className="email_title">
                                    <img src="/image/contact_us_email.svg" alt="contact_us"/>
                                    Електрона пошта
                                </div>
                                <p>
                                    nsewerda04@gmail.com
                                </p>
                            </div>
                            <div className="address">
                                <div className="adress_title">
                                    <img src="/image/contact_us_address.svg" alt="address"/>
                                    Адреса офісу
                                </div>
                                <p>
                                    м. Київ, Солом'янський район
                                </p>
                            </div>
                        </div>
                        <div className="feedback">
                            <h2>Зворотній зв'зок</h2>
                            <div className="feedback_inputs">
                                <div className="feedback_inputs_userData">
                                {/*    <input  placeholder={"Ім'я"} type="text"/>*/}

                                {/*    <PhoneInput*/}
                                {/*        value={number}*/}
                                {/*        defaultCountry="ua"*/}
                                {/*        onlyCountries={['ua']}*/}
                                {/*        placeholder={"Телефон"}*/}
                                {/*        onChange={(event: any) => {*/}
                                {/*            inputFeedbackNumber(event)*/}
                                {/*        }}*/}
                                {/*    />*/}
                                {/*    <input onChange={(event)=> {*/}
                                {/*        inputFeedbackEmail(event.target.value)*/}
                                {/*    }} value={email}  placeholder={"Email"} type="email"/>*/}
                                {/*</div>*/}
                                {/*<div className="feedback_inputs_massage">*/}
                                {/*    <textarea onChange={(event)=> {*/}
                                {/*        inputFeedbackMessage(event.target.value)*/}
                                {/*    }} value={message} placeholder={"Повідомлення"} />*/}
                                {/*</div>*/}
                                {/*<div className="button_send_message">*/}
                                {/*    {loading ? <Spinner/>*/}
                                {/*        :*/}
                                {/*        success ? <div className={"send_message_done"} >*/}
                                {/*                Ваше повідомлення відправлено*/}
                                {/*            </div> :*/}
                                {/*            <button onClick={() => {*/}
                                {/*                confirmFeedbackMessage(name, number, email, message)*/}
                                {/*            }}>Надіслати*/}
                                {/*            </button>*/}
                                {/*    }*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;