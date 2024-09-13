let recipeItemsContainer = document.querySelector(".recipe-container");
let recipeContainer = document.querySelector(".recipe-gen-container");

// Recipes Assignments

let recipe1 = document.querySelector("#recipe-1");

//Recipe Variables
let recipeHeading1 = document.querySelector(".subrecipe-heading");
let recipePara1 = document.querySelector(".subrecipe-para");

recipe1.onclick = () => {
    recipeItemsContainer.style.display = "none";

    recipeContainer.style.visibility = "visible";
    recipeContainer.style.display = "flex";

    // Styling Heading
    
    recipeContainer.style.alignItems = "center";
    recipeContainer.style.marginTop = "15px";
    recipeContainer.style.flexDirection = "column";

    recipeHeading1.innerText = "American Gyros";
    recipeHeading1.style.fontSize = "45px";

    recipePara1.innerText = `• 1 pound ground lamb
• 1 pound ground beef
• ½ cup finely diced yellow onion
• 4 cloves garlic, crushed
• 1 tablespoon minced fresh rosemary
• 2 teaspoons dried oregano
• 2 teaspoons kosher salt, or to taste
• 1 teaspoon fresh ground black pepper
• 1 teaspoon cumin
• 1 teaspoon paprika
• ⅛ teaspoon ground cinnamon
• ⅛ teaspoon cayenne pepper
• 2 tablespoons dry bread crumbs
• 1 tablespoon olive oil`;
    recipePara1.style.fontSize = "25px";
    recipePara1.style.margin = "20px";
    recipePara1.style.fontStyle = "italic";
}   
