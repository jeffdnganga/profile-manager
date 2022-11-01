import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import Avatar from '../common/Avatar'
import Button from '../common/Button'
import DashNav from '../common/DashNav'
import SideBar from '../common/SideBar'
import Input from '../common/Input'
import Modal from '../common/Modal'


function EditBasicInformation() {

    const [showCoverModal, setShowCoverModal] = useState(false);
    const [showAvatarModal, setShowAvatarModal] = useState(false);

    return (
        <div className='w-[100%] pb-[30px] absolute'>
            <DashNav buttonText='My Stats' navStyle='z-40' />
            <div className='w-[90%] mt-[90px] mx-auto'>
                <div className='w-[30%] fixed'>
                    <SideBar />
                </div>
                <div className='w-[70%] rounded-[10px] shadow-youngtal-shadow float-right'>
                    <div className='w-full h-[150px] rounded-t-[10px] cursor-pointer relative group' onClick={() => setShowCoverModal(true)}>
                        <img className='h-[100%] w-[100%] object-cover rounded-t-[10px]' src='https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg' alt=''></img>
                        <div className="opacity-0 group-hover:opacity-80 duration-200 absolute inset-x-0 bottom-0 h-[100%] flex justify-center items-center text-xl bg-white text-black font-semibold">Change cover photo</div>
                    </div>
                    <Modal showModal={showCoverModal} onClose={() => setShowCoverModal(false)} title='Change cover photo' closeButtonText='Cancel' bodyStyle='px-4'>
                        <div className="flex justify-center items-center w-full">
                            <label for="dropzone-file" className='flex flex-col justify-center items-center w-[400px] h-[200px] rounded-lg border-2 border-youngtal-search-border-blue border-dashed cursor-pointer hover:bg-youngtal-gray mb-6'>
                                <div className="flex flex-col justify-center items-center pt-5 pb-6 text-youngtal-dark-blue">
                                    <HiOutlineCloudUpload size={40} className='mb-2' />
                                    <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <Button buttonStyle='w-full bg-white border-2 border-red text-red hover:bg-red hover:text-white' buttonText='Remove cover photo' />
                    </Modal>
                    <div className='w-[90%] mx-auto flex items-center justify-between mt-[-40px]'>
                        <div className='font-semibold text-[30px]'>Basic information</div>
                        <div className='cursor-pointer relative group' onClick={() => setShowAvatarModal(true)}>
                            <Avatar imgSrc='https://cdn.pixabay.com/photo/2020/04/23/19/15/face-5083690__340.jpg' imgStyling='h-[120px] w-[120px] rounded-full border-4 border-white z-10' />
                            <div className="opacity-0 group-hover:opacity-80 duration-200 absolute inset-x-0 bottom-0 h-[100%] flex justify-center items-center text-xl bg-white text-black font-semibold z-20 rounded-full border-4 border-white">
                                <BiEdit size={40} />
                            </div>
                        </div>
                    </div>
                    <Modal showModal={showAvatarModal} onClose={() => setShowAvatarModal(false)} title='Change avatar' closeButtonText='Cancel' bodyStyle='w-[500px]'>
                        <div className='text-center'>
                            <div className='h-[180px] w-[180px] mx-auto rounded-full shadow-xl mb-6'>
                                <Avatar imgSrc='https://cdn.pixabay.com/photo/2020/04/23/19/15/face-5083690__340.jpg' imgStyling='h-[180px] w-[180px] rounded-full' />
                            </div>
                            <div className="flex justify-center items-center w-full mb-3">
                                <label for="upload-avatar" className='inline-flex items-center  justify-center gap-4 transition-colors duration-400 ease-in-out bg-youngtal-dark-blue text-white w-[300px] h-[50px] rounded-lg text-[18px] font-medium border-solid border-youngtal-dark-blue hover:bg-white hover:border-2 hover:text-youngtal-dark-blue outline-offset-2 outline-youngtal-dark-blue hover:outline-none cursor-pointer'> Upload avatar
                                    <input id="upload-avatar" type="file" className="hidden" />
                                </label>
                            </div>
                            <p className="mt-1 text-sm text-youngtal-dark-gray text-center mb-6" id="upload-avatar">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            <Button buttonStyle='bg-white border-2 border-red text-red hover:bg-red hover:text-white' buttonText='Remove avatar' />
                        </div>
                    </Modal>
                    <div className='w-[90%] mx-auto'>
                        <form>
                            <div className='mb-6'>
                                <Input label='YOUR NAME' labelStyle='font-normal' inputStyle='bg-white w-[100%!important] shadow-none border-youngtal-gray-400 focus:border-2 focus:border-black' inputType='text' />
                            </div>
                            <div className='mb-6'>
                                <Input label='USERNAME' labelStyle='font-normal' inputStyle='bg-white w-[100%!important] shadow-none border-youngtal-gray-400 focus:border-2 focus:border-black' inputType='text' />
                            </div>
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='w-[45%]'>
                                    <Input label='EMAIL ADDRESS' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='email' />
                                </div>
                                <div className='w-[45%]'>
                                    <Input label='PHONE NUMBER' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='tel' />
                                </div>
                            </div>
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='w-[45%]'>
                                    <Input label='DATE OF BIRTH' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='date' />
                                </div>
                                <div className='w-[45%]'>
                                    <Input label='WHERE DO YOU LIVE' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='text' />
                                </div>
                            </div>
                            <div className='mb-6'>
                                <Input label='OCCUPATION' labelStyle='font-normal' inputStyle='bg-white w-[100%!important] shadow-none border-youngtal-gray-400 focus:border-2 focus:border-black' inputType='text' />
                            </div>
                            <div className='mb-6'>
                                <label className='block text-base px-1 text-youngtal-dark-gray'>ABOUT YOU</label>
                                <textarea id="about" rows="4" class="block p-2.5 w-full text-[14px] rounded-lg border border-youngtal-gray-400 focus:border-2"></textarea>
                            </div>
                            <div className='flex items-center justify-end mb-6'>
                                <Button buttonStyle='bg-transparent text-youngtal-dark-gray w-[100px] hover:bg-transparent hover:border-none hover:text-youngtal-gray-700' buttonText='Cancel' />
                                <Button buttonStyle='w-[160px]' buttonText='Save changes' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBasicInformation