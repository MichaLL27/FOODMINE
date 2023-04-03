# backend

I used the `MONGO DB database` in the `backend`, you will also need it if you run the project, so follow the `instructions`,
Since my project is running on this `port: http://localhost:5100`

You need to change the `backend port`, for example: `http://localhost:5500` or something similar

# MONGO DB

To run a backup, you need `MONGO DB database`
To create your `backend database`, you need to register at `https://www.mongodb.com`,

Create a database and include it in an `.env file`,
as `MONGO_URI`

# env

cd backend/src/ create `.env` file

1. Find your ".env" file and open it.
2. Add a new line at the end of the file just like `MONGO_URI`.
3. `MONGO_URI = mongodb+srv://yourmongoname:yourmongopassword@cluster0.r6lk5up.mongodb.net/yourprojectname?retryWrites=true&w=majority`
4. Type `JWT_SECRET=SOME_RANDOM_TEXT`
5. That `SOME_RANDOM_TEXT` could be any text, and it will be your `jwt secret code`
6. Save the changes you have made to the `".env"` file.
7. Restart your Angular project from the terminal by stopping and then starting it again.

## launch

if u want to launch backend project, You should write `npm install` and `npm start`
