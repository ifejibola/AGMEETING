import React from 'react';
import PropTypes from 'prop-types';
import { Box, Dialog, Divider, Typography } from '@mui/material';

const SessionHelpModal = (props) => {
    const { onClose, open, ...other } = props;

    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Session Page Description
                </Typography>
                <Divider />
                <Box sx={{ mt: 3 }}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            mt: 6
                        }}
                    >
                        <Typography
                            color="textPrimary"
                            variant="subtitle2"
                            align="center"
                        >
                            The Session page is like the minutes of the meeting. It shows you exactly where you are
                            as the meeting goes along and allows you to see what other participants have done when
                            interactions have happened. As the meeting happens, new sections matched with each Agenda
                            Item are loaded and filled-in automatically.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

SessionHelpModal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default SessionHelpModal; 