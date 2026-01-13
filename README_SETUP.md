# Beleaf-Task - Frontend & Backend Setup ✅

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB

### Backend Setup

```bash
cd server
npm install
npm run dev
```

**Expected Output:**

```
✅ Server is running on port 5000
📍 API URL: http://localhost:5000/api
✅ MongoDB connected successfully
✅ Database has 3 advisors
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

**Expected Output:**

```
VITE v7.3.1  ready in 567 ms
➜  Local:   http://localhost:5173/
```

---

## 📡 API Endpoints

### Advisors

- **GET** `/api/advisors` - Fetch all advisors
- **POST** `/api/advisors` - Create new advisor
- **PUT** `/api/advisors/:id` - Update advisor
- **DELETE** `/api/advisors/:id` - Delete advisor

### Test Endpoints

- **GET** `/` - Check if API is running
- **GET** `/api/test` - Test backend connection

---

## 🔧 Technology Stack

### Backend

- **Express.js** - REST API server
- **MongoDB** - Database (Atlas)
- **Mongoose** - ODM for MongoDB
- **CORS** - Enable cross-origin requests
- **Nodemon** - Auto-restart on file changes

### Frontend

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios/Fetch** - API calls

---

## 📁 Project Structure

```
Beleaf-task/
├── client/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Testimonials.jsx (Fetches from API)
│   │   │   └── ... other components
│   │   └── App.jsx
│   └── package.json
│
├── server/              # Backend (Express)
│   ├── models/
│   │   └── Advisor.js
│   ├── controllers/
│   │   └── advisorController.js
│   ├── routes/
│   │   └── advisorRoutes.js
│   ├── index.js
│   ├── .env
│   └── package.json
```

---

## 🔌 Connection Details

### Environment Variables

**Backend (.env)**

```
PORT=5000
MONGO_URI="mongodb+srv://ashik1304ay_db_user:ashik-practice@cluster0.wfgpgvh.mongodb.net/beleaf-task"
```

**Frontend (.env)**

```
VITE_API_URL=http://localhost:5000/api
```

---

## ✨ Features Implemented

- ✅ Express.js REST API
- ✅ MongoDB integration with Mongoose
- ✅ CRUD operations for advisors
- ✅ Automatic seed data on first run
- ✅ CORS enabled for frontend-backend communication
- ✅ Testimonials component fetches from API
- ✅ Error handling and logging
- ✅ Responsive frontend with Tailwind CSS

---

## 🧪 Testing Connection

### Via Browser

1. **Backend alive:** http://localhost:5000/
2. **API test:** http://localhost:5000/api/test
3. **Get advisors:** http://localhost:5000/api/advisors
4. **Frontend:** http://localhost:5173/ or http://localhost:5174/

### Via cURL

```bash
curl http://localhost:5000/api/advisors
curl http://localhost:5000/api/test
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error

- ✅ Check internet connection
- ✅ Verify MongoDB Atlas IP whitelist includes your IP
- ✅ Ensure `.env` has correct `MONGO_URI`

### CORS Error

- ✅ CORS is enabled in backend (`app.use(cors())`)
- ✅ Ensure frontend `.env` has correct `VITE_API_URL`

### Port Already in Use

```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
export PORT=5001
npm run dev
```

### No Advisors Showing

- ✅ Check MongoDB connection (should see "✅ MongoDB connected")
- ✅ Check browser Network tab (should see successful API call)
- ✅ Check browser Console for errors

---

## 📝 Database Schema

```javascript
{
  _id: ObjectId,
  name: String (required),
  role: String (required),
  image: String (default: "Team Image.png"),
  socials: [String] (default: ["𝕏", "▶"]),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 Next Steps

1. Both servers are running ✅
2. API is connected to MongoDB ✅
3. Frontend is fetching advisor data ✅
4. Testimonials section displays team members ✅

Now you can continue building features!

---

**Backend Status:** ✅ Running on http://localhost:5000  
**Frontend Status:** ✅ Running on http://localhost:5173 or http://localhost:5174  
**Database Status:** ✅ Connected with 3 advisors
