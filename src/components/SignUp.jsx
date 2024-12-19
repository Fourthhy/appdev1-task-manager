import { useState } from "react"
import { auth } from "../firebase"
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [prompt, setPrompt] = useState('Sign Up')

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center font-Raleway] text-[20px] text-[#ffffffab] flex-col">
                <div className="w-[500px] h-[400px] border-[#ffffff50] border-[2px] rounded-[10px] bg-[#ffffff20]">
                    <div className="flex justify-center items-center pt-[10px]">
                        <p className={`font-bold ${prompt === 'Sign Up' ? '' : 'text-[rgba(40,230,40,0.8)]'}`}> { prompt } </p>
                    </div>
                    <form>
                        <div className="m-[20px]">
                            <div className="flex justify-center items-center flex-col mt-[20px]">
                                <p className="font-bold flex justify-start w-[290px] mb-[10px]"> Email </p>
                                <input 
                                    type="email" 
                                    placeholder="email...." 
                                    className="w-[290px] rounded-[5px] px-[5px] text-[18px] py-[4px] text-[#000000aa]"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    required/>
                            </div>
                            <div className="flex justify-center items-center flex-col mt-[20px]">
                                <p className="font-bold flex justify-start w-[290px] mb-[10px]"> Password </p>
                                <input 
                                    type="password" 
                                    placeholder="password...." 
                                    className="w-[290px] rounded-[5px] px-[5px] text-[18px] py-[4px] text-[#000000aa]"
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    required/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-[10px] flex-col items-center">
                            <button type="submit" className="border-[1.5px] border-[#ffffff99] py-[5px] px-[10px] rounded-[10px] font-Raleway text-[#ffffff99] bg-[#ffffff20] w-[100px]">Sign Up</button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center mt-[20px]">
                        <p className="font-bold text-[18px]"> already have an account? <span className="text-[#3F48CCE6]"><Link to="/signin">Sign In</Link> </span> </p>
                    </div>
                </div>
                <div className="mt-[5px]"> {/* ERROR PROMPT*/}
                    { error }
                </div>
            </div>

        </>
    )
}

export default SignUp