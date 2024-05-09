import { isEmptyOrWhitespaceOrNullOrUndefined } from "../../utils/string.methods";

export interface ReturnProps {
    forMessage: string | null;
    isEmpty: boolean | null;
  }
  
  export function validateForm(
    message: string | null | undefined,
  ): ReturnProps {
    let returnObject: ReturnProps = {
      forMessage: null,
      isEmpty: false,
    };
  
    if (isEmptyOrWhitespaceOrNullOrUndefined(message)) {
      returnObject.forMessage = "Comment cannot be empty";
      returnObject.isEmpty = true;
    }
    return returnObject;
  }