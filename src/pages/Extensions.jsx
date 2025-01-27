function Extensions() {
  const extensions = [
    {
      name: "Grammarly",
      description: "Free writing assistant that helps you write mistake-free and with clarity.",
      icon: "/icons/grammarly.png",
      category: "Writing",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/grammarly-grammar-checker/cnlefmmeadmemmdciolhbnfeacpdfbkd"
      }
    },
    {
      name: "DeepL Translate",
      description: "Instantly translate text and full web pages with superior accuracy.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iIzA4MjBhZiIgZD0iTTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCA4LjUxMmE0LjE1NiA0LjE1NiAwIDAgMC00LjE1NiA0LjE1NmMwIDIuMjk0IDEuODYyIDQuMTU2IDQuMTU2IDQuMTU2czQuMTU2LTEuODYyIDQuMTU2LTQuMTU2UzIyLjI5NCA4LjUxMiAyMCA4LjUxMnptMCA2LjIzNGMtMS4xNDcgMC0yLjA3OC0uOTMxLTIuMDc4LTIuMDc4czAuOTMxLTIuMDc4IDIuMDc4LTIuMDc4IDIuMDc4IDAuOTMxIDIuMDc4IDIuMDc4LTAuOTMxIDIuMDc4LTIuMDc4IDIuMDc4eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yOC41MTIgMjBhNC4xNTYgNC4xNTYgMCAwIDAtNC4xNTYgNC4xNTZjMCAyLjI5NCAxLjg2MiA0LjE1NiA0LjE1NiA0LjE1NnM0LjE1Ni0xLjg2MiA0LjE1Ni00LjE1NlMzMC44MDYgMjAgMjguNTEyIDIwem0wIDYuMjM0Yy0xLjE0NyAwLTIuMDc4LTAuOTMxLTIuMDc4LTIuMDc4czAuOTMxLTIuMDc4IDIuMDc4LTIuMDc4IDIuMDc4IDAuOTMxIDIuMDc4IDIuMDc4LTAuOTMxIDIuMDc4LTIuMDc4IDIuMDc4eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40ODggMjBhNC4xNTYgNC4xNTYgMCAwIDAtNC4xNTYgNC4xNTZjMCAyLjI5NCAxLjg2MiA0LjE1NiA0LjE1NiA0LjE1NnM0LjE1Ni0xLjg2MiA0LjE1Ni00LjE1NlMxMy43ODIgMjAgMTEuNDg4IDIwem0wIDYuMjM0Yy0xLjE0NyAwLTIuMDc4LTAuOTMxLTIuMDc4LTIuMDc4czAuOTMxLTIuMDc4IDIuMDc4LTIuMDc4IDIuMDc4IDAuOTMxIDIuMDc4IDIuMDc4LTAuOTMxIDIuMDc4LTIuMDc4IDIuMDc4eiIvPjwvc3ZnPg==",
      category: "Translation",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/deepl-translate-beta-versi/cofdbpoegempjloogbagkncekinflcnj",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/to-deepl/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-beta-versi/cofdbpoegempjloogbagkncekinflcnj"
      }
    },
    {
      name: "ClearURLs",
      description: "Automatically remove tracking elements from URLs to enhance privacy.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTI0IDR2NGMtOC44NCAwLTE2IDcuMTYtMTYgMTZzNy4xNiAxNiAxNiAxNiAxNi03LjE2IDE2LTE2aC00YzAgNi42My01LjM3IDEyLTEyIDEycy0xMi01LjM3LTEyLTEyIDUuMzctMTIgMTItMTJ2NmwxMC04LTEwLTh6Ii8+PC9zdmc+",
      category: "Privacy",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/clearurls/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/clearurls/mdkdmaickkfdekbjdoojfalpbkgaddei"
      }
    },
    {
      name: "Google Scholar Button",
      description: "Quick access to Google Scholar from any web page and citation tools.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjNDI4NWY0IiBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMC41IDAtMjAwLTg5LjUtMjAwLTIwMFMxNDUuNSA1NiAyNTYgNTZzMjAwIDg5LjUgMjAwIDIwMC04OS41IDIwMC0yMDAgMjAweiIvPjxwYXRoIGZpbGw9IiM0Mjg1ZjQiIGQ9Ik0yNTYgMTI4Yy00NC4xIDAtODAgMzUuOS04MCA4MHMzNS45IDgwIDgwIDgwIDgwLTM1LjkgODAtODAtMzUuOS04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4eiIvPjwvc3ZnPg==",
      category: "Research",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/google-scholar-button/ldipcbpaocekfooobnbcddclnhejkcpn",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/google-scholar-button/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/google-scholar-button/ldipcbpaocekfooobnbcddclnhejkcpn"
      }
    },
    {
      name: "OneTab",
      description: "Convert your tabs into a list to save memory and reduce clutter.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzE5NzZkMiIgZD0iTTM4IDEySDIyYy0yLjIxIDAtNCAxLjc5LTQgNHYxNmMwIDIuMjEgMS43OSA0IDQgNGgxNmMyLjIxIDAgNC0xLjc5IDQtNFYxNmMwLTIuMjEtMS43OS00LTQtNHptLTIgMTJIMjR2LTRoMTJ2NHoiLz48cGF0aCBmaWxsPSIjMTk3NmQyIiBkPSJNMTAgMTJoMTJ2NEgxMHoiLz48L3N2Zz4=",
      category: "Productivity",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/onetab/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/onetab/hoimpamkkoehapgenciaoajfkfkpgfop"
      }
    },
    {
      name: "Momentum",
      description: "Replace new tab page with a personal dashboard featuring to-dos, weather, and inspiration.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzY1YjJjYyIgZD0iTTI0IDRDMTIuOTUgNCA0IDEyLjk1IDQgMjRzOC45NSAyMCAyMCAyMCAyMC04Ljk1IDIwLTIwUzM1LjA1IDQgMjQgNHptMCAzNmMtOC44MiAwLTE2LTcuMTgtMTYtMTZTMTUuMTggOCAyNCA4czE2IDcuMTggMTYgMTYtNy4xOCAxNi0xNiAxNnoiLz48cGF0aCBmaWxsPSIjNjViMmNjIiBkPSJNMjYgMTRoLTR2MTJsOC42IDUuMiAxLjQtMi4yNy03LTQuMjNWMTR6Ii8+PC9zdmc+",
      category: "Productivity",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/momentumdash/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/momentum/jdoanlopeanabgejgmdncljhkdplcfed"
      }
    },
    {
      name: "Dark Reader",
      description: "Dark mode for every website. Take care of your eyes, use dark theme for night and daily browsing.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzc4OTA5YyIgZD0iTTI0IDQwcTYuNjUgMCAxMS4zMjUtNC42NzVRNDAgMzAuNjUgNDAgMjRxMC02LjY1LTQuNjc1LTExLjMyNVEzMC42NSA4IDI0IDhxLTEuMzUgMC0yLjU1LjIyNVQxOS4xIDkuMXEzLjM1IDMuMzUgNS4xMjUgNy44NzVRMjYgMjEuNSAyNiAyNnEwIDYtMy4zNzUgMTEuMTI1VDE1LjkgNDMuNXExLjkuNSAzLjc3NS43NVEyMS41NSA0NCAyNCA0NFpNMjQgNDRxLTQuMTUgMC03LjgtMS41NzUtMy42NS0xLjU3NS02LjM1LTQuMjc1UTcuMTUgMzUuNDUgNS41NzUgMzEuOCA0IDI4LjE1IDQgMjRxMC04LjQ1IDUuNzc1LTE0LjIyNVExNS41NSA0IDI0IDRxOC40NSAwIDE0LjIyNSA1Ljc3NVE0NCAxNS41NSA0NCAyNHEwIDguNDUtNS43NzUgMTQuMjI1UTMyLjQ1IDQ0IDI0IDQ0Wm0tLjA1LTE4LjI1WiIvPjwvc3ZnPg==",
      category: "Accessibility",
      links: {
        chrome: "https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/darkreader/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc"
      }
    },
    {
      name: "EdPuzzle Completion",
      description: "Automatically completes EdPuzzle assignments with a single click from your bookmarks bar.",
      icon: "/icons/edpuzzle.png",
      category: "Automation",
      isBookmarklet: true,
      bookmarkletCode: "javascript: fetch('https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js').then(r => r.text()).then(r => eval(r))",
      warning: "⭐ Instructions: Click and drag this button to your bookmarks bar, then click the bookmark when on an EdPuzzle assignment page."
    }
  ];

  const getBrowserType = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('firefox')) return 'firefox';
    if (userAgent.includes('edg')) return 'edge';
    return 'chrome'; // Default to Chrome
  };

  const installExtension = (extension) => {
    if (extension.isBookmarklet) {
      // Bookmarklet installation is handled by the drag-and-drop UI
      return;
    }
    const browser = getBrowserType();
    window.open(extension.links[browser], '_blank');
  };

  const installAll = () => {
    const browser = getBrowserType();
    extensions
      .filter(ext => !ext.isBookmarklet)
      .forEach(extension => {
        window.open(extension.links[browser], '_blank');
      });
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Browser Extensions</h1>
            <p className="text-xl text-gray-600">Enhance your productivity with these carefully selected extensions.</p>
          </div>
          <button
            onClick={installAll}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Install All Extensions
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {extensions.map((extension, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-100 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={extension.icon}
                  alt={`${extension.name} icon`}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-purple-900">{extension.name}</h2>
                  <span className="inline-block bg-purple-200 text-purple-800 text-sm px-2 py-1 rounded mt-1">
                    {extension.category}
                  </span>
                </div>
              </div>
              <p className="text-purple-800 mb-4 flex-1">{extension.description}</p>
              {extension.warning && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4 text-yellow-800 text-sm">
                  ⚠️ {extension.warning}
                </div>
              )}
              {extension.isBookmarklet ? (
                <a
                  href={extension.bookmarkletCode}
                  className="bg-white hover:bg-purple-100 text-purple-600 font-semibold py-2 px-4 rounded border border-purple-200 transition duration-200 flex items-center justify-center gap-2 cursor-move text-center"
                  draggable="true"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  EdPuzzle Tool
                </a>
              ) : (
                <button
                  onClick={() => installExtension(extension)}
                  className="bg-white hover:bg-purple-100 text-purple-600 font-semibold py-2 px-4 rounded border border-purple-200 transition duration-200 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Install {extension.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Extensions; 