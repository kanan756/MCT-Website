import { isGoogleConfigured, getSheetRows } from "@/lib/googleSheets";
import { INITIAL_BLOGS, BlogPost } from "@/data/blogs";
import { PROJECTS, Project } from "@/data/projects";
import { servicesData, ServiceCategory } from "@/data/services";

/**
 * Fetch blogs: reads from Google Sheet when configured, only falls back to static if Google is not configured
 */
export async function getLiveBlogs(): Promise<BlogPost[]> {
  try {
    if (isGoogleConfigured()) {
      const rows = await getSheetRows("Blogs");
      return (rows || []).map((r: any) => ({
        slug: String(r.slug || ""),
        title: String(r.title || ""),
        category: String(r.category || ""),
        author: String(r.author || "MCT Team"),
        date: String(r.date || new Date().toISOString().split("T")[0]),
        readTime: String(r.readTime || "5 min read"),
        image: String(r.image || ""),
        summary: String(r.summary || ""),
        content: String(r.content || ""),
        tags: Array.isArray(r.tags) ? r.tags : typeof r.tags === "string" ? r.tags.split(",").map((s: string) => s.trim()) : [],
        published: r.published === undefined || r.published === "" ? true : Boolean(r.published === true || r.published === "true" || r.published === "TRUE" || r.published === "1" || r.published === 1),
      }));
    }
  } catch (err) {
    console.warn("Could not fetch blogs from Google Sheet, falling back to static:", err);
  }
  return INITIAL_BLOGS;
}

export async function getLiveBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const blogs = await getLiveBlogs();
  return blogs.find((b) => b.slug === slug);
}

/**
 * Fetch projects: reads directly from Google Sheet when configured
 */
export async function getLiveProjects(): Promise<Project[]> {
  try {
    if (isGoogleConfigured()) {
      const rows = await getSheetRows("Projects");
      return (rows || []).map((r: any) => ({
        slug: String(r.slug || ""),
        name: String(r.name || ""),
        solutionCategory: String(r.solutionCategory || ""),
        tagline: String(r.tagline || ""),
        client: String(r.client || ""),
        location: String(r.location || ""),
        duration: String(r.duration || ""),
        year: String(r.year || ""),
        image: String(r.image || ""),
        heroImage: String(r.heroImage || ""),
        tags: Array.isArray(r.tags) ? r.tags : typeof r.tags === "string" ? r.tags.split(",").map((s: string) => s.trim()) : [],
        summary: String(r.summary || ""),
        overview: Array.isArray(r.overview) ? r.overview : typeof r.overview === "string" ? [r.overview] : [],
        businessChallenges: Array.isArray(r.businessChallenges) ? r.businessChallenges : typeof r.businessChallenges === "string" ? [r.businessChallenges] : [],
        solutionDelivered: Array.isArray(r.solutionDelivered) ? r.solutionDelivered : typeof r.solutionDelivered === "string" ? [r.solutionDelivered] : [],
        capabilities: Array.isArray(r.capabilities) ? r.capabilities : [],
        businessValues: Array.isArray(r.businessValues) ? r.businessValues : typeof r.businessValues === "string" ? [r.businessValues] : [],
        technologies: Array.isArray(r.technologies) ? r.technologies : [],
      }));
    }
  } catch (err) {
    console.warn("Could not fetch projects from Google Sheet, falling back to static:", err);
  }
  return PROJECTS;
}

export async function getLiveProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getLiveProjects();
  return projects.find((p) => p.slug === slug);
}

/**
 * Fetch services: reads directly from Google Sheet when configured
 */
export async function getLiveServices(): Promise<ServiceCategory[]> {
  try {
    if (isGoogleConfigured()) {
      const rows = await getSheetRows("Services");
      return (rows || []) as ServiceCategory[];
    }
  } catch (err) {
    console.warn("Could not fetch services from Google Sheet, falling back to static:", err);
  }
  return servicesData;
}
