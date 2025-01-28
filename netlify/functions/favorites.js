const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Helper to verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get token from Authorization header
    const token = event.headers.authorization?.split(' ')[1];
    if (!token) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'No token provided' })
      };
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Invalid token' })
      };
    }

    const { action, toolName } = JSON.parse(event.body);
    const userId = decoded.userId;

    // Handle adding favorite
    if (action === 'add') {
      await pool.query(
        'INSERT INTO user_favorites (user_id, tool_name) VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [userId, toolName]
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Favorite added successfully' })
      };
    }

    // Handle removing favorite
    if (action === 'remove') {
      await pool.query(
        'DELETE FROM user_favorites WHERE user_id = $1 AND tool_name = $2',
        [userId, toolName]
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Favorite removed successfully' })
      };
    }

    // Handle getting favorites
    if (action === 'get') {
      const result = await pool.query(
        'SELECT tool_name FROM user_favorites WHERE user_id = $1',
        [userId]
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ favorites: result.rows.map(row => row.tool_name) })
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid action' })
    };

  } catch (error) {
    console.error('Favorites error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 