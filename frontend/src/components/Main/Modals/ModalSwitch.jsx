import BookModal from "./BookModal/BookModal";
import LineSegmentsModal from "./LineSegmentsModal/LineSegmentsModal";
import LoginModal from "./LoginModal/LoginModal";
import LogoutModal from "./LogoutModal/LogoutModal";

function ModalSwitch({ modalToShow, shouldShow, displayModal, setIsLoggedIn, accessToken, setAccessToken }) {

    let modalComponent = null;

    switch (modalToShow) {
        case "head-menu-opt-" + 0:
            modalComponent = <LineSegmentsModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)} />; break;
        case "head-menu-opt-" + 3:
            modalComponent = <BookModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)} />; break;
        case "head-menu-opt-login":
            modalComponent = <LoginModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)}
                setAccessToken={setAccessToken} setIsLoggedIn={setIsLoggedIn} />; break;
        case "head-menu-opt-logout":
            modalComponent = <LogoutModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)}
                setIsLoggedIn={setIsLoggedIn} accessToken={accessToken} />; break;
        default:
            modalComponent = null;
    }

    return (
        <>
            {modalComponent}
        </>
    );
}

export default ModalSwitch;