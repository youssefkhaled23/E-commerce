import { LottiHandler } from "@feedback/LottiHandler/LottiHandler"
import { Suspense } from "react"

export const PageSuspanse = ({children} : {children : React.ReactNode}) => {
  return (
    <Suspense fallback={<LottiHandler type="Loading" message="Loading please wait..." />}>{children}</Suspense>
  )
}
