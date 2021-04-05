import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {},
    title: {
        paddingLeft: theme.spacing(3),
    },
}));

export default function RightSection() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        </div>
    );
}
