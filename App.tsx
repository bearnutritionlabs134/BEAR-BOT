
import React, { useState } from 'react';
import { 
  Menu, ChevronRight, X, Sparkles
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ChatBot from './components/ChatBot';
import { pillars } from './data/bearContent';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Safety check: ensure activePillar exists
  const activePillar = pillars.find(p => p.id === activeSection) || pillars[0];

  return (
    <div className="min-h-screen bg-bear-dark text-bear-text flex overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-80 translate-x-0' : 'w-80 -translate-x-full md:w-20 md:translate-x-0'
        } bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col fixed md:relative z-30 h-full`}
      >
        <div className="p-6 flex items-center justify-between h-20">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'md:justify-center w-full'}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bear-primary to-bear-secondary flex items-center justify-center shadow-lg shadow-bear-primary/20 flex-shrink-0">
              <span className="font-bold text-bear-dark text-lg">B</span>
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-bear-primary to-bear-secondary whitespace-nowrap">
                BEAR KING
              </span>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 md:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
          <ul className="space-y-1 px-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeSection === pillar.id;
              return (
                <li key={pillar.id}>
                  <button
                    onClick={() => {
                      setActiveSection(pillar.id);
                      if (window.innerWidth < 768) setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-bear-primary/20 to-transparent text-white border-l-4 border-bear-primary'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className={`flex-shrink-0 ${isActive ? 'text-bear-primary' : 'text-slate-500 group-hover:text-white'} transition-colors`}>
                      <Icon size={24} />
                    </span>
                    {isSidebarOpen && (
                      <div className="flex-1 text-left">
                        <span className={`block text-sm font-medium ${isActive ? 'text-bear-primary' : ''}`}>
                          {pillar.title}
                        </span>
                      </div>
                    )}
                    {isSidebarOpen && isActive && (
                      <ChevronRight size={16} className="text-bear-primary" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Sidebar Toggle (Desktop) */}
        <div className="p-4 hidden md:flex justify-end border-t border-slate-800">
           <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </aside>

      {/* Mobile Toggle Overlay Button */}
      {!isSidebarOpen && (
        <button 
          className="md:hidden fixed top-4 left-4 z-40 bg-slate-900 p-3 rounded-full shadow-lg border border-slate-700 text-bear-primary"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto relative scrollbar-thin bg-bear-dark">
        <div className="max-w-5xl mx-auto p-6 md:p-12 pb-32">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700">
                {React.createElement(activePillar.icon, { size: 32, className: "text-bear-primary" })}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{activePillar.title}</h1>
                <p className="text-lg text-bear-secondary/80">{activePillar.description}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-bear-primary via-bear-accent to-transparent rounded-full opacity-50" />
          </div>

          {/* Content Sections */}
          <div className="grid gap-8">
            {activePillar.sections.map((section, index) => (
              <div 
                key={index} 
                className={`
                  relative p-8 rounded-3xl border transition-all duration-300
                  ${section.highlight 
                    ? 'bg-red-900/10 border-red-500/30 hover:border-red-500/50' 
                    : 'bg-slate-900/60 border-slate-700/50 hover:border-bear-primary/30'
                  }
                `}
              >
                {section.highlight && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    IMPORTANT
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-6 ${section.highlight ? 'text-red-400' : 'text-bear-primary'}`}>
                  {section.heading}
                </h3>
                
                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                  <ReactMarkdown
                    components={{
                      strong: ({node, ...props}) => <strong className="text-white font-extrabold" {...props} />,
                      ul: ({node, ...props}) => <ul className="space-y-2 list-disc ml-4 marker:text-bear-secondary" {...props} />,
                      ol: ({node, ...props}) => <ol className="space-y-2 list-decimal ml-4 marker:text-bear-accent" {...props} />,
                      li: ({node, ...props}) => <li className="pl-2" {...props} />,
                      p: ({node, ...props}) => <p className="leading-relaxed mb-4 last:mb-0" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-bear-accent pl-4 italic text-slate-400 my-4" {...props} />,
                    }}
                  >
                    {section.body}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Tip */}
          <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-bear-dark rounded-2xl border border-slate-800 flex items-start gap-4 opacity-75">
            <Sparkles className="w-6 h-6 text-bear-accent flex-shrink-0 mt-1" />
            <p className="text-sm text-slate-400 italic">
              Use the AI Chatbot to ask specific questions about "{activePillar.title}" or any other pillar of the Bear Cycle.
            </p>
          </div>

        </div>
      </main>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
};

export default App;
