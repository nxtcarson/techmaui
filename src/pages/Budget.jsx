import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

function Budget() {
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

  // Expense Tracker State
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('studentExpenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: 'Essential Expenses',
    date: new Date().toISOString().split('T')[0]
  });

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem('studentExpenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount) return;

    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: Date.now(),
        amount: parseFloat(newExpense.amount)
      }
    ]);
    setNewExpense({
      description: '',
      amount: '',
      category: 'Essential Expenses',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const categories = monthlyBudgetTemplate.categories.map(cat => cat.name);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="w-full space-y-8 p-8">
      <SEOHead 
        title="Student Budget Guide"
        description="Smart money management tips, tools, and expense tracking for students."
        keywords="student budget, expense tracker, money saving tips, student finance"
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 mb-4">
          Student Budget Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Smart money management tips and tools for students.
        </p>

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

        {/* Expense Tracker */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-6">Expense Tracker</h2>
          
          {/* Add Expense Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <form onSubmit={handleAddExpense} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <input
                    type="text"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., Textbooks"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                  <input
                    type="number"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={newExpense.date}
                    onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Add Expense
              </button>
            </form>
          </div>

          {/* Expenses List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-purple-900">Recent Expenses</h3>
              <span className="text-lg font-semibold text-purple-600">
                Total: ${totalExpenses.toFixed(2)}
              </span>
            </div>
            
            <div className="space-y-4">
              {expenses.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No expenses recorded yet.</p>
              ) : (
                expenses.sort((a, b) => new Date(b.date) - new Date(a.date)).map(expense => (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-purple-900">{expense.description}</span>
                        <span className="font-semibold text-purple-700">${expense.amount.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center text-sm text-purple-600 mt-1">
                        <span>{expense.category}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(expense.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteExpense(expense.id)}
                      className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Budget; 