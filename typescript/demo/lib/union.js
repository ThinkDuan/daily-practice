"use strict";
function judgeType(anyOne) {
    if ('say' in anyOne) {
        anyOne.say();
    }
    else {
        anyOne.listent();
    }
}
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    ;
    Teacher.prototype.say = function () {
        console.log("I am a teacher,my name is " + this.name);
    };
    return Teacher;
}());
var Studentss = /** @class */ (function () {
    function Studentss(name) {
        this.name = name;
    }
    ;
    Studentss.prototype.listent = function () {
        console.log("I am a student,my name is " + this.name);
    };
    return Studentss;
}());
var teacherWang = new Teacher('wang');
var studentMing = new Studentss('ming');
judgeType(teacherWang);
judgeType(studentMing);
//# sourceMappingURL=union.js.map