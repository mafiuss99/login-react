import { useState } from "react"

export const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h2>
                Página fechada
            </h2>

            <input 
            type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password" name="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

            <button>Logar</button>
        </div>
    )
}