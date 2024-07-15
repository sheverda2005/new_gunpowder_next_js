"use client";
import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {store} from "@/store/index";
import {useActions} from "@/hooks/useActions";


export const  StoreProvider = ({children}: {children: React.ReactNode}) => {
    return <Provider store={store}>{children}</Provider>;
}