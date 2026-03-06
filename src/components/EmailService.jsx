import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(null);
    const [honeypot, setHoneypot] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (honeypot.length > 0) {
            console.log("Bot detected!");
            alert("Message sent! Trust me bot >:)");
            return;
        }

        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setShowToast({ msg: "Message sent! I'll chat soon.", type: 'success' });
                formRef.current.reset();
            })
            .catch((error) => {
                setShowToast({ msg: "Oops! Try again later.", type: 'error' });
                console.error(error.text);
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setShowToast(null), 4000);
            });
    };

    const Toast = ({ message, type, onClose }) => (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`fixed bottom-5 right-5 z-50 px-6 py-3 rounded-lg shadow-2xl font-body font-bold text-sm flex items-center gap-3 border ${type === 'success'
                ? 'bg-green-500/90 text-white border-green-400'
                : 'bg-red-500/90 text-white border-red-400'
                } backdrop-blur-md`}
        >
            {message}
            <button onClick={onClose} className="hover:opacity-70 ml-2">✕</button>
        </motion.div>
    );

    return (
        <>
            <AnimatePresence>
                {showToast && (
                    <Toast
                        message={showToast.msg}
                        type={showToast.type}
                        onClose={() => setShowToast(null)}
                    />
                )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                { /* Honypot Field */}
                <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                        type="text"
                        name="bot_check"
                        tabIndex="-1"
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                    />
                </div>

                <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="bg-white/10 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-(--colour-yellow) transition-colors"
                />
                <input
                    type="email"
                    name="reply_to"
                    placeholder="Your Email"
                    className="bg-white/10 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-(--colour-yellow) transition-colors"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="bg-white/10 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-(--colour-yellow) transition-colors resize-none"
                ></textarea>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center py-2 bg-(--colour-yellow) text-(--colour-purple) rounded-lg font-bold font-body text-sm hover:brightness-110 transition-all"
                >
                    Send Message
                </motion.button>
            </form>
        </>
    );
}