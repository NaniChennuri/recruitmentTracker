import React, { Fragment, useState, useEffect } from "react";
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, IconButton, CircularProgress } from "@material-ui/core";
import './modal.scss';
import { Close as CloseIcon } from "@material-ui/icons";

const showExtraButtons = (buttons, isLoading) => {
    return buttons.map((button, idx) => {
        return (
            <Button
                key={idx}
                onClick={() => button.function()}
                color="primary"
                style={{ textTransform: "capitalize", position: "relative" }}
            >
                {button.text}
                {isLoading && (
                    <CircularProgress
                        color="secondary"
                        style={{ width: "25px", height: "24px", position: "absolute" }}
                    />
                )}
            </Button>
        );
    });
};

const Modal = ({ classes, ...props }) => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (props.showModal !== undefined)
            setOpenModal(props.showModal);
    }, [props.showModal]);

    return (
        <Fragment>
            <Dialog
                PaperProps={{
                    style: {
                        backgroundColor: "#fff",
                    }
                }}
                open={openModal}
                onClose={() => props.handleClose()}
                aria-labelledby="scroll-dialog-title"
                fullWidth
                maxWidth={props.modalWidth}
                disableEscapeKeyDown={true}
            >
                {!props.noHeader && (
                    <DialogTitle id="scroll-dialog-title">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="modal-title">{props.heading}</div>
                            <IconButton
                                aria-label="Close"
                                onClick={() => props.handleClose()}
                                style={{ padding: "0px" }}
                            >
                                {!props.noClose && <CloseIcon />}
                            </IconButton>
                        </div>
                    </DialogTitle>
                )}
                <DialogContent dividers={props.dividers} style={{ overflow: "hidden" }}>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    {props.commonButtonText && (
                        <Button
                            onClick={() => props.handleClose()}
                            color="primary"
                            style={{ textTransform: "capitalize" }}
                        >
                            {props.commonButtonText}
                        </Button>
                    )}
                    {props.buttons && showExtraButtons(props.buttons, props.isLoading)}
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};

export default Modal;
