# TechMaui Deployment Guide

## Prerequisites
1. Install these on your computer:
   - [Node.js](https://nodejs.org/) (v18 or higher)
   - [Git](https://git-scm.com/)
   - [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Local Setup Steps

1. **Clone and Install Dependencies**
   ```bash
   # Clone your repository
   git clone https://github.com/yourusername/techmaui.git
   cd techmaui

   # Install dependencies
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   # Copy example env file
   cp .env.example .env

   # Edit .env with your values
   # You'll need:
   # - A secure JWT_SECRET (you can generate one with: openssl rand -base64 32)
   # - Your DATABASE_URL (you'll get this from Heroku later)
   ```

## Heroku Deployment Steps

1. **Create Heroku App**
   ```bash
   # Login to Heroku
   heroku login

   # Create new Heroku app
   heroku create techmaui

   # Add PostgreSQL database
   heroku addons:create heroku-postgresql:hobby-dev
   ```

2. **Configure Heroku Environment**
   ```bash
   # Set environment variables
   heroku config:set NODE_ENV=production
   heroku config:set JWT_SECRET=your_secure_secret_here

   # Verify your config
   heroku config
   ```

3. **Set Up Database**
   ```bash
   # Get your database URL
   heroku config:get DATABASE_URL

   # Connect to database and run schema
   # Option 1: Using Heroku CLI
   heroku pg:psql < server/db/schema.sql

   # Option 2: Using pgAdmin or another PostgreSQL client
   # 1. Copy the DATABASE_URL from above
   # 2. Open pgAdmin
   # 3. Create new server connection using the DATABASE_URL
   # 4. Open query tool
   # 5. Copy contents of server/db/schema.sql and run
   ```

4. **Deploy Code**
   ```bash
   # Add all files
   git add .

   # Commit changes
   git commit -m "Ready for deployment"

   # Push to Heroku
   git push heroku main

   # Ensure at least one instance is running
   heroku ps:scale web=1
   ```

5. **Verify Deployment**
   ```bash
   # Open your app in browser
   heroku open

   # Check logs if there are issues
   heroku logs --tail
   ```

## Post-Deployment Checks

1. **Test Authentication**
   - Try creating a new account
   - Try logging in
   - Verify that you stay logged in after refresh

2. **Test Database**
   - Verify users are being saved
   - Check database connection:
     ```bash
     heroku pg:info
     ```

3. **Monitor Performance**
   - Check application logs:
     ```bash
     heroku logs --tail
     ```
   - Monitor dyno usage:
     ```bash
     heroku ps
     ```

## Common Issues & Solutions

1. **Database Connection Issues**
   - Verify DATABASE_URL is set: `heroku config:get DATABASE_URL`
   - Check SSL settings in `server/db/index.js`
   - Verify schema was applied: `heroku pg:info`

2. **Application Errors**
   - Check logs: `heroku logs --tail`
   - Verify all environment variables are set
   - Ensure buildpacks are correct: `heroku buildpacks`

3. **Static Files Not Loading**
   - Verify the build process completed: check build logs
   - Check `server/index.js` static file serving configuration
   - Verify `dist` directory is in `.gitignore`

## Maintenance

1. **Regular Updates**
   ```bash
   # Update dependencies
   npm update

   # Push updates
   git add .
   git commit -m "Update dependencies"
   git push heroku main
   ```

2. **Database Backups**
   ```bash
   # Create manual backup
   heroku pg:backups:capture

   # Download latest backup
   heroku pg:backups:download
   ```

3. **Monitoring**
   ```bash
   # Check app metrics
   heroku ps
   heroku pg:info
   ```

## Useful Heroku Commands

```bash
# View app logs
heroku logs --tail

# Run database migrations
heroku pg:psql < server/db/schema.sql

# Restart application
heroku restart

# Scale dynos
heroku ps:scale web=1

# Open app
heroku open

# Access production shell
heroku run bash
```

## Local Development After Deployment

1. **Switch to Local Database**
   - Update `.env` with local PostgreSQL credentials
   - Create local database: `createdb techmaui`
   - Run schema: `psql techmaui < server/db/schema.sql`

2. **Run Development Server**
   ```bash
   npm run dev
   ```

## Security Notes

1. Never commit `.env` file
2. Regularly rotate JWT_SECRET
3. Keep dependencies updated
4. Monitor Heroku security alerts
5. Regularly backup database

## Additional Resources

- [Heroku Node.js Guide](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku PostgreSQL Guide](https://devcenter.heroku.com/articles/heroku-postgresql)
- [Heroku Deployment Guide](https://devcenter.heroku.com/articles/deploying-nodejs) 