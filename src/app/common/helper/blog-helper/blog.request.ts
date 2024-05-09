import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";

export interface CreateBlogProps {
  title: string | null;
  content: string | null;
  imgUrl: string | null;
}

export interface getBlogProps {
  page: string;
  shortBy: number | null;
}

const token = Cookies.get("Token");

export async function CreateBlog(dataToSend: CreateBlogProps) {
  

  const response: Response = await fetch(`${BASE_URL}api/user/blogs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in BlogCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}

export async function getBlogs(dataToSend: getBlogProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/blogs/list?page=${dataToSend.page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in BlogCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
