import React from 'react'
import PortalLayout from '../../src/components/layout/PortalLayout'
import { Form, Formik, FormikHelpers } from 'formik'
import { useCheckAuth } from '../../src/utils/useCheckAuth'
import { FieldError, RegisterInput, useRegisterMutation } from '../../src/generated/graphql'
import { useRouter } from 'next/router'
import { mapFieldErrors } from '../../src/helper/mapFieldErrors'
import { useToast, Button } from '@chakra-ui/react'
import InputField from '../../src/components/customComponent/InputField'
import * as Yup from 'yup'
import { initializeApollo } from '../../src/lib/apolloClient'

const initialValues: RegisterInput = {
    email: '',
    username: '',
    password: '',
}

const CreateUser = () => {
    const [registerUser, { data, error, loading: _registerUserLoading }] = useRegisterMutation()

    const { data: authData, loading: authLoading } = useCheckAuth()

    var router = useRouter()
    const toast = useToast()

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required field.'),
        email: Yup.string().required('Required field.'),
        password: Yup.string().min(6, 'Required field.'),
    })

    const onRegisterSubmit = async (
        values: RegisterInput,
        { setErrors }: FormikHelpers<RegisterInput>
    ) => {
        const response = await registerUser({
            variables: {
                registerInput: values,
            },
        })

        // console.log(response);
        console.log(response.data?.register?.error)
        if (response.data?.register?.error) {
            setErrors(mapFieldErrors(response.data.register.error as FieldError[]))
        } else if (response.data?.register?.user) {
            toast({
                title: `Successfully`,
                description: `Created ${response.data.register.user?.username}`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            const apolloClient = initializeApollo()
            apolloClient.resetStore()

            router.push('/user-list')
        }
    }

    return (
        <PortalLayout>
            <Formik
                initialValues={initialValues}
                onSubmit={onRegisterSubmit}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            name='username'
                            placeholder='Username'
                            label='Username'
                            type='text'
                        />
                        <InputField name='email' placeholder='Email' label='Email' type='text' />
                        <InputField
                            name='password'
                            placeholder='Password'
                            label='Password'
                            type='password'
                        />
                        <Button type='submit' colorScheme='teal' mt={4} isLoading={isSubmitting}>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </PortalLayout>
    )
}

export default CreateUser
