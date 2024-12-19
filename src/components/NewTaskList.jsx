import NewAddTask from "./NewAddTask";
import SignIn from "./SignIn";
import TaskItem from "./TaskItem";

function NewTaskList() {
    return (
        <>
            <div className="h-screen w-screen bg-[#000010] flex justify-center items-center"> {/* MAIN CONTAINER */}
                <div className="bg-[#ffffff20] rounded-[10px] border-[1px] border-[#ffffff75] ">
                    <div className="h-[97vh] w-[98vw] overflow-y-auto overflow-x-hidden ">
                        <SignIn />
                    </div>
                </div>
            </div>
        </>
    )
}



export default NewTaskList;