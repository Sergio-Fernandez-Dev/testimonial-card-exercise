import React from "react";
import '../stylesheets/TestimonialCard.css';

function TestimonialCard(props) {
    return (
        <article className="testimonial-container">
            <img
                className="testimonial-img"
                src={require("../img/testimonialCard-emma.png")}
                alt="Foto de Emma"
            />
            <section className="testimonial-text-container">
                <p className="testimonial-name"> {props.name} en {props.country}</p>
                <p className="testimonial-job-title">{props.jobTitle} en {props.company}</p>
                <p className="testimonial-text">"{props.testimony}"</p>
            </section>
        </article>
    );
}

export default TestimonialCard;
