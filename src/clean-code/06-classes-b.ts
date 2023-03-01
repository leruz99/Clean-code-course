(() => {
    //No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProps{
        name: string,
        gender: Gender,
        birthdate: Date,
    }
    class Person{
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor ({name,gender,birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps{
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;

    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            name,
            gender, 
            birthdate,
            email,
            role,
        }:UserProps){
            super({name,gender,birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        workingDirectory: string;
        name: string;
        role: string;

    }
    class UserSettings extends User {
        public workgDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate, 

        }: UserSettingsProps){
            super({email,role,name,gender,birthdate});
            this.workgDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/user/home',
        lastOpenFolder: '/home',
        email: 'luis@gmail.com',
        role: 'admin',
        name:'luis',
        gender: 'M',
        birthdate: new Date('1999-10-05')
    })
    console.log({userSettings})
    


})();