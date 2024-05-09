import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";

export interface AddCommentProps {
  blogId: string
  message: string
}


const token = Cookies.get("Token");

export async function AddComment(dataToSend: AddCommentProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/comments/create/${dataToSend.blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataToSend.message),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in CommentCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}

