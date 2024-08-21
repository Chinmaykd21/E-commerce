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

### Learnings

- Using Zustand for global state management for items in carts
- Persist global state in `localStorage` using zustand middleware
- Solving hydration error in next js while using `localStorage` with zustand middleware.
  - The error can occur when accessing `localStorage` or any browser-specific APIs during server-side rendering (SSR) because NextJS renders application twice, first on server and then on client.
  - In Zustand middleware, we try to access `localStorage` which is not accessible on the server.
  - This causes content in component rendered on server to not match with content rendered on client,
    causing next js to throw hydration error.
  - Zustand documentation already has a solution for this. We set a property called [skipHydration](https://docs.pmnd.rs/zustand/integrations/persisting-store-data#skiphydration) to true
    in the zustand middleware and manually rehydrate only the client component.
- Even though my global state was persisted in `localStorage` successfully, Those changes were not reflecting on the UI
  - The reason behind this issue was a simple one. Each browser tab runs its own javascript context, so any update on one tab is not updated on another.
  - `localStorage` comes in handy in this situation. Because `localStorag` persists even after client is refreshed, and it can be shared across multiple tabs as well. In my case, I was already syncing data with `localStorage`, so one half of the solution was already in place.
  - Next, I added a event listener on `localStorage`. Anytime my `localStorage` gets updated, the associated function handler gets latest cart update from the `localStorage`, and sets it to its global state variable managed with zustand.
  - Additionally the `storage` event is only triggered on other tabs, not the tab that initiated it, which is why the function call to handle this event is also called on another browser to respond to that event.
- After making this change, every time user has multiple tabs, perform any updates on the one tab, all the tabs will recieve those updates.

### Summary/Future enhanecments:

- `Zustand with Next.js`: Handling `localStorage` in Next.js with Zustand requires careful consideration of hydration errors due to SSR. Using `skipHydration: true` and manually hydrating on the client solves this problem.

- `State Synchronization Across Tabs`: Local storage changes do not automatically propagate across tabs. To sync state across multiple browser tabs, you need to listen to the storage event and update the Zustand state accordingly.

- `Limitations and Future Enhancements`: Local storage and Zustand handle synchronization well within a single client across multiple tabs but do not extend to multiple clients. For cross-client synchronization, a backend solution involving session management and database persistence is necessary.
