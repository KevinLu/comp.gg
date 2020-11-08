## Inspiration

We wanted to make custom-built team compositions for our League of Legends Clash team, but we didn't want to sift through a [222 minute long Mobalytics article](https://mobalytics.gg/blog/everything-you-need-to-know-about-team-comps-and-teamfighting-in-league-of-legends/).

## What it does

Our tool allows you to pick a team composition theme and analyzes your summoner profile to determine up to 3 of your top champions that suit this playstyle.

We currently use a combination of champion mastery points and recent match history to identify your best champions. Then, we sort your champions based on [AI-generated champion classes](https://towardsdatascience.com/umap-and-k-means-to-classify-characters-league-of-legends-668a788cb3c1) to generate a team composition that fits one of 5 major playstyles (engage, disengage, poke & siege, pick, and split-push).

## How we built it

Frontend: React, HTML, CSS

Backend: Express.js, Node.js, Python (protoyping)

We also used the Riot Games Developer API.

## Challenges we ran into

Writing code efficiently to ensure we didn't exceed the rate limits for API calls

Classifying champions and team compositions in a non-subjective manner.

## Accomplishments that we're proud of

Creating a long-lasting tool that anyone can use during dozens of future Clash events!

## What we learned

New technologies such as Express.js and React

## What's next for COMP.GG

Identifying in-built synergies between certain champions (e.g. Malphite/Yasuo, Xayah/Rakan)
