import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  const [, setLocation] = useLocation();
  
  // Handle GitHub Pages base URL
  const baseUrl = '/WaitlistWizard';
  
  return (
    <Switch>
      <Route path={`${baseUrl}/`} component={Home} />
      <Route path={`${baseUrl}/:rest*`} component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
