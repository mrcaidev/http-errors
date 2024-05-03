import { defaultMessages } from "./default-messages";

export class HttpError extends Error {
  constructor(
    public status: keyof typeof defaultMessages,
    message: string = defaultMessages[status],
  ) {
    super(message);
  }
}
