import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const News = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>News</h1>
                <ul>
                    <li><a href="#">News 1</a></li>
                    <li><a href="#">News 2</a></li>
                    <li><a href="#">News 3</a></li>
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default News;