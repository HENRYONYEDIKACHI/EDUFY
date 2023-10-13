import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

const FilePicker = () => {
    const pickerRef = useRef(null);

    return (
        <Editor
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            onInit={(evt, editor) => pickerRef.current = editor}
            plugins='image media'
            toolbar='image media'
            init={ {
                height: 250,
                width: '100%',
                menubar: false,
                file_picker_types: 'image media',
                file_picker_callback: function(callback, value, meta) {
                    // Provide file and text for the link dialog
                    if (meta.filetype == 'file') {
                        callback('mypage.html', { text: 'My text' });
                    }

                    // Provide image and alt text for the image dialog
                    if (meta.filetype == 'image') {
                        callback('myimage.jpg', { alt: 'My alt text' });
                    }

                    // Provide alternative source and posted for the media dialog
                    if (meta.filetype == 'media') {
                        callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
                    }
                },
            }}
        />
    )
}
export default FilePicker