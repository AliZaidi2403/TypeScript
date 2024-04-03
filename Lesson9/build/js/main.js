"use strict";
//Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "finalProject",
    grade: 4,
};
console.log(updateAssignment(assign1, { verified: true }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
//Required and readOnly
//Required<T>: Constructs a type with all properties of T set to required. The opposite of Partial.
//Readonly<T>: Constructs a type with all properties of T set to readonly,
//meaning they cannot be reassigned once they are set.
const recordAssignment = (assign) => {
    // do your work with the incoming data
    return assign;
};
//in interface assignment we have a property which is optional however using Required utility type
//every property became mandatory
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//assignVerified.grade = 88 ; error readOnly
//recordAssignment(assignGraded); this also wont work because assignGraded dont have all the properties
//Record<K, T>: Constructs an object type whose keys are of type K and values are of type T.
const hexColorMap = {
    red: "#FF0000",
    green: "#00ff00",
    blue: "#0000ff",
};
const FinalGrades = {
    Sara: "A",
    Kelly: "B",
};
const GradeData = {
    Sara: {
        Grade1: 90,
        Grade2: 95,
    },
    Kelly: {
        Grade1: 91,
        Grade2: 88,
    },
};
const score = {
    studentId: "K123",
    grade: 90,
};
const preview = {
    title: "Hello World",
    studentId: "k123",
};
//Return Type
const createNewAssign = (title, points) => {
    return { title, points };
};
//now if we change the return type of our function createNewAssign, this will change the type newAssign
const tsAssign = createNewAssign("Manchester United", 92);
console.log(tsAssign);
const assignArgs = ["Generics", 200];
const tsAssign1 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
