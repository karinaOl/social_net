import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export type AddMessageFormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageBody"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength50]}
                />
            </div>
            <button>add</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: "addMessageForm"})(AddMessageForm)