import React from "react";
import GitHubCalendar from "react-github-calendar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';



const GitHubContributionsCard: React.FC = () => {
    const ghcontribcardcontent = (
        <CardContent>


            <h1 style={{ textAlign: "left", fontSize: "1.5em" }}>
                Davide's GitHub Contributions
            </h1>

            <GitHubCalendar username="drossotto" blockSize={15} blockMargin={5} />
        </CardContent>
    )


    return (
        <Box sx={{ minWidth: 345 }}>
            <Card variant="outlined">{ghcontribcardcontent}</Card>
        </Box>
    )
}

export default GitHubContributionsCard;
