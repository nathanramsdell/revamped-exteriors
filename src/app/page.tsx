import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Revamped Exteriors
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
          Professional exterior renovation and home improvement services.
          Transform your home&apos;s curb appeal with quality craftsmanship.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Button size="lg">Get a Free Quote</Button>
          <Button variant="outline" size="lg">
            Our Services
          </Button>
        </div>
      </section>
    </div>
  );
}
