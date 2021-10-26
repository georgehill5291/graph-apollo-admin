import { Button } from '@chakra-ui/button'
import { AccountCircleOutlined, Language, NotificationsNone, Settings } from '@material-ui/icons'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { MeDocument, MeQuery, useLogoutMutation, useMeQuery } from '../../../generated/graphql'
import { addApolloState, initializeApollo } from '../../../lib/apolloClient'

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: 160px; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    left: -100px;
`

const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;

    :hover ${DropdownContent} {
        display: block;
    }
`
const DropdownButton = styled.div`
    background-color: #4caf50;
    color: white;
    padding: 5px;
    font-size: 16px;
    border: none;
    cursor: pointer;

    :hover {
        background-color: #3e8e41;
    }
`

const DowndownItem = styled.div`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
`

const TopBar = () => {
    const router = useRouter()
    const { data: meData, loading: meLoading } = useMeQuery()
    const [logout, { loading: useLogoutMutationLoading }] = useLogoutMutation()

    const logoutUser = async () => {
        await logout({
            update(cache, { data }) {
                if (data?.logout) {
                    cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: { me: null },
                    })
                }
            },
        })

        const apolloClient = initializeApollo()
        apolloClient.resetStore()
    }

    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>GAdmin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBag'>2</span>
                    </div>

                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    {meData?.me && (
                        <DropdownWrapper>
                            <DropdownButton>
                                <AccountCircleOutlined />
                            </DropdownButton>
                            <DropdownContent>
                                <DowndownItem>
                                    <Button onClick={() => router.push('/my-profile')}>
                                        My profile
                                    </Button>
                                </DowndownItem>
                                <DowndownItem>
                                    <Button
                                        onClick={logoutUser}
                                        isLoading={useLogoutMutationLoading}
                                    >
                                        Logout
                                    </Button>
                                </DowndownItem>
                            </DropdownContent>
                        </DropdownWrapper>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopBar
