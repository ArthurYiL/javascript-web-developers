describe("Sum", function() {

  var result;

  it("should return correct result", function() {
    result = sum(2, 3);
    expect(result).toEqual(5);
  });

  it("should return zero adding negative", function() {
    result = sum(2, -2);
    expect(result).toEqual(0);
  });

});
