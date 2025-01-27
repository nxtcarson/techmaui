import React from 'react';

function Study() {
  const studyMethods = [
    {
      title: "Pomodoro Technique",
      description: "Work in focused 25-minute intervals with 5-minute breaks.",
      tools: [
        { name: "Forest", url: "https://www.forestapp.cc", description: "Plant virtual trees that grow during focus time. Trees die if you leave the app." },
        { name: "Pomofocus", url: "https://pomofocus.io", description: "Simple, free online pomodoro timer with task tracking." }
      ],
      tips: [
        "Start with 25-minute sessions and adjust based on your needs",
        "Use the break to stretch, hydrate, or do quick exercises",
        "After 4 pomodoros, take a longer 15-30 minute break"
      ]
    },
    {
      title: "Spaced Repetition",
      description: "Review information at gradually increasing intervals for better retention.",
      tools: [
        { name: "Anki", url: "https://apps.ankiweb.net", description: "Powerful flashcard app using spaced repetition algorithms." },
        { name: "Quizlet", url: "https://quizlet.com", description: "Create and share flashcard sets with various study modes." }
      ],
      tips: [
        "Create your own flashcards for better understanding",
        "Review cards daily for maximum effectiveness",
        "Use images and mnemonics for complex concepts"
      ]
    },
    {
      title: "Active Recall",
      description: "Test yourself on material instead of passively reviewing.",
      tools: [
        { name: "Notion", url: "https://notion.so", description: "Create toggles and databases for self-testing." },
        { name: "RemNote", url: "https://remnote.com", description: "Note-taking app built around active recall principles." }
      ],
      tips: [
        "Write questions before reading a chapter",
        "Explain concepts without looking at notes",
        "Create practice tests for yourself"
      ]
    },
    {
      title: "Mind Mapping",
      description: "Visualize connections between concepts and ideas.",
      tools: [
        { name: "XMind", url: "https://xmind.net", description: "Professional mind mapping software with beautiful templates." },
        { name: "MindMeister", url: "https://mindmeister.com", description: "Collaborative online mind mapping tool." }
      ],
      tips: [
        "Start with a central concept and branch out",
        "Use colors and images for better recall",
        "Review and revise maps regularly"
      ]
    },
    {
      title: "Note-Taking Systems",
      description: "Structured approaches to organizing information.",
      tools: [
        { name: "Obsidian", url: "https://obsidian.md", description: "Create a personal knowledge base with linked notes." },
        { name: "OneNote", url: "https://onenote.com", description: "Microsoft's feature-rich note-taking app." }
      ],
      tips: [
        "Use the Cornell Method for lectures",
        "Try different systems to find what works for you",
        "Review and organize notes regularly"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Environment Setup",
      practices: [
        "Find a quiet, well-lit study space",
        "Use noise-cancelling headphones or white noise",
        "Keep your study area clean and organized",
        "Have good posture and ergonomic setup",
        "Ensure proper lighting to reduce eye strain"
      ]
    },
    {
      title: "Digital Wellness",
      practices: [
        "Use blue light filters in the evening",
        "Take regular screen breaks (20-20-20 rule)",
        "Keep backup copies of important notes",
        "Use cloud sync for accessibility",
        "Maintain a healthy screen distance"
      ]
    },
    {
      title: "Time Management",
      practices: [
        "Create a realistic study schedule",
        "Set specific, achievable goals",
        "Use calendar blocking for subjects",
        "Track your productive hours",
        "Build in buffer time for flexibility"
      ]
    }
  ];

  return (
    <div className="w-full space-y-8 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 mb-4">
          Study Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn effectively with proven study methods and digital tools.
        </p>

        {/* Study Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-6">Study Methods</h2>
          <div className="space-y-8">
            {studyMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-purple-700 mb-2">Recommended Tools:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {method.tools.map((tool, toolIndex) => (
                      <a
                        key={toolIndex}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <span className="font-medium text-purple-900">{tool.name}</span>
                        <p className="text-sm text-purple-700 mt-1">{tool.description}</p>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Tips:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {method.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-900 mb-6">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestPractices.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{practice}</span>
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

export default Study; 