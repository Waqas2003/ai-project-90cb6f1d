import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Contact Us</h1>
                <p>
                    You can contact us at <a href="mailto:info@pakistanatomicpower.com">info@pakistanatomicpower.com</a>
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;