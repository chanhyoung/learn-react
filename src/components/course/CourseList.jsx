import CourseItem from "./CourseItem";

export default function CourseList() {
  return (
    <div className="card">
          <div className="card__header">강의 목록</div>
          <div className="card__body">
            <div className="courses">
              <CourseItem></CourseItem>
              <CourseItem></CourseItem>
              <CourseItem></CourseItem>
            </div>
          </div>
        </div>
  );
}
