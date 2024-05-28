import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthStore from "./contexts/AuthStore";
import EventsPage from "./pages/EventsPage";
import CreateEventPage from "./pages/CreateEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventUpdatePage from './pages/EventUpdatePage';
import EventVotePage from "./pages/EventVotePage";
import JuryDetailPage from "./pages/JuryDetailPage";

function App() {
  return (
    <>
    <AuthStore>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/events-update/:eventId" element={<EventUpdatePage />} />
        <Route path="/events-jury/:eventId" element={<EventVotePage />} />
        <Route path="/juries/:juryId" element={<JuryDetailPage />} />
      </Routes>
      </AuthStore>
    </>
  );
}

export default App;
