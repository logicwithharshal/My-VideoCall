# NexMeet 🎥

**Meet without limits.** A full-stack real-time video conferencing platform built with WebRTC, Socket.io, and React.

🔗 **Live Demo:** [nexmeet-frontend-vqv6.onrender.com](https://nexmeet-frontend-vqv6.onrender.com)

---

## ✨ Features

- 🎥 **Real-time video calls** — peer-to-peer video communication using WebRTC
- 🔊 **Audio support** — real-time audio streaming between participants
- 💬 **In-meeting chat** — send messages during a live call
- 🖥️ **Screen sharing** — share your screen with other participants
- 🎛️ **Media controls** — toggle camera and microphone on/off anytime
- 👤 **User authentication** — secure login and registration with JWT
- 📋 **Meeting history** — view all your past meetings
- 🔗 **Instant rooms** — create or join meetings with a simple code
- 📱 **Clean UI** — minimal dark theme designed for focus

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Socket.io Client
- WebRTC API
- Material UI (MUI)
- React Router DOM
- CSS Modules

**Backend:**
- Node.js
- Express.js
- Socket.io
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/logicwithharshal/My-VideoCall.git
cd My-VideoCall
```

**2. Setup Backend**
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

Start the backend:
```bash
npm run dev
```

**3. Setup Frontend**
```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
NexMeet/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── socketManager.js
│   │   │   └── user.controller.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── meeting.model.js
│   │   ├── routes/
│   │   │   └── users.routes.js
│   │   └── app.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── landing.jsx
    │   │   ├── authentication.jsx
    │   │   ├── home.jsx
    │   │   ├── VideoMeet.jsx
    │   │   └── history.jsx
    │   ├── contexts/
    │   │   └── AuthContext.jsx
    │   ├── styles/
    │   └── utils/
    └── package.json
```

---

## 🔑 How It Works

1. **Register/Login** — Create an account or sign in securely
2. **Create a meeting** — Click "New Meeting" to generate a unique room code
3. **Share the code** — Share the room code with anyone you want to call
4. **Join** — Enter the room code and your name to join the meeting
5. **Connect** — Video and audio streams automatically via WebRTC

---

## 🌐 Deployment

- **Frontend** — Deployed on [Render](https://render.com)
- **Backend** — Deployed on [Render](https://render.com)
- **Database** — MongoDB Atlas

---

## 👨‍💻 Author

**Harshal Raut**
- GitHub: [@logicwithharshal](https://github.com/logicwithharshal)
- Portfolio: [Harshal Raut](https://harshalraut.netlify.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star!