import React from 'react'
import PortalLayout from '../../../src/components/layout/PortalLayout'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/router'
import { useToast, Button, Alert, AlertIcon, AlertTitle, Heading } from '@chakra-ui/react'
import * as Yup from 'yup'
import { Container } from '@material-ui/core'
import InputField from '../../../src/components/customComponent/InputField'
import { UpdateProductInput, useUpdateProductMutation } from '../../../src/generated/graphql'
import { initializeApollo } from '../../../src/lib/apolloClient'
import { useProductQuery } from './../../../src/generated/graphql'
import NextLink from 'next/link'
import { useCheckAuth } from '../../../src/utils/useCheckAuth'

const EditUser = () => {
    var router = useRouter()
    const toast = useToast()

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
    }

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
                },
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
                    {({ isSubmitting }) => (
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
                            <NextLink href='/product-list'>
                                <Button colorScheme='teal' mr={4} mt={4}>
                                    Cancel
                                </Button>
                            </NextLink>
                            <Button
                                type='submit'
                                colorScheme='teal'
                                mt={4}
                                isLoading={isSubmitting}
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
