import { useState, useEffect } from "react";
import "@radix-ui/themes/styles.css";
import './App.css';
import { Box } from "@radix-ui/themes";
import NavigationMenu from "./components/navMenu";
import DripEffect from "./components/DripEffect";
import { Route, Routes, useLocation } from "react-router-dom";
import MaisonBase from './pages/maisonBaseView';
import Documentation from './pages/documentationView';
import RaisonDetre from './pages/raisonDetreView';
import LearnMore from './pages/learnMoreView';
import GettingStarted from './pages/installationView';
import FAQs from './pages/faqsView';
import AIComponents from './pages/aiComponentView';
import AgenticAI from './pages/agenticAIView';
import UIComponents from './pages/uiComponentView';
import CodexFooter from "./components/codexFooter";
import MitoMCP from "./pages/mcpServerView";
import AuthComponents from "./pages/authComponentView";
import DataComponents from "./pages/dataComponentView";
import ControlsComponents from "./pages/controlsComponentView";
import MultimediaComponents from "./pages/multimediaComponentView";
import InfoComponents from "./pages/infoComponentView";
import ScrollToTop from "./components/ScrollToTop";
import { useTargetedInspectDeterrent } from "./hooks/useDisableInspect";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation(); 
  useTargetedInspectDeterrent();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
    <Box
    width="100%"
    px={{ initial: "3", md: "5" }}
    py={{ initial: "4", md: "6" }}
    style={{ boxSizing: "border-box", overflowX: "clip" }} 
    >
      <NavigationMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {location.pathname === '/' && (
        <div style={{ position: 'absolute', top: '70px', left: 0, right: 0, width: '100%', zIndex: 10 }}>
          <DripEffect 
            color={isDarkMode ? "#000000" : "#111111"} 
            speed={0.5} 
          />
        </div>
      )}

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MaisonBase darkMode={isDarkMode} />}/>
        <Route path='documentation' element={<Documentation/>}/>
        <Route path='components' element={<UIComponents darkMode={isDarkMode} />}/>
        <Route path='components/ai' element={<AIComponents/>}/>
        <Route path='components/controls' element={<ControlsComponents/>}/>
        <Route path='components/multimedia' element={<MultimediaComponents/>}/>
        <Route path='components/modals' element={<InfoComponents/>}/>
        <Route path='components/data' element={<DataComponents/>}/>
        <Route path='components/authentication' element={<AuthComponents/>}/>
        <Route path='mito-mcp' element={<MitoMCP/>}/>
        <Route path='mito-imperative' element={<RaisonDetre/>}/>
        <Route path='raison-detre' element={<RaisonDetre/>}/>
        <Route path='learn' element={<LearnMore/>}/>
        <Route path='getting-started' element={<GettingStarted/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='agentic-ai' element={<AgenticAI/>}/>
      </Routes>
      <CodexFooter/>
    </Box> 
    </>
  )
}

export default App;