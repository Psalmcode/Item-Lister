let form = document.getElementById("addForm");
let itemGroup = document.getElementById("items");
let filterSearch = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
// Delete Event
itemGroup.addEventListener("click", removeItem);
// Filter Event
filterSearch.addEventListener("keyup", filterItems);


// Add item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    let getInput = document.querySelector("#inputValue").value;

    // Create new li element
    let li = document.createElement('li');
    
    //Add ClassName
    li.className = 'list-group-item';

    // Add text node with input value
    let newNode = document.createTextNode(getInput);
    li.appendChild(newNode);
    
// Create del button element
let delButton = document.createElement("button");

// Add classes to delButton 
delButton.className = "btn btn-danger btn-sm float-end delete";

//Add text node
    delButton.appendChild(document.createTextNode('X'));

    //Append button to Li
   li.appendChild(delButton);

    itemGroup.appendChild(li);
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemGroup.removeChild(li);
        }
    }
}

// filter Items
function filterItems(e){
// convert to lowerCase
let text = e.target.value.toLowerCase();
//Get lis
let items = itemGroup.getElementsByTagName("li");
//Convert to an array
Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        // item.style.backgroundColor = 'green';
    } else {
        // item.style.backgroundColor = '#f00';
        item.style.display = "none";
    }
})
}