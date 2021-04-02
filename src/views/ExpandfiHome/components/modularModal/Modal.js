import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Modal = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Join Our Waitlist</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
            <TextField
                className={classes.emailField}
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                name="email"
                fullWidth
                type="email"
                onChange={handleEmailValidation}
            />
            <Button
                fullWidth
                className={classes.btn}
                size="small"
                disabled={disable}
                onClick={handleOpen}
                onClick={handleSubmit}
            >
                JOIN OUR WAITLIST
            </Button>
        </div>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    )
}

export default Modal