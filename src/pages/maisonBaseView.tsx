import CallToAction from "../components/callToAction";
import SloganRibbon from "../components/sloganRibbon";
import devLogo from '../assets/agentic-icon.png';
import AgenticRibbon from "../components/agenticRibbon";

const MaisonBase = () => {
    return(
        <>
          <SloganRibbon title="Step through the looking glass" content="Vanguard component library & Model Context Protocol server optimized for rapid agentic development, extensibility and accessibilty"/>
          <CallToAction version={1} imgSrc={devLogo} heading='AI Components' subheading='Empower Your Interface with Generative AI' 
          content='Seamlessly bridge the gap between large language models, backend services, and the DOM. Purpose-built functional components engineered to handle streaming data, generative workflows, and context-aware interactions right out of the box—transforming static pages into autonomous experiences.'
          routePath='ai-components'
          buttonText='Explore AI Components →' buttonVersion={1}/>
           <CallToAction version={2} imgSrc={devLogo} heading='UI Control & Data Components' subheading='Command Complex Data at Scale' 
          content='From high-throughput data tables to complex temporal forms, leverage a suite of resilient, accessible controls. Built for enterprise-grade density, these components give you absolute command over how complex data is captured, mutated, and displayed.'
          routePath='components'
          buttonText='Browse UI Controls →' buttonVersion={1}/>
           <CallToAction version={1} imgSrc={devLogo} heading='Model Context Protocol (Agentic) Server' subheading='Supercharge Your Agents with Mito MCP' 
          content='Eliminate LLM hallucinations and accelerate development. Mito MCP (Model Context Protocol) server streams strict, strongly typed architectural blueprints directly into your IDE, empowering autonomous agents to generate secure user interfaces and zero-trust infrastructure on demand.'
          routePath='agentic-ai'
          buttonText='Connect Your IDE →' buttonVersion={1}/>
           <CallToAction version={2} imgSrc={devLogo} heading='Theme Friendly, Multi-Variant Design' subheading='Fluid Multi-Variant Design System' 
          content='Switch seamlessly between vivid Outline, tactile Material, and context-aware Neumorphic styles. Natively supports light/dark modes and dynamic brand colors for pixel-perfect contrast in any environment.'
          routePath='ai-components'
          buttonText='Explore Theming →' buttonVersion={0}/>
          <CallToAction version={1} imgSrc={devLogo} heading='TypeScript enhanced code quality' subheading='Deploy with Absolute Confidence' 
          content='Engineered with strict end-to-end type safety. Experience flawless IDE autocomplete, predictable state transitions, and zero-regression deployments across your entire stack.'
          routePath='ai-components'
          buttonText='Discover →' buttonVersion={0}/>
          <AgenticRibbon />
        
        </>
    )
}

export default MaisonBase;