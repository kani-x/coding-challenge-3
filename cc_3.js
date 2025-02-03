// Task 1 - Product Price Management

// Step 1: Declare an array with at least five numerical values
let prices = [15.99, 25.49, 30.00, 9.99, 50.75];

// Step 2: Add a new price to the array
prices.push(19.99);

// Step 3: Remove the first price from the array
prices.shift();

// Step 4: Log the updated price list to the console
console.log("Updated Prices:", prices);

// Task 2 - Modifying Customer Orders

// Step 1: Declare an array with at least five numerical values
let orders = [3, 7, 2, 5, 10];

// Step 2: Increase the third order quantity by 5
orders[2] += 5; // Adding 5 to the third element (index 2)

// Step 3: Calculate the total number of all orders
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0);

// Step 4: Log the updated array and total order count to the console
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);

// Task 3 - Employee Performance Tracking

// Step 1: Declare an employee object
let employee = {
    name: "Alice Johnson",
    role: "Software Engineer",
    performanceScore: 85,
    isActive: true
};

// Step 2: Update the performanceScore
employee.performanceScore = 92; // New performance score

// Step 3: Add a new property 'promotionEligible'
employee.promotionEligible = employee.performanceScore > 90; // True if score > 90

// Step 4: Log the updated employee object to the console
console.log("Updated Employee Record:", employee);

// Task 4 - Customer Feedback Records

// Step 1: Declare an array with initial feedback objects
let feedback = [
    { customerName: "John Doe", feedbackText: "Great service!", rating: 5 },
    { customerName: "Jane Smith", feedbackText: "Good quality products.", rating: 4 },
    { customerName: "Mike Johnson", feedbackText: "Fast delivery!", rating: 5 }
];

// Step 2: Add a new feedback object
feedback.push({ customerName: "Emily Davis", feedbackText: "Very helpful support team.", rating: 5 });

// Step 3: Log the entire feedback array
console.log("Customer Feedback Records:", feedback);

// Task 5 - Inventory Management System

// Step 1: Declare the inventory object
let inventory = {
    itemName: "Wireless Headphones",
    stockCount: 150,
    price: 29.99,

    // Step 2: Add a method to calculate total inventory value
    calculateTotalValue: function () {
        return this.stockCount * this.price;
    }
};

// Step 3: Log inventory details and total value
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value: $" + inventory.calculateTotalValue().toFixed(2));
