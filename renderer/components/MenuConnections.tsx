import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListSubheader, Menu, MenuItem} from "@material-ui/core";
import {ConnectionService} from "../core/services/ConnectionService";
import {IConnection} from "../core/interfaces/IConnection";

const useStyles = makeStyles((theme) => ({
    root: {},
    title: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
    },
}));

export default function MenuConnections() {
    const classes = useStyles();
    const connections = ConnectionService.list();
    return (
        <div className={classes.root}>
            <List subheader={<ListSubheader>Connections</ListSubheader>} className={classes.root}>
                {connections.map((connection) => (<ItemConnection connection={connection}/>))}
            </List>
        </div>
    );
}

const initialState = {
    mouseX: null,
    mouseY: null,
};

function ItemConnection({connection}: { connection: IConnection }) {
    const [state, setState] = React.useState(initialState);

    const handleClick = (event) => {
        event.preventDefault();
        setState({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
    };

    const handleClose = () => {
        setState(initialState);
    };

    const handleDelete = async () => {
        setState(initialState);
        await ConnectionService.delete(connection);
    };

    return (
        <Fragment>
            <ListItem onContextMenu={handleClick} style={{cursor: 'context-menu'}}>
                <ListItemText primary={connection.name}/>
            </ListItem>
            <Menu
                keepMounted
                open={state.mouseY !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    state.mouseY !== null && state.mouseX !== null
                        ? {top: state.mouseY, left: state.mouseX}
                        : undefined
                }
            >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </Fragment>
    );
}
