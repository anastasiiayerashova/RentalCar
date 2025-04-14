# 🚗 RentalCar

**RentalCar** is a web application for renting cars with filtering, detailed views, and the ability to add vehicles to a favorites list. The project follows modern frontend practices and emphasizes clean, reusable code.

---

## ⚙️ Tech Stack

- 🚀 **Vite** + ⚛️ **React** — for fast and efficient development
- 📦 **Redux Toolkit** — state management
- 🔗 **React Redux** — binding Redux to React
- 🛣️ **React Router** — routing between pages
- 🌐 **Axios** — HTTP requests
- 📝 **React Hook Form** + ✅ **Yup** — for form handling and validation
- 🎨 **MUI (Material UI)** — for UI components
- 🧩 **Custom Components**: DatePicker, Calendar, Snackbar, Alert, Select
- 🌍 **Vercel** — deployment platform for easy hosting

## 🔍 Main Features

- 🚗 **Car filtering by**:

  - **Brand**: Choose your preferred brand
  - **Price**: Set a price range
  - **Mileage**: Filter based on mileage

- 📌 **Favorites list**:

  - Users can **add/remove cars** to/from their favorites
  - **Data is saved in Local Storage**, ensuring it persists even after refreshing the page
  - Users can access the **Favorites** list easily from the navigation, making it convenient to revisit selected cars.
  - The list is **dynamically updated**, and the cars can be removed instantly from favorites with a simple click.

- 📄 **Detailed car page**:

  - Full car info displayed in an organized, user-friendly format
  - **Rental Conditions**:
    - Duration and cost per day, insurance information, and deposit details
  - **Car Specifications**:
    - Engine type, horsepower, transmission, fuel consumption, etc.
  - **Accessories and functionalities**:
    - Available extras such as GPS, car seats, audio system, air conditioning, etc.
    - Detailed descriptions of each feature, helping users make an informed decision.

- ✅ **Validated form**:

  - Built with `react-hook-form` for easy form management and `Yup` for schema-based validation
  - **Custom `Snackbar`** shows confirmation or error messages upon form submission, ensuring smooth user interaction
  - **Form fields** include inputs like name, email, rental duration, car model, and accessories selection
  - Dynamic form validation ensures that users provide the necessary information before submitting their booking request.

## 🔧 Code Principles and Best Practices

- 💡 **DRY principle** (Don't Repeat Yourself) is followed — components are reused, and logic is well-organized
- 📱 **Responsive Design** — The application is built to be mobile-friendly and adapts to different screen sizes.
- 🛠 **SOLID principles** — Following object-oriented design principles to create modular, flexible, and reusable code.
- 📂 **Separation of Concerns** — Each component and module has a clear responsibility, improving maintainability and scalability.
- 🚀 **YAGNI principle** (You Aren’t Gonna Need It) — Features are implemented only when they are needed, avoiding unnecessary code or functionality.

## 📁 Project Structure

```plaintext

src/
├── components/ # Reusable components
├── constants/ # App constants
├── fonts/ # App fonts
├── pages/ # Page components (HomePage, CatalogPage, DetailsPage, NotFoundPage)
├── redux/ # Redux store, slices, selectors
├── styles/ # Custom MUI styles
├── index.css # Global styles
├── main.jsx # App entry point
public/
├── favicon.svg # App favicon
├── symbol-defs.svg # SVG icons

```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/anastasiiayerashova/RentalCar

```

2. Install dependencies:

```bash
npm install

```

3. Start the development server:

```bash
npm run dev

```

## 👩‍💻 About the Author

**Anastasiia Yerashova** — Junior Full-Stack Developer passionate about writing clean and efficient code, growing professionally, and collaborating with purpose-driven teams.

> "As a passionate Junior Full-Stack Developer, I excel at delivering clean, reliable, and efficient solutions.  
> My goal is to grow professionally, achieve meaningful results, and work with people who share my drive for success.  
> I approach every task with responsibility and dedication, always giving 100%.  
> My ability to quickly adapt to new challenges and technologies allows me to thrive in agile and fast-paced environments."

## 📫 Contact

- [LinkedIn](www.linkedin.com/in/anastasia-yerashova)
- [GitHub](https://github.com/anastasiiayerashova)
- Email: yerashova.a@gmail.com

> Thank you for checking out the project! If you found it helpful or interesting, feel free to leave a ⭐ on the repository.
