# node_assignment

## 1.Endpoints and Functionalities:
•	/api/addition: Accepts two numbers and returns their sum.
•	/api/factorial/:number: Calculates the factorial of a given number.
•	/api/fibonacci/:count: Generates Fibonacci sequence up to the specified count.

## 2.Request Formats:
•	/api/addition: GET request with query parameters num1 and num2.
•	/api/factorial/:number: GET request with number as a parameter.
•	/api/fibonacci/:count: GET request with count as a parameter.

## Project Setup:
1.	Local Setup:
•	Clone the repository: git clone <repository-url>
•	Install dependencies: npm install
2.	Database Initialization:
•	Run migrations: npx prisma migrate dev
•	Seed the database with initial data if needed: npx prisma db seed
3.	Environment Variables:
•	Create a .env file at the root of your project with the following content:
makefileCopy code
DATABASE_URL="sqlite:./src/database/dev.db" PORT=3000 # You can set any port number you prefer 
4.	Running the Application Locally:
•	Start the server: npm start

