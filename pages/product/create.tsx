import React from 'react'
import PortalLayout from '../../src/components/layout/PortalLayout'
import { Form, Formik, FormikHelpers } from 'formik'
import { useCheckAuth } from '../../src/utils/useCheckAuth'
import {
    CreateProductInput,
    FieldError,
    useCreateProductMutation,
    useRegisterMutation,
} from '../../src/generated/graphql'
import { useRouter } from 'next/router'
import { mapFieldErrors } from '../../src/helper/mapFieldErrors'
import { useToast, Button } from '@chakra-ui/react'
import InputField from '../../src/components/customComponent/InputField'
import * as Yup from 'yup'
import { initializeApollo } from '../../src/lib/apolloClient'
import { Container } from '@material-ui/core'

const initialValues: CreateProductInput = {
    title: '',
    desc: '',
    img: '',
    price: '',
}

const CreateProduct = () => {
    const [createProduct, { data, error, loading: createProductLoading }] =
        useCreateProductMutation()

    // const { data: authData, loading: authLoading } = useCheckAuth()

    var router = useRouter()
    const toast = useToast()

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required field.'),
        desc: Yup.string().required('Required field.'),
        img: Yup.string().required('Required field.'),
        price: Yup.string().required('Required field.'),
    })

    const onRegisterSubmit = async (
        values: CreateProductInput,
        { setErrors }: FormikHelpers<CreateProductInput>
    ) => {
        const response = await createProduct({
            variables: {
                createProductInput: values,
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

export default CreateProduct
