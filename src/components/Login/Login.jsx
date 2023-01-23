import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utilites/validators/validators';
import {FormField} from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css';

const maxLength = maxLengthCreator(30)

let LoginForm = ({handleSubmit, error, captchaUrl}) => {
    // const ClickToSeeCaptcha = () => {
    //     console.log('Hi!')
    //     const instance = axios.create({
    //         baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    //         withCredentials: true,
    //         headers: {'API-KEY': '0c05ac6b-5e3e-4b36-9db5-22b60756c580'}
    //     });
    //     instance.get(`/security/get-captcha-url`)
    //         .then((response) => {
    //             const url = response.data.url
    //             // console.log(response.data.url)
    //             return url
    //         })
    //     console.log(url)
    // }


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
                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && <Field elem={'input'} component={FormField} placeholder={'captcha'}
                                      name={'captcha'} validate={[required]}
                />}

                {error && <p className={s.summaryError}>{error}</p>}
                <button type="submit">Login</button>
            </div>
            {/*<span onClick={ClickToSeeCaptcha} style={{cursor: 'pointer', color: 'red'}}>ClickToSeeCaptcha</span>*/}
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)