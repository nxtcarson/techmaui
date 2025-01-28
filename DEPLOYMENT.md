# Deployment Guide

## Prerequisites

- Node.js >= 18.0.0
- PostgreSQL database
- Git
- Heroku CLI (for Heroku deployment)

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/nxtcarson/techmaui.git
cd techmaui
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/techmaui

# JWT Configuration
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Client Configuration
VITE_API_URL=http://localhost:3000
```

5. Set up the database:
- Create a PostgreSQL database
- Run the schema migrations (provided in `server/db/schema.sql`)

6. Start the development server:
```bash
npm run dev
```

## Production Deployment (Heroku)

1. Create a new Heroku app:
```bash
heroku create your-app-name
```

2. Add PostgreSQL addon:
```bash
heroku addons:create heroku-postgresql:hobby-dev
```

3. Configure environment variables:
```bash
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_production_jwt_secret
heroku config:set JWT_EXPIRES_IN=7d
```

4. Deploy to Heroku:
```bash
git push heroku main
```

## Required Dependencies

### Production Dependencies
- react
- react-dom
- react-router-dom
- react-helmet (for SEO)
- express
- pg (PostgreSQL client)
- bcrypt
- jsonwebtoken
- cors
- dotenv

### Development Dependencies
- vite
- @vitejs/plugin-react
- tailwindcss
- postcss
- autoprefixer
- eslint and related plugins

## Features & Configuration

### SEO
- Meta tags are managed through the `SEOHead` component
- Update default SEO values in `src/components/SEOHead.jsx`
- Each page should include the SEOHead component with relevant meta data

### Database
- PostgreSQL is used for data persistence
- Connection is managed in `server/db/index.js`
- Schema available in `server/db/schema.sql`

### Authentication
- JWT-based authentication
- Tokens expire based on JWT_EXPIRES_IN env variable
- Protected routes require valid JWT in Authorization header

### Local Storage
The following data is stored in localStorage:
- User preferences
- Tool favorites
- Recent expenses
- Authentication tokens

### Security Considerations
1. Install SSL certificate in production
2. Secure all environment variables
3. Implement rate limiting
4. Enable CORS with specific origins
5. Keep dependencies updated
6. Regular security audits
7. Data backup strategy

## Maintenance

### Regular Tasks
1. Update dependencies monthly
2. Verify tool links weekly
3. Backup database daily
4. Monitor error logs
5. Update content regularly

### Troubleshooting
1. Check logs: `heroku logs --tail`
2. Verify environment variables
3. Check database connection
4. Monitor application metrics
5. Review error tracking

## Support

For issues or questions:
- Create GitHub issue
- Contact: nxtcarson@gmail.com 