import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import auth from './auth-helper'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'
import { signin } from './api-auth'

export default function Login(props) {



    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })

    const status = auth.isAuthenticated();

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        try {
            signin(user).then((data) => {
                if (data.error) {
                    alert("you didnt login")
                    return setValues({ ...values, error: data.error })
                } else {

                    return auth.authenticate(data, () => {
                        setValues({ ...values, error: '', redirectToReferrer: true })
                    })
                }

            })
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const { from } = props.location.state || {
        from: {
            pathname: '/'
        }
    }
    const { redirectToReferrer } = values
    if (redirectToReferrer) {
        return (<Redirect to={from} />)
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange('email')} value={values.email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange('password')} value={values.password} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={clickSubmit}>
                Submit
  </Button>
        </Form>

    );
}
