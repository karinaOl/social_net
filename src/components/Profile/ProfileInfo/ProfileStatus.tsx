import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
};

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode &&
            <div>
                <span onDoubleClick={activateEditMode} onBlur={deactivateEditMode}>
                    {status || "------"}
                </span>
            </div>
            }
            {!editMode &&
            <div>
                <input value={status} onChange={onStatusChange} autoFocus/>
            </div>
            }
        </div>
    )
}