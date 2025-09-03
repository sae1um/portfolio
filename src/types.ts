export interface School{
    key: number, 
    name: string,
    degree: string,
    field: string,
    duration: string, 
    location: string,
    description: string,
    achievements: Record<string, any>[], 
    achievementLink?: string[],
    coursework: string[],
    projects: Record<string, any>[],
    logo: string,
    website: string,
    colour: string,
    current: boolean
}
