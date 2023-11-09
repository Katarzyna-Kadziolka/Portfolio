import {Project} from "~/types/project";
import {Technology} from "~/types/technology";
import doskvolToolsMini from "~/assets/images/doskvolToolsMini.png";
import manageMeMini from "~/assets/images/manageMeMini.png";
import doskvolTools from "~/assets/images/doskvolTools.png";
import manageMe from "~/assets/images/manageMe.png";
import fantasyOdyssey from "~/assets/images/fantasyOdyssey.png";
import fantasyOdysseyMini from "~/assets/images/fantasyOdysseyMini.png";
import stabilityClientMini from "~/assets/images/stabilityClientMini.png";
import stabilityClient from "~/assets/images/stabilityClient.png";


export const projects : Project[] = [
    {
        Name: "Doscvol Tools",
        Dates: "09.2023-09.2023",
        ShortDescription: "Content generator for RPG game Blades In The Dark.",
        Description: "I have written a web application to facilitate the use of the tables in the Blades in the Dark game manual. The game master can quickly generate the result, correct any mismatched elements and copy the result to the notes.",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: [Technology.Vue, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.WebStorm]
    },
    {
        Name: "Manage Me",
        Dates: "06.2023-06.2023",
        ShortDescription: "Web application to manage projects, features and tasks.",
        Description: "My first contact with Angular! As part of a class at university, I created a web application for project management. It provides full CRUD features and tasks.",
        ImagePath: manageMe,
        MiniImagePath:manageMeMini,
        Technologies: [Technology.Angular, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.VisualStudioCode]
    },
    {
        Name: "Fantasy Odyssey",
        Dates: "04.2023-04.2023",
        ShortDescription: "Mobile app integrated with Google Fit introducing gamification elements into daily walks.",
        Description: "A mobile app that allows the user to accompany Frodo on his journey to Mount Doom and back. Based on the distance travelled, it informs the user of events along the trail that took place in the novel.",
        ImagePath: fantasyOdyssey,
        MiniImagePath: fantasyOdysseyMini,
        Technologies: [Technology.Dart, Technology.Flutter, Technology.GoogleFit, Technology.Firebase, Technology.GoogleCloud, Technology.Git, Technology.AndroidStudio]
    },
    {
        Name: "StabilityClient.Net",
        Dates: "12.2022 - 02.2023",
        ShortDescription: "gRPC client for StabilitySDK written with .Net 6.",
        Description: "A gRPC client for StabilitySDK equipped with a fluent builder for convenient request construction and an extension method for AsyncServerStreamingCall to effortlessly save images.",
        ImagePath: stabilityClient,
        MiniImagePath:stabilityClientMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Grpc, Technology.StabilityAi, Technology.Git, Technology.Rider]
    },
    {
        Name: "Wild Alert",
        Dates: "11.2022-11.2022",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: [Technology.Vue, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Quasar, Technology.Csharp, Technology.DotNet, Technology.Git, Technology.Rider, Technology.VisualStudioCode]
    },
    {
        Name: "CityWellApp",
        Dates: "06.2022-06.2022",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "CthulhuWizardApp",
        Dates: "02.2022-06.2023",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "WizardWorldDesktop",
        Dates: "12.2021-01.2022",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "WizardWorldApp",
        Dates: "12.2021-01.2022",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Town Bestiary",
        Dates: "12.2021-12.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Raindrop",
        Dates: "11.2021-11.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "WizardWorldAPI",
        Dates: "10.2021-02.2022",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "MediatR.AspNet",
        Dates: "10.2021-11.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Urania",
        Dates: "08.2021-10.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Witcher Tools",
        Dates: "08.2021-08.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Portfolio",
        Dates: "06.2021-06.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Athena",
        Dates: "11.2020-06.2021",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "CatFacts.Net",
        Dates: "11.2020-12.2020",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Time Library",
        Dates: "11.2020-11.2020",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Printy",
        Dates: "11.2020-11.2020",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Chronos",
        Dates: "10.2020-11.2020",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Cerebri",
        Dates: "08.2020-11.2020",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    },
    {
        Name: "Cthulhu Character Wizard",
        Dates: "04.2020-08.2020",
        ShortDescription: "",
        Description: "",
        ImagePath: doskvolTools,
        MiniImagePath:doskvolToolsMini,
        Technologies: []
    }
]