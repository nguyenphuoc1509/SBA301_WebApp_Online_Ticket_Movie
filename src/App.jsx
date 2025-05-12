import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
