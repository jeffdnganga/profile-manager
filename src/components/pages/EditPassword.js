import SideBar from "../common/SideBar"
import DashNav from "../common/DashNav"
import Input from "../common/Input"
import Button from "../common/Button"

function editPassword() {
    return (
        <div className='w-[100%] pb-[30px] absolute'>
            <DashNav buttonText='My Stats' navStyle='z-40' />
            <div className='w-[90%] mt-[90px] mx-auto'>
                <div className='w-[30%] fixed'>
                    <SideBar />
                </div>
                <div className='w-[70%] rounded-[10px] shadow-youngtal-shadow float-right'>
                    <div className='w-[90%] mx-auto font-semibold text-[30px] my-6'>Change Password</div>
                    <div className='w-[90%] mx-auto'>
                        <form>
                            <div className='mb-6 w-[45%]'>
                                <Input label='CURRENT PASSWORD' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='password' />
                            </div>
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='w-[45%]'>
                                    <Input label='NEW PASSWORD' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='password' />
                                </div>
                                <div className='w-[45%]'>
                                    <Input label='RE-TYPE PASSWORD' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='password' />
                                </div>
                            </div>
                            <div className='flex items-center justify-end mb-6'>
                                <Button buttonStyle='bg-transparent text-youngtal-dark-gray w-[100px] hover:bg-transparent hover:border-none hover:text-youngtal-gray-700' buttonText='Cancel' />
                                <Button buttonStyle='w-[220px]' buttonText='Change password' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default editPassword