
import express from 'express';
import session from 'express-session';
import bp from 'body-parser';
const PORT = process.env.PORT || 3000;
const app = express();


const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});