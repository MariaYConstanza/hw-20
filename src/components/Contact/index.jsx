import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <div class="card">
                <h5 class="card-header">Contact Form</h5>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="leave a detailed message"></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-info">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;