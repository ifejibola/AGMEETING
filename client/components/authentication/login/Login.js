import React from "react";
import {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Box, Card, CardContent, Container, Divider, Link, Typography} from '@material-ui/core';
import useAuth from "../../../hooks/useAuth";
import LoginAmplify from "./LoginAmplify";
import LoginAuth0 from "./LoginAuth0";
import LoginFirebase from "./LoginFirebase";
import LoginJWT from "./LoginJWT";
import gtm from "../../../lib/gtm";

const Login = () => {
    const {platform} = useAuth();

    useEffect(() => {
        gtm.push({event: 'page_view'});
    }, []);

    return (
        <>
            <HelmetProvider>
            <Helmet>
                <title>Login</title>
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
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 8
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
                                        Login
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
                                {platform === 'Amplify' && <LoginAmplify/>}
                                {platform === 'Auth0' && <LoginAuth0/>}
                                {platform === 'Firebase' && <LoginFirebase/>}
                                {platform === 'JWT' && <LoginJWT/>}
                            </Box>
                            <Divider sx={{my: 3}}/>
                            <Link
                                color="textSecondary"
                                component={RouterLink}
                                to="/register"
                                variant="body2"
                            >
                                Register
                            </Link>
                            {platform === 'Amplify' && (
                                <Link
                                    color="textSecondary"
                                    component={RouterLink}
                                    sx={{mt: 1}}
                                    to="/authentication/password-recovery"
                                    variant="body2"
                                >
                                    Forgot Password
                                </Link>
                            )}
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    );
};

export default Login;
