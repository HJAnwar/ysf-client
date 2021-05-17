import React from 'react';
import './SideNavbar.css';
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import { AccessAlarm, HomeOutlined, ThreeDRotation } from '@material-ui/icons';
import clsx from 'clsx';
import {  makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useHistory, useLocation } from 'react-router';
import AllEducation from '../AllEducations/AllEducation/AllEducation';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    active: {
        background: '#F7D1B7'
    }
}));

export default function SideNavbar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory()
    const location = useLocation()

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const AdminSideBarHere = [
        {
            text: "Home",
            icon: <HomeOutlined color="primary" />,
            path: "/"
        },
        {
            text: "AllEducation",
            icon: <AccessAlarm color="primary" />,
            path: "/allEducation"
        },
        {
            text: "All-Social",
            icon: <AccessAlarm color="primary" />,
            path: "/allSocialDevelopment"
        },
        {
            text: "All-Help",
            icon: <AccessAlarm color="primary" />,
            path: "/allPoorHelps"
        },
        {
            text: "All Work",
            icon: <HomeOutlined color="primary" />,
            path: "/allProject"
        },
        {
            text: "Who We Are",
            icon: <HomeOutlined color="primary" />,
            path: "/allWhoWeAre"
        },
        {
            text: "All Team",
            icon: <HomeOutlined color="primary" />,
            path: "/allTeam"
        },
        {
            text: "All Contact",
            icon: <HomeOutlined color="primary" />,
            path: "/allContact"
        },
        {
            text: "All Donate",
            icon: <HomeOutlined color="primary" />,
            path: "/allDonate"
        },
        {
            text: "All Admin",
            icon: <HomeOutlined color="primary" />,
            path: "/allAdmin"
        },
        {
            text: "All Active Members",
            icon: <HomeOutlined color="primary" />,
            path: "/allActiveMember"
        },
        

    ]


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        YOUNG STAR FOUNDATION

          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <List>
                    {
                        AdminSideBarHere.map(item =>
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => history.push(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        )

                    }


                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                    


                    {props.children}


            </main>
        </div>
    );
}

