export interface IUserPost {
    message: string;
    username: string;
    datePosted: Date;
}

export type PostsContextType = {
    posts: IUserPost[];
    savePost: (post: IUserPost) => void;
}