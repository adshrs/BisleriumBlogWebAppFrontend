import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";

export interface GetTopBlogsProps {
  year: string,
  month: string
}

const token = Cookies.get("Token");

export async function GetTopBlogs(dataToSend: GetTopBlogsProps) {
  const response: Response = await fetch(`${BASE_URL}api/admin/blogs/top-ten-popular?year=${dataToSend.year}&month=${dataToSend.month}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in AdminTopBlogsCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
