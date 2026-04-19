# AI Mentoring System

A next-generation mentoring platform built with Next.js that connects students with industry experts and provides an always-on AI Co-Pilot for technical guidance. 

This project features a Role-Based Access Control (RBAC) prototype, real-time AI chat integration, and responsive dashboards tailored for both Mentors and Mentees.

## 🚀 Key Features

* **Mentee Dashboard:** View upcoming sessions, browse recommended mentors, and track learning progress.
* **Mentor Portal:** Manage incoming mentee requests with an intuitive accept/decline interface and view platform statistics.
* **AI Co-Pilot:** A fully integrated, streaming AI chat interface powered by the `gemma-4-31b-it` model. It acts as a specialized technical mentor, using Markdown to format responses with bullet points, bold text, and emojis.
* **Role-Based Simulation:** A mocked backend API route system that perfectly simulates database interactions for presentation purposes.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **AI Integration:** [Vercel AI SDK (@ai-sdk/react)](https://sdk.vercel.ai/) & [@ai-sdk/google](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai)
* **Markdown Rendering:** [react-markdown](https://github.com/remarkjs/react-markdown)

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js installed. You will also need a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey) to power the AI mentor.

### Installation

1. **Clone the repository and navigate to the frontend folder:**
   \`\`\`bash
   git clone <your-repo-url>
   cd ai-mentoring-system/frontend/my-app
   \`\`\`

2. **Install the dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up your environment variables:**
   Create a \`.env.local\` file in the root of \`frontend/my-app\` and add your Google API key:
   \`\`\`env
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   \`\`\`

4. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

## 📁 Project Structure

The project utilizes the Next.js App Router. Key directories include:

* \`src/app/page.js\`: The landing page and role selection entry point.
* \`src/app/dashboard/\`: The Mentee portal view.
* \`src/app/mentor-dashboard/\`: The Mentor portal view.
* \`src/app/ai-chat/\`: The interactive AI Co-Pilot chat interface using \`react-markdown\`.
* \`src/app/api/chat/route.js\`: The secure backend route handling the AI stream and system prompts.
* \`src/app/api/mock-data/route.js\`: Simulated database responses for the dashboards.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.
