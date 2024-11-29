import { useState, useEffect } from "react";
import { RiDeleteBackLine } from "react-icons/ri";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"

function TaskLists() {
    const [status, setStatus] = useState(false); //checks if completed = true, pending = false

    const handleStatus = () => {
        if (status == true) {
            setStatus(false)
        } else {
            setStatus(true);
        }
    }

    //setting state variables for tasks
    const [tasks, setTasks] = useState([]);


    //fetching the docs using collection and getDocs functions

    const fetchLists = async () => {
        try {
            const collectionRef = collection(db, 'tasks');
            const querySnapshot = await getDocs(collectionRef);
            const tasks = querySnapshot.docs.map((task) => ({
                id: doc.id,
                ...task.data()
            }))
            setTasks(tasks)
        } catch (error) {
            { alert(error) }
        }
    }

    useEffect(() => {
        fetchLists();
    }, []);


    const sampleTasks = [
        {
            title: 'Title 1',
            body: 'Sample body Sample body Sample body Sample body Sample body ',
            status: 'pending'
        },
        {
            title: 'Title 2',
            body: 'Sample body Sample body Sample body Sample body Sample body ',
            status: 'pending'
        },
        {
            title: 'Title 3',
            body: 'Sample body Sample body Sample body Sample body Sample body ',
            status: 'pending'
        },

    ]

    return (
        <div className="grid grid-cols-[repeat(3,25vw)] grid-rows-auto">
            {tasks.map((task) => (
                <div className="h-[230px] flex justify-center items-center text-[#212121ec] popup-container popup-container active transition-colors duration-300" id="taskBox">
                    <div className=" w-[280px] h-[200px] rounded-[10px] group bg-[#ffffff80]" key={task.id}> {/* For Border */}
                        <div className="grid grid-cols-[repeat(2,50%)] grid-rows-[40px_100px_30px]"> {/* For Grid */}
                            <div className="flex justify-start ml-[10px] items-center">
                                <div className={`px-[30px] rounded-[10px] transition text-[15px] 
                            ${status ? 'bg-gradient-to-br from-[#97F7F5] to-[#FBF7B8]' : 'bg-gradient-to-br from-[#FFD1FF] to-[#FBD0C8]'}`}>
                                    {task.title}
                                </div>
                            </div>
                            <div className="border-[1px] border-black flex justify-end items-center mr-[10px]" onClick={() => { container.classNameList.remove('active') }}>
                                <RiDeleteBackLine className="w-6 h-6" />
                            </div>
                            <div className="border-[1px] border-black col-span-2 row-span-2 w-[260px] ml-[9px] w-[260px] font-[Finlandica] p-[8px]">
                                {task.body}
                            </div>
                            <div className="border-[1px] border-black flex justify-start items-center ml-[15px] pb-[12px] cursor-pointer">
                                <div onClick={handleStatus}> {status ? 'completed' : 'pending'} </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskLists;