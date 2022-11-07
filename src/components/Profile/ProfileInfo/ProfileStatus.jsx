import {Component} from "react";


class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false,
            }
        )
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.status || 'some status'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               value={this.state.status}
                               onBlur={this.deactivateEditMode}
                               autoFocus
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
