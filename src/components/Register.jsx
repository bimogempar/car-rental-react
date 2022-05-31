import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";


export default function Register() {
    return (
        <div className="bg-aliceblue">
        <Container className="py-5">
            <Row className="pb-5">
                <Col lg={5} className="my-auto form-register">
                    <Form >
                        <h3>Register</h3>
                        <div className="form-group">
                            <label className="labelLogin">Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label className="labelLogin">Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" required />
                        </div>
                        <div className="form-group">
                            <label className="labelLogin">Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" required />
                        </div>
                        <button type="submit" className="btn btn-success col-12 text-light signIn mt-4">
                            Sign up
                        </button>
                        <button type="button" className="btn btn-primary col-12 text-light signGoogle mt-4">
                            <i class="bi bi-google me-2"></i>Sign In With Google
                        </button>
                        <p className="sign-up text-center mt-2">
                            Have an Account? <a href="/login">Sign In?</a>
                        </p>
                    </Form>
                </Col>
                {/* <Col lg={6}>
                    <h3>MOBIL BERKUALITAS ?</h3>
                    <h5>Ya Cuma di Car Rental</h5>
                </Col> */}
            </Row>
        </Container>
    </div>
    )
}