import {Technology} from "~/types/technology";

export interface Project {
    Name: string,
    Dates: string,
    Description: string,
    ImagePath: string,
    Technologies: Technology[]
}