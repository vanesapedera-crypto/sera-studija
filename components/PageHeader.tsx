interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-beige/40 pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="container-studio text-center">
        <h1 className="font-heading text-4xl md:text-6xl text-brown">
          {title}
        </h1>
        {description && (
          <p className="mt-5 mx-auto max-w-intro font-body text-base md:text-lg text-dark/75">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
