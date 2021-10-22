import React, { useState } from 'react'
import PortalLayout from '../../src/components/layout/PortalLayout'
import { FastField, Form, Formik, FormikHelpers } from 'formik'
import { useCheckAuth } from '../../src/utils/useCheckAuth'
import {
    CreateProductInput,
    FieldError,
    useCreateProductMutation,
    useRegisterMutation,
} from '../../src/generated/graphql'
import { useRouter } from 'next/router'
import { mapFieldErrors } from '../../src/helper/mapFieldErrors'
import { useToast, Button, Heading } from '@chakra-ui/react'
import InputField from '../../src/components/customComponent/InputField'
import * as Yup from 'yup'
import { initializeApollo } from '../../src/lib/apolloClient'
import { Container } from '@material-ui/core'
import NextLink from 'next/link'
import SelectFileUpload from './../../src/components/customComponent/SelectFileUpload'
import { gql, useMutation } from '@apollo/client'
import SelectDropdownField from '../../src/components/customComponent/SelectDropdownField'
import { Classification } from '../../src/utils/types'
import { default as Select } from 'react-select'
import { FormLabel, FormControl } from '@chakra-ui/react'
import {
    categoryClassification,
    colorClassification,
    sizeClassification,
} from '../../src/utils/constant'

const initialValues: CreateProductInput = {
    title: '',
    desc: '',
    img: '',
    price: '',
    size: [],
    color: [],
    categories: [],
}

const uploadFileMutation = gql`
    mutation CreateProduct($createProductInput: CreateProductInput!, $productImage: Upload!) {
        createProduct(productImage: $productImage) {
            code
            success
            message
            product {
                title
                desc
                img
                price
            }
        }
    }
`

const CreateProduct = () => {
    const { data: authData, loading: authLoading } = useCheckAuth()
    const [fileToUpload, setFileToUpload] = useState<File>()

    const [createProduct, { data, error, loading: createProductLoading }] =
        useCreateProductMutation()

    // const [createProductV2, { loading: createProductLoadingV2 }] = useMutation(uploadFileMutation)

    // const { data: authData, loading: authLoading } = useCheckAuth()

    var router = useRouter()
    const toast = useToast()

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required field.'),
        desc: Yup.string().required('Required field.'),
        img: Yup.string().required('Required field.'),
        price: Yup.string().required('Required field.'),
    })

    const onSubmitCreateProduct = async (
        values: CreateProductInput,
        { setErrors }: FormikHelpers<CreateProductInput>
    ) => {
        console.log('values', values)
        const response = await createProduct({
            variables: {
                createProductInput: {
                    ...values,
                    price: values.price.toString(),
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
            description: `Created ${response?.data?.createProduct?.message}`,
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
                <Heading>Create Product</Heading>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmitCreateProduct}
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
                                type='number'
                            />
                            <SelectFileUpload
                                name='productImage'
                                placeholder='Product Image'
                                label='Product Image'
                                type='file'
                                setFileToUpload={setFileToUpload}
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

                            <div>
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
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </PortalLayout>
    )
}

export default CreateProduct
