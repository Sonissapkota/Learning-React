# Weather App

This is a React-based weather application that fetches and displays current weather information for a specified location. The data is updated periodically to simulate real-time updates and provides details such as temperature, humidity, wind speed, and weather conditions, pulled from the OpenWeatherMap API.

## Features

- **Live Weather Information**: Displays current temperature, humidity, wind speed, and weather condition description.
- **Periodic Updates**: Updates weather information every minute to keep data fresh.
- **Simple, Responsive UI**: A clean card design that looks great on all devices.

## Demo

A sample screenshot of the weather card UI:

![Weather Card Screenshot](screenshot.png)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Obtain OpenWeatherMap API Key**:
   - Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up to get your API key.
   - Replace the `api_key` in the `WeatherApp` component with your key.

4. **Start the development server**:
    ```bash
    npm start
    ```

   The app should now be running at `http://localhost:3000`.

## Usage

- The app fetches and displays weather data for the default location, "Kathmandu".
- To change the default location:
    - Update the `city` state in the `WeatherApp` component.

## Project Structure

- **`WeatherApp.js`**: Main component that manages data fetching and displays weather information.
- **`App.css`**: Contains styling for the weather card UI.

## API Reference

This app uses the **OpenWeatherMap API**. The endpoint format is as follows:
```
https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric
```

**Parameters**:
- `q`: City name (e.g., "Kathmandu").
- `appid`: Your unique API key from OpenWeatherMap.
- `units`: Set to `metric` for Celsius temperatures.

## Troubleshooting

- **Rate Limiting**: The free tier of the OpenWeatherMap API has limits. If you experience errors, consider upgrading your API plan.
- **API Key Issues**: Ensure your API key is valid and activated on OpenWeatherMap.


