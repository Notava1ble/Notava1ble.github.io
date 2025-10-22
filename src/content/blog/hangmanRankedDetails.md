---
title: "How I made a ranked game from scratch!"
description: "Take a look on how I created Hangman Ranked, a revamp to a game we all know."
pubDate: "9/19/2025"
tags: ["projects"]
---

I recently created a ranked version of the classic Hangman game, and I wanted to share my journey and the steps I took to bring this project to life. Here's a breakdown of how I developed Hangman Ranked from scratch.

## The Idea

The idea for Hangman Ranked came rather spontaneously. I wanted to create a competitive version of Hangman, where players could challenge each other and climb a leaderboard. Hangman was the first game I had [created myself](https://notava1ble.github.io/Hangman/), so it felt fitting to revisit it with a new twist.

## Choosing the Tech Stack

Before I could jump into coding, I had to decide on the technology stack.

For the frontend, I quickly settled on React with Next.js due to its flexibility and ease of use. This was my most familiar frontend framework, and I knew it would allow me to iterate quickly. I considered using Vite but ultimately went with Next.js for its built-in features and server-side rendering capabilities.

Choosing the backend was a bit more challenging. I needed a solution that could handle real-time interactions, user authentication, and data storage. After weighing my options, I chose Convex, a service I had never used before but had heard positive things about. It offered a simple way to manage real-time interactions and data storage, which ended up being a great fit for the project. I also used Convex Auth for user authentication. While it was a bit trickier to set up compared to services like Clerk, I preferred it because it allowed greater control over the authentication flow and made it easier to customize the experience for my application's needs.

## Development Process

For the most part, the development process went smoothly. I started by setting up the basic structure of the application, creating the necessary components for the game interface, and implementing the game logic. I studied how ranked games typically work, looking at examples like chess.com to understand matchmaking and ranking systems. I especially focused on the Elo rating system, trying to find the best way to express players' skill levels in a competitive setting.

Some of the most challenging parts involved making the system exploit-proof. I had to ensure that players couldn't cheat by manipulating the game state or exploiting vulnerabilities. This required not trusting client data and implementing robust server-side validation. One example was making moves based on the player's authentication token rather than the username sent from the client.

Another challenge was implementing features that make the game feel complete and engaging. I added timeouts to prevent players from stalling the game and created a leaderboard to showcase the top players. I also developed different pages, like the profile page, where players can view stats, and a detailed statistics page.

## Final Thoughts and Future Plans

After several weeks of development, I finally created a product that I am proud of. I wanted to create a game which atleast I would have fun playing, and I achieved that. I played it with some friends and had a great experience. [Hangman Ranked](https://hangman-ranked.vercel.app/) is now live and available for players to enjoy. 

In the future, I plan to continue improving the game based on user feedback. I want to add more features, such as different game modes, customization options, placement games and ranks, and possibly even tournaments if the game attracts a large player base. I also want to optimize performance and redesign the UI to make it more visually appealing.

Creating Hangman Ranked was a rewarding experience that allowed me to learn new technologies and improve my development skills. I'm excited to see how the game evolves and hope that players enjoy it as much as I enjoyed creating it!