import { IComment } from './types';
import { v4 as uuidv4 } from 'uuid';

export function transformPostMessage (message: string, username: string): IComment {
    const currentTimestamp = new Date();
    const id = uuidv4()

    return {
        id,
        parentId: null,
        message,
        username,
        dateCreated: currentTimestamp,
    }
}