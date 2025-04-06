# Zippy
Diamond Hacks 2025 Project - Jaden Manjusri Khang

### About
Zippy transforms homework from a chore into an exciting, friendly competition. This gamified education platform rewards students for timely assignment completion with points that unlock virtual pet collectibles and customization options. Through real-time leaderboards, instant AI-powered feedback, and a compelling gacha system, Zippy creates a powerful motivation loop that makes learning engaging and rewarding.

### How to run:
On your terminal, run `cd client`, then run `yarn install` to install our frontend dependencies. Then run `cd ../server` and run `yarn install` to install the backend dependencies, and also run `yarn start`. Finally, run `cd ../client`and run `yarn run dev`.

### Process:
We will be using **next.js** framework, with ACM's MERN stack template [linked here](https://github.com/acmucsd-diamondhacks/mern-template). We will also be integrating Gemini's API.

### Architecture:
We are using a Model-View-API with Real-time layer architecture. Here is our breakdown:
```
	Next.js as View (Client)
	Express + MongoDB as Controller + Model (Server)
	Gemini API as a smart backend service
	Socket.IO as a real-time event layer
```

