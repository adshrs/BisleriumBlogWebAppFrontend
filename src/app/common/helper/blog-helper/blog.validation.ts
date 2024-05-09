import { isEmptyOrWhitespaceOrNullOrUndefined } from "../../utils/string.methods";

export interface ReturnProps {
    forTitle: string | null;
    forContent: string | null;
    forImgUrl: string | null;
    isEmpty: boolean | null;
  }
  
  export function validateForm(
    title: string | null | undefined,
    content: string | null | undefined,
    imgUrl: string | null | undefined
  ): ReturnProps {
    let returnObject: ReturnProps = {
      forTitle: null,
      forContent: null,
      forImgUrl: null,
      isEmpty: false,
    };
  
    if (isEmptyOrWhitespaceOrNullOrUndefined(title)) {
      returnObject.forTitle = "Title cannot be empty";
      returnObject.isEmpty = true;
    }
    if (isEmptyOrWhitespaceOrNullOrUndefined(content)) {
      returnObject.forContent = "Content cannot be empty";
      returnObject.isEmpty = true;
    }
    if (isEmptyOrWhitespaceOrNullOrUndefined(imgUrl)) {
      returnObject.forImgUrl = "A cover photo is required";
      returnObject.isEmpty = true;
    }
    return returnObject;
  }