import React from "react";

function Contact() {
    const hrStyle = { height: "10px" };

    return (
        <div>
            <br />
            <section className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Contact Me</h1>
                </div>
            </section>
            <hr style={hrStyle} />
            <br />
            <section className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name"></input>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email"></input>
                </div>
            </section>
            <br />
            <section className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Message"></input>
                </div>
            </section>
            <br />
            <section className="row">
                <div className="col">
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary btn btn-dark">Submit</button>
                    </div>
                </div>
            </section>
            <br />
            <hr style={hrStyle} />
        </div>
    );
};

export default Contact;