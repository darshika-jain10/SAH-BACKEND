Sahi pakde hain bhai! 💪  
Yeh le — **Room CRUD API** ke liye ek simple aur clear **API Documentation** with `cURL` examples. Isse Postman ya terminal se easily test kar sakta hai.

---

## 🧠 Base URL:
```
http://localhost:5000/api/rooms
```

---

## 📦 1. Create Room

**POST** `/api/rooms`

```bash
curl -X POST http://localhost:5000/api/rooms \
-H "Content-Type: application/json" \
-d '{
  "roomNumber": 101,
  "roomType": "bedroom",
  "devices" : "23",
    "configurations": {
    "hardware": ["esp", "esp82"],
    "connectionType": "wifi"
  }
}'
```

---

## 📚 2. Get All Rooms

**GET** `/api/rooms`

```bash
curl http://localhost:5000/api/rooms
```

---

## 🔍 3. Get Single Room (by ID)

**GET** `/api/rooms/:id`

```bash
curl http://localhost:5000/api/rooms/<ROOM_ID>
```

Replace `<ROOM_ID>` with actual MongoDB ID.

---

## ✏️ 4. Update Room

**PUT** `/api/rooms/:id`

```bash
curl -X PUT http://localhost:5000/api/rooms/<ROOM_ID> \
-H "Content-Type: application/json" \
-d '{
  "roomType": "kitchen",
  "devices" : "43"
  "configurations": {
    "hardware": ["resbery82"],
    "connectionType": "ethernet"
  }
}'
```

---

## ❌ 5. Delete Room

**DELETE** `/api/rooms/:id`

```bash
curl -X DELETE http://localhost:5000/api/rooms/<ROOM_ID>
```

---

Agar tu chahe toh isme auth tokens, user-based filtering, ya swagger docs bhi integrate karwa sakte hain. Bole toh ekdum production-level feel dila denge. Btao kya scene banaye?