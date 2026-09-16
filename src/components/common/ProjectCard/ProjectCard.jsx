import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

export default function ProjectCard({ project }) {
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
          <i className="pi pi-arrow-up-right" />
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
      </div>
    </Card>
  );
}
