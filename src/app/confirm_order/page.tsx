import React from 'react';
import ConfirmOrderPage from "@/componens/ConfirmOrderPage/ConfirmOrderPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Підтвердження замовлення"
}

const ConfirmOrder = () => {
    return (
        <ConfirmOrderPage/>
    );
};

export default ConfirmOrder;