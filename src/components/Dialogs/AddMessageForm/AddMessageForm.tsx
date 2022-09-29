import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormDataType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"}
                       name={"newMessageBody"}
                       placeholder={"Enter your message"}
                />
            </div>
            <button>add</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: "addMessageForm"})(AddMessageForm)