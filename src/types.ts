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
    posts: IUserPost[];
    savePost: (post: IUserPost) => void;
}