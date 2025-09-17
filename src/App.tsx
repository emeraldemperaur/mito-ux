import "@radix-ui/themes/styles.css";
import './App.css';
import { Box } from "@radix-ui/themes";
import NavigationMenu from "./components/navMenu";
import { Route, Routes } from "react-router-dom";
import MaisonBase from './pages/maisonBaseView';
import Documentation from './pages/documentationView';
import DigitalStore from './pages/digitalStoreView';
import RaisonDetre from './pages/raisonDetreView';
import AboutDeveloper from './pages/aboutDevView';
import LearnMore from './pages/learnMoreView';
import GettingStarted from './pages/installationView';
import FAQs from './pages/faqsView';
import AIComponents from './pages/aiComponentView';
import AgenticAI from './pages/agenticAIView';
import UIComponents from './pages/uiComponentView';
import CodexFooter from "./components/codexFooter";



function App() {
  

  return (
    <>
    <Box
    width="100%"
    px={{ initial: "3", md: "5" }}
    py={{ initial: "4", md: "6" }}
    style={{ boxSizing: "border-box" }}
    >
     <NavigationMenu/>
     <Routes>
        <Route path='/' element={<MaisonBase/>}/>
        <Route path='documentation' element={<Documentation/>}/>
        <Route path='components' element={<UIComponents/>}/>
        <Route path='store' element={<DigitalStore/>}/>
        <Route path='mito-imperative' element={<RaisonDetre/>}/>
        <Route path='about' element={<AboutDeveloper/>}/>
        <Route path='learn' element={<LearnMore/>}/>
        <Route path='getting-started' element={<GettingStarted/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='ai-components' element={<AIComponents/>}/>
        <Route path='agentic-ai' element={<AgenticAI/>}/>
      </Routes>
      <CodexFooter/>
    </Box> 
    </>
  )
}

export default App
