import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React  from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
};

const maxLength = maxLengthCreator(15)

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength]}/>
          </div>
          <div>
              <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength]}/>
          </div>
          <div>
              <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength]}/> remember me
          </div>
          <div>
              <button>Login</button>
          </div>
      </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: LoginFormDataType) => {
        console.log(formData)
    }

  return(
      <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}