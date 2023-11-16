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
import wildAlertAppMini from "~/assets/images/wildAlertAppMini.png";
import wildAlertApp from "~/assets/images/wildAlertApp.png";
import cityWellApp from "~/assets/images/cityWellApp.png";
import cityWellAppMini from "~/assets/images/cityWellAppMini.png";
import cthulhuWizard from "~/assets/images/cthulhuWizard.png";
import cthulhuWizardMini from "~/assets/images/cthulhuWizardMini.png";
import wizardWorldDesktopMini from "~/assets/images/wizardWorldDesktopMini.png";
import wizardWorldDesktop from "~/assets/images/wizardWorldDesktop.png";
import wizardWorldApp from "~/assets/images/wizardWorldApp.png";
import wizardWorldAppMini from "~/assets/images/wizardWorldAppMini.png";
import townBestiary from "~/assets/images/townBestiary.png";
import townBestiaryMini from "~/assets/images/townBestiaryMini.png";
import rainDrop from "~/assets/images/rainDrop.png";
import rainDropMini from "~/assets/images/rainDropMini.png";
import wizardWorldApi from "~/assets/images/wizardWorldApi.png";
import wizardWorldApiMini from "~/assets/images/wizardWorldApiMini.png";

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
        ShortDescription: "Web application to report and review the presence of wild animals in the city.",
        Description: "Web application to report and review the presence of wild animals in the city, written during HackYeah 2022 with friends. I was responsible for frontend.",
        ImagePath: wildAlertApp,
        MiniImagePath:wildAlertAppMini,
        Technologies: [Technology.Vue, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Quasar, Technology.Csharp, Technology.DotNet, Technology.Git, Technology.Rider, Technology.VisualStudioCode]
    },
    {
        Name: "CityWellApp",
        Dates: "06.2022-06.2022",
        ShortDescription: "A web app, which helps city councils manage water in crisis situations.",
        Description: "A web app, which helps city councils manage water in crisis situations made on second edition of Aquathon. I was responsible for the web application for residents, which performed informational functions and allowed residents to report incidents.",
        ImagePath: cityWellApp,
        MiniImagePath:cityWellAppMini,
        Technologies: [Technology.Vue, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Git, Technology.VisualStudioCode]
    },
    {
        Name: "CthulhuWizardApp",
        Dates: "02.2022-06.2023",
        ShortDescription: "A web application for generating characters in the RPG game Call of Cthulhu.",
        Description: "After two years of intensive study, I decided to return to Cthulhu Wizard Creator. This time it is a much more extensive web project, enriched with many new features. Still in progress :)",
        ImagePath: cthulhuWizard,
        MiniImagePath:cthulhuWizardMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Cqrs, Technology.RavenDb, Technology.NoSql, Technology.Docker, Technology.TypeScript, Technology.Vue, Technology.Html, Technology.Scss, Technology.Quasar, Technology.AtomicDesign, Technology.Heroku, Technology.Git, Technology.Rider, Technology.WebStorm]
    },
    {
        Name: "WizardWorldDesktop",
        Dates: "12.2021-01.2022",
        ShortDescription: "Simple desktop application write in WPF and .Net 6.0 to browse data from WizardWorldApi.",
        Description: "Desktop application and WizardWorldAPI client. Allows selection of data categories, advanced filtering and searching. Written using WPF and .Net 6.0.",
        ImagePath: wizardWorldDesktop,
        MiniImagePath:wizardWorldDesktopMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf, Technology.Mvvm, Technology.Git, Technology.Rider]
    },
    {
        Name: "WizardWorldApp",
        Dates: "12.2021-01.2022",
        ShortDescription: "Simple web application write in Blazor to browse data from WizardWorldApi.",
        Description: "Web application adn WizardWorldAP client. Allows selection of data categories, searching and sending anonymous feedback.Written using Blazor.",
        ImagePath: wizardWorldApp,
        MiniImagePath:wizardWorldAppMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Blazor, Technology.Git, Technology.Rider]
    },
    {
        Name: "Town Bestiary",
        Dates: "12.2021-12.2021",
        ShortDescription: "An educational app to report the presence of wild animals in the city and a symbolic adoption.",
        Description: "An app that helps solve the problem of sharing urban space with wild animals. We want to raise public awareness to make metropolises nature-friendly so that we and the animals can feel at home in them. I was co-responsible for writing the API using ASP.Net Core and C#. Made at SheepYourHack 3.",
        ImagePath: townBestiary,
        MiniImagePath:townBestiaryMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Git, Technology.Rider]
    },
    {
        Name: "Raindrop",
        Dates: "11.2021-11.2021",
        ShortDescription: "A web application designed to help people choose the right tank and get grants.",
        Description: "A web application called Raindrop is used to set up and manage backyard rainwater tanks. Made at Aquathon. I was responsible for creating an educational website designed to help people choose the right tank and get grants.",
        ImagePath: rainDrop,
        MiniImagePath:rainDropMini,
        Technologies: [Technology.Vue, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Git, Technology.VisualStudioCode]
    },
    {
        Name: "WizardWorldAPI",
        Dates: "10.2021-02.2022",
        ShortDescription: "Rest API returning data from the Harry Potter universe, which already has over 1 750 000 connections.",
        Description: "Rest API written using the CQRS template, with unit tests and integration tests. Returns data from the Harry Potter universe and allows anonymous feedback via email.",
        ImagePath: wizardWorldApi,
        MiniImagePath:wizardWorldApiMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Cqrs, Technology.PostgreSql, Technology.Sql, Technology.SendGrid, Technology.Heroku, Technology.Rider]
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
        Name: "HerokuDbConnector",
        Dates: "02.2021-02.2021",
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