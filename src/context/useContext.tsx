import { StateInterface } from '@/globalTypes'
import { createContext } from 'react'

export const ctx = createContext<StateInterface | null>(null)
