var MyProto = function(num) {
    this.num = num;
}

MyProto.prototype.addAndDuplicate = function(myNum) {
    return (this.num + myNum) * 2
}

module.exports = MyProto
