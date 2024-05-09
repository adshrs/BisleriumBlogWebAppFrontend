import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";

export interface GetTopBloggersProps {
  year: string,
  month: string
}

const token = Cookies.get("Token");

export async function GetTopBloggers(dataToSend: GetTopBloggersProps) {
  const response: Response = await fetch(`${BASE_URL}api/admin/blogs/top-ten-popular-bloggers?year=${dataToSend.year}&month=${dataToSend.month}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in AdminTopBloggersCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
