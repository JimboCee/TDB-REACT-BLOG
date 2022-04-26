import React, {useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Write.css'

function Write() {
    const [value, setValue] = useState("")

    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        setValue(data)
    }

    return (
        
        <div>
            <div className="writeHeadline">
                <h1>Compose New Post</h1>
            </div>
            
            <CKEditor
                editor ={ClassicEditor}
                onChange={handleOnChange}
            />
            
            <div className="writePreview">
                {value}
            </div>
                    
        </div>
        
    )

}

export default Write;