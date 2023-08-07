import React, { useState, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import emailjs from '@emailjs/browser'

function Contatti() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const form = useRef()

    const sendEmail = (e) => {      
        e.preventDefault();

        // logica email.js
        emailjs.sendForm('service_key', 'template_key', form.current, 'public_key')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });

        // Simula l'invio con un ritardo di 2 secondi
        setTimeout(() => {
            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
        }, 2000);

    };

  // Configurazione delle transizioni con useTransition
  const transitions = useTransition(submitted, {
    from: { opacity: 0, height: 'auto' },
    enter: { opacity: 1, height: 'auto' },
    leave: { opacity: 0, height: 0 },
  });


    return(
        <>
            {/* Applica l'animazione con useTransition */}
            {transitions((style, item) =>
                item ? (
                <animated.div style={style}>
                    <p className='fst-italic'>Email inviata con successo!</p>
                </animated.div>
                ) : (

                <animated.div style={style}>

                    {/* form */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-floating mb-3 fst-italic"> 
                            <input 
                                type="text"
                                className="form-control border border-dark"
                                id="floatingInput"
                                placeholder="Nome"
                                name="user_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="floatingInput" >Nome - Cognome</label>
                        </div>

                        <div className="form-floating fst-italic">
                            <input 
                                type="email"
                                className="form-control border border-dark"
                                id="floatingPassword"
                                placeholder="Email"
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Email</label>
                        </div> 

                        <p className="text-black fst-italic mt-3 ">Parlami del tuo progetto in modo dettagliato, per esempio le funzionalità chiave.</p>
                        <div className="form-floating">
                            <textarea
                                className="form-control border border-dark"
                                id="floatingTextarea2"
                                placeholder="Messaggio:"
                                style={{ height: '100px'}}
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-black fst-italic" htmlFor="flexCheckDefault">
                                Acconsento al trattamento dei miei dati personali al fine di ricevere
                                una risposta al mio messaggio, come indicato nella <a href='/privacy-policy' className='text-black'>Privacy Policy</a>. *
                            </label>
                        </div>
                        <button type="submit" className="btn btn-success mt-3" value="Send">INVIA MESSAGGIO</button>
                    </form>

                </animated.div>
                )
            )}

        </>
    );
}

export default Contatti;