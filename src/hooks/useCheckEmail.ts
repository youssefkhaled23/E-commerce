import { useState } from "react";
import axios from "axios";

type TStatus = "idle" | "Checking" | "Available" | "NotAvailable" | "Faild ";

const useCheckEmail = () => {
  const [emailAvailble, setemailAvailble] = useState<TStatus>("idle");
  const [enterdEmail, setenterdEmail] = useState<string | null>(null);

  const checkEmailAvalible = async (email: string) => {
    setenterdEmail(email);
    setemailAvailble("Checking");
    try {
      const response = await axios.get(`/users?email=${email}`);
      if (!response.data.length) {
        setemailAvailble("Available");
      } else {
        setemailAvailble("NotAvailable");
      }
    } catch (error) {
      setemailAvailble("Faild ");
    }
  };
  const resetCheckEmail = () => {
    setemailAvailble("idle");
    setenterdEmail(null);
  };
  return {
    emailAvailble,
    enterdEmail,
    checkEmailAvalible,
    resetCheckEmail,
  };
};

export default useCheckEmail;
