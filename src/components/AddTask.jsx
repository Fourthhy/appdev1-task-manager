function AddTask() {
    return (
        <>
            <div class="h-[230px] flex justify-center items-center flex-col text-[#212121ec]">

                <div class="w-[200px] text-[#00000090]">
                    Add Task
                </div>
                <div class="w-[230px] rounded-[10px] group bg-[#ffffff80]">
                    <form>
                        <div class="grid grid-cols-auto h-[300px] grid-rows-[40px_150px_30px] gap-[10px] pt-[30px] px-[5px]">

                            <input type="text" name="title" id="title" placeholder="Title" required
                            class="border-[1px] rounded-[5px] border-[#808080] bg-[#ffffff00] outline-none pl-[5px]" />

                            <textarea name="desc" id="desc" required placeholder="Description" 
                            class="border-[1px] rounded-[5px] border-[#808080] bg-[#ffffff00] outline-none pl-[5px] resize-none"></textarea>
                            
                            <div class="flex justify-end">
                                <button type="submit" 
                                class="border-[#808080] rounded-[5px] border-[1px] w-[100px] flex justify-center items-center text-[15px]"
                                >Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default AddTask;