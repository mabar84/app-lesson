import React from 'react';
import styles from './FormsControls.module.css';

export const FormField = ({input, meta, ...props}) => {

    let elem = props.elem
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            {(elem === 'input') && <input {...input} {...props}/>}
            {(elem === 'textarea') && <textarea {...input} {...props}/>}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}