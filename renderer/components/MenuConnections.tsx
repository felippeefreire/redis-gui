import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {List, ListItem, ListItemText} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {},
    title: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
    },
}));

const connections = [
    {
        name: 'Example 1'
    }
];

export default function MenuConnections() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                Connections
            </Typography>

            <List component="nav">
                {connections.map((connection) => (
                    <ListItem button>
                        <ListItemText primary={connection.name}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
