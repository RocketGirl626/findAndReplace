describe('countUp', function() {
  it("counts by by 5 to 30", function() {
    expect(countUp(30, 5)).to.eql([5, 10, 15, 20, 25, 30]);
  });

  it("counts by 7 to 49", function() {
    expect(countUp(50, 7)).to.eql([7, 14, 21, 28, 35, 42, 49]);
  });
});
