import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { experience } from "../../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <SectionHeading
        number="04"
        label="EXPERIENCE"
        title="Beyond the code."
        description={
          "Software development is more than writing code. It’s understanding problems, working with people, " +
          "and building solutions that actually get used."
        }
      />
      <div className="timeline">
        <div className="timeline-line" />
        {experience.map((item) => (
          <div
            className={`timeline-item ${item.muted ? "muted" : ""}`}
            key={item.id}
          >
            <div className="timeline-dot" />
            <div className="timeline-date">
              {item.date} <span>—</span> {item.label}
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="company">
                {item.company}
                {item.location && (
                  <>
                    <span> · </span>
                    {item.location}
                  </>
                )}
              </p>
              {item.bullets ? (
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="timeline-note">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
