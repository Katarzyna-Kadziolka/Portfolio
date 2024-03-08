import {Technology} from "~/types/technology";

export interface Certificate {
    Name: string,
    Date: string,
    Organization: string,
    Description: string,
    ImagePath: string,
    Certificate: string | undefined
}