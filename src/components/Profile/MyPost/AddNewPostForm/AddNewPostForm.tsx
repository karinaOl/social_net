import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddNewPostFormDataType = {
    newPostText: string
}

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"}
                       name={"newPostText"}
                />
            </div>
            <button>ADD</button>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: "profileAddNewPostReduxForm"})(AddNewPostForm)

