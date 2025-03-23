import { FaDocker, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { HoverEffect } from "./ui/card-hover-effect";
import { RiFirebaseFill, RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiExpress, SiGraphql, SiMysql, SiRedux, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { AiOutlineKubernetes } from "react-icons/ai";



export const projects = [
    {
        title: "Frontend Development",
        description:
            [
                { text: "React", tag: FaReact, color: "blue"}, 
                { text: "Next.js", tag: RiNextjsFill, color: "white"}, 
                { text: "Vue.js", tag: FaVuejs , color: "green" }, 
                { text: "Tailwind CSS", tag: RiTailwindCssFill , color: "blue" }, 
                { text: "TypeScript", tag: SiTypescript , color: "blue" }, 
                { text: "Redux", tag: SiRedux , color: "blue" },
            ],
    },
    {
        title: "Backend Development",
        description:
            [
                { text: "Node.js", tag: FaNodeJs , color: "blue" }, 
                { text: "Express.js", tag: SiExpress , color: "blue" }, 
                { text: "NestJS", tag: RiNextjsFill, color: "blue" }, 
                { text: "Django", tag: SiDjango , color: "white" }, 
                { text: "GraphQL", tag: SiGraphql , color: "red" }, 
                { text: "FastAPI", tag: FaReact, color: "blue" },
            ],
    },
    {
        title: "Databases",
        description:
            [
                { text: "PostgreSQL", tag: BiLogoPostgresql, color: "blue" }, 
                { text: "MongoDB", tag: DiMongodb , color: "blue" }, 
                { text: "MySQL", tag: SiMysql , color: "blue" }, 
                { text: "Firebase", tag: RiFirebaseFill , color: "blue" }, 
                { text: "Supabase", tag: RiSupabaseFill , color: "blue" }, 
                { text: "Redis", tag: FaReact, color: "blue" },
            ],
    },
    {
        title: "DevOps & Cloud",
        description:
            [
                { text: "Docker", tag: FaDocker , color: "blue" }, 
                { text: "Kubernetes", tag: AiOutlineKubernetes , color: "blue" }, 
                { text: "AWS", tag: FaReact, color: "blue" }, 
                { text: "Vercel", tag: FaReact, color: "blue" }, 
                { text: "GitHub Actions", tag: FaReact, color: "blue" }, 
                { text: "Terraform", tag: FaReact, color: "blue" },
            ],
    },
    {
        title: "Programming Languages",
        description:
            [
                
                { text: "JavaScript", tag: FaReact, color: "blue" }, 
                { text: "TypeScript", tag: FaReact, color: "blue" }, 
                { text: "Python", tag: FaReact, color: "blue" }, 
                { text: "Go", tag: FaReact, color: "blue" }, 
                { text: "Rust", tag: FaReact, color: "blue" }, 
                { text: "C++", tag: FaReact, color: "blue" },
            ],
    },
    {
        title: "Testing & Debugging",
        description:
            [
                
                { text: "Chrome DevTools", tag: FaReact, color: "blue" }, 
                { text: "React DevTools", tag: FaReact, color: "blue" }, 
                { text: "Lighthouse", tag: FaReact, color: "blue" }, 
                { text: "ESLint", tag: FaReact, color: "blue" }, 
                { text: "Postman", tag: FaReact, color: "blue" },
            ],
    },

];

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}