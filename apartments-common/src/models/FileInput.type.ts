export type FileInputProps = {
    handleFileInputChange: (fileList: FileList) => void,
    multiple: boolean,
    allowedExtensions: string[]
}