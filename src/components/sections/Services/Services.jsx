import SectionHeading from "../../common/SectionHeading/SectionHeading";
import ServiceCard from "../../common/ServiceCard/ServiceCard";
import { services } from "../../../data/services";

export default function Services() {
  return (
    <section id="services" className="section-shell services-section">
      <SectionHeading
        number="05"
        label="SERVICES"
        title="How I can help."
        description="From first idea to a dependable tool your team can actually use."
      />
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
      <div className="service-cta">
        <h3>Have a problem worth solving?</h3>
        <a className="text-link" href="#contact">
          Let’s work together <span>↗</span>
        </a>
      </div>
    </section>
  );
}
