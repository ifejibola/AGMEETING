import {experimentalStyled} from "@material-ui/core";


const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
}));

export default DashboardLayoutRoot;
