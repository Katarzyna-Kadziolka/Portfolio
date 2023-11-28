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
import mediatRAspNet from "~/assets/images/mediatRAspNet.png";
import urania from "~/assets/images/urania.png";
import witcherApi from "~/assets/images/witcherApi.png";
import witcherApiMini from "~/assets/images/witcherApiMini.png";
import portfolio from "~/assets/images/portfolio.png";
import portfolioMini from "~/assets/images/portfolioMini.png";
import herokuDbConnector from "~/assets/images/herokuDbConnector.png";
import athena from "~/assets/images/athena.png";
import athenaMini from "~/assets/images/athenaMini.png";
import catFacts from "~/assets/images/catFacts.png";
import timeLibrary from "~/assets/images/timeLibrary.png";
import timeLibraryMini from "~/assets/images/timeLibraryMini.png";
import printy from "~/assets/images/printy.png";
import printyMini from "~/assets/images/printyMini.png";
import chronos from "~/assets/images/chronos.png";
import chronosMini from "~/assets/images/chronosMini.png";
import cerebri from "~/assets/images/cerebri.png";
import cthulhuCreator from "~/assets/images/cthulhuCreator.png";
import cthulhuCreatorMini from "~/assets/images/cthulhuCreatorMini.png";


export const projects : Project[] = [
    {
        Name: "Doskvol Tools",
        Dates: "09.2023-09.2023",
        ShortDescription: "Content generator for RPG game Blades In The Dark.",
        Description: "I have written a web application to facilitate the use of the tables in the Blades in the Dark game manual. The game master can quickly generate the result, correct any mismatched elements and copy the result to the notes.",
        ImagePath: doskvolTools,
        MiniImagePath: doskvolToolsMini,
        Technologies: [Technology.Vue, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.WebStorm],
        MainTechnologies: [Technology.Vue, Technology.TypeScript]
    },
    {
        Name: "Manage Me",
        Dates: "06.2023-06.2023",
        ShortDescription: "Web application to manage projects, features and tasks.",
        Description: "My first contact with Angular! As part of a class at university, I created a web application for project management. It provides full CRUD features and tasks.",
        ImagePath: manageMe,
        MiniImagePath: manageMeMini,
        Technologies: [Technology.Angular, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Git, Technology.VisualStudioCode],
        MainTechnologies: [Technology.Angular, Technology.TypeScript]
    },
    {
        Name: "Fantasy Odyssey",
        Dates: "04.2023-04.2023",
        ShortDescription: "Mobile app integrated with Google Fit introducing gamification elements into daily walks.",
        Description: "A mobile app that allows the user to accompany Frodo on his journey to Mount Doom and back. Based on the distance travelled, it informs the user of events along the trail that took place in the novel.",
        ImagePath: fantasyOdyssey,
        MiniImagePath: fantasyOdysseyMini,
        Technologies: [Technology.Dart, Technology.Flutter, Technology.GoogleFit, Technology.Firebase, Technology.GoogleCloud, Technology.Git, Technology.AndroidStudio],
        MainTechnologies: [Technology.Dart, Technology.Flutter]
    },
    {
        Name: "StabilityClient.Net",
        Dates: "12.2022 - 02.2023",
        ShortDescription: "gRPC client for StabilitySDK written with .Net 6.",
        Description: "A gRPC client for StabilitySDK equipped with a fluent builder for convenient request construction and an extension method for AsyncServerStreamingCall to effortlessly save images.",
        ImagePath: stabilityClient,
        MiniImagePath: stabilityClientMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Grpc, Technology.StabilityAi, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Grpc]
    },
    {
        Name: "Wild Alert",
        Dates: "11.2022-11.2022",
        ShortDescription: "Web application to report and review the presence of wild animals in the city.",
        Description: "Web application to report and review the presence of wild animals in the city, written during HackYeah 2022 with friends. I was responsible for frontend.",
        ImagePath: wildAlertApp,
        MiniImagePath: wildAlertAppMini,
        Technologies: [Technology.Vue, Technology.TypeScript, Technology.Html, Technology.Scss, Technology.Quasar, Technology.Csharp, Technology.DotNet, Technology.Git, Technology.Rider, Technology.VisualStudioCode],
        MainTechnologies: [Technology.Vue, Technology.TypeScript]
    },
    {
        Name: "CityWellApp",
        Dates: "06.2022-06.2022",
        ShortDescription: "A web app, which helps city councils manage water in crisis situations.",
        Description: "A web app, which helps city councils manage water in crisis situations made on second edition of Aquathon. I was responsible for the web application for residents, which performed informational functions and allowed residents to report incidents.",
        ImagePath: cityWellApp,
        MiniImagePath: cityWellAppMini,
        Technologies: [Technology.Vue, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Git, Technology.VisualStudioCode],
        MainTechnologies: [Technology.Vue, Technology.JavaScript]
    },
    {
        Name: "CthulhuWizardApp",
        Dates: "02.2022-06.2023",
        ShortDescription: "A web application for generating characters in the RPG game Call of Cthulhu.",
        Description: "After two years of intensive study, I decided to return to Cthulhu Wizard Creator. This time it is a much more extensive web project, enriched with many new features. Still in progress :)",
        ImagePath: cthulhuWizard,
        MiniImagePath: cthulhuWizardMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Cqrs, Technology.RavenDb, Technology.NoSql, Technology.Docker, Technology.TypeScript, Technology.Vue, Technology.Html, Technology.Scss, Technology.Quasar, Technology.AtomicDesign, Technology.Heroku, Technology.Git, Technology.Rider, Technology.WebStorm],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Vue, Technology.TypeScript]
    },
    {
        Name: "WizardWorldDesktop",
        Dates: "12.2021-01.2022",
        ShortDescription: "Simple desktop application write in WPF and .Net 6.0 to browse data from WizardWorldApi.",
        Description: "Desktop application and WizardWorldAPI client. Allows selection of data categories, advanced filtering and searching. Written using WPF and .Net 6.0.",
        ImagePath: wizardWorldDesktop,
        MiniImagePath: wizardWorldDesktopMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf, Technology.Mvvm, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf]
    },
    {
        Name: "WizardWorldApp",
        Dates: "12.2021-01.2022",
        ShortDescription: "Simple web application write in Blazor to browse data from WizardWorldApi.",
        Description: "Web application adn WizardWorldAP client. Allows selection of data categories, searching and sending anonymous feedback.Written using Blazor.",
        ImagePath: wizardWorldApp,
        MiniImagePath: wizardWorldAppMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Blazor, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Blazor]
    },
    {
        Name: "Town Bestiary",
        Dates: "12.2021-12.2021",
        ShortDescription: "An educational app to report the presence of wild animals in the city and a symbolic adoption.",
        Description: "An app that helps solve the problem of sharing urban space with wild animals. We want to raise public awareness to make metropolises nature-friendly so that we and the animals can feel at home in them. I was co-responsible for writing the API using ASP.Net Core and C#. Made at SheepYourHack 3.",
        ImagePath: townBestiary,
        MiniImagePath: townBestiaryMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet]
    },
    {
        Name: "Raindrop",
        Dates: "11.2021-11.2021",
        ShortDescription: "A web application designed to help people choose the right tank and get grants.",
        Description: "A web application called Raindrop is used to set up and manage backyard rainwater tanks. Made at Aquathon. I was responsible for creating an educational website designed to help people choose the right tank and get grants.",
        ImagePath: rainDrop,
        MiniImagePath: rainDropMini,
        Technologies: [Technology.Vue, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Git, Technology.VisualStudioCode],
        MainTechnologies: [Technology.Vue, Technology.JavaScript]
    },
    {
        Name: "WizardWorldAPI",
        Dates: "10.2021-02.2022",
        ShortDescription: "Rest API returning data from the Harry Potter universe, which already has over 1 750 000 connections.",
        Description: "Rest API written using the CQRS template, with unit tests and integration tests. Returns data from the Harry Potter universe and allows anonymous feedback via email.",
        ImagePath: wizardWorldApi,
        MiniImagePath: wizardWorldApiMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Cqrs, Technology.PostgreSql, Technology.Sql, Technology.SendGrid, Technology.Heroku, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet]
    },
    {
        Name: "MediatR.AspNet",
        Dates: "10.2021-11.2021",
        ShortDescription: "CQRS support for MediatR in ASP.Net.",
        Description: "MediatR.AspNet is a CQRS (Command and Query Responsibility Segregation) support for MediatR in ASP.Net. Helps to implement CQRS pattern into RestApi.",
        ImagePath: mediatRAspNet,
        MiniImagePath: mediatRAspNet,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Cqrs, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet]
    },
    {
        Name: "Urania",
        Dates: "08.2021-10.2021",
        ShortDescription: "Calculator of wire parameters.",
        Description: "Urania is a calculator of wire parameters developed for Bruxa Jewelry in order to simplify choosing the right material for chainmaille jewelry.",
        ImagePath: urania,
        MiniImagePath: urania,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf, Technology.Mvvm, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf]
    },
    {
        Name: "Witcher Tools",
        Dates: "08.2021-08.2021",
        ShortDescription: "Tools for the TTRPG The Witcher.",
        Description: "Rest API, tools for the TTRPG The Witcher. Depending on the ingredients and type, returns available alchemical recipes.",
        ImagePath: witcherApi,
        MiniImagePath: witcherApiMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.MongoDb, Technology.Azure, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet]
    },
    {
        Name: "Portfolio",
        Dates: "06.2021-06.2021",
        ShortDescription: "My first portfolio.",
        Description: "I created a portfolio that contains all my projects and skills. Everything was written using Blazor.",
        ImagePath: portfolio,
        MiniImagePath: portfolioMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Blazor, Technology.Html, Technology.Css, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Blazor]
    },
    {
        Name: "HerokuDbConnector",
        Dates: "02.2021-02.2021",
        ShortDescription: "Library to facilitate connection to Heroku Db.",
        Description: "HerokuDbConnector is .Net support for Heroku Db. Helps to connect with database easily.",
        ImagePath: herokuDbConnector,
        MiniImagePath: herokuDbConnector,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.PostgreSql, Technology.Heroku, Technology.Git, Technology.Rider],
        MainTechnologies: [Technology.Csharp, Technology.DotNet]
    },
    {
        Name: "Athena",
        Dates: "11.2020-06.2021",
        ShortDescription: "Home book collection management application",
        Description: "Athena is a desktop application that is used to manage your home library. It allows you to add, edit and delete books, authors, series, publishers, and storage locations. Multiple categories can be assigned to a single book. A book search bar is present, you can search not only by title. Athena also supports borrowing books and stores a list of borrows. This is my first larger group project.",
        ImagePath: athena,
        MiniImagePath: athenaMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf, Technology.Mvvm, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf]
    },
    {
        Name: "CatFacts.Net",
        Dates: "11.2020-12.2020",
        ShortDescription: ".Net Standard 2.0 client for cat-facts API.",
        Description: "CatFacts.Net is a client for the cat-facts API. It allows you to get random facts about cats. Through this project, I wanted to learn how to work with the API.",
        ImagePath: catFacts,
        MiniImagePath: catFacts,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet]
    },
    {
        Name: "Time Library",
        Dates: "11.2020-11.2020",
        ShortDescription: "Well-design C# library to store Time.",
        Description: "This is a library for storing time. It has options to add seconds, minutes and hours, overrides comparison operators. It also contains tests.",
        ImagePath: timeLibrary,
        MiniImagePath:timeLibraryMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet]
    },
    {
        Name: "Printy",
        Dates: "11.2020-11.2020",
        ShortDescription: "Web app, which solves the problem of difficult access to printing spots.",
        Description: "Printy is a web app, which solves the problem of difficult access to printing spots. Printy allows any private person to share his idle printer and earn some money from it. With Printy, customers can easily find and upload files to print and then just go pick up it from the neighbor. Made at SheepYourHack 2. I was responsible for presentations and business project development.",
        ImagePath: printy,
        MiniImagePath:printyMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet]
    },
    {
        Name: "Chronos",
        Dates: "10.2020-11.2020",
        ShortDescription: "Simple API that can be used to create an application to help in concentration, work, and study.",
        Description: "Chronos is an API that can be used to create an application to manage your tasks. I learned ASP.Net based on this project. The API supports tasks, deadlines, and task categories.",
        ImagePath: chronos,
        MiniImagePath:chronosMini,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet]
    },
    {
        Name: "Cerebri",
        Dates: "08.2020-11.2020",
        ShortDescription: "Simple application which helps with concentration, work and study.",
        Description: "Cerebri is a simple descope app for managing work and rests time in the Pomodoro system (4 focus sessions of 25 minutes each interspersed with 5-minute breaks, followed by a longer 20-minute break). The app also can save tasks and tick them off. While working on this application, I learned the basics of C# and WPF.",
        ImagePath: cerebri,
        MiniImagePath:cerebri,
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf, Technology.Git, Technology.VisualStudio],
        MainTechnologies: [Technology.Csharp, Technology.DotNet, Technology.Wpf]
    },
    {
        Name: "Cthulhu Character Wizard",
        Dates: "04.2020-08.2020",
        ShortDescription: "A program to facilitate the creation of an explorer character in the RPG Cthulhu.",
        Description: "Cthulhu Wizard Creator is a desktop application that facilitates the creation of researcher characters in the RPG Cthulhu. It is possible to create the character yourself step by step, use the random function only on selected items, as well as completely randomize the character. There are 111 professions to choose from. Each profession has its specifications, according to the manual (7th edition of the game).",
        ImagePath: cthulhuCreator,
        MiniImagePath:cthulhuCreatorMini,
        Technologies: [Technology.Python, Technology.TkInter, Technology.Git, Technology.VisualStudioCode],
        MainTechnologies: [Technology.Python, Technology.TkInter]
    }
]