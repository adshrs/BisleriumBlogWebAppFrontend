import { isEmptyOrWhitespaceOrNullOrUndefined } from "../../utils/string.methods";

export interface ReturnProps {
    forName: string | null;
    forUserName: string | null;
    forEmail: string | null;
    forPassword: string | null;
    isEmpty: boolean | null;
  }
  
  export function validateForm(
    name: string | null | undefined,
    userName: string | null | undefined,
    email: string | null | undefined,
    password: string | null
  ): ReturnProps {
    let returnObject: ReturnProps = {
      forName: null,
      forUserName: null,
      forEmail: null,
      forPassword: null,
      isEmpty: false,
    };
  
    if (isEmptyOrWhitespaceOrNullOrUndefined(name)) {
      returnObject.forName = "Name required";
      returnObject.isEmpty = true;
    }
    if (isEmptyOrWhitespaceOrNullOrUndefined(userName)) {
      returnObject.forUserName = "Username required";
      returnObject.isEmpty = true;
    }
    if (isEmptyOrWhitespaceOrNullOrUndefined(email)) {
      returnObject.forEmail = "Email required";
      returnObject.isEmpty = true;
    }
    if (!password) {
      returnObject.forPassword = "Password required";
      returnObject.isEmpty = true;
    }
    return returnObject;
  }