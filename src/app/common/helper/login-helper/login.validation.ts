import { isEmptyOrWhitespaceOrNullOrUndefined } from "../../utils/string.methods";

export interface ReturnProps {
    forUserName: string | null;
    forEmail: string | null;
    forPassword: string | null;
    isEmpty: boolean | null;
  }
  
  export function validateForm(
    userName: string | null | undefined,
    email: string | null | undefined,
    password: string | null | undefined
  ): ReturnProps {
    let returnObject: ReturnProps = {
      forUserName: null,
      forEmail: null,
      forPassword: null,
      isEmpty: false,
    };
  
    if (isEmptyOrWhitespaceOrNullOrUndefined(userName) && isEmptyOrWhitespaceOrNullOrUndefined(email)) {
      returnObject.forUserName = "Username or Email required";
      returnObject.forEmail = "Username or Email required";
      returnObject.isEmpty = true;
    }
    if (!password) {
      returnObject.forPassword = "Password required";
      returnObject.isEmpty = true;
    }
    return returnObject;
  }