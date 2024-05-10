import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";

export interface ResetPasswordProps {
  email: string
}

export interface ResetPasswordEmailProps {
  resetPassword: string;
}

export async function ResetPassword(dataToSend: ResetPasswordProps, dataToSend2: ResetPasswordEmailProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/user/reset-password/${dataToSend.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend2),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in ResetPasswordCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
