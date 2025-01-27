import React from 'react';

function Research() {
  const researchTools = [
    {
      title: "Academic Search Engines",
      description: "Find scholarly articles and research papers.",
      tools: [
        { 
          name: "Google Scholar", 
          url: "https://scholar.google.com", 
          description: "Search academic papers, citations, and patents.",
          tips: "Use quotation marks for exact phrases and author: for specific authors."
        },
        { 
          name: "Semantic Scholar", 
          url: "https://www.semanticscholar.org", 
          description: "AI-powered research paper search with impact tracking.",
          tips: "Great for finding related papers and tracking citations."
        },
        { 
          name: "Microsoft Academic", 
          url: "https://academic.microsoft.com", 
          description: "Comprehensive academic search engine with visualization tools.",
          tips: "Use the visualization tools to explore research topics."
        }
      ]
    },
    {
      title: "Citation Tools",
      description: "Generate and manage citations and bibliographies.",
      tools: [
        { 
          name: "Zotero", 
          url: "https://www.zotero.org", 
          description: "Free, open-source citation manager with browser integration.",
          tips: "Install the browser extension to save papers directly."
        },
        { 
          name: "Mendeley", 
          url: "https://www.mendeley.com", 
          description: "Reference manager with PDF annotation features.",
          tips: "Use groups feature for collaborative research."
        },
        { 
          name: "CitationMachine", 
          url: "https://citationmachine.net", 
          description: "Quick citation generator for multiple formats.",
          tips: "Double-check generated citations for accuracy."
        }
      ]
    },
    {
      title: "Writing & Analysis",
      description: "Tools for writing, editing, and analyzing research papers.",
      tools: [
        { 
          name: "Grammarly", 
          url: "https://www.grammarly.com", 
          description: "AI-powered writing assistant for grammar and style.",
          tips: "Use the plagiarism checker for academic integrity."
        },
        { 
          name: "Hemingway Editor", 
          url: "https://hemingwayapp.com", 
          description: "Makes your writing clear and concise.",
          tips: "Great for simplifying complex academic language."
        },
        { 
          name: "Overleaf", 
          url: "https://www.overleaf.com", 
          description: "Online LaTeX editor for professional documents.",
          tips: "Perfect for math and science papers with equations."
        }
      ]
    },
    {
      title: "Data Analysis",
      description: "Tools for analyzing and visualizing research data.",
      tools: [
        { 
          name: "JASP", 
          url: "https://jasp-stats.org", 
          description: "Free statistical analysis software with user-friendly interface.",
          tips: "Great alternative to SPSS for statistical analysis."
        },
        { 
          name: "Tableau Public", 
          url: "https://public.tableau.com", 
          description: "Create interactive data visualizations.",
          tips: "Use for creating compelling research presentations."
        },
        { 
          name: "Python (with Jupyter)", 
          url: "https://jupyter.org", 
          description: "Interactive computing and data analysis platform.",
          tips: "Perfect for reproducible research and data analysis."
        }
      ]
    }
  ];

  const researchTips = [
    {
      title: "Finding Sources",
      tips: [
        "Use multiple search engines for comprehensive results",
        "Check paper references for related research",
        "Set up Google Scholar alerts for new papers",
        "Access papers through your institution's library",
        "Use Sci-Hub as a last resort for paywalled articles"
      ]
    },
    {
      title: "Evaluating Sources",
      tips: [
        "Check journal impact factors",
        "Look for peer-reviewed articles",
        "Verify author credentials",
        "Check publication dates for relevance",
        "Cross-reference findings with multiple sources"
      ]
    },
    {
      title: "Organization",
      tips: [
        "Create a clear file naming system",
        "Use reference management software",
        "Keep detailed research notes",
        "Back up your research regularly",
        "Use cloud storage for accessibility"
      ]
    }
  ];

  return (
    <div className="w-full space-y-8 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 mb-4">
          Research Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Essential tools and techniques for effective academic research.
        </p>

        {/* Research Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-6">Research Tools</h2>
          <div className="space-y-8">
            {researchTools.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-purple-50 rounded-lg p-4">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-purple-900 hover:text-purple-700 transition-colors"
                      >
                        {tool.name}
                      </a>
                      <p className="text-sm text-purple-700 mt-1">{tool.description}</p>
                      <p className="text-sm text-gray-600 mt-2 italic">{tool.tips}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-900 mb-6">Research Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchTips.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Research; 