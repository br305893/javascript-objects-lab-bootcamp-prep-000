var recipes = {
'Sugar Cookies': ["Sugar", "Milk", "Flour", "Eggs"],
'Chocolate Chip Cookies': ["Chocolate Chips", "Milk", "Flour", "Eggs"]
}

function updateObjectWithKeyAndValue (object, key, value){
return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value
return object
}

function deleteFromObjectByKey(object, key){
delete Object.key
return object
}
