import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Course from "../../components/Course/Course";
import { CoursesContext } from "../Main/Main";

const Courses = () => {
  const courses = useContext(CoursesContext);
  return (
    <section className="py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-0">
              <h2 className="pt-4 pb-8 text-3xl underline underline-offset-2">
                Total courses:{" "}
                <span className="text-red-500 font-bold">{courses.length}</span>
              </h2>
              <div className="flex flex-col gap-3">
                {courses.map((course, i) => (
                  <Link
                    key={course.id}
                    to={`/course/${course.id}`}
                    className="flex hover:text-blue-500 transition">
                    {`${i + 1}. ` + course.courseName}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 grid gap-x-8 gap-y-12 lg:grid-cols-3">
            {courses.map(course => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
