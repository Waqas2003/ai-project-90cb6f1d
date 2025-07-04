import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Pakistan Atomic Power</h1>
                <p>
                    Pakistan Atomic Power is a leading organization in the field of nuclear energy in Pakistan.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;