import React from 'react';
import PropTypes from 'prop-types';
import {Box, Dialog, Divider, Typography} from '@mui/material';

const AgendaHelpModal = (props) => {
    const {onClose, open, ...other} = props;

    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
            {...other}
        >
            <Box sx={{p: 3}}>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Agenda Page Description
                </Typography>
                <Divider/>
                <Box sx={{mt: 3}}>
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
                            The Agenda page outlines the plan of the meeting as set by the Moderator. On the page, you
                            can see the name of the item, a detailed description (if any), and the
                            status of each item, how long it has taken and a recap of any votes made. You can also see
                            the total number of items currently listed in the agenda.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

AgendaHelpModal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default AgendaHelpModal;