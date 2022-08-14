export interface IUserPost {
    message: string;
    username: string;
    datePosted: Date;
}
export interface IUserProfile {
    username: string;
    photoUrl: string;
}

export type PostsContextType = {
    posts: IComment[];
    savePost: (post: IComment) => void;
}

export interface IComment {
    id: string;
    parentId: string | null;
    message: string;
    username: string;
    dateCreated: Date;
}