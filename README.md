# Algerie Poste Website with Integrated Chatbot

This project is a website for **Algerie Poste**, developed using HTML, CSS, and JavaScript. A chatbot is integrated into the website, where the Large Language Model (LLM) runs on Kaggle. The connection between the locally hosted website and the remote LLM is established using the **pyngrok** library.

## Features

- **Responsive website** using HTML, CSS, and JavaScript.
- **Chatbot integration** powered by an LLM running on Kaggle.
- **Secure connection** established via pyngrok.
- **User-friendly interface** with interactive chatbot support.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Python (Kaggle environment)
  - Pyngrok (for secure tunneling)

## Installation

To run the project, follow these steps:


### 2. Setting Up the Local Web Server
You can use a local web server such as **Live Server** (for VS Code) or Python's built-in HTTP server.

#### Using Python:
```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### 3. Running the LLM on Kaggle
1. Upload the chatbot script to Kaggle.
2. Run the script and obtain the public URL provided by pyngrok.
3. Update the website JavaScript to connect to the chatbot via the provided URL.

## Usage

1. Start the local web server to serve the website.
2. Ensure the chatbot is running on Kaggle with an active ngrok tunnel.
3. Access the website and interact with the chatbot.

## Folder Structure

```
├── index.html
├── css/
│   ├── styles.css
├── js/
│   ├── script.js
└── README.md
```

## Example Chatbot Interaction

- User: "What are the working hours of Algerie Poste?"
- Chatbot: "The working hours are from 8 AM to 5 PM on weekdays."

## Potential Improvements

- Enhance chatbot capabilities with more advanced LLM models.
- Deploy the website online instead of running locally.
- Improve UI/UX for better customer interaction.

## Contribution

Feel free to contribute by submitting pull requests or reporting issues.


