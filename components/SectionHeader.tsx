interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="w-16 h-0.75 bg-red-700 mx-auto mb-6"></div>

      <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
        {title}
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
