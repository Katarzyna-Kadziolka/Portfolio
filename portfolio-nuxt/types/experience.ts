import {Technology} from "~/types/technology";

export interface Experience {
    Position: string,
    CompanyName: string,
    CompanySector: string,
    Dates: string,
    Description: string,
    Technologies: Technology[],
    Image: string
}