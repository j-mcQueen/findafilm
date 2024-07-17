# Find A Film

Have you ever spent too long thinking or searching for films to watch, but can't ever find anything that you're in the mood for? Find A Film aims to address this problem and make film discovery easier, saving you from endless scouring and giving you more time watching!

The basic idea is this: in the prompt, enter a film title you've seen before that you want to base recommendations on. The application will then put AI agents to work and generate suggestions (with brief, no-spoiler synopses) based on how well they match your given title according to several ranking criteria (e.g. premise, genre, and IMDb rating).

## Architecture

Code cleanliness and maintainability are very important to all of my projects, and this application is built with those goals in mind. In separating my frontend and backend, I also separate my concerns and establish the flexibility and freedom to choose the most appropriate tools for each task.

On the backend, Python was used exclusively for its compatibility with both Tavily and LangChain, and with the use of Flask, client-server interactions become streamlined and straightforward. Where the AI agents are concerned, there is some overlap in the functionality of the filter and write agents, so they both make use of a utility function in `process.py` that processes the prompt provided to each respective agent and returns data in a useful format for the next agent to use. You can find examples of what each agent generates within their respective files in the `agents` folder of the backend. The outcome of the graph workflow in `controller.py` is a dictionary containing all the data required to render the pertinent information to the user on the frontend.

The application's frontend uses React, TypeScript, and TailwindCSS, each of which being chosen for specific purposes:

- React is brilliant for building quickly, organizing files effectively (keeping things as DRY as possible), and facilitating future project extension
- TypeScript elevates the weakly-type nature of JavaScript, leading to (in my opinion) a much more robust frontend codebase that has helped catch and solve bugs faster during development
- Vanilla CSS can sometimes interfere with a maintainable codebase, so with TailwindCSS' great synergy with React, it is a very useful technology for styling quickly and thoughtfully while complimenting the maintainability objective I strive for in all my projects.

## Usage

### Requirements

Before continuing, please ensure that `node` and `npm` are installed on your computer, and that your version of Python is >= 3.

Usage of this application requires API keys from:

- Tavily ([Register](https://app.tavily.com/sign-in)), a search engine optimized for LLMs and RAG that assists with providing movie options to the Open AI's LLM.
- OpenAI ([Register](https://auth.openai.com/authorize?issuer=auth0.openai.com&client_id=DRivsnm2Mu42T3KOpqdtwB3NYviHYzwD&audience=https%3A%2F%2Fapi.openai.com%2Fv1&redirect_uri=https%3A%2F%2Fplatform.openai.com%2Fauth%2Fcallback&device_id=10763beb-6cc7-4ae8-b4df-7103f530dd2f&scope=openid+profile+email+offline_access&response_type=code&response_mode=query&state=QkVITGEwb35HfnBZSy5xa1Z2QUczcmZ%2BOFdiOFlGVXpzZUdsR1F2d053Sw%3D%3D&nonce=T3FEM2ZMcmlQU0RJfjdaMUZjSEFENmdybHV4c3ZHan5ObFVMRi1kM1JMVg%3D%3D&code_challenge=29X7ZpZx2OqxSevDf5aNF7fq1_yGF2h_2Yk6qUFNzY8&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjEuMCJ9&flow=control&screen_hint=signup)), the LLM this project uses to curate and compose data for your recommended movies. **Please note**: usage of this API requires a credit balance on your OpenAI account.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/j-mcQueen/findafilm.git
```

2. Navigate to the backend directory, and create a .env file with your Tavily and OpenAI API keys:

```bash
cd backend/
touch .env
```

Your .env file should look something like this:

```sh
TAVILY_API_KEY="your tavily api key"
OPENAI_API_KEY="your openai api key"
```

3. Create a virtual environment, install the project's requirements, then run the backend:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt # install backend dependencies
python3 server.py
```

4. Open another terminal tab or window, then navigate to the repository's frontend directory and run the client:

```bash
cd frontend/
npm install # install frontend dependencies
npm run dev
```

5. Open the client shown on your terminal in your browser, typically:

```bash
http://localhost:5173/
```

6. Entertainment awaits!

Setup notes:

- After you have set up your virtual environment, ensure your text editor's Python interpreter is pointing to the correct environment. Here are some helpful links if you have issues: [VSCode docs](https://code.visualstudio.com/docs/python/environments), [Visual Studio Code does not detect Virtual Environments](https://stackoverflow.com/questions/66869413/visual-studio-code-does-not-detect-virtual-environments)

## Contribution

If you're interested in contributing to this project, then I'm absolutely thrilled! To collaborate, you can follow these steps:

1. Fork the repository and create a branch off `main`.
2. Check in to your branch, and make your changes. Before you get started, please take a moment to have a look through the codebase and see the style by which things have been built. It would be preferred if you keep your changes in this style as best as you can.
3. Commit your changes, and write concise and meaningful messages to assist the review process!
4. Push to your fork and submit a pull request.
5. Repeat the age-old adage: "Patience is a virtue". Just kidding. I'll take a look at your pull request as soon as I can and proceed from there.

## Possible Improvements

Throughout the project's development, I've been thinking of several ways in which it could be extended or improved upon:

- Utilize the [TMDb API](https://developer.themoviedb.org/docs/getting-started) to get more movie information. My first thought was to use this API to get the movie poster for each generated movie suggestion. This would add a perfect extra visual component to the UI, but usage of the TMDb API requires a deployed project with a live link as part of their "API application" process, which is outwith the scope of this project for now. One for the future perhaps!
- Add more agents, obviously! Right now, the project uses 3 AI agents: search, filter, and write. The clearest possibility in this department is to add an agent which reviews the quality of films that the filter agent produces, enabling a feedback loop between the filter agent and the proposed agent which would, in theory, help deliver more finely tuned film suggestions to the user. I suspect this would also require expanding the parameters which the filter agent uses to generate its movies.

If you end up having a look through the code and spotting more development opportunities, please let me know! I love to learn, iterate, and improve upon my previous work, and your suggestions may even be present opportunities for collaboration which is almost always rewarding in and of itself.
