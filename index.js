var recipes = {
'Sugar Cookies': ["Sugar", "Milk", "Flour", "Eggs"],
'Chocolate Chip Cookies': ["Chocolate Chips", "Milk", "Flour", "Eggs"]
}

function updateObjectWithKeyAndValue (object, key, value){
return Object.assign({}, object, { [key]: value})
}
