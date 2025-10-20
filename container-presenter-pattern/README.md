# Container–Presenter Pattern in React

## What is the Container–Presenter Pattern?

The **Container–Presenter Pattern** (also known as **Smart–Dumb Component Pattern**) is a design approach in React that separates **business logic** from **UI rendering**.  

- **Container (Smart) Components**: Handle data fetching, state management, and business logic.  
- **Presenter (Dumb) Components**: Handle only UI rendering and user interactions, receiving data and callbacks via props.  

**Benefits:**
- Clear separation of concerns.
- Reusable and testable components.
- Easier maintenance and scalability.

---

## Assignment Overview

This assignment demonstrates how to implement the **Container–Presenter Pattern** in a real-world scenario: building a **Product List page** with cart functionality.  

The goal is to create a modular React application where **logic and presentation are strictly separated**.

---

## Assignment Explanation

The assignment consists of two main parts:

### 1. Container Component
- `ProductListContainer.jsx`
- Responsibilities:
  - Fetch products and categories from an API.
  - Handle filtering, sorting, and search.
  - Manage cart state (add, remove, update quantity).
  - Handle loading and error states.
- **No JSX rendering logic**: the container passes data and handlers as props to presenters.

### 2. Presenter Components
- `ProductListPresenter.jsx`, `ProductCard.jsx`, `SortFilterControls.jsx`, `CartSummary.jsx`
- Responsibilities:
  - Render the product list UI.
  - Display cart summary and product details.
  - Handle user interactions (clicks, filter changes, quantity updates) via callback props.
- **No API calls or business logic**: presenters only display the data provided by the container.

### 3. Benefits in this Assignment
- **Reusability**: Components like `ProductCard` and `CartSummary` can be reused elsewhere.
- **Testability**: Presenters can be tested independently from containers.
- **Maintainability**: Easier to extend features like filtering, sorting, or cart functionality without breaking the UI logic.

---

## How It Works

1. **Container fetches data** from a fake API server (products & categories).  
2. **Container manages state** like cart items, filters, sorting, and loading.  
3. **Container passes data and callbacks** to presenters via props.  
4. **Presenter renders the UI** (products, filters, cart) and triggers callbacks on user actions.  
5. **Container updates state** based on user actions → Presenter re-renders.

---

## Tech Stack
- React 19+
- Tailwind CSS
- Vite for bundling

---

## Folder Structure

