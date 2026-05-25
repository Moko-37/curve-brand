export default function SectionHeader({ subtitle, title, description, light = false }) {
  return (
    <div className="text-center mb-16">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      <div className="section-divider mx-auto" />
      {description && (
        <p className={`section-description ${light ? '!text-dark-300' : ''}`}>{description}</p>
      )}
    </div>
  );
}