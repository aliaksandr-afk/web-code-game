import React from "react"
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/snippets/css"
import "ace-builds/src-min-noconflict/ext-language_tools";

const CssEditor = () => {

    return (
        <AceEditor
            placeholder="Write your Css codes here!"
            mode = 'css'
            theme="monokai"
            name="editor_css"
            fontSize="16"
            height={"100%"}
            width={"100%"}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={
                {
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    tabSize: 2
                }
            }
        />
    )
}

export default CssEditor