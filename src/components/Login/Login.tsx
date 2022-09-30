import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {FC} from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import style from "../common/FormsControls/FormControl.module.css"
import {Redirect} from "react-router-dom";
import {RootAppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";


type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
};

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const maxLength = maxLengthCreator(25)

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength]}/>
          </div>
          <div>
              <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required, maxLength]}/>
          </div>
          <div>
              <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength]}/> remember me
          </div>
          { props.error && <div className={style.formSummaryError}>
              {props.error}
          </div>}
          <div>
              <button>Login</button>
          </div>
      </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm)

const Login: FC<LoginPropsType>  = (props) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

  return(
      <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}

const mapStateToProps = (state: RootAppStateType) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login)