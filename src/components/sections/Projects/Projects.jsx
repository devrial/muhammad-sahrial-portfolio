import SectionHeading from "../../common/SectionHeading/SectionHeading";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <section id="work" className="section-shell work-section">
      <SectionHeading
        number="03"
        label="SELECTED WORK"
        title="Systems built to solve real problems."
        description={
          "A selection of web applications and digital systems " +
          "I've worked on across government, financial, and " +
          "business workflows."
        }
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
