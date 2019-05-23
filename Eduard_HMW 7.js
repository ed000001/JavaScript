//HOMEWORK 7  //////////////////////////    EDUARD SANTURYAN    ///////////////////

//  HMW_7-1     ----------------------------------------------------------------------


class Author {
    constructor(name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
  
    get name(){
      return this._name
    }
  
    set name(abc){
        this._name = abc
    }
  
    toString() {
      return `${this.name} is ${this.gender} and email is ${this.email}`
    }
  }
  
  let author1 = new Author('John Smith', 'johnnnnn@gmail.com', 'm');
  
  class Book {
    constructor(title, author, price, quantity){
      this.title = title;
      this.author = author;
      this.price = price;
      this.quantity = quantity;
    }
  
    get title(){
      return this._title
    }
  
    set title(value){
      this._title = value
    }
  
    getProfit() {
      return this.price * this.quantity;
    }
  
    toString() {
      return `${this.title} autor is ${this.author} and profit is ${this.getProfit()}`
    }
  }
  
  let book1 = new Book('GreatBook', 'Graet Hexinak', 1500, 30000);
  
  
  
  //  HMW_7-2     ----------------------------------------------------------------------
  
  class Account {
    constructor (id, name, balance){
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  
    get name(){
      return this._name
    }
  
    set name(value){
      this._name = value
    }
  
    get balance(){
      return this._balance
    }
  
    set balance(value){
      this._balance = value
    }
  
    credit(amount) {
     this.balance = this.balance + amount
     return `Balance is ${this.balance}`
    }
  
    debit(amount) {
      if (amount <= this.balance){
        this.balance = this.balance - amount
        return `Balance is ${this.balance}`
      } else {
        return 'Amount exceeded balance'
      }
    }
  
    transferTo(anotherAccount, amount){
      if(amount <= this.balance){
       this.balance -= amount
       anotherAccount.credit(amount)
      } else {
        return 'Amount exceeded balance'
      }
    }
  
    static identifyAccounts(accountFirst, accountSecond){
      for (let key in accountFirst){
        if (accountFirst[key] === accountSecond[key] ){
          return 'Accounts are the same'
        } else return 'Accounts are not the same'
      }
    }
  
    
    toString() {
      return `${this.name} by ID ${this.id} has balance ${this.balance}`
    }
  
  }
  
  let A1 = new Account(111, 'John', 100000);
  let A2 = new Account(222, 'Anna', 700000);
  
  
  //  HMW_7-3     ----------------------------------------------------------------------
  
  
  class Person {
    constructor(firstName, lastName, gender, age){
      this.firstName = firstName
      this.lastName = lastName
      this.gender = gender
      this.age = age
    }
  
    get firstName(){
        return this._firstName
    }
    set firstName(value){
        this._firstName = value
    }
  
    get lastName(){
      return this._lastName
    }
    set lastName(value){
      this._lastName = value
    }
  
    get gender(){
    return this._gender
    }
    set gender(value){
      this._gender = value
    }
  
  
    get age(){
    return this._age
    }
    set age(value){
      this._age = value
    }
  
  
    toString() {return `${this.fisrtName} ${this.lastname} is ${this.age} , gender ${this.gender}.`}
  
  }
  
  
  class Student extends Person{
        constructor(firstName, lastName, gender, age, programs, year, fee){
          super(firstName, lastName, gender, age);
          this.programs = programs;
          this.year = year;
          this.fee = fee;
        }
  
        get program(){
          return this._programs
        }
        set program(value){
          this._programs = value
        }
  
        get year(){
          return this._year
        }
        set year(value){
          this._year = value
        }
  
        get fee(){
          return this.fee
        }
        set fee(value){
          this._fee = value
        }
  
  
        passExam(program, grade){
          if(this.programs.indexOf(program) === -1) return 'Invalid Program';
          if(grade >=50){
            this.programs.splice(this.programs.indexOf(program), 1);
            if (!this.programs.length){
              this.year ++;
            }
          }
        }
  
        toString(){
          return super.toString() + `studies in the ${this.year}. Fee is ${this.fee}`
        }
  
  }
  
  class teacher extends Person{
          constructor(program, pay){
            super();
            this.program = program;
            this.pay = pay;
          }
  
          get program(){
            return this._program;
          }
          set program(value){
            this._program = value
          }
  
          get pay(){
            return this._pay;
          }
          set pay(value){
            this._pay = value
          }
  
          toString(){
            alert(`Teacher of ${program} gets ${this.pay}$`);
          }
  
  }
  
  
  let student1 = new Student('John', 'Smith', 'male', 20, ['math', 'history', 'economics'], 3, 10000);