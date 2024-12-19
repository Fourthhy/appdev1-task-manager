import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { auth, googleProvider } from "../firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [prompt, setPrompt] = useState('Sign In')

    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setPrompt('Signed In')
            navigate('/tasklist')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSignInWithGoogle = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, googleProvider)
            setPrompt('Signed In')
            navigate('/tasklist')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center font-Raleway] text-[20px] text-[#ffffffab] flex-col">
                <div className="w-[500px] h-[450px] border-[#ffffff50] border-[2px] rounded-[10px] bg-[#ffffff20]">
                    <div className="flex justify-center items-center pt-[10px]">
                        <p className={`font-bold ${prompt === 'Sign In' ? '' : 'text-[rgba(40,230,40,0.8)]'}`}> {prompt} </p>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className="m-[20px]">
                            <div className="flex justify-center items-center flex-col mt-[20px]">
                                <p className="font-bold flex justify-start w-[290px] mb-[10px]"> Email </p>
                                <input
                                    type="email"
                                    placeholder="email...."
                                    className="w-[290px] rounded-[5px] px-[5px] text-[18px] py-[4px] text-[#000000aa]"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required />
                            </div>
                            <div className="flex justify-center items-center flex-col mt-[20px]">
                                <p className="font-bold flex justify-start w-[290px] mb-[10px]"> Password </p>
                                <input
                                    type="password"
                                    placeholder="password...."
                                    className="w-[290px] rounded-[5px] px-[5px] text-[18px] py-[4px] text-[#000000aa]"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required />
                            </div>
                        </div>
                        <div className="flex justify-center gap-[10px] flex-col items-center">
                            <button
                                type="submit"
                                className="border-[1.5px] border-[#ffffff99] py-[5px] px-[10px] rounded-[10px] font-Raleway text-[#ffffff99] bg-[#ffffff20] w-[100px]">
                                Sign In
                            </button>
                            <div className="flex justify-center items-center gap-[10px]">
                                <hr className="w-[120px]" />
                                <p className="font-bold"> or </p>
                                <hr className="w-[120px]" />
                            </div>
                            <button
                                className="border-[1.5px] border-[#ffffff99] py-[5px] px-[10px] rounded-[10px] font-Raleway text-[#ffffff99] bg-[#ffffff20]"
                                onClick={handleSignInWithGoogle}>
                                <FcGoogle />
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-center items-center mt-[20px]">
                        <p className="font-bold text-[18px]"> Don't have an account? <span className="text-[#3F48CCE6]"><Link to="/signup">Sign Up</Link> </span> </p>
                    </div>
                </div>
                <div className="mt-[5px]"> {/* ERROR PROMPT*/}
                    {error}
                </div>
            </div>
        </>
    )
}

export default SignIn