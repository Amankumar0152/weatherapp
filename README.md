# Weather Application (Spring Boot + HTML, CSS, JavaScript)

This project is a simple weather application built using Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend.  
The backend communicates with the OpenWeatherMap API to fetch real-time weather data based on the city name entered by the user.  
The frontend sends a request to the Spring Boot API and displays the weather information on the webpage.

The purpose of this project is to understand how REST APIs work, how to integrate third-party APIs, and how the frontend and backend communicate with each other.

## Features

- Search weather by city name  
- Fetch real-time weather data from OpenWeatherMap  
- Backend developed in Spring Boot  
- Frontend created using HTML, CSS, and JavaScript  
- API call handled using JavaScript fetch  
- Shows temperature, humidity, description, and wind  
- Easy to extend and customize  

## Technologies Used

### Backend
- Java  
- Spring Boot  
- Spring Web  
- RestTemplate  
- Maven  

### Frontend
- HTML  
- CSS  
- JavaScript  

### Third-Party API
- OpenWeatherMap API  

## How the Project Works

1. The user enters a city name in the frontend.  
2. JavaScript sends a GET request to the Spring Boot API.  
3. The backend receives the request and calls the OpenWeatherMap API using RestTemplate.  
4. OpenWeather returns weather data in JSON format.  
5. The backend returns the same JSON to the frontend.  
6. JavaScript reads the JSON and displays weather information on the webpage.

## How to Run This Project

### 1. Clone or download the project

Or download the ZIP and extract it.

### 2. Backend Setup (Spring Boot)

1. Open the backend project in IntelliJ IDEA, Eclipse, or Spring Tool Suite.  
2. Go to `src/main/resources/application.properties` and add your OpenWeather API key:
3. Run the Spring Boot main class:
4. The backend will start at:


### 3. Frontend Setup (HTML, CSS, JavaScript)

1. Open the `weather-frontend` folder.  
2. Make sure the files are named:



