import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)