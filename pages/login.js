import React, {useState} from 'react';
import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";
import { Nav } from '../components/Nav';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function Home(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState({});
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true)
        
        if(email !== "" && password !== ""){
            signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log(user)
                setFeedback({type: "success", message: "Log in successful!"});
                setLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setLoading(false)
            })
        }else{
            setFeedback({type: "error", message: "Credentials can not be empty!"});
            setLoading(false)
        }
    }
    
    return (
        <>
            <Head>
                <title>Login - Cishahayo Songa Achille</title>
                <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap" rel="stylesheet"/>
            </Head>
            <div className="relative">
                <Header/>
                <section>
                    <Nav title="Login"/>
                    <form className='form-primary'>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Admin email"/>
                        <input value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="Admin Password"/>
                        <button className='btn' onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
                        {feedback.type === "error" ?
                            <div>{feedback.message !== "" && <p className='error'>{feedback.message}</p>}</div> :
                            <div>{feedback.message !== "" && <p className='success'>{feedback.message}</p>}</div>
                        }
                    </form>
                </section>
                <Footer />
            </div>
        </>
    )
}
