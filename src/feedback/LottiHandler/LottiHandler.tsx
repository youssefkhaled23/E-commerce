import Lottie from "lottie-react";
import notFound from "@assets/LottieFiles/notFound.json";
import empty from "@assets/LottieFiles/empty.json";
import Error from "@assets/LottieFiles/error.json";
import Loading from "@assets/LottieFiles/loading.json";
import success from "@assets/LottieFiles/success.json";

const LottiHandlerTypes = {
  notFound,
  Loading,
  Error,
  empty,
  success,
};

type LottiHandlerProps = {
  type: keyof typeof LottiHandlerTypes;
  message?: string;
};

export const LottiHandler = ({ type, message }: LottiHandlerProps) => {
  const lotti = LottiHandlerTypes[type];
  const messageStyle =
    type === "Error"
      ? { fontSize: "19px", color: "Red" }
      : { fontSize: "19px", marginTop: "30px" };
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <Lottie animationData={lotti} style={{ width: "400px" }}></Lottie>
        {message && <h1 style={messageStyle}>{message}</h1>}
      </div>
    </div>
  );
};
