import React, { ReactNode, useState } from "react";
import { Box, Flex, VStack, Text } from '@chakra-ui/react'

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Menu } from '../Menu'
import { UserCard } from '../UserCard'
import { useSession, signIn } from 'next-auth/client'
import { PrimaryButton } from "../PrimaryButton";
import Modal from 'react-modal'
import styles from '../../styles/modalStyles.module.scss'


type LayoutProps = {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {

    const [session] = useSession()

    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)

    function openLoginModal(){
        setLoginModalIsOpen(true)
    }

    function closeLoginModal(){
        setLoginModalIsOpen(false)
    }

    return (
        <VStack
            display="flex"
            justifyContent='flex-start'
            alignItems='flex-start'
        >
            <Header />
            <Flex>
                <Menu>
                    {
                        session ?
                            <UserCard
                                name={session.user.name}
                                avatarUrl={session.user.image}
                            />
                            :

                            <Box
                                display="flex"
                                margin='2rem 2rem 0'
                            >
                                <PrimaryButton
                                    label="Fazer login"
                                    action={() => openLoginModal()}
                                    type="button"
                                />
                            </Box>
                    }
                </Menu>
                {children}
            </Flex>
            <Modal
                isOpen={loginModalIsOpen}
                onRequestClose={closeLoginModal}
                className={styles.activemodal}
                overlayClassName={styles.reactModalOverlay}
            >
                <strong>Login</strong>
                <Text>Escolha uma conta para fazer login</Text>
                <button onClick={() => signIn('google')}>Google</button>
                <button onClick={() => signIn('facebook')}>Facebook</button>
                <button onClick={closeLoginModal}>Fechar</button>
            </Modal>
            <Footer />
        </VStack>
    )
}
