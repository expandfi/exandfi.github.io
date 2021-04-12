import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button, Typography } from '@material-ui/core';
import SweetAlert from 'sweetalert-react';
import "../../../../../node_modules/sweetalert/dist/sweetalert.css";
import axios from "axios";

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
        width: 500,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    btn: {
        background: '#AA2CFF',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '600',
        padding: '10px',
        '&:disabled': {
          background: '#AA2CFF',
          color: 'white',
          fontSize: '1rem',
          fontWeight: '600',
          padding: '10px'
        },
        '&:hover': {
          background: '#951BE8',
          color: 'white'
        }
      },
}));


const ModularModal = props => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    const [disable, setDisabled] = React.useState(true);
    const [show, setShow] = React.useState(false)

    const handleEmailValidation = event => {
        let isValid = true;

        setEmail(event.target.value);
        if (typeof email !== "undefined") {
            const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegEx.test(email)) {
                isValid = false;
                setError(
                    <Typography
                        variant="subtitle2"
                        color="error"
                    >
                        Please enter valid email address.
                    </Typography>
                );
                setDisabled(true);
            } else {
                setError("");
                setDisabled(false);
            }
        }
        // console.log(email);
    }

    const handleOpen = () => {
        props.setOpen(true);
        console.log("did this work?");

    };

    const handleClose = () => {
        props.setOpen(false);
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Email:', email);
        // You should see email and password in console.
        // ..code to submit form to backend here...
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios.post('https://sheet.best/api/sheets/966ef6cc-b584-4515-8f7f-48ab10f3cfd4', { Email: email }, config)
            .then(response => {
                console.log(response);
                setShow(true);
                handleClose();
            })

    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Join our waitlist</h2>
            <p id="simple-modal-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <form onSubmit={handleSubmit}>
                <TextField
                    className={classes.emailField}
                    placeholder="Enter Email Address"
                    variant="outlined"
                    size="small"
                    name="email"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={handleEmailValidation}
                />
                <Typography variant='caption' >
                    By clicking “Submit Now” you agree to the ExpandFi Terms of Service and Privacy Policy.
                </Typography>
                <Button
                    fullWidth
                    className={classes.btn}
                    size="small"
                    disabled={disable}
                    onClick={handleSubmit}
                    type="submit"
                >
                    JOIN OUR WAITLIST
            </Button>
            </form>
            {error}
        </div>
    );

    return (
        <>
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        <SweetAlert 
        show={show}
        type="success"
        title="You're on the list!"
        onConfirm={() => setShow(false)}
        />
        </>
    )
};

export default ModularModal;