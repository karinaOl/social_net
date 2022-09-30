import React, { FC } from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import style from "./FormControl.module.css"


type FormControlsPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlsPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return(
        <div className={`${style.formControl} ${hasError ? style.error : ""}`}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}