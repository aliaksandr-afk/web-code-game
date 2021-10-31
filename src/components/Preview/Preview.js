import React, {useContext} from 'react'
import styles from './Preview.module.css'
import { EditorContext } from "../../context/context";

export default function Preview() {

const {html, css, js} = useContext(EditorContext)

const document = () => {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>

<scripts>
    ${js}
</scripts>

</html>
    
    `
}

    return (
        <div>
            
        </div>
    )
}
