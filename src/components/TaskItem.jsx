import { useState } from "react";

function TaskItem({title, desc, status}) {

    return (
        <>
            <div className=" h-[25vh] w-[23vw] rounded-[10px] m-[10px] font-Raleway bg-[#ffffff40]">
                <div className="grid grid-rows-[5vh_15vh_5vh]">
                    <div>
                        <p className={`${status === 'pending' ? 
                    'flex justify-start pt-[5px] pl-[10px] font-bold text-[rgba(200,40,40,0.8)]' : 
                    'flex justify-start pt-[5px] pl-[10px] font-bold text-[rgba(40,230,40,0.8)]'}`}>
                        { title }
                    </p>
                        
                    </div>
                    <div className=" flex justify-start p-[10px] text-[15px]">
                        { desc }
                    </div>
                    <div className=" flex justify-start items-center pl-[15px] text-[15px]">
                        <button
                            className="border-[#000000bd] border-[1px] rounded-[10px] py-[2px] px-[5px]">
                                { status }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskItem;