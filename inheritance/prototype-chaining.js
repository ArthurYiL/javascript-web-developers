function SuperType() {
    this.property = true;
    this.color = "red";
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

SuperType.prototype.getSuperColor = function() {
    return this.color;
}

SuperType.prototype.setSuperColor = function(color) {
    this.color = color;
}

function SubType() {
    this.subproperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());
instance.setSuperColor("green");
console.log(instance.getSuperColor());
