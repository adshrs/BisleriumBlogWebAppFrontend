import { isEmptyOrWhitespaceOrNullOrUndefined } from "../../utils/string.methods";

export interface ReturnProps {
    forPassword: string | null;
    isEmpty: Boolean
  }
  
  export function validateForm(
    password: string | null | undefined,
  ): ReturnProps {
    let returnObject: ReturnProps = {
      forPassword: null,
      isEmpty: false,
    };
  
    if (isEmptyOrWhitespaceOrNullOrUndefined(password)) {
      returnObject.forPassword = "Password required";
      returnObject.isEmpty = true;
    }
    return returnObject;
  }