import React from 'react';
import Head from 'next/head';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MenuAppBar from "../components/MenuAppBar";
import MenuConnections from "../components/MenuConnections";
import RightSection from "../components/RightSection";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
            flexDirection: "column",
            display: "flex"
        },
        body: {
            display: "flex",
            flexGrow: 1,
        },
        leftMenu: {
            width: 300,
            borderRight: "5px solid #064813",
            backgroundColor: '#1f1f1f'
        },
        rightSection: {
            flexGrow: 1,
            backgroundColor: '#1f1f1f'
        }
    })
);

function Home() {
    const classes = useStyles({});
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleClick = () => setOpen(true);

    return (
        <React.Fragment>
            <Head>
                <title>Redis GUI</title>
            </Head>
            <div className={classes.root}>
                <MenuAppBar/>

                <div className={classes.body}>
                    <div className={classes.leftMenu}>
                        <MenuConnections/>
                    </div>

                    <div className={classes.rightSection}>
                        <RightSection/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
