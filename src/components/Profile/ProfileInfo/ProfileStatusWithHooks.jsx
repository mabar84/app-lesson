import {useEffect, useState} from 'react';

export const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        if (status.length <= 300) {
            setEditMode(false)
            props.updateUserStatus(status)
        } else {
            alert(`Длина статуса не может превышать 300 символов, сейчас ${status.length}`)
        }

    }

    const onStatusChange = (e) => {
        console.log(status.length)
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <p onDoubleClick={activateEditMode}
                       style={{
                           width: '50vw',
                           color: 'red',
                           height: 'auto',
                           wordWrap: 'break-word'
                       }}>
                        {status || 'some status'}
                    </p>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           value={status}
                           onBlur={deactivateEditMode}
                           autoFocus
                    />
                </div>
            }
        </div>
    )
}