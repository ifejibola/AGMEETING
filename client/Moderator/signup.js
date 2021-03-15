import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import user from '../../models/user.js';
import { create } from './api-mod.js'
export default function signup() {

    const [values, setValues] = useState({
        email: '',
        name: '',
        company: '',
        password: '',
        error: ''
    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        // event.preventDefault();
        // alert('ife!!')

    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }
        create(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, error: '', open: true })
            }
        })

    }

    return (
        <Form inline>
            <FormGroup >
                <Label for="email" className="me-sm-2">Email</Label>
                <Input type="text" name="email" id="email" value={values.email} onChange={handleChange('email')} placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="name" className="me-sm-2">Full Name</Label>
                <Input type="text" name="name" id="name" value={values.name} onChange={handleChange('name')} placeholder="John Doe" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="company" className="me-sm-2">Company</Label>
                <Input type="text" name="company" id="company" value={values.company} onChange={handleChange('company')} placeholder="Organization" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="password" className="me-sm-2">Password</Label>
                <Input type="password" name="password" id="password" value={values.password} onChange={handleChange('password')} placeholder="Password" />
            </FormGroup>
            <br />{
                values.error && (<span><h3>Error! {values.error}</h3></span>)
            }
            {/* <Button onSubmit={clickSubmit}>Submit</Button> */}
            <Button type="submit" onClick={clickSubmit}>Submit</Button>
        </Form>
    );
}
