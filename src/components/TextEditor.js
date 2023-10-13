import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({ onUpLoad, isUpLoad, handleTxt }) => {
    const editorRef = useRef(null);
    
    const handleTxtField = (e) => {
        if (editorRef.current) {
            handleTxt(editorRef.current.getContent())
        }
    }
    return (
        <>
            <Editor 
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            onInit={(evt, editor) => editorRef.current = editor}
            onChange={handleTxtField}
            init={{
                height: 250,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'charmap', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'table', 'preview', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'link |' + 'removeformat | help',
                content_style: 'body {font-family:Roboto,Courier New,Helvetica,Arial,sans-serif; font-size:14px}',
                content_css: 'tinymce-5'
            }}
        />
        </>
    )
}

export default TextEditor