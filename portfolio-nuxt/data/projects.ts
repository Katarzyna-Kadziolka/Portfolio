import {Project} from "~/types/project";
import {Technology} from "~/types/technology";
import doskvolToolsMini from "~/assets/images/doskvolToolsMini.png";
import manageMeMini from "~/assets/images/manageMeMini.png";
import doskvolTools from "~/assets/images/doskvolTools.png";
import manageMe from "~/assets/images/manageMe.png";
export const projects : Project[] = [
    {
        Name: "Doscvol Tools",
        Dates: "09.2023-09.2023",
        ShortDescription: "Content generator for RPG game Blades In The Dark",
        Description: "I have written a web application to facilitate the use of the tables in the Blades in the Dark game manual. The game master can quickly generate the result, correct any mismatched elements and copy the result to the notes.",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: [Technology.Vue, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.WebStorm]
    },
    {
        Name: "ManageMe",
        Dates: "06.2023-06.2023",
        ShortDescription: "Web application to manage projects, features and tasks",
        Description: "My first contact with Angular! As part of a class at university, I created a web application for project management. It provides full CRUD features and tasks.",
        ImagePath: manageMe,
        MiniImagePath:manageMeMini,
        Technologies: [Technology.Angular, Technology.TypeScript, Technology.Html, Technology.Html, Technology.Scss, Technology.Git, Technology.VisualStudioCode]
    }
]