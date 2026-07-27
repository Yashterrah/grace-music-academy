import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-lg font-bold text-white">
        G
      </div>

      <div>
        <p className="font-bold leading-none">
          Grace Muigai
        </p>

        <p className="text-sm text-gray-500">
          Music Academy
        </p>
      </div>
    </Link>
  );
}