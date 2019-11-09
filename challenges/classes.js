// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(obj) {
//     this.length = obj.length;
//     this.width = obj.width;
//     this.height = obj.height;
// }
// CuboidMaker.prototype.volume = function () {
//     const volume = this.length * this.width * this.height;
//     return volume;
// };
// CuboidMaker.prototype.surfaceArea = function () {
//     const area =
//         2 *
//         (this.length * this.width +
//             this.length * this.height +
//             this.width * this.height);

//     return area;
// };
// const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
// });

class CuboidMaker0 {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    const volume = this.length * this.width * this.height;
    return volume;
  }

  surfaceArea() {
    const area =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);

    return area;
  }
}

const cuboid0 = new CuboidMaker0(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid0.volume()); // 100
console.log(cuboid0.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker0 {
  constructor(length, width, height) {
    super(length, width, height);
  }

  volume() {
    const volume = this.length * this.width * this.height;
    return volume;
  }

  surfaceArea() {
    const area =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);

    return area;
  }
}

const shape = new CubeMaker(2, 3, 3);
console.log(shape.volume());
console.log(shape.surfaceArea());
