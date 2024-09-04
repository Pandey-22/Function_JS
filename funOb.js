// function getAvailableChaatItems(chaatItems, availableIngredients) {
//     return chaatItems
//         .filter(item => 
//             item.ingredients.every(ingredient => 
//                 availableIngredients.includes(ingredient)
//             )
//         )
//         .map(item => item.name);
// }
// // Test Case 1
// const chaatItems1 = [
//     { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
//     { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
//     { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
//     { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
// ];
// const availableIngredients1 = ["puri", "pani", "mint", "potato", "sev", "dahi"];
// console.log(getAvailableChaatItems(chaatItems1, availableIngredients1)); 

// // Test Case 2
// const chaatItems2 = [
//     { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
//     { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
//     { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
//     { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
// ];
// const availableIngredients2 = ["puri", "sev", "dahi", "potato", "onion", "chaat masala", "tamarind"];
// console.log(getAvailableChaatItems(chaatItems2, availableIngredients2)); 

// // Test Case 3
// const chaatItems3 = [
//     { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
//     { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
//     { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
//     { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
// ];
// const availableIngredients3 = ["pani", "mint", "tamarind"];
// console.log(getAvailableChaatItems(chaatItems3, availableIngredients3)); // Output: []

// // Test Case 4
// const chaatItems4 = [
//     { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
//     { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
//     { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
//     { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
// ];
// const availableIngredients4 = ["puri", "dahi", "sev", "potato"];
// console.log(getAvailableChaatItems(chaatItems4, availableIngredients4));






function getAvailableChaatItems(chaatItems, availableIngredients) {
    return chaatItems
        .filter(item => 
            item.ingredients.every(ingredient => 
                availableIngredients.includes(ingredient)
            )
        )
        .map(item => item.name);
}

// Function to get user input
function getUserInput() {
    const chaatItems = [];
    const availableIngredients = [];

    // Get the number of chaat items
    const numChaatItems = parseInt(prompt("Enter the number of chaat items:"));

    // Get the chaat items and their ingredients
    for (let i = 0; i < numChaatItems; i++) {
        const name = prompt(`Enter the name of chaat item ${i + 1}:`);
        const ingredients = prompt(`Enter the ingredients for ${name}, separated by commas:`).split(',').map(ingredient => ingredient.trim());
        chaatItems.push({ name, ingredients });
    }

    // Get the available ingredients
    const availableIngredientsInput = prompt("Enter the available ingredients, separated by commas:");
    availableIngredientsInput.split(',').forEach(ingredient => availableIngredients.push(ingredient.trim()));

    return { chaatItems, availableIngredients };
}

// Main function to run the program
function main() {
    const { chaatItems, availableIngredients } = getUserInput();
    const availableChaatItems = getAvailableChaatItems(chaatItems, availableIngredients);
    console.log("Chaat items that can be made:", availableChaatItems);
}

// Run the main function
main();
