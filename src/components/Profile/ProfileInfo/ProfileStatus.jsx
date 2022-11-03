import {Component} from "react";


class ProfileStatus extends Component {

    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode() {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivateEditMode() {
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>
                            {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status}
                               onBlur={this.deactivateEditMode.bind(this)}
                               autofocus={true}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
