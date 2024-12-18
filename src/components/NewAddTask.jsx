import { useState } from "react";

function NewAddTask() {
    const [invi, setInvi] = useState(true);
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [validTitle, setValidTitle] = useState(true)
    const [validBody, setValidBody] = useState(true)

    const handleInvi = (e) => {
        e.preventDefault();
        setInvi(!invi)
    }

    const inputValidation = (e) => {
        e.preventDefault();
        let isValid = true
        if ( title === '' ) {
            setValidTitle(false)
            isValid = false;
        }
        if ( body === '' ) {
            setValidBody(false)
            isValid = false;
        }
        if (isValid) {
            alert('fields are valid')
        }
    }

    return (
        <>
            <div className={invi == true ? '' : 'absolute bg-[#000000dd] h-screen w-screen rounded-[10px]'}>
                <div className={invi == true ? 
                    'transition-opacity ease-out duration-100 opacity-100' : 
                    'transition-opacity ease-in duration-100 opacity-0'}>
                    <button 
                        className="border-[1.5px] border-[#ffffff99] py-[5px] px-[10px] rounded-[10px] font-Raleway text-[#ffffff99] m-[20px] bg-[#ffffff20]" 
                        onClick={handleInvi}> 
                        Add Task 
                    </button>    
                </div>
                

                <div className={invi == true ? 
                    'transition-opacity ease-out duration-100 opacity-0' : 
                    'transition-opacity ease-in duration-100 opacity-100'}>
                    <div className="border-[#ffffff50] border-[1px] rounded-[10px] bg-[#ffffff20] w-[250px] h-auto p-[10px] absolute top-[50px] left-[39vw]">
                        <form>
                            <div className="flex flex-col justify-center items-center gap-[10px]">
                                <div>
                                    <h4 className="font-Raleway text-[#ffffffc4]">
                                        {validTitle ? 'Input title' : <p className="text-[#ff0000aa]">Title is required</p>}
                                    </h4>
                                    <input 
                                        type="text" 
                                        placeholder="title" 
                                        className={`rounded-[5px] font-Raleway text-[15px] py-[5px] px-[10px] bg-[#ffffff40]
                                            ${validTitle ? 'border-[#ffffff40] border-[px]' : 'border-red-500 border-[2px]'}
                                        `} 
                                        onChange={(e) => {setTitle(e.target.value)}}
                                        value={title}/>
                                </div>
                                <div>
                                    <h4 
                                        className="font-Raleway text-[#ffffffc4]">
                                            {validBody ? 'Input desc' : <p className="text-[#ff0000aa]">Desc is required</p>}
                                        </h4>
                                        <textarea 
                                            placeholder="description" 
                                            className={`rounded-[5px] font-Raleway text-[15px] py-[5px] px-[10px] bg-[#ffffff40]
                                            ${validBody ? 'border-[#ffffff40] border-[px]' : 'border-red-500 border-[2px]'}
                                        `}
                                            onChange={(e) => {setBody(e.target.value)}}
                                            value={body}></textarea>
                                </div>
                                <div>
                                    <button 
                                        className="border-[1.5px] border-[#ffffff99] py-[3px] px-[10px] rounded-[10px] font-Raleway text-[#ffffffC4] bg-[#ffffff10] m-[2px]" 
                                        onClick={inputValidation}> 
                                            Add Task
                                    </button>
                                    <button 
                                        className="border-[1.5px] border-[#ffffff99] py-[3px] px-[10px] rounded-[10px] font-Raleway text-[#ffffffC4] bg-[#ffffff10] m-[2px]" 
                                        onClick={(e) => {
                                            setInvi(!invi)
                                            e.preventDefault();
                                            setValidTitle(true)
                                            setValidBody(true)
                                            }}> 
                                            cancel 
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewAddTask;