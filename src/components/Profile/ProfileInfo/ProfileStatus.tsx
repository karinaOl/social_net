import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
};

type ProfileStatusStateType = {
    editMode: boolean
    statusText: string
};


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state = {
        editMode: false,
        status: ""
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            status: ""
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}
                               autoFocus/>
                    </div>
                }
            </div>
        )
    }
}