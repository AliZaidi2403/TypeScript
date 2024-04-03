//Utility types

//Utility types are predefined generic types that are provided by the language that allow us to
//transform other types or operate on other types

//Partial
//Partial<Type>: Constructs a type with all properties of Type set to optional.
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "finalProject",
  grade: 4,
};

console.log(updateAssignment(assign1, { verified: true }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

console.log(assignGraded);

//Required and readOnly

//Required<T>: Constructs a type with all properties of T set to required. The opposite of Partial.
//Readonly<T>: Constructs a type with all properties of T set to readonly,
//meaning they cannot be reassigned once they are set.

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // do your work with the incoming data
  return assign;
};
//in interface assignment we have a property which is optional however using Required utility type
//every property became mandatory

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

//assignVerified.grade = 88 ; error readOnly

//recordAssignment(assignGraded); this also wont work because assignGraded dont have all the properties

//Record<K, T>: Constructs an object type whose keys are of type K and values are of type T.

const hexColorMap: Record<string, string> = {
  red: "#FF0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D";

const FinalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Kelly: "B",
};

interface Grades {
  Grade1: number;
  Grade2: number;
}

const GradeData: Record<Students, Grades> = {
  Sara: {
    Grade1: 90,
    Grade2: 95,
  },
  Kelly: {
    Grade1: 91,
    Grade2: 88,
  },
};

// Pick and omit
//Pick<T, K>: Constructs a type by picking the set of properties K from type T.
//Omit<T, K>: Constructs a type by picking all properties from T except those in K.

type AssignResult = Pick<Assignment, "grade" | "studentId">;

const score: AssignResult = {
  studentId: "K123",
  grade: 90,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  title: "Hello World",
  studentId: "k123",
};

// Exclude and Extract these are the utility types that works with string literal not with
//interface

type AdjustGrade = Exclude<LetterGrades, "D">;
type HighGrade = Extract<LetterGrades, "A" | "B">;

//Return Type

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;
//now if we change the return type of our function createNewAssign, this will change the type newAssign

const tsAssign: NewAssign = createNewAssign("Manchester United", 92);
console.log(tsAssign);

//Parameter

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 200];

const tsAssign1: NewAssign = createNewAssign(...assignArgs);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
