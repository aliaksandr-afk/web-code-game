import React, { createContext, useState } from "react";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    const values = {
        html, css, js, setHtml, setCss, setJs
    }

    return (
        <EditorContext.Provider value={values}>
            { children }
        </EditorContext.Provider>
    )
}


export {
    EditorProvider, EditorContext
}