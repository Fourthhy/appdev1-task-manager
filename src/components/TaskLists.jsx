import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, deleteDoc, updateDoc, getDoc } from "firebase/firestore";

function TaskLists() {
    const [tasks, setTasks] = useState([]);

    // Fetching tasks from Firestore
    const fetchLists = async () => {
        try {
            const collectionRef = collection(db, 'tasks');
            const querySnapshot = await getDocs(collectionRef);
            const tasks = querySnapshot.docs.map((task) => ({
                id: task.id,  // Corrected here
                ...task.data()
            }));
            setTasks(tasks);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchLists();
    }, []);

    // Handle deleting a task
    const handledeleteTask = async (id) => {
        try {
            const docRef = doc(db, 'tasks', id);
            await deleteDoc(docRef);

            // Update the state by filtering out the deleted task
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        } catch (error) {
            alert("Error deleting task: " + error.message);
        }
    };

    // Handle changing task status
    
    const handleStatus = async (id) => {
        try {
            const taskRef = doc(db, 'tasks', id);
            
            // Retrieve the current task document
            const currentTask = await getDoc(taskRef);
    
            // Get the current status from the document
            const currentStatus = currentTask.data().status;
    
            // Determine the new status
            const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    
            // Update the status in Firestore
            await updateDoc(taskRef, {
                status: newStatus,
            });
    
            // Update local state to reflect the new status
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? { ...task, status: newStatus } : task
                )
            );
    
        } catch (error) {
            console.error("Error updating task status: ", error);
            alert("Failed to update task status. Please try again.");
        }
    };

    return (
        <div className="grid grid-cols-[repeat(3,25vw)] grid-rows-auto">
            {tasks.map((task) => (
                <div className="h-[230px] flex justify-center items-center text-[#212121ec] popup-container popup-container active transition-colors duration-300" id="taskBox" key={task.id}>
                    <div className="w-[280px] h-[200px] rounded-[10px] group bg-[#ffffff80]">
                        <div className="grid grid-cols-[repeat(2,50%)] grid-rows-[40px_100px_30px]">
                            <div className="flex justify-start ml-[10px] items-center">
                                <div className={`px-[30px] rounded-[10px] transition text-[15px] 
                                    ${task.status === 'pending' ? 'bg-gradient-to-br from-[#FFD1FF] to-[#FBD0C8]' : 'bg-gradient-to-br from-[#97F7F5] to-[#FBF7B8]'}`}>
                                    {task.title}
                                </div>
                            </div>
                            <div className=" flex justify-end items-center mr-[10px]">
                                <button className="" onClick={() => handledeleteTask(task.id)}>Delete</button>
                            </div>
                            <div className=" col-span-2 row-span-2 w-[260px] ml-[9px] font-[Finlandica] p-[8px]">
                                {task.body}
                            </div>
                            <div className=" flex justify-start items-center ml-[15px] pb-[12px] ">
                                <button className="cursor-pointer" onClick={() => handleStatus(task.id)}>
                                    {task.status === 'completed' ? 'Completed' : 'Pending'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskLists;
