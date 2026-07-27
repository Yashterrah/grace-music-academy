import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
        <Image
          src="/images/hero.jpg"
          alt="Grace Muigai Music Academy"
          width={650}
          height={700}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}