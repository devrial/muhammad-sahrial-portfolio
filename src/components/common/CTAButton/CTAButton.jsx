import { Button } from "primereact/button";

export default function CTAButton({
  label,
  targetId,
  className = "",
  ...props
}) {
  const handleClick = () => {
    if (targetId)
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    props.onClick?.();
  };

  return (
    <Button
      label={label}
      className={className}
      onClick={handleClick}
      {...props}
    />
  );
}
