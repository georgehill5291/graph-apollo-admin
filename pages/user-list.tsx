import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/react'
import { DeleteOutline, EditOutlined } from '@material-ui/icons'
import { DataGrid } from '@mui/x-data-grid'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import PortalLayout from '../src/components/layout/PortalLayout'
import DeletePopup from '../src/components/shared/DeletePopup'
import LoadingView from '../src/components/shared/LoadingView'
import { useDeleteUserByIdMutation, useGetAllUserQuery } from '../src/generated/graphql'
import { useCheckAuth } from '../src/utils/useCheckAuth'

const UserList = () => {
    const router = useRouter()
    const [deleteUserById, { error, loading: deleteUserByIdLoading }] = useDeleteUserByIdMutation()
    const { data: authData, loading: authLoading } = useCheckAuth()
    const [currentUserId, setCurrentUserId] = useState('')
    const [open, setOpen] = useState(false)
    const [page, setPage] = React.useState(0)
    const [emailSearch, setEmailSearch] = useState('')

    const handleClickOpen = (id: string) => {
        setOpen(true)
        setCurrentUserId(id)
    }

    const { data: allUser, loading: allUserLoading } = useGetAllUserQuery({
        variables: {
            email: (router.query.email as string) || '',
        },
    })

    useEffect(() => {
        router.push({
            search: `email=${emailSearch}&page=${page + 1}`, // query string
        })
    }, [page])

    const handleFilter = () => {
        setPage(0)
        router.push({
            search: `email=${emailSearch}&page=1`, // query string
        })
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params: any) => {
                return (
                    <div className='userListUser'>
                        <Image
                            src={'http://georgedev.info/static/media/my-avatar.c9ca184d.jpg'}
                            alt=''
                        />
                        {params.row.username}
                    </div>
                )
            },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'roles',
            headerName: 'Roles',
            width: 200,
            renderCell: (params: any) => {
                return <>{params.row.roles.join(',')}</>
            },
        },
        // {
        //     field: 'transaction',
        //     headerName: 'Transaction',
        //     width: 90,
        // },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params: any) => {
                return (
                    <>
                        <NextLink href={`/user/edit/${params.row._id}`}>
                            <Button mr={2}>
                                <EditOutlined />
                            </Button>
                        </NextLink>

                        {authData?.me?.email !== params.row.email && (
                            <Button
                                isLoading={deleteUserByIdLoading}
                                // onClick={onDeleteUserById.bind(this, params.row._id)}
                                onClick={handleClickOpen.bind(this, params.row._id)}
                            >
                                <DeleteOutline />
                            </Button>
                        )}
                    </>
                )
            },
        },
    ]

    return (
        <PortalLayout>
            <div className='userListButtonWrapper'>
                <div className='userListButtonLeft'>
                    <input
                        className='userListProductNameFilter'
                        placeholder='Email'
                        value={emailSearch}
                        onChange={(event) => setEmailSearch(event.target.value)}
                    ></input>
                </div>
                <div className='userListButtonRight'>
                    <button className='userListButtonFilter' onClick={handleFilter}>
                        Filter
                    </button>
                    <NextLink href='/user/create'>
                        <button className='userListButtonAdd'>Add</button>
                    </NextLink>
                </div>
            </div>

            {allUserLoading || !allUser || !allUser.getAllUser ? (
                <LoadingView />
            ) : (
                <DataGrid
                    autoHeight={true}
                    rows={allUser.getAllUser}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    getRowId={(row) => row._id}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            )}

            <DeletePopup
                deleteUserById={deleteUserById}
                open={open}
                setOpen={setOpen}
                currentUserId={currentUserId}
            />
        </PortalLayout>
    )
}

export default UserList
