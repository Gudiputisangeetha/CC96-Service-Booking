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

### OTP
123456

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
git clone <repo-url>
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
MONGO_URI=your_mongodb_uri
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