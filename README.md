# Nestor Web-Project
---

# 🌐 Nestor Web

**Nestor Web** is a simple **Online Listings Web Application** built with **Node.js, Express.js, MongoDB, and EJS**.
It allows users to browse listings, view details, and manage them using a clean, responsive interface.

---

## ✨ Features

* 🏡 **Listings Management** – Create, read, update, and delete listings
* 🖼️ **Image Uploads** – Add images to listings using Multer
* 📱 **Responsive Design** – Styled with Bootstrap for all devices
* 🛠 **Error Handling** – Custom error page & validation
* ⚡ **MVC Structure** – Organized code with models, views, and routes

---

## 🛠 Tech Stack

* **Frontend:** EJS, Bootstrap 5 , CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Utilities:** Multer, Method-Override, ejs-mate , Joi

---

## 📂 Project Structure

```bash
Nestor-Web/
│── init/                 # Database seeding
│   ├── data.js
│   └── index.js
│
│── models/               # Mongoose models
│   └── listing.js
│
│── public/               # Static assets
│   ├── css/style1.css
│   └── js/script.js
│
│── utils/                # Helpers
│   ├── ExpressError.js
│   └── wrapAsync.js
│
│── views/                # EJS templates
│   ├── includes/         # Navbar, footer
│   ├── layouts/          # Boilerplate layout
│   ├── listings/         # Listing pages
│   └── error.ejs         # Error page
│
│── app.js                # Main application file
│── schema.js             # Joi validation schema
│── package.json
│── package-lock.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nestor-web.git
   cd nestor-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add:

   ```env
   PORT=8080
   MONGO_URI=your_mongo_connection_string
   ```

4. Run the project:

   ```bash
   npm start
   ```

5. Open in browser → **[http://localhost:8080](http://localhost:8080)** 🎉

---

## 🗄 Database Schema

**Listing Model**

```js
{
  title: String,
  description: String,
  price: Number,
  location: String,
  image: String
}
```

---

## 📸 Screenshots

![Main_Page](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 155904.png)

![New_Listing_Page](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 155928.png)

![Bottom_Main_page](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 160041.png)

![New_Listing_is_added](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 160053.png)

![Edit_Listing_Page](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 160109.png)

![New_Listing_deleted_page](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 160135.png)

![ErrorPage](imges/C:\Users\ACER\OneDrive\Desktop\Online-Booking-Project\Major Project\imges\Screenshot 2025-09-21 160209.png)



---

## 🚀 Future Improvements

* 🔑 Add user authentication
* 📅 Add booking system with availability
* ⭐ Add reviews & ratings
* ☁️ Deploy live with MongoDB Atlas

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Fork this repo, make your changes, and submit a pull request.

---
📜 License

This project is currently not licensed.
All rights reserved © 2025 Nikhil Ramteke.


---




