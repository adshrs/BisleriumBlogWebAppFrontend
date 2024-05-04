import { BASE_URL } from "../constant/constant";
import { CustomError } from "../errors/custom.error";
export interface RegisterProps {
  name: string;
  email: string;
  userName: string;
  password: string;
}

export async function RegisterCommon(dataToSend: RegisterProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in LoginCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
