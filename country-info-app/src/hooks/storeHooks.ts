import React from "react";
import { storeContext } from "../store";

export const useStore = () => React.useContext(storeContext);