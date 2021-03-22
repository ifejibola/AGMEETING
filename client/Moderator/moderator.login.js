import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { signin } from '../auth/api-auth'
import auth from '../auth/auth-helper'

const moderatorLogin = (props) => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error) {
                alert("you didnt login")
                setValues({ ...values, error: data.error })
            } else {

                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true })
                })
                console.log('im in from front end ')
                alert('user in')

            }
        })
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
        <Form inline>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="me-sm-2">Email</Label>
                <Input type="email" name="email" id="email" value={values.email} onChange={handleChange('email')} placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="examplePassword" className="me-sm-2">Password</Label>
                <Input type="password" name="password" id="password" value={values.password} onChange={handleChange('password')} placeholder="don't tell!" />
            </FormGroup>
            <br />{
                values.error && (<span><h3>Error! {values.error}</h3></span>)
            }
            <Button type='submit' onClick={clickSubmit}>Submit</Button>
        </Form>
    );
}

export default moderatorLogin;