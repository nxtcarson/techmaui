import { useState, useEffect } from 'react';

export default function useFavorites(isAuthenticated) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load favorites from database when authenticated
  useEffect(() => {
    const loadFavorites = async () => {
      if (!isAuthenticated) {
        // Load from localStorage if not authenticated
        try {
          const savedFavorites = localStorage.getItem('toolFavorites');
          if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
          }
        } catch (error) {
          console.error('Error loading favorites from localStorage:', error);
        }
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/.netlify/functions/favorites', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ action: 'get' })
        });

        if (!response.ok) {
          throw new Error('Failed to load favorites');
        }

        const data = await response.json();
        setFavorites(data.favorites);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [isAuthenticated]);

  // Save favorites to database
  const toggleFavorite = async (toolName) => {
    const newFavorites = favorites.includes(toolName)
      ? favorites.filter(name => name !== toolName)
      : [...favorites, toolName];

    if (!isAuthenticated) {
      // Save to localStorage if not authenticated
      setFavorites(newFavorites);
      try {
        localStorage.setItem('toolFavorites', JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const action = favorites.includes(toolName) ? 'remove' : 'add';
      
      const response = await fetch('/.netlify/functions/favorites', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ action, toolName })
      });

      if (!response.ok) {
        throw new Error('Failed to update favorite');
      }

      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error updating favorite:', error);
    }
  };

  return {
    favorites,
    toggleFavorite,
    loading
  };
} 