import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { BiBell, BiExit, BiHome, BiMessageRounded, BiSearchAlt, BiUser, BiWallet } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Avatar from "./Avatar";
import Button from "./Button";
import Search from "./Search";

function DashNav({ buttonText, navStyle, onClickButtonHandler }) {
    return (
        <nav className={`fixed bg-white w-[100vw] h-[3.8em] shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] flex items-center justify-between ${navStyle ? navStyle : ""}`}>
            <div className="container flex items-center justify-between w-[90%] mx-auto">
                <div className="flex items-center">
                    <form className="flex items-center ml-[40px]">
                        <Search iconPresent={<BiSearchAlt size={22} className='fill-youngtal-search-border-blue' />} />
                    </form>
                </div>
                <ul class="flex items-center space-x-8">
                    <li>
                        <BiHome size={23} color={'youngtal-dark-blue'} />
                    </li>
                    <li>
                        <BiBell size={23} color={'youngtal-dark-blue'} />
                    </li>
                    <li>
                        <BiWallet size={23} color={'youngtal-dark-blue'} />
                    </li>
                    <li>
                        <BiMessageRounded size={23} color={'youngtal-dark-blue'} />
                    </li>
                </ul>
                <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="flex items-center space-x-1">
                                <Avatar imgStyling="h-[2.8em] w-[2.8em]" imgSrc='https://cdn.pixabay.com/photo/2020/04/23/19/15/face-5083690__340.jpg' />
                                <FaAngleDown className="fill-youngtal-dark-blue" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-[5px]">
                                    <Menu.Item>
                                        <Link to="/">
                                            <button className="hover:bg-youngtal-gray text-youngtal-dark-blue group flex w-full items-center rounded-md px-2 py-2 text-sm"> <BiUser className="mr-[.5em]" /> My profile </button>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/">
                                            <button className="hover:bg-youngtal-gray text-youngtal-dark-blue group flex w-full items-center rounded-md px-2 py-2 text-sm"> <BiExit className="mr-[.5em]" /> Sign out </button>
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Button buttonText={buttonText} buttonStyle="w-[160px] h-[40px] text-sm ml-[2em]" onClickButtonHandler={onClickButtonHandler} />
                </div>
            </div>

        </nav>
    )
}

DashNav.propTypes = {
    buttonText: PropTypes.string.isRequired,
    navStyle: PropTypes.string,
    onClickButtonHandler: PropTypes.func
}

export default DashNav