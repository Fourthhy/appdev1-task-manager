function TaskItem({title, desc, status}) {
    return (
        <>
            <div className=" h-[25vh] w-[25vw] rounded-[10px] m-[5px] font-Raleway bg-[#ffffff40]">
                <div className="grid grid-rows-[5vh_15vh_5vh]">
                    <div className=" flex justify-start items-center pl-[10px] font-bold">
                        { title }
                    </div>
                    <div className=" flex justify-start p-[10px] text-[15px]">
                        { desc }
                    </div>
                    <div className=" flex justify-start items-center pl-[15px] text-[15px]">
                        { status }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskItem;