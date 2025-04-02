
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Set loading state
        setIsLoading(true);
        setError('');

        // Send email via EmailJS
        emailjs.sendForm(
            'service_d0tddmt', // Replace with your Service ID
            'template_gzzmcbh', // Replace with your Template ID
            e.target, // form element
            'Segera' // Replace with your User ID
        )
        .then(
            (result) => {
                alert('Message sent successfully!');
                setEmail('');
                setMessage('');
            },
            (error) => {
                setError('Failed to send message. Check Your Network.');
            }
        )
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <section id="contact" className="bg-cyan-900 py-12">
            <div className="container mx-auto px-4 ">
                <h2 className="text-3xl font-bold text-center mb-8 text-cyan-200">Contact Me</h2>
                <form 
                    onSubmit={handleSubmit} 
                    className="max-w-md mx-auto bg-cyan-700 p-8 rounded-lg shadow-md"
                >
                    <input 
                        type="email" 
                        name="user_email" // This must match the field name in your template
                        placeholder="Your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-4 border rounded-md bg-cyan-200"
                        required 
                    />
                    <textarea 
                        name="message" // This must match the field name in your template
                        placeholder="Your Message" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 mb-4 border rounded-md h-32 bg-cyan-200"
                        required
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-cyan-200 text-cyan-950 font-semibold py-3 rounded-md hover:bg-cyan-600 transition hover:text-cyan-200"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {error && <p className="text-red-500 bg-cyan-200 rounded text-center mt-4">{error}</p>}
            </div>
        </section>
    );
}

export default Contact;