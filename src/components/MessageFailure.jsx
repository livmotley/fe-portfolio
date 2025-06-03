import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

function MessageFailure() {
    const navigate = useNavigate();

    return (
        <div className="error-handler">
            <p className="message-error">Message failed to send, please try again or click the button <br/>on the page to send a direct email instead.</p>
            <button className="back-to-contact-button" onClick={(() => navigate(-1))}><IoIosArrowBack className="back-icon"/>Try Again</button>
        </div>
    )
}

export default MessageFailure;