import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";
import { Course } from "./course";
import Link from "next/link";

export default function Home() {
  const items = getAllCourses();
  console.log();
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        {items.map((elm) => (
          <div>
            <Link key={elm.id} href={`/courses/detalis/${elm.id}`}>
              <Course elm={elm} />
            </Link>

            <Link href={`/courses/edit/${elm.id}`}>
              <strong>EDIT</strong>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
