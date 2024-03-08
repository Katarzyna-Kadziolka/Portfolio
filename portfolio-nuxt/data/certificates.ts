import {Certificate} from "~/types/certificate";
import intelScholarshipAlumni from "~/assets/images/intelScholarshipAlumni.png"
import securityFundamentals from "assets/documents/SecurityFundamentals.pdf"
import microsoft from "~/assets/images/microsoft.png"
import vueMastery from "~/assets/images/vueMastery.png"
import strefaKursow from "~/assets/images/strefaKursow.svg"
import softwareDevelopmentFundamentals from "~/assets/documents/SoftwareDevelopmentFundamentals.pdf"
import networkingFundamentals from "~/assets/documents/NetworkingFundamentals.pdf"
import databaseFundamentals from "~/assets/documents/DatabaseFundamentals.pdf"

export const certificates : Certificate[] = [
    {
        Name: "Intel Scholarship Alumni",
        Certificate: "https://www.credly.com/badges/c2334872-4959-45af-a71c-5cac1544632c/linked_in_profile",
        Date: "06.2023",
        Description: "Intel Scholarship Alumni through the program develop knowledge and skills related to the ICT world and create strategy for building future careers. Thanks to that Alumni are aware of their talents and thus increases their confidence and motivation to achieve goals. In addition to that they enriched their knowledge in the area of new technologies, innovations, processes and tools.",
        Organization: "Intel",
        ImagePath: intelScholarshipAlumni
    },
    {
        Name: "Vue 3 Advanced",
        Certificate: undefined,
        Date: "09.2023",
        Description:"Course consisting of the following segments: Vue 3 Deep Dive with Evan You (Understand Vue 3 from the inside out through the perspective of the creator himself, Evan You), Vue 3 Reactivity (The way Vue 3 does reactivity is entirely different from Vue 2. Learn how it works under the hood throughout this advanced course), Codding Better Composables (Learn how to write scalable Composables based on best practices from the popular VueUse library), Build a Gmail Clone with Vue 3 (Put theory into practice by building a feature-rich email app that makes use of the core new features of Vue 3) and Advanced Components (Discover the full functionality of Vue components with Gregg Pollack & Evan You, the creator of Vue).",
        Organization: "Vue Mastery",
        ImagePath: vueMastery
    },
    {
        Name: "Vue 3 Intermediate",
        Certificate: undefined,
        Date: "08.2023",
        Description:"Course consisting of the following segments: Vue 3 Composition API (Learn Vue 3's new Composition API, an alternative way to compose components for scalable Vue applications), Lightning Fast Builds w/ Vite (Learn about Vite, the lightning-fast and lean build tool and dev server, billed as the next generation of front end tooling. Taught by its creator, Evan You), Vue 3 Forms (Create simpler and more powerful reusable forms with Vue 3), Validating Vue 3 Forms (Learn how to validate any type and size of form in Vue 3 by leveraging the of Vee-Validate), TypeScript Friendly Vue 3 (Get a better developer experience when using TypeScript in your Vue 3 apps by leveraging the script setup syntax), Nuxt 3 Essentials (Learn this intuitive framework that includes built-in tools and structure to build Vue apps that can scale) and Build a Blog w/ Nuxt 3 Content (Build a blog using Nuxt 3, Nuxt Content v2, and Bulma CSS).",
        Organization: "Vue Mastery",
        ImagePath: vueMastery
    },
    {
        Name: "Vue 3 Beginner",
        Certificate: undefined,
        Date: "07.2023",
        Description:"Course consisting of the following segments: Intro to Vue 3 (Learn the fundamentals of Vue 3 in this course that starts with the very basics), Real World Vue 3 (Learn the fundamentals of building a production-level single page application with Vue 3), Touring Vue Router (Learn how Vue Router gives your Vue 3 app the navigation features it needs to scale), Pinia Fundamentals (Learn the fundamentals of Pinia, Vue's new state management library, by building a simple Todo List App), Intro to Vue 3 + Type Script (With Vue 3's enhanced TypeScript support, using it just got easier. Learn how to strengthen your Vue apps with this popular technology) and Unit Testing Bue 3 (Learn about the benefits of unit testing, and What you should and shouldn't be testing in your Vue apps).",
        Organization: "Vue Mastery",
        ImagePath: vueMastery
    },
    {
        Name: "MTA 98-367 Security Fundamentals",
        Certificate: securityFundamentals,
        Date: "11.2021",
        Description: "The Microsoft Security Fundamentals Exam (98-367) validates introductory security knowledge and skills and can be used to enter the workforce, or prepare students for the Microsoft Certified Solutions Associate certification. It is the next step in building a career in Desktop Support, Desktop and Device Cloud Management, Data and Applications Management, and Network or Server Administration. ",
        Organization: "Microsoft",
        ImagePath: microsoft
    },
    {
        Name: "C# Course - Generic Types",
        Certificate: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/fgvord63oxcs4cw44s08g40o0oc8cs0",
        Date: "09.2021",
        Description: "A course teaching how to solve common problems related to the use of generic types, how to work with generic methods and with structures such as dictionary, list, stack, how to use generic delegates, introduces the advantages of generic types and the key terminology.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
    {
        Name: "TypeScript Course",
        Certificate: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/lcucfw9zuc0c0404ocg0oow4wsw8ggk",
        Date: "09.2021",
        Description: "A course teaching how to set up a TypeScript-based project, use the advantages of strong typing, the class mechanism and abstract classes, advanced typing techniques, creating modular code, using decorators in practice and integrating TypeScript with webpack.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
    {
        Name: "Vue.js Course - Advanced",
        Certificate: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/gigqld34k4ooc0swo48cskosk80gkgk",
        Date: "08.2021",
        Description: "A course teaching advanced working with directives, running unit tests and the basics of TDD methodology, making HTTP requests with Vue-axios, creating authentication - login and registration views, communicating with the server, validating forms using Vuelidate, using the Vuetify framework component and building views; dashboard, users, history.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
    {
        Name: "Vue.js Course - Beginner",
        Certificate: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/687igq56stgkwgo4480cso0488wso8w",
        Date: "07.2021",
        Description: "A course that teaches how to set up a development environment, build dynamic SPA applications, manage application state with the VueX library, create and validate forms, work with components and directives, create custom filters and mixins, prepare routing and create impressive animations.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
    {
        Name: "MTA 98-361 Software Development Fundamentals",
        Certificate: softwareDevelopmentFundamentals,
        Date: "06.2021",
        Description: "The exam checked understanding of computer storage, data types, computer decision structures, error handling, the fundamentals of classes, inheritance, polymorphism, encapsulation, application life cycle management, algorithms, data structures, Web page development, Microsoft ASP.NET Web application development, Web hosting, Web services, Windows Forms applications, console-based applications, Windows Services, relational database management systems, database query methods and database connection methods.",
        Organization: "Microsoft",
        ImagePath: microsoft
    },
    {
        Name: "MTA 98-366 Networking Fundamentals",
        Certificate: networkingFundamentals,
        Date: "05.2021",
        Description: "The exam checked understanding of the concepts of Internet, intranet, and extranet, local area networks (LANs), wide area networks (WANs), wireless networking, network topologies and access methods, switches, routers, media types, the Open Systems Interconnection (OSI) model, IPv4, IPv6, names resolution, networking services and TCP/IP.",
        Organization: "Microsoft",
        ImagePath: microsoft
    },
    {
        Name: "MTA 98-364 Database Fundamentals",
        Certificate: databaseFundamentals,
        Date: "01.2021",
        Description: "The exam checked understanding of how data is stored in tables, relational database concepts, data manipulation language (DML), data definition language (DDL), data types, tables and how to create them, views, stored procedures and functions, data manipulation, normalization, primary, foreign, and composite keys, indexes, database security concepts, database backups and restore.",
        Organization: "Microsoft",
        ImagePath: microsoft
    },
    {
        Name: "ASP.Net Core - Building an Applications",
        Certificate: "https://platforma.strefakursow.pl/p/certificate/hash/9orbefy9dm8soos4gk0ogsskog0c48s",
        Date: "11.2020",
        Description: "A course teaching how to create efficient and scalable applications for the ASP.NET Core platform, use the functionalities of the ASP.NET Core platform, use the division of applications into layers, write unit, integration and architectural tests, use external libraries and frameworks, use design and architectural patterns, use mapping object-relational and flexible data validation and error handling.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
    {
        Name: "C# course - programming in LINQ",
        Certificate: "https://platforma.strefakursow.pl/p/certificate/hash/l6jvsr13ydsc4808c04gcckk0gck8os",
        Date: "11.2020",
        Description: "A course teaching how to use C# functions for LINQ, querying objects using filters, working with IQueryable and expression trees, grouping, combining and aggregating data, obtaining data from SQL or XML files, creating advanced queries, searching, filtering and sorting data, and building an optimal and efficient code.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
    {
        Name: "Foundations of programming in C#",
        Certificate: "https://platforma.strefakursow.pl/p/certificate/hash/l6jvsr13ydsc4808c04gcckk0gck8os",
        Date: "10.2020",
        Description: "A course teaching how to create classes and objects, handle exceptions, the basics of object-oriented programming, use variables, arrays, conditional statements, avoid common mistakes, write readable and correct code, basics of application programming in C# and work with abstract classes.",
        Organization: "Strefa Kursów",
        ImagePath: strefaKursow
    },
]