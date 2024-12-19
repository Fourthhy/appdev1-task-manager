import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function SignOut() {
    const [prompt, setPrompt] = useState('Sign Out')
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut(auth)
        setPrompt('Logging you out')
        setTimeout(() => {navigate('/')}, 1000)
    }
    return (
        <>
            <button 
                onClick={handleSignOut}
                className="border-[1.5px] border-[#ffffff99] py-[5px] px-[10px] rounded-[10px] font-Raleway text-[#ffffff99] bg-[#ffffff20]">
                    { prompt }
            </button>
        </>
    )
}

export default SignOut 