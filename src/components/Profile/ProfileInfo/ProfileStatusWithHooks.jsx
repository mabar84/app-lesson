export const ProfileStatusWithHooks =(props)=> {

        return (
            <div>
                {
                    <div>
                        <span onDoubleClick={props.activateEditMode}>
                            {props.status.status || 'some status'}
                        </span>
                    </div>
                }
                {false &&
                    <div>
                        <input onChange={props.onStatusChange}
                               value={''}
                               onBlur={props.deactivateEditMode}
                               autoFocus
                        />
                    </div>
                }
            </div>
        )
    }