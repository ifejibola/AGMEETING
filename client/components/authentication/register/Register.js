import React from "react";
import {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Box, Card, CardContent, Container, Divider, Link, Typography} from '@material-ui/core';
import useAuth from "../../../hooks/useAuth";
import RegisterAmplify from "./RegisterAmplify";
import RegisterAuth0 from "./RegisterAuth0";
import RegisterFirebase from "./RegisterFirebase";
import RegisterJWT from "./RegisterJWT";
import gtm from "../../../lib/gtm";

const Register = () => {
    const {platform} = useAuth();

    useEffect(() => {
        gtm.push({event: 'page_view'});
    }, []);

    return (
        <>
            <HelmetProvider>
            <Helmet>
                <title>Register</title>
            </Helmet>
            </HelmetProvider>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh'
                }}
            >
                <Container
                    maxWidth="sm"
                    sx={{py: '80px'}}
                >
                    <Box
                        sx={{
                            mb: 8,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                    </Box>
                    <Card>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                p: 4
                            }}
                        >
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 3
                                }}
                            >
                                <div>
                                    <Typography
                                        color="textPrimary"
                                        gutterBottom
                                        variant="h4"
                                    >
                                        Register
                                    </Typography>
                                </div>
                                <Box
                                    sx={{
                                        height: 32,
                                        '& > img': {
                                            maxHeight: '100%',
                                            width: 'auto'
                                        }
                                    }}
                                >
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    mt: 3
                                }}
                            >
                                {platform === 'Amplify' && <RegisterAmplify/>}
                                {platform === 'Auth0' && <RegisterAuth0/>}
                                {platform === 'Firebase' && <RegisterFirebase/>}
                                {platform === 'JWT' && <RegisterJWT/>}
                            </Box>
                            <Divider sx={{my: 3}}/>
                            <Link
                                color="textSecondary"
                                component={RouterLink}
                                to="/login"
                                variant="body2"
                            >
                                Already have an account?
                            </Link>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    );
};

export default Register;
