interface SectionTitleProps {
  title: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  align = "left",
}: SectionTitleProps) {
  return (
    <h2
      className={`font-heading text-3xl md:text-4xl text-brown ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {title}
    </h2>
  );
}
