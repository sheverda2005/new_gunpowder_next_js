import {Dispatch} from "react";
import {
    ICityNovaPoshta,
    INova_poshta_city,
    INovaPoshtaCityActions,
    INovaPoshtaCityTypes
} from "../../types/nova_poshta_city";
import axios from "axios";
import {LIST_OF_DEPARTMENTSTypes, ListOfDepartmentsActions} from "../../types/listOfDepartmentsNovaPoshta";



export function addCitiesNovaPoshta (city_address_input: string) {
    return async (dispatch: Dispatch<INovaPoshtaCityActions>) => {
        try {
            const req = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
                apiKey: "70c1d39bfeee79ae18eb611e10e7e2a3",
                modelName: "Address",
                calledMethod: "searchSettlements",
                methodProperties: {
                    CityName : city_address_input,
                    Limit: "30",
                    Page : "1"
                }
            })
            dispatch({
                type: INovaPoshtaCityTypes.INPUT_CITIES_ADDRESS_NOVA_POSHTA,
                payload: req.data.data[0].Addresses
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function chosenCityNovaPoshta (chosenCity: ICityNovaPoshta) {
    return async (dispatch: Dispatch<INovaPoshtaCityActions | ListOfDepartmentsActions>) => {
        dispatch({
            type: INovaPoshtaCityTypes.CHOSEN_CITY_ADDRESS_NOVA_POSHTA,
            payload: chosenCity
        })
        const req = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
            apiKey: "70c1d39bfeee79ae18eb611e10e7e2a3",
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityRef : chosenCity.DeliveryCity,
                Page : "1",
                Limit : "100",
                Language : "UA"

            }
        })
        dispatch({type: LIST_OF_DEPARTMENTSTypes.GET_LIST_IF_DEPARTMENTS, payload: req.data.data})
    }
}

export function addressDepartmentNovaPoshta (input_data: string, ref: string | undefined) {
    return async (dispatch: Dispatch<ListOfDepartmentsActions>) => {
        const req = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
            apiKey: "70c1d39bfeee79ae18eb611e10e7e2a3",
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                FindByString: input_data,
                CityRef : ref,
                Page : "1",
                Limit : "50",
            }
        })
        dispatch({type: LIST_OF_DEPARTMENTSTypes.GET_LIST_IF_DEPARTMENTS, payload: req.data.data})
    }}