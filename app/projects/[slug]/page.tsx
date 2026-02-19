import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { ProjectDetail } from "@/components/project-detail";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Next.js 16+ için params Promise olabilir
  const resolvedParams = 'then' in params ? await params : params;
  const slug = resolvedParams.slug;
  
  // Eğer slug yoksa veya boşsa, varsayılan olarak limestone-residence kullan
  const projectSlug = slug || 'limestone-residence';
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    // Fallback: İlk projeyi göster
    const fallbackProject = getProjectBySlug('limestone-residence');
    if (fallbackProject) {
      return (
        <main>
          <Header />
          <ProjectDetail project={fallbackProject} />
          <Footer />
        </main>
      );
    }
    notFound();
  }

  return (
    <main>
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
