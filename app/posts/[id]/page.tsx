import { getAllPostIds, getPostData } from "../../../lib/posts";
import parse from "html-react-parser";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";
import type { Metadata } from "next";

// Dynamic segments not included in generateStaticParams() will return a 404
export const dynamicParams = false;

export async function generateStaticParams() {
  // return a list of possible values for id
  const posts = getAllPostIds();
  return posts;
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        <div>{parse(postData.contentHtml)}</div>
      </article>
    </>
  );
}
