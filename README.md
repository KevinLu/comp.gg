# COMP.GG
## ⚠ UPDATE: use branch `homepage` for latest version!
INSTRUCTIONS TO RUN COMP.GG AND REASONING FOR IT BEING LIKE THIS NOW:

1. GET YOUR OWN RIOT DEV KEY AND REPLACE THE PLACEHOLDER WITH IT [backend/config/dev_keys.js](/backend/config/dev_keys.js)!
2. Just do `npm run dev`. If this doesn't work, you're gonna need to delete node_modules from both the root directory and the
[frontend](/frontend) directory. Then, run `npm install` in **both** the root directory and the frontend directory. Should work afterwards.

I've deleted the match history part of our calculation. The reason being is that **Riot has changed its match history API massively.**
It is much more specific and detailed, and is a lot more difficult to access for our purposes (we just wanted `championPlayed` from
each match). Deleting all of this has let our code work again, but now it is less accurate as it is only based on champion mastery.

Furthermore, I updated alot of the API links to reflect the most recent patch as Riot does not host legacy patch versions on their API.

LASTLY, I'm sharing this here rather than pushing these changes to `main` because I don't want to lose that code in case we ever want to
properly fix the match history issue.

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
