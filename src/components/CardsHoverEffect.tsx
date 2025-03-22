import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Frontend Development",
        description:
        ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Redux"],
        link: "https://stripe.com",
    },
    {
        title: "Backend Development",
        description:
        ["Node.js", "Express.js", "NestJS", "Django", "GraphQL", "FastAPI"],
        link: "https://netflix.com",
    },
    {
        title: "Databases",
        description:
        ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "Redis"],
        link: "https://google.com",
    },
    {
        title: "DevOps & Cloud",
        description:
        ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions", "Terraform"],
        link: "https://google.com",
    },
    {
        title: "Programming Languages",
        description:
        ["JavaScript", "TypeScript", "Python", "Go", "Rust", "C++"],
        link: "https://google.com",
    },
    {
        title: "Testing & Debugging",
        description:
        ["Chrome DevTools", "React DevTools", "Lighthouse", "ESLint", "Postman"],
        link: "https://google.com",
    },
];
