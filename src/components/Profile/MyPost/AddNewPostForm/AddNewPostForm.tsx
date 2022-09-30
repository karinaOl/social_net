import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

export type AddNewPostFormDataType = {
    newPostText: string
}

const maxLength = maxLengthCreator(30)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newPostText"}
                       validate={[required, maxLength]}
                />
            </div>
            <button>ADD</button>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: "profileAddNewPostReduxForm"})(AddNewPostForm)

