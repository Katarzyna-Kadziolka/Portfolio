import {Project} from "~/types/project";
import {Technology} from "~/types/technology";
import doskvolToolsMini from "~/assets/images/doskvolToolsMini.png";
import manageMeMini from "~/assets/images/manageMeMini.png";
import doskvolTools from "~/assets/images/doskvolTools.png";
import manageMe from "~/assets/images/manageMe.png";
import fantasyOdyssey from "~/assets/images/fantasyOdyssey.png";
import fantasyOdysseyMini from "~/assets/images/fantasyOdysseyMini.png";

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
        Name: "Manage Me",
        Dates: "06.2023-06.2023",
        ShortDescription: "Web application to manage projects, features and tasks",
        Description: "My first contact with Angular! As part of a class at university, I created a web application for project management. It provides full CRUD features and tasks.",
        ImagePath: manageMe,
        MiniImagePath:manageMeMini,
        Technologies: [Technology.Angular, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.VisualStudioCode]
    },
    {
        Name: "Fantasy Odyssey",
        Dates: "04.2023-04.2023",
        ShortDescription: "Mobile app integrated with Google Fit introducing gamification elements into daily walks",
        Description: "A mobile app that allows the user to accompany Frodo on his journey to Mount Doom and back. Based on the distance travelled, it informs the user of events along the trail that took place in the novel.",
        ImagePath: fantasyOdyssey,
        MiniImagePath: fantasyOdysseyMini,
        Technologies: [Technology.Dart, Technology.Flutter, Technology.GoogleFit, Technology.Firebase, Technology.GoogleCloud, Technology.Git, Technology.AndroidStudio]
    },
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
        Name: "Manage Me",
        Dates: "06.2023-06.2023",
        ShortDescription: "Web application to manage projects, features and tasks",
        Description: "My first contact with Angular! As part of a class at university, I created a web application for project management. It provides full CRUD features and tasks.",
        ImagePath: manageMe,
        MiniImagePath:manageMeMini,
        Technologies: [Technology.Angular, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.VisualStudioCode]
    },
    {
        Name: "Fantasy Odyssey",
        Dates: "04.2023-04.2023",
        ShortDescription: "Mobile app integrated with Google Fit introducing gamification elements into daily walks",
        Description: "A mobile app that allows the user to accompany Frodo on his journey to Mount Doom and back. Based on the distance travelled, it informs the user of events along the trail that took place in the novel.",
        ImagePath: fantasyOdyssey,
        MiniImagePath: fantasyOdysseyMini,
        Technologies: [Technology.Dart, Technology.Flutter, Technology.GoogleFit, Technology.Firebase, Technology.GoogleCloud, Technology.Git, Technology.AndroidStudio]
    }
]