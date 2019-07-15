import * as mongoose from 'mongoose';

// add additional properties to the interface
declare module 'mongoose' {
    interface DocumentQuery<T, DocType extends Document> {
        cache?: Function;
    }
}

export { mongoose };
