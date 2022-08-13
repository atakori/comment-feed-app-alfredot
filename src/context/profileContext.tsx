import React, { useContext } from 'react'

const ProfileContext = React.createContext('Nickmercs');

export function useProfile() {
    return useContext(ProfileContext);
}