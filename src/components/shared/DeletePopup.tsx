import { Button } from '@chakra-ui/button'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core'
import React, { useState } from 'react'
import { initializeApollo } from '../../lib/apolloClient'

interface IProp {
    deleteUserById: any
    open: any
    setOpen: any
    currentUserId: string
}

const DeletePopup = ({ deleteUserById, open, setOpen, currentUserId }: IProp) => {
    const handleClose = () => {
        setOpen(false)
    }

    const onDeleteUserById = (id: string) => {
        deleteUserById({
            variables: {
                id: id,
            },
        })

        setOpen(false)

        const apolloClient = initializeApollo()
        apolloClient.resetStore()
    }

    return (
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby='alert-dialog-slide-description'
        >
            <DialogTitle>{'DELETE'}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-slide-description'>
                    Do you want delete this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onDeleteUserById.bind(this, currentUserId)}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeletePopup
