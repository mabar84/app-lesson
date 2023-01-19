import s from './ProfileInfo.module.css';
import {Field, reduxForm} from "redux-form";
import {FormField} from "../../common/FormsControls/FormsControls";
import React from "react";

let ProfileDataForm = ({handleSubmit, profile, setEditMode, error}) => {

    const cancelEditMode = () => {
        setEditMode(false)
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <div className={s.flex}>
                <button type={"submit"}>
                    Save
                </button>
                <button onClick={cancelEditMode}>
                    Cancel
                </button>
            </div>
            <br/>
            <b>Full name</b>
            <Field elem={'input'}
                   component={FormField}
                   placeholder={'Your name'}
                   name={'fullName'}
            />
            <span className={s.formControl2}>{error}</span>
            <br/>
            <b>About me</b>
            <Field elem={'input'}
                   component={FormField}
                   placeholder={'About'}
                   name={'aboutMe'}
            />
            <b>Looking for a job?</b>
            <Field elem={'input'}
                   component={FormField}
                   name={'lookingForAJob'}
                   type={'checkbox'}
            />
            <b>My professional skills</b>
            <Field elem={'textarea'}
                   component={FormField}
                   name={'lookingForAJobDescription'}
            />
        </div>

        <b>Contacts:</b> {Object.keys(profile.contacts).map((el) => {
        return <div key={el} className={s.flex}>
            <span>{el}:</span>
            <Field className={s.field} elem={'input'}
                   component={FormField}
                   placeholder={el}
                   name={`contacts.` + el}
            />
        </div>
    })}


        {/*<Contact contactTitle={el} contactValue={profile.contacts[el]} key={el}/>*/}

        {/*<p><b>About me:</b> {profile.aboutMe ? profile.aboutMe : 'while empty'}</p>*/}
        {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map((el) => {*/}
        {/*    return <Contact contactTitle={el} contactValue={profile.contacts[el]} key={el}/>*/}
        {/*})}*/}

        <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
    </form>
}

export default ProfileDataForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)