Container–Presenter Pattern (aka Smart–Dumb Components)

1️⃣ Core Idea

Separate concerns: Keep business logic (data fetching, state management, API calls) separate from UI rendering.

Container (Smart Component): Handles logic, state, and side effects.

Presenter (Dumb/Display Component): Handles UI, receives data via props, and raises events back to the container.

2️⃣ Roles & Responsibilities
Component Type	Responsibilities	Example
Container	- Fetch data from APIs
- Manage state (loading, error, cart, filters)
- Handle business logic (add to cart, sorting, filtering)	ProductListContainer
Presenter	- Render UI based on props
- Emit events (like button clicks)
- Stateless or minimal local state	ProductListPresenter, ProductCard, CartSummary
3️⃣ Benefits

Separation of concerns – Logic and UI are decoupled.

Reusability – Presenter components can be reused with different data sources.

Testability – Containers and Presenters can be tested independently.

Maintainability – Easier to debug, extend, or refactor large applications.

4️⃣ Typical Flow

Container mounts → fetches data from API → updates state.

Container passes state as props → to Presenter.

Presenter renders UI → user interacts → triggers callback.

Callback goes back to Container → Container updates state/business logic → Presenter re-renders with new props.

5️⃣ Example Structure
/src
  /containers
    ProductListContainer.jsx   # handles state, API calls
  /components
    ProductListPresenter.jsx   # renders products grid
    ProductCard.jsx            # displays single product
    CartSummary.jsx            # shows cart info
    SortFilterControls.jsx     # sort/filter UI