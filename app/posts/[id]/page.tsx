import parse from "html-react-parser";
import { getAllPostIds, getPostData } from "@lib/posts";
import Date from "@components/date";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);
  return {
    title: postData.title,
    description: postData.title + " posted on " + postData.date,
  };
}

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
      <article className="prose">
        <h1 className="text-[2rem] font-extrabold leading-[1.3] tracking-[-0.05rem] my-4">
          {postData.title}
        </h1>
        <div className="text-stone-500">
          <Date dateString={postData.date} />
        </div>
        <div>{parse(postData.contentHtml)}</div>
      </article>
    </>
  );
}
