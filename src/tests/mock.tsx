import { IComment, IUserProfile, PostsContextType } from "../types";


const mockComments: IComment[] = [
    {
        id: '1',
        parentId: null,
        message: '1st post',
        username: 'user1',
        dateCreated: new Date(),
        likes: [''],
    },
    {
        id: '2',
        parentId: null,
        message: '2nd post',
        username: 'user2',
        dateCreated: new Date(),
        likes: [],
    },
    {
        id: '3',
        parentId: "1",
        message: 'Comment of 1st Message',
        username: 'user2',
        dateCreated: new Date(),
        likes: [],
    },
    {
        id: '4',
        parentId: "2",
        message: 'Comment of 2st Message',
        username: 'user1',
        dateCreated: new Date(),
        likes: [],
    },
    {
        id: '5',
        parentId: "1",
        message: 'Another Comment of 1st Message',
        username: 'user5',
        dateCreated: new Date(),
        likes: [],
    },
];

export const mockProfileContext: IUserProfile = {
    profileUsername: 'testProfile',
    photoUrl: 'wwww.testurl.com',
};

export const mockUsePostsContext: PostsContextType = {
    posts: [],
    savePost: jest.fn(),
    updateLikes: jest.fn(),
};

export const mockUsePostsContextSeveralPosts: PostsContextType = {
    posts: mockComments,
    savePost: jest.fn(),
    updateLikes: jest.fn(),
};

