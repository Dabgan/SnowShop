import React from "react";

const ContactForm = () => {
    const testValue = (element, pattern) => {
        const regex = new RegExp(pattern);
        element.classList.add("is-valid");
        if (element.value !== "") {
            return regex.test(element.value)
                ? (element.classList.add("is-valid"),
                  element.classList.remove("is-invalid"))
                : (element.classList.add("is-invalid"),
                  element.classList.remove("is-valid"));
        }
    };

    return (
        <form
            action="mailto:gabriel.danilukk@gmail.com"
            method="post"
            encType="text/plain"
            name="contact-form"
            autoComplete="off"
            className="my-4"
            id="form"
        >
            <div className="form-row">
                <div className="form-group col-md-5 mx-2 contact-form-name">
                    <label htmlFor="contact-name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="contact-name"
                        className="form-control"
                        onKeyUp={e => testValue(e.target, /^[\p{L} -]{2,}$/gu)}
                        required
                        minLength="2"
                    />
                    <div className="invalid-feedback">
                        Incorrect name (at least 2 characters)
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5 mx-2">
                    <label htmlFor="contact-email">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="contact-email"
                        className="form-control"
                        onKeyUp={e =>
                            testValue(
                                e.target,
                                /^([\w.-])+@([a-zA-Z0-9-]+)\.([a-z.]+)$/g
                            )
                        }
                    />
                    <div className="invalid-feedback">
                        Please provide valid email adress
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5 mx-2">
                    <label htmlFor="contact-message">Your Message:</label>
                    <textarea
                        id="contact-message"
                        className="form-control contact-form-message"
                        rows="6"
                    />
                    <div className="invalid-feedback">
                        This field can not be empty
                    </div>
                </div>
            </div>
            <button type="submit" className="my-btn mx-2">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
