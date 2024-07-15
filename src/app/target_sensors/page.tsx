import React from 'react';
import {Metadata} from "next";
import TargetSensorsPage from "@/componens/TargetSensorsPage/TargetSensorsPage";

export const metadata: Metadata = {
    title: "Датчики цілі"
}

const TargetSensors = () => {
    return (
        <div>
            <TargetSensorsPage/>
        </div>
    );
};

export default TargetSensors;