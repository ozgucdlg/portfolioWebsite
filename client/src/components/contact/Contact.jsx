import './contact.scss'
import {useState} from 'react'

export default function Contact() {

    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact"  id="contact">

            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea place="Message"></textarea>
                    <button typr="submit">Send</button>
                    {message && <span> Thank you for mailing, I am going to respond sooner</span>}
                </form>
            </div>
            
            
        </div>
    )
}
