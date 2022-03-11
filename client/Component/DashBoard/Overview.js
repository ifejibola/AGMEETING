import React from 'react';
import { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import useSettings from '../../hooks/useSettings';
import gtm from '../../lib/gtm'

const Overview = () => {
  const { settings } = useSettings();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Dashboard: Overview | Material Kit Pro</title>
      </Helmet> */}
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              alignItems="center"
              container
              justifyContent="space-between"
              spacing={3}
              item
              xs={12}
            >
               <Grid item>
                <Typography
                  variant="h4"
                  color="secondary"
                >
                  Overview
                </Typography>
                <Typography
                  variant="h3"
                  color="white"
                >
                  Good Morning, Jane
                </Typography>
                <Typography
                  variant="h4"
                  color="secondary"
                >
                  Here&apos;s what&apos;s happening with your projects
                  today
                </Typography>
              </Grid>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
