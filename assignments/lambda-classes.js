// CODE here for your Lambda Classes


class Person{
    constructor(basic){
        this.name = basic.name,
        this.age = basic.age,
        this.location = basic.location
    };
    greet(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
};

class Instructor extends Person{
    constructor(teach){
    super(teach);
        this.specialty = teach.specialty,
        this.favLanguage = teach.favLanguage,
        this.catchPhrase = teach.catchPhrase    
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
};

class Student extends Person{
    constructor(info){
    super(info);
        this.previousBackground = info.previousBackground,
        this.className = info.className,
        this.faveSubjects = info.faveSubjects
    };
    listSubjects(){
        for(let i = 0; i < this.faveSubjects.length; i++){
            console.log(this.faveSubjects[i]);
        };
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${this.name} has has begun sprint challenge on ${subject}`
    };
    };


class ProjectManager extends Instructor{
    constructor(pm){
    super(pm)
        this.gradClassName = pm.gradClassName,
        this.favInstructor = pm.favInstructor    
    };
    standUp(slackChan){
        return `${this.name} announces to ${slackChan}, @channel standy times! `
    };
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name} code on ${subject} `
    }
};


const rachel = new Person ({
    name: "Rachel",
    age: 25,
    location: "NeverLand",
    faveSubjects:["react","java"]
});

const bob = new Student ({
    name: "BOB",
    age: 12,
    location: "USA",
    previousBackground: "playground fighting",
    className: "delinquints",
    faveSubjects: ["javascript","html","css"]
});

const stewart = new Instructor ({
    name: "Stewart",
    age: 12,
    location: "USA",
    previousBackground: "playground fighting",
    className: "delinquints",
    faveSubjects: ["javascript","html","css"]
});

const joey = new ProjectManager ({
    name: "Joey",
    age: 201,
    location: "vegas",
    previousBackground: "space travel",
    gradClassName: "delinquints",
    favInstructor: "stewart",
    faveSubjects: ["javascript","python","ruby"]
});


console.log(rachel.greet());
console.log(bob.greet());
console.log(stewart.greet());
console.log(bob.listSubjects());
console.log(stewart.demo("data"));
console.log(stewart.grade(rachel, "java4"));
console.log(bob.sprintChallenge("java4"));
console.log(bob.PRAssignment("java4"));
console.log(joey.standUp("#help"))
console.log(joey.debugsCode(bob,"java4"))
console.log(joey.greet());
console.log(joey.grade(bob, "java4"));
