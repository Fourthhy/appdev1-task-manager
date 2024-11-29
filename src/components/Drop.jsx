import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Drop() {
    const [inputFields, setInputFields] = useState([{ title: '', body: '' }]);

    // Handles form submission to add tasks to Firestore
    const handleNewTask = async (e) => {
        e.preventDefault();
        const collectionRef = collection(db, 'tasks');
        
        // Loop through the inputFields and add valid tasks to Firestore
        for (const { title, body } of inputFields) {
            if (title && body) {
                await addDoc(collectionRef, {
                    title,
                    body,
                    status: 'pending',
                });
            }
        }

        console.log("Tasks added");
        setInputFields([{ title: '', body: '' }]); // Reset fields
    };

    // Adds an empty input field for title and body
    const handleAddFields = () => {
        setInputFields([...inputFields, { title: '', body: '' }]);
    };

    // Removes the specified input field by index
    const handleRemoveFields = (index) => {
        setInputFields(inputFields.filter((_, i) => i !== index));
    };

    // Handles input changes for title and body
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        setInputFields((prevState) =>
            prevState.map((field, i) =>
                i === index ? { ...field, [name]: value } : field
            )
        );
    };

    return (
        <div className="h-[230px] flex justify-center items-center flex-col text-[#212121ec]">
            <div className="w-[200px] text-[#00000090]">Add Task</div>
            <div className="w-[230px] rounded-[10px] group bg-[#ffffff80]">
                <form onSubmit={handleNewTask}>
                    <div className="grid grid-cols-auto h-[300px] grid-rows-[40px_150px_30px] gap-[10px] pt-[30px] px-[5px]">
                        {inputFields.map((inputField, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    required
                                    value={inputField.title}
                                    onChange={(e) => handleChange(index, e)}
                                    className="border-[1px] rounded-[5px] border-[#808080] bg-[#ffffff00] outline-none pl-[5px]"
                                />
                                <textarea
                                    name="body"
                                    required
                                    placeholder="Description"
                                    value={inputField.body}
                                    onChange={(e) => handleChange(index, e)}
                                    className="border-[1px] rounded-[5px] border-[#808080] bg-[#ffffff00] outline-none pl-[5px] resize-none"
                                ></textarea>
                                <button type="button" onClick={() => handleRemoveFields(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddFields}>
                            Add More
                        </button>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="border-[#808080] rounded-[5px] border-[1px] w-[100px] flex justify-center items-center text-[15px]"
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Drop;
