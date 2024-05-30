import { defaultMessages } from "./default-messages";

export class HttpError extends Error {
  constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    public status: keyof typeof defaultMessages | (number & {}),
    message: string = isStandardStatus(status)
      ? defaultMessages[status]
      : "Unknown",
  ) {
    super(message);
  }
}

function isStandardStatus(
  status: number,
): status is keyof typeof defaultMessages {
  return status in defaultMessages;
}
