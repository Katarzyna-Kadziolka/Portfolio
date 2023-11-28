import {Technology} from "~/types/technology";

export interface Project {
    Name: string,
    Dates: string,
    ShortDescription: string,
    Description: string,
    MiniImagePath: string,
    ImagePath: string,
    Technologies: Technology[],
    MainTechnologies: Technology[]
}