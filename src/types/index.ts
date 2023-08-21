export interface IconProps {
    fill?: string;
}

export interface actionProps {
    type: 'GET_DATA_CARROUSEL' | 'GET_ALL_CAREERS' | 'GET_ALL_CHALLENGES' | 'SEARCH_CHALLENGES' | 'SEARCH_CHALLENGES_CAREER' | 'GET_CAREER_BY_ID' | 'GET_INSTRUCTOR_BY_ID' | 'GET_ALL_INSTRUCTORS' | 'SELECT_CAREER' | 'SEARCH_WORDS'
    payload: any
}

export interface GetDispatchAction {
    type: string;
    payload: any;
}

export interface CareersProps {
    idCareer : number
    name: string
    active: Boolean
}

export interface ChallengesProps {
    idChallenge: number
    name: string
    description: string
    urlImagen: string
    challengeDate: Date
    startDate?: Date
    finishDate?: Date
    idCareer: number
    nameCareer?: string
    instructor: InstructorsProps
    idLeadInstructor: number
    idSupportInstructors?: number[]
    active?: Boolean
}

export interface InstructorsProps {
    idInstructor : number
    name: string
    urlImagen: string
    description: string
    active: Boolean
}
export interface ChallengeCardsProps {
    tabsChallenge : number
}