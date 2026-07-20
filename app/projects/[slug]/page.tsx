export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = await getProjectData(slug);
  return projectData;
}

function getProjectData(slug: string) {
  return <p>{slug}</p>;
}
