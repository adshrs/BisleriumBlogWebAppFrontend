import { BASE_URL } from "../../constant/constant";
import { CustomError } from "../../errors/custom.error";
import Cookies from "js-cookie";

export interface VoteInfoProps {
  blogId: string
}


const token = Cookies.get("Token");

export async function GetVoteInfo(dataToSend: VoteInfoProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/vote/info-blog/${dataToSend.blogId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in VoteCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}


export async function UpVoteBlog(dataToSend: VoteInfoProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/vote/upvote-blog/${dataToSend.blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in VoteCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}

export async function DownVoteBlog(dataToSend: VoteInfoProps) {
  const response: Response = await fetch(`${BASE_URL}api/user/vote/downvote-blog/${dataToSend.blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataToSend),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("This is Error in VoteCommon: ", error);
    throw new CustomError(error);
  }
  return await response.json();
}
