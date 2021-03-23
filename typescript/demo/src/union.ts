interface Teach {
  name: string;
  say():void;
}
interface Students {
  name: string;
  listent():void
}
function judgeType (anyOne: Teacher | Students) {
  if ('say' in anyOne) {
    anyOne.say()
  } else {
    anyOne.listent()
  }
}

class Teacher implements Teach {
  constructor (public name: string) {};
  public say () {
    console.log(`I am a teacher,my name is ${this.name}`)
  }
}

class Studentss implements Students {
  constructor(public name: string) {};
  listent (): void {
    console.log(`I am a student,my name is ${this.name}`)
  }
}
const teacherWang = new Teacher('wang');
const studentMing = new Studentss('ming')
judgeType(teacherWang)
judgeType(studentMing)