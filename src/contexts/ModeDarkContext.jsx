import { createContext, createContext, useState } from "react";

const ModeDarkContext  = createContext()

const ModeDarkContextProvider = ({ children })=> {
    const [ModeDark, setModeDark] = useState(false)
    const values = {ModeDark, setModeDark}

    const HandleMode = () => {
        if(ModeDark === false) {
            setdark(true)
        } else {
            setdark(false)
        }
    }

    return (
        <ModeDarkContext.Provider values={values}>
            {children}
        </ModeDarkContext.Provider>
    )
}

export {ModeDarkContextProvider}

export default ModeDarkContext