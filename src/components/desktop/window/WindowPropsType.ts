import React from "react";
import {ApplicationProcessType} from "../../applications/ApplicationProcessType";

export type WindowProps = ApplicationProcessType & {
    children: React.ReactNode,
    windowClosedCallback: Function
    windowClickedCallback: Function
};