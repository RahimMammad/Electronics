import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({children}) => {
    const [basketArr, setBasketArr] = useState([])
    localStorage.getItem("Electronics" ? JSON.parse(localStorage.getItem("Electronics")) : [])

    useEffect(() => {
        localStorage.setItem("Electronics", JSON.stringify(basketArr))
    }, [basketArr])

    const data = {basketArr, setBasketArr};
    
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider