import React, { useState } from 'react'
import PortalLayout from '../../../src/components/layout/PortalLayout'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/router'
import { useToast, Button, Alert, AlertIcon, AlertTitle, Heading, Image } from '@chakra-ui/react'
import * as Yup from 'yup'
import { Container } from '@material-ui/core'
import InputField from '../../../src/components/customComponent/InputField'
import { UpdateProductInput, useUpdateProductMutation } from '../../../src/generated/graphql'
import { initializeApollo } from '../../../src/lib/apolloClient'
import { useProductQuery } from './../../../src/generated/graphql'
import NextLink from 'next/link'
import { useCheckAuth } from '../../../src/utils/useCheckAuth'
import SelectFileUpload from '../../../src/components/customComponent/SelectFileUpload'
import SelectDropdownField from '../../../src/components/customComponent/SelectDropdownField'
import {
    categoryClassification,
    colorClassification,
    sizeClassification,
} from '../../../src/utils/constant'

const EditUser = () => {
    var router = useRouter()
    const toast = useToast()

    const [fileToUpload, setFileToUpload] = useState<File>()
    const { data: authData, loading: authLoading } = useCheckAuth()
    const [updateProduct, { data, error, loading: updateProductLoading }] =
        useUpdateProductMutation()

    const { data: currentProductData, loading: currentProductLoading } = useProductQuery({
        variables: {
            id: router.query.id as string,
        },
    })

    if (!currentProductData?.product)
        return (
            <PortalLayout>
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Post not found</AlertTitle>
                </Alert>
                <NextLink href='/'>
                    <Button mt={2}>Back to homepage</Button>
                </NextLink>
            </PortalLayout>
        )

    const initialValues = {
        title: currentProductData?.product?.title,
        desc: currentProductData?.product?.desc,
        img: currentProductData?.product?.img,
        price: currentProductData?.product?.price,
        size: currentProductData?.product?.size,
        color: currentProductData?.product?.color,
        categories: currentProductData?.product?.categories,
    } as UpdateProductInput

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required field.'),
        desc: Yup.string().required('Required field.'),
        img: Yup.string().required('Required field.'),
        price: Yup.string().required('Required field.'),
    })

    const onRegisterSubmit = async (values: Omit<UpdateProductInput, 'id'>) => {
        const response = await updateProduct({
            variables: {
                updateProductInput: {
                    ...values,
                    id: router.query.id as string,
                    size: (values.size as any).map((t: { value: any }) => t),
                    color: (values.color as any).map((t: { value: any }) => t),
                    categories: (values.categories as any).map((t: { value: any }) => t),
                },
                productImage: fileToUpload,
            },
        })

        // console.log(response);
        toast({
            title: `Successfully`,
            description: `Created ${response?.data?.updateProduct?.message}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })

        const apolloClient = initializeApollo()
        apolloClient.resetStore()

        router.push('/product-list')
    }

    return (
        <PortalLayout>
            <Container>
                <Heading>Edit Product</Heading>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onRegisterSubmit}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            <InputField
                                name='title'
                                placeholder='Title'
                                label='Title'
                                type='text'
                            />
                            <InputField
                                name='desc'
                                placeholder='Description'
                                label='Description'
                                type='text'
                            />
                            <InputField name='img' placeholder='Image' label='Image' type='text' />
                            <InputField
                                name='price'
                                placeholder='Price'
                                label='Price'
                                type='text'
                            />
                            <SelectFileUpload
                                name='productImage'
                                placeholder='Product Image'
                                label='Product Image'
                                type='file'
                                setFileToUpload={setFileToUpload}
                            />
                            <Image
                                src={currentProductData.product?.img}
                                width='10vw'
                                border='1px solid black'
                                mt='2'
                                alt='product image
                                '
                            />
                            <SelectDropdownField
                                name='size'
                                placeholder='Size'
                                label='Size'
                                options={sizeClassification}
                                form={props}
                            />

                            <SelectDropdownField
                                name='color'
                                placeholder='Color'
                                label='Color'
                                options={colorClassification}
                                form={props}
                            />

                            <SelectDropdownField
                                name='categories'
                                placeholder='Catetories'
                                label='Catetories'
                                options={categoryClassification}
                                form={props}
                            />

                            <NextLink href='/product-list'>
                                <Button colorScheme='teal' mr={4} mt={4}>
                                    Cancel
                                </Button>
                            </NextLink>
                            <Button
                                type='submit'
                                colorScheme='teal'
                                mt={4}
                                isLoading={props.isSubmitting}
                            >
                                Save
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </PortalLayout>
    )
}

export default EditUser
