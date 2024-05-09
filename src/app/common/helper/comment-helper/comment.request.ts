import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";


export interface CommentBodyProps {
  message: string
}

export interface CommentPathIdProps {
  blogId: string
}

const token = Cookies.get("Token");

export async function AddComment(pathdataToSend: CommentPathIdProps, bodyDataToSend: CommentBodyProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/comments/create/${pathdataToSend.blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyDataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in CommentCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}

