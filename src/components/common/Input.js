import { PropTypes } from "prop-types";

function Input({

    index,
    value,
    required = false,
    onChange,
    label,
    inputType,
    placeholder,
    labelStyle,
    inputStyle,

}) {

    return (

        <>
            <label
                className={`block text-base  px-1 text-youngtal-dark-gray  ${labelStyle ? labelStyle : ""
                    }`}
            >
                {label}
            </label>
            <input
                key={index}
                type={inputType}
                value={value}
                className={`text-md block px-[20px] h-[40px]  rounded-lg w-[600px] border cursor-text  hover:bg-white focus:border-gray-600 focus:outline-none ${inputStyle ? inputStyle : ""
                    }`}
                id={label}
                required={required}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>

    )
}

Input.propTypes = {
    label: PropTypes.string,
    index: PropTypes.number,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    inputStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    placeholder: PropTypes.string,

};
export default Input;