import PropTypes from 'prop-types';
import { CgClose } from 'react-icons/cg';
import Button from './Button';

function Modal(props) {

    const {
        showModal,
        children,
        title,
        closeButtonText,
        submitButtonText,
        headerStyle,
        bodyStyle,
        footerStyle,
        onClose,
        isSubmitButtonPresent = false,
        onSubmit,
        submitButtonStyle,
        closeButtonStyle,
        isSecondaryButtonPresent = false,
        secondaryButtonText,
        secondaryButtonStyle,
        onSecondaryButtonClick
    } = props;

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-2 px-[20px]">
                                {/*header*/}
                                <div className={`flex items-center justify-between py-4 px-2 border-b border-solid border-youngtal-dark-gray rounded-t ${headerStyle ? headerStyle : ''}`}>
                                    <h3 className="text-[20px] font-semibold">
                                        {title}
                                    </h3>
                                    <Button buttonStyle='p-1 w-[40px] h-[40px] ml-auto bg-transparent text-youngtal-dark-gray border-0 float-right leading-none hover:bg-transparent hover:border-none hover:text-youngtal-gray-700' buttonIconRight={<CgClose size={20} />} buttonText='' onClickButtonHandler={onClose} />
                                </div>
                                {/*body*/}
                                <div className={`relative my-2 py-4 px-2 flex-auto ${bodyStyle ? bodyStyle : ''}`}>
                                    {children}
                                </div>
                                {/*footer*/}
                                <div className={`flex items-center justify-end space-x-3 py-4 px-2 border-t border-solid border-youngtal-dark-gray rounded-b ${footerStyle ? footerStyle : ''}`}>
                                    <Button buttonText={closeButtonText} buttonStyle={`bg-transparent text-youngtal-dark-gray w-[100px] hover:bg-transparent hover:border-none hover:text-youngtal-gray-700 ${closeButtonStyle ? closeButtonStyle : ''}`} onClickButtonHandler={onClose} />
                                    {isSecondaryButtonPresent &&
                                        <Button buttonText={secondaryButtonText} buttonStyle={`w-[150px] ${secondaryButtonStyle ? secondaryButtonStyle : ''}`} onClickButtonHandler={onSecondaryButtonClick} />
                                    }
                                    {isSubmitButtonPresent &&
                                        <Button buttonType='submit' buttonText={submitButtonText} buttonStyle={`w-[150px] ${submitButtonStyle ? submitButtonStyle : ''}`} onClickButtonHandler={onSubmit} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

Modal.propTypes = {
    showModal: PropTypes.bool,
    title: PropTypes.string,
    closeButtonText: PropTypes.string,
    submitButtonText: PropTypes.string,
    headerStyle: PropTypes.string,
    bodyStyle: PropTypes.string,
    footerStyle: PropTypes.string,
    onClose: PropTypes.func,
    isSubmitButtonPresent: PropTypes.bool,
    onSubmit: PropTypes.func,
    submitButtonStyle: PropTypes.string,
    closeButtonStyle: PropTypes.string,
    isSecondaryButtonPresent: PropTypes.bool,
    secondaryButtonText: PropTypes.string,
    secondaryButtonStyle: PropTypes.string,
    onSecondaryButtonClick: PropTypes.func
}

export default Modal