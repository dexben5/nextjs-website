import { getSortedPostsData } from "@lib/posts";
import Link from "next/link";
import Date from "@components/date";

// argument passed can also be expressed as props, then props.allPostsData within
export default async function Page() {
  const allPostsData = await getSortedPostsData();

  // Everything within layout is its children because it's not self-closing
  return (
    <>
      <section className="text-[1.2rem] leading-normal">
        <p>
          My name is Dexter. I like to ski, lift weights, and I'm working to
          become a full-stack developer.
        </p>
        <p>
          On this website you'll see a showcase of my skills, ranging from
          development with Next.js and React to algorithms implemented in Java.
        </p>
      </section>
      <section className="text-[1.2rem] leading-normal pt-px">
        <h2 className="text-2xl font-extrabold leading-[1.4] my-4">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="pb-5" key={id}>
              <Link className="text-blue-600" href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className="text-stone-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
