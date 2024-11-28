import { useState } from "react";
import { RiDeleteBackLine } from "react-icons/ri";
//bg-gradient-to-br from-[#FFD1FF] to-[#FBD0C8] - Red / Pending
//bg-gradient-to-br from-[#97F7F5] to-[#FBF7B8] - Green / Completed
function TaskBox() {
    const [status, setStatus] = useState(false);
    //checks if completed = true, pending = false
    
    const handleStatus = () => {
        if (status == true) {
            setStatus(false)
        } else {
            setStatus(true);
        }
    }
    
    return (
        <>
            <div class="h-[230px] flex justify-center items-center text-[#212121ec] popup-container popup-container active" id="taskBox">

                <div class=" w-[280px] rounded-[10px] group bg-[#ffffff80]"> {/* For Border */}

                    <div class="grid grid-cols-[repeat(2,50%)] h-[200px] grid-rows-[40px_100px_30px]"> {/* For Grid */}

                        <div class="flex justify-start ml-[10px] items-center">
                            <div class="bg-gradient-to-br from-[#97F7F5] to-[#FBF7B8] border-black px-[30px] rounded-[10px]"> Title </div>
                        </div>

                        <div class="flex justify-end items-center mr-[10px] hidden group-hover:flex transition-opacity duration-300" onClick={() => {container.classList.remove('active')}}>
                            <RiDeleteBackLine class="w-6 h-6" />
                        </div>

                        <div class=" col-span-2 row-span-2 w-[260px] ml-[9px] w-[260px] font-[Finlandica]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore, magnam iure quas libero dolorum voluptate maiores modi maxime corrupti.
                        </div>

                        <div class="flex justify-start items-center ml-[15px] pb-[12px] cursor-pointer">
                            <div onClick={handleStatus}> {status ? 'completed' : 'pending'} </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskBox;