import Heading from "@componets/common/heading/Heading"
import { useAppSelector } from "@store/hooks"

export const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.user)
  return (
    <>
    <Heading title="Account Info"/>
    <ul>
      <li>FirstName : {accountInfo?.firstName}</li>
      <li>LastName : {accountInfo?.lastName}</li>
      <li>Email: {accountInfo?.email}</li>
    </ul>
    </>
  )
}

export default Account