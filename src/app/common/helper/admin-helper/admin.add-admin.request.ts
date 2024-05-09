import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";

export interface AddAdminProps {
  userName: string;
  password: string;
}

const token = Cookies.get("Token");

export async function AddAdmin(dataToSend: AddAdminProps) {
  const response: Response = await fetch(`${BASE_URL}/api/admin/admin/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in AddAdminCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
