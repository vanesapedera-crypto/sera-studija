import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-28 md:py-36">
        <div className="container-studio flex flex-col items-center text-center">
          <p className="mx-auto max-w-intro font-heading text-2xl md:text-3xl leading-relaxed text-brown">
            Šēra Labsajūtas Studija ir vieta, kur apvienojas miers,
            profesionalitāte un rūpes par Jūsu labsajūtu.
          </p>
          <p className="mt-6 mx-auto max-w-intro font-body text-base text-dark/70 leading-relaxed">
            Katra procedūra tiek pielāgota individuāli, radot harmonisku un
            relaksējošu pieredzi.
          </p>

          <Button href="/par-mani" variant="outline" className="mt-10 !text-brown !border-brown/40 hover:!bg-brown hover:!text-background">
            Par mani
          </Button>
        </div>
      </section>
    </>
  );
}
