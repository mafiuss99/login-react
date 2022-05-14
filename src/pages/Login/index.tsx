import { useContext, useState } from "react"
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);

            if(isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.")
            }
        }
    }

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

            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}