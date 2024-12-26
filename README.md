# Eresmicapricho - A Personal Blog Website

A personal website with blog functionality built using React, Flask, and AWS S3.

## Features

- Personal portfolio showcase
- Blog post creation and management
- AWS S3 integration for content storage

## Tech Stack

- **Frontend**: React
- **Backend**: Flask
- **Storage**: AWS S3
- **Package Management**: Poetry (Python), npm (Node.js)

## Prerequisites

- Python 3.9+
- Node.js 16+
- AWS Account
- Poetry


## Project Structure

eresmicapricho/
├── frontend/ # React application
├── backend/ # Flask server
├── .env.example # Example environment variables
├── .gitignore # Git ignore rules
└── README.md # This file


## Getting Started

### Backend Setup

1. Clone the repository

2. Install Python dependencies
```cd backend```
```poetry install```

3. Set up environment variables
```cp .env.example .env  # Edit .env with your actual credentials```

4. Run Flask server
```poetry shell```
```flask run```


### Frontend Setup

1. Install Node.js dependencies
```cd frontend```
```npm install```

2. Start development server
```npm run dev```


## Environment Variables
Create a `.env` file in the project root with the following variables:

```
FLASK_APP=app.py
FLASK_ENV=development
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_BUCKET_NAME=your_bucket_name
```

## Development

- Frontend runs on `http://localhost:5173`
- Backend API runs on `http://localhost:5000`
