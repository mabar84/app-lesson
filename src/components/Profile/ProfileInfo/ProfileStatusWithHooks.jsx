import {useState} from 'react';

export const ProfileStatusWithHooks =(props)=> {

    const [editMode,setEditMode]=useState(false)
    const [status,setStatus]=useState(props.status)

    //
    // useEffect((prevProps, prevState)=>{
    //     if (prevProps.status !== props.status) {
    //         setStatus(props.status)
    //     }
    // })

   const activateEditMode = () => {
        setEditMode(true)
    }
   const deactivateEditMode = () => {
        setEditMode(false)

        props.updateUserStatus(status)
   }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>
                            {status || 'some status'}
                        </span>
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