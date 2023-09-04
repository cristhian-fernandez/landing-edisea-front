export interface IconProps {
    fill?: string;
}

export interface actionProps {
    type: 'GET_DATA_CARROUSEL' | 'GET_ALL_CAREERS' | 'GET_ALL_CHALLENGES' | 'SEARCH_CHALLENGES' | 'SEARCH_CHALLENGES_CAREER' | 'GET_CAREER_BY_ID' | 'GET_INSTRUCTOR_BY_ID' | 'GET_ALL_INSTRUCTORS' | 'SELECT_CAREER' | 'SEARCH_WORDS' | 'ADD_TO_CART' | 'REMOVE_TO_CART' | 'CLEAR_CART'
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
    instructor?: InstructorsProps
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
export interface PayChallengeCardsProps {
    careers : CareersProps[]
    selectCareer : number
}
export interface FormFields {
    [key: string]: string;
}  
export interface UseFormOptions {
    initialValues?: FormFields;
    onSubmit: (data: FormFields) => Promise<void>;
    validate?: (values: FormFields) => FormFields;
}
export interface FormProps {
    formValues: FormFields;
    handleInputChange: any;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: FormFields;
    title?: string
}
export interface TabPaymentProps {
    handleNext: () => void;
}
export interface ModalProps {
    onClose: () => void;
}
