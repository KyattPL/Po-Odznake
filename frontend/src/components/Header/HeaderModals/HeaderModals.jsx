import BookModal from "./BookModal/BookModal";
import LineSegmentsModal from "./LineSegmentsModal/LineSegmentsModal";
import LoginModal from "./LoginModal/LoginModal";


function HeaderModals({modalToShow, shouldShow, displayModal}) {
    
    let modalComponent = null;

    switch (modalToShow) {
        case "head-menu-opt-"+0: modalComponent = <LineSegmentsModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)}/>; break;
        case "head-menu-opt-"+3: modalComponent = <BookModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)}/>; break;
        case "head-menu-opt-login": modalComponent = <LoginModal shouldShow={shouldShow} closeModal={() => displayModal(modalToShow)}/>; break;
        default: modalComponent = null;
    }
    
    return (
        <>
            {modalComponent}
        </>
    );
}

export default HeaderModals