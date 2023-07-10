import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import SidebarMenu from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/Invoices";
import Contacts from "./pages/contacts/index";
import FAQ from './pages/Faq';
import Form from './pages/Form';
import Bar from './pages/Bar';
import Line from './pages/Line';
import Pie from './pages/Pie';
import Geography from './pages/Geography';
import Calendar from './pages/Calendar';


function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarMenu />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
