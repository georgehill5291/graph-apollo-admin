import React from "react";
import { useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";

interface IProps {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    textarea?: boolean;
}

const InputField = ({ textarea, ...props }: IProps) => {
    const [field, { error }] = useField(props);

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            {textarea ? (
                <Textarea {...field} id={field.name} {...props} />
            ) : (
                <Input {...field} id={field.name} {...props} />
            )}
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    );
};

export default InputField;
