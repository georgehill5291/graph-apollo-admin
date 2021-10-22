import React from 'react'
import { useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react'

interface IProps {
    form?: any
    setFileToUpload: any

    name: string
    label: string
    placeholder: string
    type: string
}

const SelectFileUpload = ({ ...props }: IProps) => {
    const [field, { error }] = useField(props)

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <input
                id={field.name}
                name={field.name}
                type={props.type}
                // value={value}
                onChange={(event: any) => {
                    const file = event.target.files[0] as File
                    console.log(file)
                    props.setFileToUpload(file)
                }}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
}

export default SelectFileUpload
