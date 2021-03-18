import React from "react";
import deed from "../images/DeedsDone.png";
import marvel from "../images/Marvel-Basement-portfolio.png";
import horiseon from "../images/Horiseon.png";
import soundCloud from "../images/soundcloud.jpg";
import stayTuned from "../images/stay-tuned-3.jpg";

function Portfolio() {
    const hrStyle = { height: "10px" };
    const projectStyle = { height: "100%", width: "100%", objectFit: "contain" };
    const hwStyle = { height: "100%", width: "100%", objectFit: "cover" };
    const hw2Style = { width: "18rem" };

    return (
        <div>
            <br />
            <section className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Portfolio</h1>
                </div>
            </section>
            <hr style={hrStyle} />
            <br />

            <section className="row">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <a href="https://deeddone.herokuapp.com/" target="_blank" rel="noreferrer"><img
                                src={deed} alt="Deeds Done"
                                style={projectStyle} /></a>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">Deeds Done</h5>
                                <p className="card-text">Application that allows you to post good deeds for a state, or take
                                suggestions of good deeds to accomplish in your area. Follow the link, suggest some new
                                good deeds for people, and maybe do one in your area!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <a href="https://api-guild.github.io/marvel-basement/" target="_blank" rel="noreferrer"><img
                                src={marvel} alt="Marvel Basement"
                                style={projectStyle} /></a>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">Marvel Basement</h5>
                                <p className="card-text">Application for searching Marvel characters utilizing Giphy and
                                Marvel's respective API's. Follow the link and look up some info about your favorite
                                Marvel
                                characters!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row portfolioCont">
                <figure className="col-lg-4">
                    <div className="card border-dark mb-3 rounded float-start gitHubPort" style={hw2Style}>
                        <a target="_blank" rel="noreferrer" href="https://josecordova42.github.io/JoseCordovaHomework1/"><img
                            src={horiseon} className="card-img-top" alt="Horiseon"
                            style={hwStyle} /></a>
                        <div className="card-body">
                            <p className="card-text">Project for Horiseon, a search engine optimization company. Worked on code
                            refactoring.</p>
                        </div>
                    </div>
                </figure>
                <figure className="col-lg-4">
                    <div className="card border-dark mb-3 rounded mx-auto d-block soundCloudPort" style={hw2Style}>
                        <a target="_blank" rel="noreferrer" href="https://soundcloud.com/mexicution"><img src={soundCloud}
                            className="card-img-top" alt="Soundcloud"
                            style={hwStyle} /></a>
                        <div className="card-body">
                            <p className="card-text">My personal Soundcloud page hosting some of the music I've made over the
                            years.</p>
                        </div>
                    </div>
                </figure>
                <figure className="col-lg-4">
                    <div className="card border-dark mb-3 rounded float-end moreToComePort" style={hw2Style}>
                        <img src={stayTuned} className="card-img-top" alt="Stay tuned in neon lights"
                            style={hwStyle} />
                        <div className="card-body">
                            <p className="card-text">I just recently started coding, and can't wait to work on more projects.
                            More to come!</p>
                        </div>
                    </div>
                </figure>
            </section>


        </div>
    );
};

export default Portfolio;
