import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

// argument passed can also be expressed as props, then props.allPostsData within
export default async function Page() {
  const allPostsData = await getSortedPostsData();

  // Everything within layout is its children because it's not self-closing
  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Dexter. I like to ski, lift weights, and I'm working to
          become a full-stack developer.
        </p>
        <p>
          On this website you'll see a showcase of my skills, ranging from
          development with Next.js and React to algorithms implemented in Java.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
