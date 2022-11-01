import PropTypes from 'prop-types';

function Search({ searchStyle, placeholder, buttonPresent, iconPresent }) {
    return (
        <div className="search">
            <div className="relative ">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {iconPresent}
                </span>
                <input
                    className={`bg-white placeholder:font-italic border border-slate-300 rounded-md border-youngtal-search-border-blue text-sm shadow-sm placeholder-slate-400 py-2 pl-10 pr-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${searchStyle ? searchStyle : ""}`}
                    placeholder={placeholder} type="text" />
                <span className="absolute inset-y-0 bottom-[50% - 25px] right-2.5 flex items-center justify-center px-4 py-2 ">
                    {buttonPresent}
                </span>
            </div>
        </div>
    );
}
Search.propTypes = {
    searchStyle: PropTypes.string,
    buttonPresent: PropTypes.element,
    iconPresent: PropTypes.element,
    placeholder: PropTypes.string,
}
export default Search;