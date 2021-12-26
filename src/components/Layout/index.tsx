import { signIn, useSession } from "next-auth/client";
import React, { ReactNode, useState } from "react";
import Modal from "react-modal";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import styles from "../../styles/buyCoinModalStyles.module.scss";
import { FacebookSignInButton } from "../FacebookSignInButton";
import { Footer } from "../Footer";
import { GoogleSignInButton } from "../GoogleSignButton";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { UserCard } from "../UserCard";

type LayoutProps = {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {

    const [session] = useSession()

    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)

    function openLoginModal() {
        setLoginModalIsOpen(true)
    }

    function closeLoginModal() {
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
                <GoogleSignInButton
                    action={() => signIn('google')}
                />
                <FacebookSignInButton
                    action={() => signIn('facebook')}
                />
                <SecondaryButton
                    action={() => closeLoginModal()}
                    label="Cancelar"
                />
            </Modal>
            <Footer />
        </VStack>
    )
}
