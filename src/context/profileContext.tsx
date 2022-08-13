import React, { useContext } from 'react';
import {USERNAME, PROFILEPHOTOURL }from '../constants';
import { IUserProfile } from '../types';

export const ProfileContext = React.createContext<IUserProfile | null>(null);

export function useProfile() {
    return useContext(ProfileContext);
}

export function ProfileProvider({children}: any) {
    return (
        <ProfileContext.Provider value={{username: USERNAME, photoUrl: PROFILEPHOTOURL}}>
            {children}
        </ProfileContext.Provider>
    )
}