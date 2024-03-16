import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading, errorFields } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(email, password)
        // console.log(errorFields)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className={errorFields.includes('email') ? 'error' : ''}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className={errorFields.includes('password') ? 'error' : ''}
                value={password}
            />

            <button disabled={isLoading}>Sign up</button>
            {/* <button>Sign up</button> */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup