import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utilites/validators/validators';
import {FormField} from '../common/FormsControls/FormsControls';

export const Login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const maxLength = maxLengthCreator(10)

let LoginForm =(props)=> {
       return(
           <form onSubmit={props.handleSubmit}>
               <div>
                   <Field elem={'input'} component={FormField} placeholder={'your login'}
                          name={'login'} validate={[required, maxLength]}
                   />
               </div>
               <div>
                   <Field elem={'input'} component={FormField} placeholder={'password'}
                          name={'password'} validate={[required, maxLength]}
                   />
               </div>
               <div>
                   <Field component={'input'} type="checkbox" name={'rememberMe'}/>
                   <span>remember me</span>
               </div>
               <div>
                   <button type="submit">Login</button>
               </div>
           </form>
       )
}

 LoginForm = reduxForm({form: 'login123'})(LoginForm);

