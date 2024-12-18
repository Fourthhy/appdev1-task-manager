import NewAddTask from "./NewAddTask";
import TaskItem from "./TaskItem";

function NewTaskList() {
    return (
        <>
            <div className="h-screen w-screen bg-[#000010] flex justify-center items-center"> {/* MAIN CONTAINER */}
                <div className="bg-[#ffffff20] rounded-[10px] border-[1px] border-[#ffffff75] ">
                    <div className="h-[97vh] w-[98vw] relative overflow-y-auto overflow-x-hidden ">
                            <NewAddTask />                        

                        
                        <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending'/>
                    </div>
                </div>
            </div>
        </>
    )
}



export default NewTaskList;