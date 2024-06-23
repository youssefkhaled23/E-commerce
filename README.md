# eCommerce Website

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This eCommerce website is a modern web application built with React, Vite, and TypeScript. It features a user-friendly interface for browsing products, adding items to the cart, and checking out. The application uses Redux and Redux Toolkit for state management and React Hook Form for form handling and validation.

## Features

- Browse products by categories
- Search for products
- View product details
- Add and remove items from the shopping cart
- Checkout process
- User authentication and profile management
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - HTML5
  - CSS3
- **State Management:**
  - Redux
  - Redux Toolkit
- **Form Handling:**
  - React Hook Form
- **Other Libraries:**
  - Axios (for API calls)
  - React Router (for navigation)

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Youssefkhaled23/Ecommerce.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Ecommerce
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   or with Yarn:
   ```bash
   yarn dev
   ```
2. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Browsing Products:**
   - Navigate through categories or use the search bar to find products.

2. **Viewing Product Details:**
   - Click on a product to see detailed information, including price, description, and reviews.

3. **Managing the Shopping Cart:**
   - Add products to your cart from the product details page.
   - View your cart by clicking on the cart icon, where you can update quantities or remove items.

4. **Checking Out:**
   - Proceed to checkout from the cart page.
   - Fill in the required information and place your order.

## Project Structure

```
ecommerce-website/
├── public/
├── src/
│   ├── components/
│   │   ├── CartItem.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── features/
│   │   ├── cart/
│   │   │   ├── cartSlice.ts
│   │   │   └── ...
│   │   ├── products/
│   │   │   ├── productSlice.ts
│   │   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Cart.tsx
│   │   └── ...
│   ├── forms/
│   │   ├── CheckoutForm.tsx
│   │   └── ...
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── ...
```

### File Descriptions

- `src/components/`: Contains reusable UI components.
- `src/features/`: Contains Redux slices for different features (e.g., cart, products).
- `src/pages/`: Contains page components for different routes.
- `src/forms/`: Contains form components managed by React Hook Form.
- `src/services/`: Contains API service files for making HTTP requests.
- `App.tsx`: Main application component.
- `main.tsx`: Entry point of the application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** Youssefkhaled
- **Email:** your.email@example.com
- **GitHub:** [Youssefkhaled23](https://github.com/Youssefkhaled23)

---

Feel free to customize this template according to your specific project details, such as adding any additional features, dependencies, or instructions relevant to your eCommerce website.
