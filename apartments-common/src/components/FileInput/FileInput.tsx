import React, { useRef } from 'react';

import Button from '../Button/Button';
import { FileInputProps } from '../../models/FileInput.type';

const FileInput = ({ handleFileInputChange, multiple, allowedExtensions }: FileInputProps): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>();

    return (
        <>
            <input
                type="file"
                ref={inputRef}
                onChange={(e) => handleFileInputChange(e.target.files)}
                multiple={multiple}
                accept={allowedExtensions ? allowedExtensions.join() : null}
                hidden />

            <Button
                text="Upload"
                clickHandler={() => inputRef.current.click()}
            />
        </>
    )
}

export default FileInput;