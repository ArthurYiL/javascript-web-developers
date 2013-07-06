var MyProto = function(num) {
    this.num = num;
}

MyProto.prototype.addAndDuplicate = function(myNum) {
    console.log("prototwo here");
    return (this.num + myNum) * 2
}

module.exports = MyProto
