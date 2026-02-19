# Uber-like Application - Frontend

## Tech Stack
- Angular (using material)
- Leaflet (OpenStreet)

## Description

This project is an Uber-like application that allows users to request transportation services similar to Uber. The goal is to simplify the transportation process, reduce interaction with the driver, and ensure faster, more consistent, and safer transportation for users. The application caters to four types of users:

1. Unregistered Users - They can view basic information about the application and enter their pickup and drop-off locations to get estimated time and cost for transportation.

2. Registered Users - They can request rides, receive real-time notifications about the status of their ride, track vehicles on the map, rate drivers and vehicles after the ride, and access their ride history. They can also schedule future rides to prioritize assignment during peak hours. Additionally, users can define favorite routes for quick selection and use the PANIC button during a ride to alert the dispatcher of any issues. They can also update their profile information and contact support for assistance.

3. Drivers - They are automatically assigned rides by the system and receive pickup and drop-off locations. They can edit their profile, view their ride history, generate ride reports, and access the PANIC button. Drivers can manually switch their availability status and will be marked as unavailable if they exceed 8 working hours in a day.

4. Administrators - They can create driver accounts, view information and ride status of any driver, access driver history and generate reports. Administrators can block users and drivers, respond to PANIC notifications, and provide 24/7 live chat support.

## How to Run

1. Clone the repository
2. Set up the [backend](https://github.com/VukRadmilovic/uber-like-backend) 
3. Install frontend dependencies:
```
npm install
```
4. Start the frontend development server:
```
npm start
```
5. Open your web browser and visit http://localhost:4200 to access the application.

## Screenshots
<img width="1919" height="910" alt="cargobrrr" src="https://github.com/user-attachments/assets/ae7f8a84-ae41-43cf-bc4b-e2c61d05b1fe" />
<img width="1909" height="911" alt="cargobrrr_login" src="https://github.com/user-attachments/assets/1e7d984b-be5c-400e-bb67-0277ab4f8065" />

## Related repositories
1. [Backend](https://github.com/VukRadmilovic/uber-like-backend)
2. [Mobile application](https://github.com/VukRadmilovic/uber-like-mobile-app)
