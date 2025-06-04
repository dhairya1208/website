import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Hello, Welcome</h4>
                <div><h2>Hi, I’m Dhairya Makwana —</h2> <h5>a curious mind with a passion for building, solving, and improving. I don’t just like ideas; I like making them real. Whether it's through code, design, or strategy, I focus on clarity, purpose, and results.</h5></div>
                <button type="button" class="btn btn-warning mt-3" onClick={() => window.location.href = "tel:+1234567890"}>Contact Us</button>
            </div>
        </div>
    )
}

export default About
