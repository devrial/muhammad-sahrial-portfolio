import CTAButton from "../../common/CTAButton/CTAButton";

export default function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> MUHAMMAD SAHRIAL
        </div>
        <h1>
          Fullstack Developer <span>who builds useful things.</span>
        </h1>
        <p className="hero-lede">
          I build and maintain web applications, backend services, and
          data-driven solutions using modern JavaScript technologies.
        </p>
        <div className="tech-line">
          <span>React</span>
          <b>·</b>
          <span>Node.js</span>
          <b>·</b>
          <span>JavaScript</span>
          <b>·</b>
          <span>PostgreSQL</span>
        </div>
        <div className="tech-line">
          <span>Web Applications</span>
          <b>·</b>
          <span>APIs</span>
          <b>·</b>
          <span>Data-driven Systems</span>
        </div>
        <div className="hero-actions">
          <CTAButton
            label="View my work"
            icon="pi pi-arrow-down-right"
            targetId="work"
          />
          <a className="text-link" href="#contact">
            Let’s work together <span>↗</span>
          </a>
        </div>
        <div className="location">
          <i className="pi pi-map-marker" /> Based in Indonesia
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Abstract representation of a code and data system"
      >
        <div className="visual-label">/ SYSTEMS / 2026</div>
        <div className="code-window">
          <div className="window-top">
            <span />
            <span />
            <span />
            <em>build.useful_things()</em>
          </div>
          <div className="code-lines">
            <p>
              <i>const</i> <b>purpose</b> = <strong>“make it useful”</strong>
            </p>
            <p>
              <i>const</i> <b>stack</b> = [
            </p>
            <p className="indent">“frontend”, “backend”,</p>
            <p className="indent">“data”, “people”</p>
            <p>]</p>
            <p className="blank" />
            <p>
              <i>return</i> <span className="accent-code">purpose</span> +{" "}
              <span className="accent-code">stack</span>
            </p>
          </div>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="axis-label label-x">01 — BUILD</div>
        <div className="axis-label label-y">SYSTEM / HUMAN</div>
      </div>
    </section>
  );
}
