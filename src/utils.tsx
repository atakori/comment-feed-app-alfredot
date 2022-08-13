export interface PostPayload {
    message: string;
    username: string;
    datePosted: Date;
  }

export function transformPostMessage (message: string, username: string): PostPayload {
    const currentTimestamp = new Date();

    return {
        message,
        username,
        datePosted: currentTimestamp
    }
}