import React, {useState} from 'react';
import { UserLoginData } from '../constant/data';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState<UserLoginData>({
        email: '',
        password: '',
    });

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const {email, password} = data;
        try{
            const {data} = await axios.post('/login', {
                email, 
                password
            });
            if(data.error){
                toast.error("Invalid email or password!");
            }else{
                setData({
                    email: email,
                    password: password,
                });
                toast.success('Login successfully!');
                navigate('/daashboard');
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <form 
                onSubmit={loginHandler} 
                style={{ width: "16%" }}
            >
                <div style={{ textAlign: "left" }}>Email</div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    style={{ width: "97%", padding: "0.4rem 0rem 0.4rem 0.2rem", marginBottom: "1rem"}} 
                    value={data.email} 
                    onChange={(e) => setData({ ...data, email: e.target.value })} 
                />
                <div style={{ textAlign: "left" }}>Password</div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    style={{ width: "97%", padding: "0.4rem 0rem 0.4rem 0.2rem"}} 
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })} 
                />
                <div style={{ marginTop: "1rem", width: "100%"}}>
                    <button 
                        type='submit' 
                        style={{width: "100%", padding: "0.4rem 0rem 0.4rem 0.2rem"}}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;