import { RiDeleteBackLine } from "react-icons/ri";

//bg-gradient-to-br from-[#BCECFF] to-[#C2BBFF]
function TaskBox() {
    return (
        <>
            <div class="h-[230px] flex justify-center items-center">

                <div class="border-[1px] border-black w-[280px] rounded-[10px] group"> {/* For Border */}

                    <div class="grid grid-cols-[repeat(2,50%)] h-[200px] grid-rows-[40px_100px_30px]"> {/* For Grid */}

                        <div class="flex justify-start ml-[10px] items-center">
                            <div class="border-[1px] border-black px-[30px] rounded-[10px]"> Title </div>
                        </div>

                        <div class="flex justify-end items-center mr-[10px] hidden group-hover:flex transition-opacity duration-300">
                            <RiDeleteBackLine class="w-6 h-6"/>
                        </div>

                        <div class=" col-span-2 row-span-2 w-[260px] ml-[9px] w-[260px]"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore, magnam iure quas libero dolorum voluptate maiores modi maxime corrupti. 
                        </div>

                        <div class="flex justify-start items-center ml-[15px]">
                            <div> Status </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskBox;