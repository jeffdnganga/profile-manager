import SideBar from "../common/SideBar"
import DashNav from "../common/DashNav"
import Input from "../common/Input"
import Button from "../common/Button"

function editLinksSocialNetworks() {
    return (
        <div className='w-[100%] pb-[30px] absolute'>
            <DashNav buttonText='My Stats' navStyle='z-40' />
            <div className='w-[90%] mt-[90px] mx-auto'>
                <div className='w-[30%] fixed'>
                    <SideBar />
                </div>
                <div className='w-[70%] rounded-[10px] shadow-youngtal-shadow float-right'>
                    <div className='w-[90%] mx-auto font-semibold text-[30px] my-6'>Links and social networks</div>
                    <div className='w-[90%] mx-auto'>
                        <form>
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='w-[45%]'>
                                    <Input label='WEBSITE URL' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='url' />
                                </div>
                                <div className='w-[45%]'>
                                    <Input label='LINKEDIN URL' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='url' />
                                </div>
                            </div>
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='w-[45%]'>
                                    <Input label='GITHUB URL' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='url' />
                                </div>
                                <div className='w-[45%]'>
                                    <Input label='BITBUCKET URL' labelStyle='font-normal' inputStyle='bg-white shadow-none border-youngtal-gray-400 w-[100%!important] focus:border-2 focus:border-black' inputType='url' />
                                </div>
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

export default editLinksSocialNetworks