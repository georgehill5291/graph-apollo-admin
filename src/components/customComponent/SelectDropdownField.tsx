import React from 'react'
import { useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { default as Select } from 'react-select'
import { Classification } from '../../utils/types'

interface IProps {
    form?: any

    name: string
    label: string
    placeholder: string
    options: Classification[]
}

const defaultProps: IProps = {
    name: '',
    label: '',
    placeholder: '',
    options: [],
}

const SelectDropdownField = (props: IProps) => {
    const [field, { error }] = useField(props)
    // const currentValue = field.value.map((t: any) => ({ label: t, value: t }))
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Select
                value={props.options.filter((t) => field.value.some((z: any) => z === t.value))}
                classNamePrefix='filter'
                options={props.options}
                isMulti={true}
                onChange={(selectedOption) => {
                    props.form.setFieldValue(
                        field.name,
                        selectedOption.map((t) => t.value)
                    )
                }}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
}

// SelectDropdownField.defaultProps = defaultProps

export default SelectDropdownField
