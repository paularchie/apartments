const FileInput = ({ inputRef, handleFileInputChange }): JSX.Element => {
    return (
        <>
            <input
                type="file"
                ref={inputRef}
                onChange={(e) => handleFileInputChange(e.target.files)}
                multiple
                hidden />

            <button onClick={() => inputRef.current.click()}>Upload</button>
        </>
    )
}

export default FileInput;