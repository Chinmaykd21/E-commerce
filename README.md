# Mini E-commerce

- This project an e-commerce website with limited functionality such as
  - Display products ✅
  - view product ✅
  - add product to cart ✅
  - view product on cart ✅
  - remove product from cart ✅
  - clear cart ✅
  - change quantity of the product in the cart or while adding to cart ✅
  - converting global state to state management with zustand ✅
  - persist cart state when browser is refreshed ✅
  - pagination (optional)
  - rate limiting (optional)

### Learnings

- Using Zustand for global state management for items in carts
- Persist global state in localstorage using zustand middleware
- Solving hydration error in next js while using localstorage with zustand middleware.
  - This error happens because NextJS renders application twice, first on server and then on client.
  - In Zustand middleware, we try to access localstorage which is not accessible on the server.
  - This causes content in component rendered on server to not match with content rendered on client,
    causing next js to throw hydration error.
  - Zustand documentation already has a solution for this. We set a property called [skipHydration](https://docs.pmnd.rs/zustand/integrations/persisting-store-data#skiphydration) to true
    in the zustand middleware and manually rehydrate only the client component.
