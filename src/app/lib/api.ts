import Database from "better-sqlite3";

export interface ICourse {
  id: number;
  price: number;
  name: string;
  cover: string;
  duration: number;
  elm: ICourse;
}

export type InputCourse = Omit<ICourse, "id">;

const db = new Database("courses.db");

export const addCourse = (course: InputCourse) => {
  db.prepare(
    `
   INSERT INTO courses(name,price,cover,duration) 
   VALUES(@name,@price,@cover,@duration)
    `
  ).run(course);
};

export const getAllCourses = (): ICourse[] => {
  return db
    .prepare(
      `
        SELECT * FROM courses
        `
    )
    .all() as ICourse[];
};

export const getCourseById = (id: number): ICourse => {
  const course = db
    .prepare(
      `
        SELECT * FROM courses WHERE id=?
        
        `
    )
    .get(id) as ICourse;
  return course;
};
