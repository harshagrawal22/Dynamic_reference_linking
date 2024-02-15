# Dynamic_reference_linking
Group 5.

Overview:
The Dynamic Reference Linking System is a web application designed to enhance the research and writing process by providing users with dynamically generated citations and references based on the content they are writing. This system automates the process of finding and linking relevant articles to support written content in real-time.

Architecture:
The system is built on a client-server architecture, leveraging multi-threading, server-side threading, client-server communication, API calls, and web scraping.
The architecture of the Dynamic Reference Linking System consists of the following components:

User Input
->
Frontend Interface
->
Backend Interface
->
Web Scraping & Article
->
Citation
->
Response to Frontend
->
User Interaction
->
Continuous Input Monitoring

1. Frontend Interface:
   - The frontend interface provides users with a simple note taking web application where users can start writing notes instantly, with or without specifying a title. The application provides a convenient mode-switching feature between light and dark themes to suit users' preferences. Additionally, users can download their notes as a .txt file, with the filename automatically generated based on the provided title or set as "untitled.txt" if no title is given. The interface continuously sends input data to the backend server without manual intervention.

2. Backend Server:
   - The backend server is responsible for handling API requests from the frontend interface and performing the core functionalities of the system. It includes the following modules:
     - API Endpoints: Exposes RESTful APIs to receive input data from the frontend and send back dynamically generated citations or references.
     - Web Scraping Module: Performs web scraping to search for relevant articles based on the input content.
     - Citation Generation Module:Generates citations or hyperlinks for the relevant articles retrieved through web scraping.
     - Concurrency and Multi-Threading: Handles concurrent requests efficiently to ensure real-time updates and continuous input monitoring.

3. Web Scraping Engine:
   - The web scraping engine is responsible for fetching and analysing content from various online sources, such as academic databases, journals, and research repositories. It extracts relevant information to be used for citation generation.

4. External APIs or Databases:
   - The system may interact with external APIs or databases to access additional resources or data required for web scraping and citation generation.

Technology stack:
Node.js for server-side logic
Express.js for handling HTTP requests
WebSocket or SSE for real-time communication with the frontend
Web scraping libraries (e.g., BeautifulSoup, Puppeteer) for extracting relevant articles
API calls to external databases or services for additional information retrieval
(#May vary depending on project requirement)

Workflow:
Users interact with the frontend interface, entering or editing text.
The frontend sends the updated text to the backend server via WebSocket or SSE.
The backend server receives the text, performs web scraping to find relevant articles, and suggests citations in real-time.
Citation suggestions are sent back to the frontend and displayed to the user.
The process continues dynamically as users write or edit content, with the backend server continuously listening for new phrases.

This architecture provides a foundation for building a dynamic reference linking system, but the specific implementation details may vary based on project requirements, technology stack preferences, and scalability considerations.
