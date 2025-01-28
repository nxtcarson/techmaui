import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

function Budget() {
  const { isDarkMode } = useTheme();
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: 'other' });

  const categories = [
    'Books',
    'Food',
    'Transportation',
    'School Supplies',
    'Entertainment',
    'Other'
  ];

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount) return;

    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        amount: parseFloat(newExpense.amount)
      }
    ]);
    setNewExpense({ description: '', amount: '', category: 'other' });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const savingCategories = [
    {
      title: "Entertainment",
      description: "Save money on streaming, gaming, and media",
      tips: [
        {
          tip: "Use Rivestream for movies and TV shows instead of paying for multiple streaming services",
          link: "/tools",
          linkText: "Check Rivestream in our Tools section"
        },
        {
          tip: "Download games from STEAMRIP instead of buying full-price games",
          link: "/tools",
          linkText: "View STEAMRIP in our Tools section"
        },
        {
          tip: "Use SpotX for ad-free Spotify on Windows desktop",
          link: "/tools",
          linkText: "Learn about SpotX in our Tools section"
        },
        {
          tip: "Install xManager for ad-free Spotify on Android",
          link: "/tools",
          linkText: "Get xManager from our Tools section"
        },
        {
          tip: "Use uBlock Origin with Spotify Web Player to block ads",
          link: "/adblocking",
          linkText: "Set up uBlock Origin from our guide"
        },
        "Use student discounts for other streaming services",
        "Share family plans with roommates or family members",
        "Check your university's media subscriptions - many provide free access"
      ]
    },
    {
      title: "Textbooks & Learning",
      description: "Reduce educational expenses",
      tips: [
        {
          tip: "Use Anna's Archive to find digital textbooks and educational materials",
          link: "/tools",
          linkText: "Access Anna's Archive from our Tools section"
        },
        "Rent physical textbooks instead of buying when needed",
        "Buy used books from campus bookstore or online marketplaces",
        "Check library reserves for required readings",
        "Split costs with classmates for shared resources",
        "Use online resources and open educational materials",
        "Check if older editions of textbooks are acceptable"
      ]
    },
    {
      title: "Food & Groceries",
      description: "Smart eating on a student budget",
      tips: [
        "Meal prep to avoid expensive takeout",
        "Use student discounts at local restaurants",
        "Shop at discount grocery stores",
        "Buy in bulk for non-perishable items",
        "Use cashback apps for grocery shopping"
      ]
    }
  ];

  const budgetTools = [
    {
      title: "Money Management",
      tools: [
        {
          name: "Mint",
          url: "https://mint.intuit.com",
          description: "Free budgeting app with expense tracking and bill reminders"
        },
        {
          name: "YNAB (You Need A Budget)",
          url: "https://www.ynab.com",
          description: "Zero-based budgeting app with student discount"
        },
        {
          name: "Splitwise",
          url: "https://www.splitwise.com",
          description: "Split expenses with roommates or friends"
        }
      ]
    },
    {
      title: "Student Discounts",
      tools: [
        {
          name: "UNiDAYS",
          url: "https://www.myunidays.com",
          description: "Student verification platform for exclusive discounts"
        },
        {
          name: "Student Beans",
          url: "https://www.studentbeans.com",
          description: "Student discount platform for various brands"
        },
        {
          name: "Amazon Prime Student",
          url: "https://www.amazon.com/primestudent",
          description: "Half-price Prime membership for students"
        }
      ]
    },
    {
      title: "Savings Tools",
      tools: [
        {
          name: "Honey",
          url: "https://www.joinhoney.com",
          description: "Automatic coupon finder and price tracker"
        },
        {
          name: "Capital One Shopping",
          url: "https://capital.one/shopping",
          description: "Price comparison and cashback tool"
        },
        {
          name: "Rakuten",
          url: "https://www.rakuten.com",
          description: "Cashback and shopping rewards platform"
        }
      ]
    }
  ];

  const monthlyBudgetTemplate = {
    title: "Monthly Budget Template",
    categories: [
      {
        name: "Essential Expenses",
        items: [
          "Rent/Housing: 30-40% of income",
          "Utilities: 5-10% of income",
          "Groceries: 10-15% of income",
          "Transportation: 5-10% of income",
          "Phone/Internet: 2-5% of income"
        ]
      },
      {
        name: "Education Expenses",
        items: [
          "Textbooks: Set aside per semester",
          "School Supplies: Monthly budget",
          "Course Materials: As needed",
          "Technology: Save monthly for upgrades",
          "Study Resources: Include in monthly plan"
        ]
      },
      {
        name: "Discretionary Spending",
        items: [
          "Entertainment: 5-10% of income",
          "Eating Out: 5-10% of income",
          "Shopping: 5% of income",
          "Hobbies: 2-5% of income",
          "Emergency Fund: 5-10% of income"
        ]
      }
    ]
  };

  return (
    <div className={`min-h-[calc(100vh-16rem)] relative bg-gradient-to-br ${
      isDarkMode ? 'from-gray-800 via-gray-900 to-gray-800' : 'from-purple-50 via-white to-purple-50'
    } overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-64 h-64 ${
          isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
        } rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
        <div className={`absolute top-0 right-0 w-64 h-64 ${
          isDarkMode ? 'bg-purple-800' : 'bg-purple-200'
        } rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-20 w-64 h-64 ${
          isDarkMode ? 'bg-purple-700' : 'bg-purple-300'
        } rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className={`${
          isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
        } backdrop-blur-lg rounded-2xl shadow-xl p-8 border ${
          isDarkMode ? 'border-gray-700' : 'border-purple-100'
        }`}>
          <h1 className={`text-3xl font-bold ${
            isDarkMode ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400'
          } mb-8 text-center`}>
            Student Expense Tracker
          </h1>

          {/* Add Expense Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Description"
                value={newExpense.description}
                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              <input
                type="number"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              <select
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              >
                {categories.map(category => (
                  <option key={category.toLowerCase()} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className={`mt-4 w-full py-2 px-4 rounded-lg ${
                isDarkMode
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-purple-500 hover:bg-purple-600'
              } text-white font-medium transition-colors duration-200`}
            >
              Add Expense
            </button>
          </form>

          {/* Total Expenses */}
          <div className={`mb-8 p-4 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-purple-50'
          }`}>
            <h2 className={`text-xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-purple-900'
            } mb-2`}>
              Total Expenses
            </h2>
            <p className={`text-2xl font-bold ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>
              ${totalExpenses.toFixed(2)}
            </p>
          </div>

          {/* Expense List */}
          <div className="space-y-4">
            {expenses.map(expense => (
              <div
                key={expense.id}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } shadow flex justify-between items-center`}
              >
                <div>
                  <h3 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {expense.description}
                  </h3>
                  <div className="flex gap-2 text-sm">
                    <span className={`${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {expense.date}
                    </span>
                    <span className={`${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    } capitalize`}>
                      {expense.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    ${expense.amount.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Money-Saving Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Money-Saving Tips</h2>
            <div className="space-y-6">
              {savingCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="text-gray-600">
                            {typeof tip === 'string' ? tip : tip.tip}
                          </span>
                          {typeof tip !== 'string' && tip.link && (
                            <Link
                              to={tip.link}
                              className="block text-sm text-purple-600 hover:text-purple-800 mt-1"
                            >
                              {tip.linkText} →
                            </Link>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Budget Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Recommended Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {budgetTools.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
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
              ))}
            </div>
          </section>

          {/* Budget Template */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">{monthlyBudgetTemplate.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {monthlyBudgetTemplate.categories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Budget; 