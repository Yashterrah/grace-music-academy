import Image from "next/image";

export function AboutImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        <Image
          src="/images/about.jpg"
          alt="Students learning music at Grace Muigai Music Academy"
          width={700}
          height={850}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}