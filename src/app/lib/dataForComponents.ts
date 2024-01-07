import { dataWork } from "./definitions";

export const myWorks : dataWork[] = [
    {
        title: 'Space Travelers',
        toolsUsed: 'Vite, React, TypeScript, Bootstrap, Redux, Jest, MWS',
        bgOpacity: '/images/space.png',
        photo: '/images/spacetravelers.png',
        link: 'https://space-travelers-rust.vercel.app/',
        description: 'Project done to lay the groundwork for the new Redux features, using slice reducer and API requires with createAsyncThunk'
    },
    {
        title: 'Car Insurance',
        toolsUsed: 'Nextjs, React, TypeScript, tailwind, Redux',
        bgOpacity: '/images/car.png',
        photo: '/images/carinsurance.png',
        link: 'https://tech-challenge-five.vercel.app/',
        description: 'Implementation of Web application Vehicle Insurance Quotation, with responsive features and field validation'
    },
    {
        title: 'Covid Metrics',
        toolsUsed: 'Vite, React, TypeScript, Styled-components, Redux, Jest, MWS',
        bgOpacity: '/images/covid.png',
        photo: '/images/covidmetrics.png',
        link: 'https://covid-metrics-alpha.vercel.app/',
        description: 'Responsive design where you can filter the data by day, and select the country to details information'
    }
]