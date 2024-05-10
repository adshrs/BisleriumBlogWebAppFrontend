import { isEmptyOrWhitespaceOrNullOrUndefined } from "../../utils/string.methods";

export interface ReturnProps {
    forEmail: string | null;
    isEmpty: Boolean
  }
  
  export function validateForm(
    email: string | null | undefined,
  ): ReturnProps {
    let returnObject: ReturnProps = {
      forEmail: null,
      isEmpty: false,
    };
  
    if (isEmptyOrWhitespaceOrNullOrUndefined(email)) {
      returnObject.forEmail = "Email required";
      returnObject.isEmpty = true;
    }
    return returnObject;
  }