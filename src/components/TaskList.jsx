import AddTask from "./AddTask";
import SignOut from "./SignOut";
import TaskItem from "./TaskItem";

function NewTaskList() {
    return (
        <>
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
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
            </div>
        </>
    )
}

export default NewTaskList;