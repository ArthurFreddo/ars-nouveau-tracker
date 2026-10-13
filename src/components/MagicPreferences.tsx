import { createContext, useContext } from 'react'

export const MagicPreferences = createContext(true)
export const useMagicMotion = () => useContext(MagicPreferences)
