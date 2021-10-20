import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import PortalLayout from '../src/components/layout/PortalLayout'
import {
    useDeleteProductMutation,
    useProductQuery,
    useProductsQuery,
} from '../src/generated/graphql'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/button'
import { DeleteOutline, EditOutlined } from '@material-ui/icons'
import { Image } from '@chakra-ui/image'
import { DataGrid } from '@mui/x-data-grid'
import LoadingView from '../src/components/shared/LoadingView'
import DeletePopup from '../src/components/shared/DeletePopup'
import { useCheckAuth } from '../src/utils/useCheckAuth'

const ProductList = () => {
    const router = useRouter()
    const [page, setPage] = React.useState(0)
    const [rows, setRows] = React.useState([])
    const [loading, setLoading] = useState(false)
    const [currentProductId, setCurrentProductId] = useState('')
    const [open, setOpen] = useState(false)
    const { data: authData, loading: authLoading } = useCheckAuth()
    const [deleteProduct, { error, loading: deleteProductLoading }] = useDeleteProductMutation()

    const {
        data: productData,
        loading: productDataLoading,
        networkStatus,
    } = useProductsQuery({
        variables: {
            color: (router.query.color as string) || '',
            size: (router.query.size as string) || '',
            offset: (parseInt(router.query.page as string) - 1) * 5 || 0,
            limit: 5,
        },
        //component nao render boi cai Posts query, se rerender khi networkStatus change
        // notifyOnNetworkStatusChange: true,
    })

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search)
        const params = Object.fromEntries(urlSearchParams.entries())

        router.push({
            search: `page=${page + 1}`, // query string
        })
    }, [page])

    const handleClickOpen = (id: string) => {
        setOpen(true)
        setCurrentProductId(id)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'product',
            headerName: 'Product',
            width: 150,
            renderCell: (params: any) => {
                return (
                    <div className='userListUser'>
                        <Image src={params.row.img} alt='' />
                        {params.row.title}
                    </div>
                )
            },
        },
        { field: 'desc', headerName: 'Description', width: 150 },
        { field: 'price', headerName: 'Price', width: 100 },
        {
            field: 'color',
            headerName: 'Color',
            width: 200,
            renderCell: (params: any) => {
                return <>{params.row.color.join(',')}</>
            },
        },
        {
            field: 'size',
            headerName: 'Size',
            width: 200,
            renderCell: (params: any) => {
                return <>{params.row.size.join(',')}</>
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params: any) => {
                return (
                    <>
                        <NextLink href={`/product/edit/${params.row._id}`}>
                            <Button mr={2}>
                                <EditOutlined />
                            </Button>
                        </NextLink>

                        <Button
                            isLoading={deleteProductLoading}
                            onClick={handleClickOpen.bind(this, params.row._id)}
                        >
                            <DeleteOutline />
                        </Button>
                    </>
                )
            },
        },
    ]

    return (
        <PortalLayout>
            <h2 className='listTitle'>Product List</h2>
            <div className='userListButtonWrapper'>
                <div className='userListButtonLeft'>Left</div>
                <div className='userListButtonRight'>
                    <button className='userListButtonFilter'>Filter</button>
                    <NextLink href='/product/create'>
                        <button className='userListButtonAdd'>Add</button>
                    </NextLink>
                </div>
            </div>
            {!productData?.products ? (
                <LoadingView />
            ) : (
                <DataGrid
                    autoHeight={true}
                    rows={productData.products.docs}
                    rowCount={productData.products.totalDocs}
                    columns={columns}
                    pageSize={5}
                    page={page}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    pagination
                    paginationMode='server'
                    getRowId={(row) => row._id}
                    onPageChange={(newPage) => setPage(newPage)}
                    loading={loading}
                />
            )}
            <DeletePopup
                deleteUserById={deleteProduct}
                open={open}
                setOpen={setOpen}
                currentUserId={currentProductId}
            />
        </PortalLayout>
    )
}

export default ProductList
