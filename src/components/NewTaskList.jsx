import NewAddTask from "./NewAddTask";
import TaskItem from "./TaskItem";

function NewTaskList() {
    return (
        <>
            <div className="h-screen w-screen bg-[#000010] flex justify-center items-center"> {/* MAIN CONTAINER */}
                <div className="bg-[#ffffff20] rounded-[10px] border-[1px] border-[#ffffff75] ">
                    <div className="h-[97vh] w-[98vw] relative overflow-y-auto overflow-x-hidden ">
                        <NewAddTask />
                        <div>
                            <h3 className="text-[#ffffffdd] font-Raleway text-[20px] pl-[10px] pt-[10px]">Your Tasks</h3>
                                <div className="grid grid-cols-4">
                                    <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                                    <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                                    <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                                    <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>                                
                                    <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default NewTaskList;