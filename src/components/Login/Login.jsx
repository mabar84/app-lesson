import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utilites/validators/validators';
import {FormField} from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css';

const maxLength = maxLengthCreator(30)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field elem={'input'} component={FormField} placeholder={'email'}
                       name={'email'} validate={[required, maxLength]}
                />
            </div>
            <div>
                <Field elem={'input'} component={FormField} placeholder={'password'}
                       name={'password'} validate={[required, maxLength]} type={'password'}
                />
            </div>
            <div>
                <Field component={'input'} type="checkbox" name={'rememberMe'}/>
                <span>remember me</span>
            </div>
            <div>
                {props.error && <p className={s.summaryError}>{props.error}</p>}
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)