import React from "react";
import store, {RootStoreType} from "./redux/reduxStore";
import App from "./App";


export const StoreContext = React.createContext({} as RootStoreType);

type ProviderType = {
    value: RootStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}
