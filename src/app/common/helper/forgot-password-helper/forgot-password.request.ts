import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";

export interface ForgotPasswordProps {
  email: string;
}

export async function ForgotPassword(dataToSend: ForgotPasswordProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/user/forget-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in ForgotPasswordCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
