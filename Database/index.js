import courses from "./courses.json" assert { type: "json" };
import modules from "./modules.json" assert { type: "json" };
import assignment from "./assignment.json" assert { type: "json" };
import users from "./users.json" assert { type: "json" };
import grades from "./grades.json" assert { type: "json" };
import enrollments from "./enrollments.json" assert { type: "json" };

export default {
  courses,
  modules,
  assignment,
  users,
  grades,
  enrollments,
};

// import courses from "./courses.json";
// import modules from "./modules.json";
// import assignment from "./assignment.json";
// import users from "./users.json";
// import grades from "./grades.json";
// import enrollments from "./enrollments.json";

// // Check if the imported modules are of type "object" (JSON)
// const assertType = (data, expectedType) => {
//   if (typeof data !== expectedType) {
//     throw new Error(`Expected type ${expectedType}, but got ${typeof data}`);
//   }
// };

// // Validate the types
// assertType(courses, "object");
// assertType(modules, "object");
// assertType(assignment, "object");
// assertType(users, "object");
// assertType(grades, "object");
// assertType(enrollments, "object");

// export default {
//   courses,
//   modules,
//   assignment,
//   users,
//   grades,
//   enrollments,
// };