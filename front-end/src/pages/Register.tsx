import React, {useState} from 'react';
import { UserData } from '../constant/data';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<UserData>({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e: React.FormEvent) => {
        e.preventDefault();
        const {name, email, password} = data
        try{
            const {data} = await axios.post('/register', {
                name, email, password
            });
            if(data.error){
                toast.error(data.error);
            }else{
                setData({
                    name: name,
                    email: email,
                    password: password,
                });
                toast.success('Create new account successfully!');
                navigate('/login');
            }
        }catch (error){
            console.log(error);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <form 
                onSubmit={registerUser} 
                style={{width: "16%"}}
            >
                <div style={{textAlign: "left"}}>Name</div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    style={{ width: "97%", padding: "0.4rem 0rem 0.4rem 0.2rem", marginBottom: "1rem"}}
                    value={data.name} 
                    onChange={(e) => setData({...data, name: e.target.value})}
                />
                <div style={{textAlign: "left"}}>Email</div>
                <input 
                    type="email" 
                    placeholder="Email"
                    style={{ width: "97%", padding: "0.4rem 0rem 0.4rem 0.2rem", marginBottom: "1rem"}} 
                    value={data.email} 
                    onChange={(e) => setData({...data, email: e.target.value})}
                />
                <div style={{textAlign: "left"}}>Password</div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    style={{ width: "97%", padding: "0.4rem 0rem 0.4rem 0.2rem"}} 
                    value={data.password} 
                    onChange={(e) => setData({...data, password: e.target.value})}
                />
                <div style={{ marginTop: "1rem", width: "100%"}}>
                    <button 
                        type='submit' 
                        style={{width: "100%", padding: "0.4rem 0rem 0.4rem 0.2rem"}}
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;