# CarQuest - Car Comparison and Search App
CarQuest is an Angular-based web application designed to help users search for cars and compare their features effortlessly. The application features a home page with a large car image and a search bar, a questionnaire for filtering cars based on user preferences, and a comprehensive car comparison section.

## Features
* Search Functionality: Users can search for cars by name directly from the home page.
* Questionnaire: A form that allows users to filter cars based on various criteria such as car make, model, year, fuel type, and more. The results are displayed in a card layout with essential details.
* Comparison Section: Users can add up to five cars for comparison. The selected cars are compared side by side, displaying details such as mileage, price, fuel type, transmission, year, engine, max power, torque, and the number of seats.
* Car Details Modal: A modal dialog that displays detailed information about a car when the "View Details" button is clicked.
## Technologies Used
* Frontend: Angular, Bootstrap
* Backend: JSON Server (for simulating API calls)
* Styling: CSS, Bootstrap
## Installation and Setup
1. Clone the repository:
```
git clone https://github.com/Parth-Kinkar/carQuest.git
cd carQuest
```
2. Install dependencies:
```
npm install
```
3. Run JSON Server:
```
json-server --watch car.json
```
4. Start the Angular application:
```
ng serve
```
5. Open your browser and navigate to:
```
http://localhost:4200
```
## Usage
* Search for Cars: Use the search bar on the home page to find cars by name.
* Filter Cars: Navigate to the questionnaire page to filter cars based on various criteria.
* Compare Cars: Add cars to the comparison list from the search results and view the comparison on the compare page.
* View Details: Click on the "View Details" button on any car card to see more detailed information in a modal dialog.
## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any features, enhancements, or bug fixes.
