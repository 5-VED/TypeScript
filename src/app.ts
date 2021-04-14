type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'VED',
  privileges: ['create-server', 'DataBase Access'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


//Type Guards
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

let result = add(1, 2);


//Use  in  typeguards while working with methods
type unknownEmployee = Employee | Admin

function printEmployeeInfo(emp: unknownEmployee) {
  console.log("Name : " + emp.name);
  if ('privileges' in emp) {
    console.log("Privilages : " + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log("Strart Date : " + emp.startDate)
  }
}

printEmployeeInfo(e1);

// Use instance of typeguards while working with classes
class Car {
  drive() {
    console.log("Driving a Car.....");
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck');
  }

  cargo(amount: number) {
    console.log("Loading Cargo " + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.cargo(10000);
  }
}

useVehicle(v1);
useVehicle(v2);


//Discriminated Unions
interface Bird {
  type: 'Bird';
  flyingspeed: string;
}

interface Horse {
  type: 'Horse';
  runningSpeed: string;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'Bird':
      speed = animal.flyingspeed;
      break;
    case 'Horse':
      speed = animal.runningSpeed;
      break;
  }
  //console.log( animal.type + ' Moving at Speed :- ' + speed);
  if (animal.type === 'Bird') {
    console.log(animal.type + ' Flying at Speed :- ' + speed);
  }
  else {
    console.log(animal.type + ' Running at Speed :- ' + speed);
  }
}

moveAnimal({ type: 'Horse', runningSpeed: '50 Km/Hr' });
moveAnimal({ type: 'Bird', flyingspeed: ' 65 Km/hr' });


//Index Properties: they give us more flexibility handling object propertis 
interface ErrorContainer {
  [props: string]: string;
}

const errorBag:ErrorContainer={
  email : 'Invalid Email',
  username: 'Invalid Username'
}



