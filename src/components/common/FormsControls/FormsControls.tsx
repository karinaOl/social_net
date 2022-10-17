import React, {FC} from "react";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import style from "./FormControl.module.css"
import {FieldValidatorType, maxLengthCreator, required} from "../../../utils/validators/validators";


type FormControlsPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlsPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={`${style.formControl} ${hasError ? style.error : ""}`}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


export const createField = <FormKeysType extends string>(
    name: FormKeysType,
    placeholder: string | undefined,
    validators: Array<FieldValidatorType>,
    component: FC<WrappedFieldProps>,
    props = {},
    text = "",) => {
    return (
        <div>
            <Field name={name}
                   placeholder={placeholder}
                   validate={validators}
                   component={component}
                   {...props}
            /> {text}
        </div>
    )
}