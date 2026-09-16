import { Card } from "primereact/card";

export default function ServiceCard({ service }) {
  return (
    <Card className="service-card">
      <span className="service-number">{service.number}</span>
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </Card>
  );
}
