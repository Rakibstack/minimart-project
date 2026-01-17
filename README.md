# MiniMart - Product Management Platform

MiniMart is a modern product listing and management platform built with **Next.js (App Router)** and **Express.js**.  
It allows users to explore products, view detailed information, and manage products through a clean and intuitive interface.

---

## 🚀 Live Demo

[Live Site Link](https://your-vercel-link.vercel.app)  <!-- Replace with your deployed link -->

---

## 🛠 Technologies Used

- **Frontend:** Next.js 16 (App Router), React, Tailwind CSS  
- **Backend:** Express.js API (for fetching and managing product data)  
- **Authentication:** Mock login (hardcoded email/password stored in cookies)  
- **Icons & UI Enhancements:** Lucide React, Tailwind hover & transition effects  
- **Deployment:** Vercel (Frontend)  

---

## 🗂 Project Structure


---

## 🌟 Features

### Landing Page
- Hero section with main CTA  
- Product trust & stats section  
- Features section with interactive hover effects  
- Product categories & featured products  
- “Why Choose Us” and final CTA sections  
- Fully responsive & dark/light mode ready  

### Authentication
- Mock login using a hardcoded email & password  
- Stores credentials in **cookies**  
- Protected routes for authenticated users (optional NextAuth.js integration possible)  

### Item List Page
- Dynamic list of products fetched from Express.js API / JSON  
- Product cards include: name, description, price, image  
- Interactive hover effects on each card  

### Item Details Page
- Full details of single product  
- Accessible without authentication  

### Optional: Add Item Page (Protected)
- Accessible only to logged-in users  
- Form to add new products  
- Sends new product data to Express.js backend  
- Success toast notification  

---


