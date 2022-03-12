import React from 'react';
import PropTypes from 'prop-types';
import {Box, Dialog, Divider, Typography} from '@mui/material';

const VaultHelpModal = (props) => {
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
                    Vault Page Description
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
                            The vault page displays files that are relevant to certain agenda items. To view a particular file please click on the arrow action button that corresponds to the file of your choice.
                            To edit a file please click on the edit action button next to the arrow action button.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

VaultHelpModal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default VaultHelpModal;