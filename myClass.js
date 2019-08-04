class User {
     constructor (firstname, middlename, lastname, credit) {
          this.firstname = firstname;
          this.lastname = lastname;
          this.middlename = middlename;
          this.credit = credit;
     }

     getFullName(){
          let fullname = `${this.firstname} ${this.middlename} ${this.lastname} is my full name`;
          return fullname;
          //do this in just 1 line
     }

     editName(newname) {
          const myname = newname.split(' ');
          this.firstname = myname[0];
          this.lastname = myname[1];
          //take a middle name too
     }

     getMiddleName(secondname) {
          const myname = secondname.split(' ');
          this.firstname = myname[0];
          this.middlename = myname[1];
          this.lastname = myname[2];
     }
}

const john = new User('John', 'Anderson', 34);
// console.log(john);
john.editName('Johnny Anderson');
john.getMiddleName('Johnny Blake Anderson');
console.log(john.getFullName());

// const sammy = new User();
// console.log(sammy);