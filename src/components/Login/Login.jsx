import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utilites/validators/validators';
import {FormField} from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css';

const maxLength = maxLengthCreator(30)

let LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                {error && <p className={s.summaryError}>{error}</p>}
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login,isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
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