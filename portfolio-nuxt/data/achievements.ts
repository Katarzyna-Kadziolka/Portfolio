import {Achievement} from "~/types/achievement";
import aquathon from "~/assets/images/aquathon.png"
import hackyeah from "~/assets/images/hackyeah.png"
import sheep from "~/assets/images/sheep.png"
export const achievements: Achievement[] = [
    {
        Name: "Double finalist at Hackyeah 2023",
        Date: "09.2023",
        Description: "Together with my team 'Śpiące Wydry', we made it through to the finals in TWO categories at the HackYeah 2023 hackathon: Paneuropa and HackSQL: Kolobrzeg - Future Competence Campus.",
        Image: hackyeah
    },
    {
        Name: "Finalist at second edition of Aquathon",
        Date: "06.2022",
        Description: "As 'Śpiące Wydry' we made it to the final of the second Aquathon. We developed the Municipal Well application, which streamlined the management of water by the municipal board in emergency situations.",
        Image: aquathon
    },
    {
        Name: "Special award place at SheepYourHack 3",
        Date: "12.2021",
        Description: "As 'Śpiące Wydry', we received a distinction. Hurray! Our app helps solve the problem of sharing urban spaces with wild animals. I was co-responsible for writing the API using ASP.Net Core and C#.",
        Image: sheep
    },
    {
        Name: "2nd place in Aquathon 2021",
        Date: "11.2021",
        Description: "Together with my team 'Śpiące Wydry', we took second place. We created an app called Raindrop for setting up and managing backyard rainwater tanks. I was responsible for creating a website using Vue.js.",
        Image: aquathon
    },
    {
        Name: "1st place in the SheepYourHack 2",
        Date: "11.2020",
        Description: "My team 'Śpiące Wydry' won first place in the SheepYourHack 2 hackathon. I was responsible for project management, presentation and business development. Our app called Printy solves the problem of poor access to print outlets.",
        Image: sheep
    }
]