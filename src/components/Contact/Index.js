import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/Index';
import './Index.scss';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      
    
      return () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
      }

    }, [letterClass])
    
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam id quibusdam molestiae aspernatur dicta error! Consequatur voluptas fugiat facere, doloribus maxime blanditiis molestiae modi aperiam assumenda quod suscipit sint, totam eaque.</p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                            
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                            
                                <li className='half'>
                                    <input type="text" name='subject' placeholder='Subject' required/>
                                </li>
                            
                                <li className='half'>
                                    <textarea className='half' name="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button'value='Send' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;