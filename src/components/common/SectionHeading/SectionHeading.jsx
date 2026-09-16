export default function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <div className="section-kicker">
          <span>{number} - {label}</span>
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
