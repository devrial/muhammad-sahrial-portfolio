import SectionHeading from "../../common/SectionHeading/SectionHeading";
import SkillGroup from "../../common/SkillGroup/SkillGroup";
import { skills } from "../../../data/skills";

export default function Skills() {
  return (
    <section className="section-shell skills-section">
      <SectionHeading
        number="02"
        label="CAPABILITIES"
        title="What I work with"
        description="A practical stack for building and maintaining modern web applications."
      />
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillGroup skill={skill} key={skill.title} />
        ))}
      </div>
    </section>
  );
}
