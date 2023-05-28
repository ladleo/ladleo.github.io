import {Grid, Typography, Paper} from '@mui/material';
import React, {FC} from 'react';
import {AboutWrapper} from './about.styled';

interface AboutProps {
}

const skills = [
    {
        title: "FRONT-END DEVELOPMENT",
        description: "Proficiency in HTML, CSS, and JavaScript. Knowledge of front-end frameworks such as React, Angular, or Vue.js. Ability to create responsive and visually appealing user interfaces"
    }, {
        title: "BACK-END DEVELOPMENT",
        description: " Proficiency in server-side programming languages such as Python, Node.js. Knowledge of frameworks like Express, Django, Flask. Understanding of RESTful APIs and server-side architecture"
    }, {
        title: "DATABASE MANAGEMENT",
        description: "Experience working with relational databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB, Redis). Knowledge of database modeling, querying, and optimization."
    }, {
        title: "SERVER MANAGEMENT AND DEPLOYMENT",
        description: "Familiarity with server management and hosting platforms like AWS or Heroku. Understanding of deployment processes, including version control (e.g., Git), containerization (e.g., Docker).\n"
    }, {
        title: "API DEVELOPMENT AND INTEGRATION",
        description: "Ability to design, develop, and consume APIs using technologies like REST. Integration of third-party APIs and services to enhance application functionality."
    }, {
        title: "VERSION CONTROL",
        description: "Proficiency in using version control systems like Git for efficient collaboration and code management in a team environment."
    }, {
        title: "TESTING AND DEBUGGING",
        description: "Knowledge of software testing principles and practices. Experience with unit testing, integration testing, and test-driven development. Ability to debug and troubleshoot issues in both front-end and back-end code"
    }, {
        title: "SECURITY",
        description: "Understanding of web application security principles and best practices. Knowledge of common vulnerabilities and ability to implement security measures to protect against attacks."
    }, {
        title: "PROBLEM SOLVING AND TROUBLESHOOTING",
        description: "Strong analytical and problem-solving skills to identify and resolve issues efficiently. Ability to work in a fast-paced environment and troubleshoot complex problems"
    }, {
        title: "COMMUNICATION AND COLLABORATION",
        description: "Effective communication skills to collaborate with team members, understand requirements, and contribute to project discussions. Ability to work in an agile development environment and adapt to changing requirements."
    }, {
        title: "CONTINUOUS INTEGRATION AND CONTINUOUS DEPLOYMENT (CI/CD)",
        description: "Experience with CI/CD pipelines using tools such as Jenkins, GitLab CI/CD, or CircleCI to automate software build, test, and deployment processes."
    }]

const About: FC<AboutProps> = () => (
    <AboutWrapper data-testid="About" id="skills">
        <Typography variant="h3" p={6} sx={{fontFamily: 'Oxygen'}}>
            Things I am good at.
        </Typography>
        <Grid container spacing={2} px={6}>
            {skills.map((skill) =>
                <Grid item md={4} key={skill.title}>
                    <Paper elevation={3} sx={{padding: 2}}>
                        <Typography variant="h6" mb={1} sx={{fontFamily: 'Oxygen', fontWeight: 500}}>
                            {skill.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{
                            fontFamily: 'Oxygen',
                            letterSpacing: 0.5
                        }}>
                            {skill.description}
                        </Typography>
                    </Paper>
                </Grid>
            )}
        </Grid>
    </AboutWrapper>
);

export default About;
