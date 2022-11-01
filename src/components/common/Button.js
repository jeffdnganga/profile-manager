import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Button({ onClickButtonHandler, buttonText, buttonIconRight, buttonIconLeft, buttonType, buttonStyle, to }) {
    if (to) {
        return (
            <>
                <Link to={to} className={`inline-flex items-center  justify-center gap-4 transition-colors duration-400 ease-in-out bg-youngtal-dark-blue text-white w-[300px] h-[50px] rounded-lg text-[18px] font-medium border-solid border-youngtal-dark-blue hover:bg-white hover:border-2 hover:text-youngtal-dark-blue outline-offset-2 outline-youngtal-dark-blue hover:outline-none ${buttonStyle ? buttonStyle : ""}`} type={`${buttonType ? buttonType : "button"}`} onClick={onClickButtonHandler}>
                    {buttonIconLeft}
                    {buttonText}
                    {buttonIconRight}
                </Link>
            </>
        )
    }
    return (
        <>
            <button className={`inline-flex items-center  justify-center gap-4 transition-colors duration-400 ease-in-out bg-youngtal-dark-blue text-white w-[300px] h-[50px] rounded-lg text-[18px] font-medium border-solid border-youngtal-dark-blue hover:bg-white hover:border-2 hover:text-youngtal-dark-blue outline-offset-2 outline-youngtal-dark-blue hover:outline-none ${buttonStyle ? buttonStyle : ""}`} type={`${buttonType ? buttonType : "button"}`} onClick={onClickButtonHandler}>
                {buttonIconLeft}
                {buttonText}
                {buttonIconRight}
            </button>
        </>
    )
}

Button.propTypes = {
    onClickButtonHandler: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    buttonIconRight: PropTypes.element,
    buttonIconLeft: PropTypes.element,
    buttonType: PropTypes.string,
    buttonStyle: PropTypes.string,
    to: PropTypes.string
}

export default Button