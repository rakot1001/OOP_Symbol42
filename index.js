"use strict";

// class User {
//   constructor(name, surname, age, isBannned) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.isBannned = isBannned;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// /*Admin, у него все что у юзера и ban(user) */
// class Admin extends User {
//   constructor(name, surname, age, email) {
//     super(name, surname, age);
//     this.email = email;
//   }
//   ban(user) {
//     user.isBannned = true;
//   }
//   unBan(user) {
//     user.isBannned = false;
//   }

//   toggleBan(user) {
//     if (user instanceof User) {
//       user.isBannned = !user.isBannned;
//       return;
//     }
//     throw new TypeError();
//   }
// }

// const us = new User("Leo", "Gredfield", 40);
// const ad = new Admin("X", "XX", 30);

/*class Moderator extends User {
  constructor(name, surname, age, permission) {
    super(name, surname, age);
    this.permission = permission;
  }

  createMessage(msgBody) {
    //send massage
  }

  deleteMessage(id) {
    //delete
  }
}

const moder = new Moderator("Moder", "Moderov", 30, {});*/

// class Squirrel {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   eat() {
//     return `${this.name} is eating`;
//   }

//   climb() {
//     return `${this.name} is climbing`;
//   }
// }
// /* FlyingSq
//   maxDistance:number

//   fly()

// */

// class FlyingSq extends Squirrel {
//   constructor(name, color, distance) {
//     super(name, color);
//     this.distance = distance;
//   }
//   set maxDistance(maxDistance) {
//     if ((maxDistance = "number")) {
//       return (this.distance = maxDistance);
//     }
//     throw new TypeError("Isn`t a number");
//   }
//   fly() {
//     return `This ${this.name} is flying`;
//   }
// }

// const sq = new Squirrel("Dol", "Red");
// const fsq = new FlyingSq("fdol", "black", 120);

// /* Скачзочная белка
// песни string[
//   песни петь
//    танцевать
// ]*/

// class FableSq extends FlyingSq {
//   constructor(name, color, distance, songs) {
//     super(name, color, distance);
//     this.songs = songs;
//   }

//   dance() {
//     return `This ${this.name} is dancing`;
//   }

//   sing() {
//     return `This ${this.name} sing this songs: ${this.songs.join(', ')}`;
//   }
// }
// const songs = ["Calina", "Army", "Day", "Gory"];
// const fabsq = new FableSq("FabSq", "FSQ", 120, songs);

/* */

class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {}
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super("Triangle");
    this.a = a;
    this.b = b;
    this.angle = angle;
  }
  getArea() {
    // переопределения метода
    return this.a * this.b * Math.sin(this.angle * (180 / Math.PI));
  }
}

class Square extends Figure {
  constructor(a) {
    super("Square");
    this.a = a;
  }
  getArea() {
    // переопределения метода
    return this.a * this.a;
  }
}

class Circle extends Figure {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

const t = new Triangle(10, 12, 60);
const s = new Square(15);
const c = new Circle(20);

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError();
}
