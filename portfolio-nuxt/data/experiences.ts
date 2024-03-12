import {Experience} from "~/types/experience";
import {Technology} from "~/types/technology";
import codyHydra from "~/assets/images/codeHydra.png";
import intel from "~/assets/images/intel.svg";
import oec from "~/assets/images/oec.png";
import wsei from  "~/assets/images/wsei.png";

export const experiences: Experience[] = [
    {
        CompanyName: "Code Hydra",
        Dates: "10.2021 - 12.2023",
        Description: "As a Junior Software Developer, I actively contributed to fullstack development, ensuring the project's maintenance and integrity. I established GitHub pipelines for streamlined workflows and wrote both unit and integration tests. Engaging in SCRUM methodology, I collaborated seamlessly within the team, documented code comprehensively, and executed project deployments. Regularly conducting code reviews and following Gitflow principles, I played a vital role in the development lifecycle.",
        CompanySector: "Software House",
        Position: "Junior Software Developer",
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.RestApi, Technology.EntityFramework, Technology.Sql, Technology.PostgreSql, Technology.UnitTests, Technology.IntegrationTests, Technology.Vue, Technology.TypeScript, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Scss, Technology.Heroku, Technology.Git],
        Image: codyHydra
    },
    {
        CompanyName: "Perspektywy | Intel",
        Dates: "10.2022 - 06.2023",
        Description: "As a mentee in the 'New Technologies for Girls' program, I collaborated closely with a mentor, participated in both technical and soft skills workshops, and attended TechCamp. During the program, I developed the StabilityClient project using C#, a gRPC client for Stability AI. Additionally, I authored an article on BulldogJob detailing the creation of a gRPC client in C#, based on the StabilityClient project.",
        CompanySector: "Software Development",
        Position: "Mentee",
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.Grpc, Technology.Ai, Technology.StabilityAi, Technology.UnitTests, Technology.Git],
        Image: intel
    },
    {
        CompanyName: "OEConnection",
        Dates: "07.2021 - 09.2021 ",
        Description: "I contributed as a intern fullstack developer, overseeing code maintenance and implementing new features. Engaged in manual and unit testing, I ensured project stability before deploying. Adhering to SCRUM methodology, I collaborated seamlessly within the team, conducted thorough code reviews, and followed Gitflow for efficient version control.",
        CompanySector: "Automotive",
        Position: "Intern Software Developer",
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.RestApi, Technology.NoSql, Technology.MongoDb, Technology.Vue, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Git],
        Image: oec
    },
    {
        CompanyName: "College of Economics and Computer Science in Cracow",
        Dates: "10.2020 - 03.2024",
        Description: "I undertook a degree in Applied Computer Science with a specialisation in application programming. My studies culminated in an engineering degree.",
        CompanySector: "College",
        Position: "Bachelor of Engineering",
        Technologies: [Technology.Csharp, Technology.DotNet, Technology.AspNet, Technology.RestApi, Technology.EntityFramework, Technology.Sql, Technology.PostgreSql, Technology.UnitTests, Technology.IntegrationTests, Technology.Vue, Technology.TypeScript, Technology.JavaScript, Technology.Html, Technology.Css, Technology.Scss, Technology.Angular, Technology.Flutter, Technology.Dart, Technology.Wpf, Technology.Heroku, Technology.Git],
        Image: wsei
    },
];