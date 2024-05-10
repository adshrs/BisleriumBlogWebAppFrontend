import { BASE_URL } from "../../constant/constant";
import Cookies from "js-cookie";
import { CustomError } from "../../errors/custom.error";
const token = Cookies.get("Token");

export async function GetBlogCount() {
  const response: Response = await fetch(
    `${BASE_URL}api/admin/blogs/list?page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in AdminTopBloggersCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}

export async function GetTotalVotes() {
  const response: Response = await fetch(
    `${BASE_URL}api/admin/vote/total-votes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in AdminTopBloggersCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}

export async function GetTotalComments() {
    const response: Response = await fetch(
      `${BASE_URL}api/admin/comments/total-comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      const error = await response.json();
      console.log("This is Error in AdminTopBloggersCommon: ", error);
      throw new CustomError(error);
    }
    return await response.json();
  }