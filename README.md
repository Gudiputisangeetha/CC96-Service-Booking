# CC96 - Urban Service Booking Platform

A full-stack service booking web application inspired by Urban Company / MakeMyTrip.

## Tech Stack

### Frontend
- React.js
- HTML
- CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcryptjs

---

## Features

### Customer
- Signup with OTP verification (demo OTP)
- Login
- Book service
- Select service category

### Vendor
- Login
- View all bookings
- Accept booking
- Mark booking as delivered

---

## Demo Credentials

### Customer
Email: demo@test.com  
Password: Test@123  

### Vendor
Email: vendor@test.com  
Password: Test@123  

### Signup OTP Flow
For customer signup, click Send OTP. A demo OTP will be displayed in an alert popup. Enter the same OTP and click Verify OTP to complete signup.

---

## Project Structure

```bash
CC96-Service-Booking/
├── client
└── server
```

---

## Installation

### Clone repository

```bash
git clone https://github.com/Gudiputisangeetha/CC96-Service-Booking
```

---

### Backend setup

```bash
cd server
npm install
npm run dev
```

Create `.env`

```env
PORT=5000
MONGO_URI=mongodb://gudiputichaithanya_db_user:vfPry9jPJByFL7Yk@ac-bburgmg-shard-00-00.w0het9n.mongodb.net:27017,ac-bburgmg-shard-00-01.w0het9n.mongodb.net:27017,ac-bburgmg-shard-00-02.w0het9n.mongodb.net:27017/?ssl=true&replicaSet=atlas-lq8wnc-shard-0&authSource=admin&appName=Cluster0
JWT_SECRET=cc96secret
```

---

### Frontend setup

```bash
cd client
npm install
npm start
```

---

## API Endpoints

### Auth
- POST `/api/auth/signup`
- POST `/api/auth/login`

### Booking
- POST `/api/bookings/create`
- GET `/api/bookings/all`
- PUT `/api/bookings/accept/:id`
- PUT `/api/bookings/deliver/:id`

---

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Author
Gudiputi Sangeetha
