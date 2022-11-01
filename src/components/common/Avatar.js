import PropTypes from "prop-types";

function Avatar(props) {

    const {
        imgSrc,
        heading,
        description,
        imgStyling,
        headingStyling,
        descriptionStyling,
        isDescriptionPresent = false,
        isHeadingPresent = false,
        isAdditonalInfoPresent = false,
    } = props;

    return (
        <div className="flex items-center">
            <div className={`h-[60px] w-[60px] rounded-full ${imgStyling ? imgStyling : ""}`}>
                <img src={imgSrc} alt="User" className="h-[100%] w-[100%] object-cover rounded-full" />
            </div>
            {isAdditonalInfoPresent &&
                <div>
                    {isHeadingPresent &&
                        <div className={headingStyling}>{heading}</div>}
                    {isDescriptionPresent &&
                        <p className={descriptionStyling}>{description}</p>
                    }
                </div>}
        </div>
    )
}

Avatar.propTypes = {
    imgSrc: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    imgStyling: PropTypes.string.isRequired,
    headingStyling: PropTypes.string.isRequired,
    descriptionStyling: PropTypes.string,
    isDescriptionPresent: PropTypes.bool.isRequired,
    isHeadingPresent: PropTypes.bool.isRequired,
    isAdditonalInfoPresent: PropTypes.bool.isRequired
}

export default Avatar