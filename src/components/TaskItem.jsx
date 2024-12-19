import { deleteDoc, doc, updateDoc} from "firebase/firestore";
import { useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { db } from "../firebase";

function TaskItem({title, desc, status, taskID, onTaskDel}) {
    const [pending, setPending] = useState(status)

    const handleChange = async (id) => {
        const newStatus = pending === 'pending' ? 'completed' : 'pending';
        setPending(newStatus);
        const docRef = doc(db, 'tasks', id);
        await updateDoc(docRef, {
            status: newStatus,
        })
    }

    const handleDelete = async (id) => {
        const docRef = doc(db, 'tasks', id);
        await deleteDoc(docRef)
        onTaskDel();
    }

    return (
        <>
            <div className=" h-[25vh] w-[23vw] rounded-[10px] m-[10px] font-Raleway bg-[#ffffff40]">
                <div className="grid grid-rows-[5vh_15vh_5vh]">
                    <div className="flex justify-between">
                        <p className={`${pending === 'pending' ? 
                    'flex justify-start pt-[8px] pl-[10px] font-bold text-[rgba(230,40,40,0.8)]' : 
                    'flex justify-start pt-[8px] pl-[10px] font-bold text-[rgba(40,230,40,0.8)]'}`}>
                        { title }
                    </p>
                    <div 
                        className="text-[25px] mr-[5px] mt-[5px] cursor-pointer"
                        onClick={() => {handleDelete(taskID)}}>
                        <MdOutlineDeleteSweep />
                    </div>
                    </div>
                    <div className=" flex justify-start p-[10px] text-[15px]">
                        { desc }
                    </div>
                    <div className=" flex justify-start items-center pl-[15px] text-[15px]">
                        <button
                            className="border-[#000000bd] border-[1px] border-[#ffffff80] rounded-[10px] py-[3px] px-[5px]"
                            onClick={() => {handleChange(taskID)}}>
                                { pending }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskItem;