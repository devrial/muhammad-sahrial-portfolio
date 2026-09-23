import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

export default function ProjectCard({ project }) {
  const links = project.links;

  return (
    <Card className={`project-card ${project.tone}`}>
      <div className="project-visual">
        <span>{project.type}</span>
        <strong>{project.number}</strong>
        <div className="mini-graph">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="project-body">
        <div className="project-title">
          <h3>{project.title}</h3>
          {links?.demo ? (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
            >
              <i className="pi pi-arrow-up-right" />
            </a>
          ) : (
            <i className="pi pi-arrow-up-right" />
          )}
        </div>
        <div className="project-detail">
          <span>Problem</span>
          <p>{project.problem}</p>
        </div>
        <div className="project-detail">
          <span>What I built</span>
          <p>{project.built}</p>
        </div>
        <div className="project-stack">
          {project.stack.map((item) => (
            <Tag value={item} key={item} />
          ))}
        </div>
        <Divider />
        <div className="project-result">
          <span>{project.result}</span>
        </div>
        {links && (links.demo || links.github) && (
          <div className="project-links">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="pi pi-arrow-up-right" />
                Live Demo
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
