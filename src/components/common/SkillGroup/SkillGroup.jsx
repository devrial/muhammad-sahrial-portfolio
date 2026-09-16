import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

export default function SkillGroup({ skill }) {
  return (
    <Card className="skill-card">
      <i className={skill.icon} />
      <h3>{skill.title}</h3>
      <div className="skill-items">
        {skill.items.map((item) => (
          <Tag value={item} key={item} />
        ))}
      </div>
    </Card>
  );
}
