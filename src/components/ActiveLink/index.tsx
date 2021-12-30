import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export default function ActiveLink({ shouldMatchExactHref, children, ...rest }: ActiveLinkProps) {

    const { asPath } = useRouter()

    let isActive = false

    if (shouldMatchExactHref && (asPath == rest.href || asPath === rest.as)) {
        isActive = true
    }



    if (
        !shouldMatchExactHref &&
        (asPath.startsWith(rest.href.toString()) ||
            asPath.startsWith(rest.as?.toString()))
    ) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'black' : 'black'
            })}
        </Link>
    )
}