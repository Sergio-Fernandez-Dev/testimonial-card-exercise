import React from "react";
import '../stylesheets/TestimonialCard.css';

function TestimonialCard(props) {
    return (
        <article className="testimonial-container">
            <img
                className="testimonial-img"
                src={require(`../img/testimonialCard-${props.image}.png`)}
                alt={`Foto de ${props.name}`}
            />
            <section className="testimonial-text-container">
                <p className="testimonial-name">
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className="testimonial-job-title">
                    {props.jobTitle} en <strong>{props.company}</strong>
                </p>
                <p className="testimonial-text">
                    "{props.testimony}"
                </p>
            </section>
        </article>
    );
}

export default TestimonialCard;
