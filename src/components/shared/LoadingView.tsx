import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingView = () => {
    return (
        <Flex justifyContent='center' alignItems='center' minH='100vh'>
            <Spinner></Spinner>
        </Flex>
    )
}

export default LoadingView
