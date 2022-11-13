import React from "react";
import {ApplicationProcessType} from "./ApplicationProcessType";

export type Application = ApplicationProcessType & {
    appNode: React.ReactNode,
}