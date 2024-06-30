# CS-465-Fullstack

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In this project, we employed a combination of Express HTML, JavaScript, and a single-page application (SPA) approach. Express HTML and JavaScript: These were used for server-side rendering of static and dynamic content. Express allowed us to serve HTML files and handle routing efficiently, while JavaScript added interactivity and dynamic behavior on the client side. Single-Page Application (SPA), The SPA approach was utilized to create a seamless and fast user experience. By dynamically updating content without requiring full page reloads, SPAs provide a more responsive and engaging interface for users. The backend of this application utilizes a NoSQL MongoDB database. NoSQL MongoDB Database, MongoDB was chosen for its flexibility in handling unstructured data and its ability to scale easily. This made it ideal for managing the diverse and dynamic data types associated with travel information, such as user profiles, booking details, and travel itineraries.

Why did the backend use a NoSQL MongoDB database?

The decision to use a NoSQL MongoDB database for the backend was driven by several key factors those being flexability in data models, scalability, performance, ease of use and integration, and community and ecosystem. 

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. Unlike JavaScript, which is a programming language used to create dynamic web content, JSON is purely a data format. JSON serves as the medium for data exchange between the frontend and backend. For instance, when a user books a trip, the frontend sends the booking details in JSON format to the backend, which processes and stores the data in MongoDB.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Instances of Refactoring: One significant refactor involved modularizing the codebase by separating concerns into distinct modules. This made the code more maintainable and easier to debug.
Reusable UI Components: Utilizing reusable UI components improved consistency and reduced code duplication. For example, creating a reusable form component allowed us to standardize the appearance and behavior of all forms across the application.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods and Endpoints: Various methods (GET, POST, PUT, DELETE) were tested to ensure they performed as expected. Each endpoint was tested for proper data retrieval and manipulation.
Security Testing: Adding layers of security, particularly for the admin login, posed additional testing challenges. Ensuring that authentication mechanisms (e.g., JWT tokens) worked correctly and securely was a key focus.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has been a very big help in advancing my professional goals. Ive been able to learn more about the full tsack development by gaining proficiency in both frontend and backend technologies. Learning more about database managment by working with MongoDB has also helped enchance my ability to manage and manipulate datasets efficiently. Finally its also helped me better understand security best practices by implemting secure login authentication. Ive had a lot of fun learning more about full stack during this class.
