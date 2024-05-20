import { Navigate } from "react-router-dom"
import { useAppSelector } from "@store/hooks"
import React from "react"
export const AuthProtectPage = ({children } : {children : React.ReactNode}) => {
    const { accessToken } = useAppSelector((state) => state.auth )
    if(!accessToken) {
        return <Navigate to={"/login?message=login-required"} />
    }
  return (
    <>{children}</>
  )
}

export default AuthProtectPage