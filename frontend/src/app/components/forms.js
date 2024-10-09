import {useState} from "react";
import api from "../api";

function Form(route,method) {
    const [username, setUsername] = useState("");
    const[password,setPassword]= useState("");
    const[email,setEmail]=useState("");
    const[loading,setLoading]=useState(false);
    const handleSubmit =async(e)=>{
        setLoading(true)
        e.preventDefault()
        try {
            console.log(route)
            const request=await api.post("/User_Api/register/",{email,username,password})
        }
        catch(error){
            alert(error)
        }
        finally{
            setLoading(false)
        }
    }
    return <form onSubmit={handleSubmit} className="form-container">
        <h1>Register</h1>
        <input
            className={"form-input"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="UNLV Email Address"
        />
        <input
            className={"form-input"}
            type={"username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <input
            className={"form-input"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button className="form-button" type="submit" >
            {"Register"}
        </button>
    </form>
}
export default Form