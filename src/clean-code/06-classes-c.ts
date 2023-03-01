(() => {
    //aplicando el principio de responsabilidad unica
    //priorizar la composición frente a la herencia!

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

    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }:UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps{
        lastOpenFolder: string;
        workingDirectory: string;

    }
    class Settings {
        public workgDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,

        }: SettingsProps){
            this.workgDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings{
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            birthdate, gender,name,
            email, role,
            lastOpenFolder, workingDirectory



        }: UserSettingsProps){
            this.person = new Person({name, gender,birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory});


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