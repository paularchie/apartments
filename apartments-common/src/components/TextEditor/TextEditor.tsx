import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {

    const [markup, setMarkup] = useState('');

    const toolbarConfig = [
        'heading',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'undo',
        'redo'
    ];

    function createMarkup() {
        return { __html: markup };
    }

    return (
        <>

            <CKEditor
                config={{ toolbar: toolbarConfig }}
                editor={ClassicEditor}
                data={markup}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setMarkup(data);
                    console.log({ data, event, editor });
                }}
                onBlur={editor => {
                    console.log('Blur.', editor);
                }}
                onFocus={editor => {
                    console.log('Focus.', editor);
                }}
            />

            <div dangerouslySetInnerHTML={createMarkup()} />
        </>
    );
}

export default Editor;