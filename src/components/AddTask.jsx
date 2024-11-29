import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, deleteDoc } from "firebase/firestore";

function AddTask() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleNewTask = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const collectionRef = collection(db, 'tasks');
        const docRef = await addDoc(collectionRef, {
            title: title,
            body: body,
            status: 'pending',
        });
        console.log(docRef);
        // Optionally clear the input fields after submission
        setTitle('');
        setBody('');
    }

    return (
        <>
            <div className="h-[230px] flex justify-center items-center flex-col text-[#212121ec]">
                <div className="w-[200px] text-[#00000090]">
                    Add Task
                </div>
                <div className="w-[230px] rounded-[10px] group bg-[#ffffff80]">
                    <form onSubmit={handleNewTask}>
                        <div className="grid grid-cols-auto h-[300px] grid-rows-[40px_150px_30px] gap-[10px] pt-[30px] px-[5px]">
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Title" 
                                required 
                                value={title} // Use title here
                                onChange={(e) => setTitle(e.target.value)}
                                className="border-[1px] rounded-[5px] border-[#808080] bg-[#ffffff00] outline-none pl-[5px]" 
                            />

                            <textarea 
                                name="desc" 
                                id="desc" 
                                required 
                                placeholder="Description" 
                                value={body} // Use body here
                                onChange={(e) => setBody(e.target.value)}
                                className="border-[1px] rounded-[5px] border-[#808080] bg-[#ffffff00] outline-none pl-[5px] resize-none"
                            ></textarea>
                            
                            <div className="flex justify-end">
                                <button 
                                    type="submit" 
                                    className="border-[#808080] rounded-[5px] border-[1px] w-[100px] flex justify-center items-center text-[15px]" onClick={() => setTimeout(() => {window.location.reload()}, 1500)}
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTask;