import React from "react";
import imgSelf from "../images/self1.jpg"

function About() {
    const hrStyle = { height: "10px" };
    const imgStyle = { width: "300px", height: "370px" };

    return (
        <div>
            <br />
            <section className="row">
                <div className="col-md-12">
                    <h1 className="text-center">About Me</h1>
                </div>
            </section>
            <hr style={hrStyle} />
            <br />
            <section className="row">
                <figure className="col-md-4 aboutMeImage">
                    <img src={imgSelf} className="rounded-circle rounded mx-auto d-block border border-5 border-dark" style={imgStyle} alt="Jose Cordova" />
                </figure>
                <section className="col-md-8 aboutMePara">
                    <p>
                        Hi, I'm Jose Cordova.
                </p>
                    <p>
                        Up-and-coming coder, musician, weight-lifter, and gamer.
                </p>
                    <p>
                        I was recently enrolled in an immersive coding program offered by University of Texas Austin where
                        I learned full-stack web-development. We finished in late March of 2021. The more I code the more I'm finding out how much I enjoy
                        it, so I'm excited to keep learning.
                </p>
                    <p>
                        When I'm not coding, though, I enjoy making music in my amateur home-studio. I've been playing
                        guitar for about 20 years, and don't see myself stopping anytime soon.
                </p>
                    <p>
                        Github: <a href="https://github.com/JoseCordova42" target="_blank" rel="noreferrer">JoseCordova42</a>
                    </p>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/jose-cordova-78b2b21bb/" target="_blank" rel="noreferrer">Jose
                        Cordova</a>
                    </p>
                    <p>
                        Email: <a href="mailto: jose42cordova@gmail.com">Contact Me!</a>
                    </p>
                    <p>
                        <a href="https://docs.google.com/document/d/1t_HOd500fsEy_gGMajS2wlcOw3WWnPANQiadt6a4gVs/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </p>
                </section>
            </section>

        </div>
    );
};

export default About;
