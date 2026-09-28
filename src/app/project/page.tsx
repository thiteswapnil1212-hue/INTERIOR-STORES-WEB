import { redirect } from "next/navigation";

/**
 * /project → /projects (permanent redirect)
 *
 * The canonical showcase URL is /projects. This page permanently
 * redirects to avoid duplicate content and broken links.
 */
export default function ProjectRedirectPage() {
  redirect("/projects");
}