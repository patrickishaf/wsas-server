export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    dbUrl: process.env.DB_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
