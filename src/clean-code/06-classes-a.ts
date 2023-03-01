(() => {
    //No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    
    class Person{
        constructor (
            public name: string,
            public gender: Gender,
            public birthdate: Date
        
        ){}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name, gender,birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workgDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date, 

        ){
            super(email,role,name,gender,birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'luis@gmail.com',
        'admin',
        'luis',
        'M',
        new Date('1999-10-05')
    )
    console.log({userSettings})
    


})();