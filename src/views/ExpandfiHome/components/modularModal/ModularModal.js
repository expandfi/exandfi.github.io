import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button, Typography, Grid } from '@material-ui/core';
import SweetAlert from 'sweetalert-react';
import "../../../../../node_modules/sweetalert/dist/sweetalert.css";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

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
        width: 472,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: '10px 50px 50px 50px'
        // padding: theme.spacing(2, 4, 3),
    },
    btn: {
        background: '#AA2CFF',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '600',
        padding: '10px',
        marginTop: '15px',
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
    customizedButton: {
        display: 'flex',
        color: 'gray',
      },
    modalBody: {
        textAlign: 'center',
    },
    modalTitle: {
        fontSize: '32px',
        marginBottom: '10px',
    },
    modalSubtitle: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    emailField: {
        marginBottom: '15px'
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

    

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwU7nkBhW8xfiT86PzF7i_lDdG0_fBHiV5M6UVsHmaJTl7nX_jsORuWXPBvm0EpmT8Q/exec'
    const form = document.forms['submit-to-google-sheet']

    function handleSubmit(event) {
        event.preventDefault();

        // console.log('Email:', email);
        // // You should see email and password in console.
        // // ..code to submit form to backend here...
        // let config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }
        // axios.post('https://sheet.best/api/sheets/966ef6cc-b584-4515-8f7f-48ab10f3cfd4', { Email: email }, config)
        //     .then(response => {
        //         console.log(response);
        //         setShow(true);
        //         handleClose();
        //     })

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response);
            setShow(true);
            handleClose();
        })
        .catch(error => console.error('Error!', error.message))        

    }

    const body = (
        <>
        
        <div style={modalStyle} className={classes.paper}>
                <Grid container direction="column" alignContent="flex-end" >
                    <IconButton className={classes.customizedButton} onClick={handleClose} >
                        <Close />
                    </IconButton>
                </Grid>
               
                <Grid container direction="column" alignItems="center" className={classes.modalBody}>
                    <h2 className={classes.modalTitle} id="simple-modal-title">Join our waitlist</h2>
                    <p id="simple-modal-description" className={classes.modalSubtitle} >
                        Grow your business with ExpandFi
                    </p>

                    <form onSubmit={handleSubmit} name="submit-to-google-sheet">
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
                            By clicking “Join our waitlist” you agree to the ExpandFi Terms of Service and Privacy Policy.
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
                </Grid>

        </div>
        </>
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
                text="Thank you for signing up"
                onConfirm={() => setShow(false)}
            />
        </>
    )
};

export default ModularModal;