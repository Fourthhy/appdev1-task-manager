import AddTask from "./AddTask";
import SignOut from "./SignOut";
import TaskItem from "./TaskItem";

function NewTaskList() {
    return (
        <>
            <div className="h-screen w-screen bg-[#000010] flex justify-center items-center"> {/* MAIN CONTAINER */}
                <div className="bg-[#ffffff20] rounded-[10px] border-[1px] border-[#ffffff75] ">
                    <div className="h-[97vh] w-[98vw] overflow-y-auto overflow-x-hidden ">
                        <AddTask />

                        <div className="flex justify-between items-center"> {/* NAV BAR */}
                            <h3 className="text-[#ffffffdd] font-Raleway text-[20px] px-[10px] py-[10px]">
                                Welcome, User
                            </h3>
                            <div className="mr-[10px]">
                                <SignOut />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-4">
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                            <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewTaskList;