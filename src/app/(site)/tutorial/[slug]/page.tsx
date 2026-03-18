import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getTutorialBySlug, getTutorialSlugs } from "@/sanity/queries";

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { asset?: { url?: string }; caption?: string };
    }) => {
      const url = value?.asset?.url;
      if (!url) return null;
      return (
        <figure className="my-6">
          <Image
            src={url}
            alt={value.caption || "Tutorial screenshot"}
            width={800}
            height={450}
            className="w-full rounded-xl border border-gray-100 shadow-sm"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export async function generateStaticParams() {
  const slugs = await getTutorialSlugs();
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = await getTutorialBySlug(slug);
  if (!tutorial) return { title: "Tutorial Tidak Ditemukan" };
  return {
    title: `${tutorial.title} — Tutorial LabaBersih`,
    description: tutorial.description,
  };
}

export default async function TutorialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = await getTutorialBySlug(slug);

  if (!tutorial) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
              L
            </div>
            <span className="text-lg font-semibold text-gray-900">
              LabaBersih
            </span>
          </Link>
          <a
            href="https://app.lababersih.com"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700"
          >
            Buka Aplikasi
          </a>
        </div>
      </nav>

      {/* Back link */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <Link
          href="/tutorial"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Kembali ke Tutorial
        </Link>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
          {tutorial.title}
        </h1>
        {tutorial.description && (
          <p className="mt-3 text-gray-600">{tutorial.description}</p>
        )}

        {/* Body */}
        {tutorial.body && (
          <div className="prose prose-gray mt-10 max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h3:text-lg prose-p:text-gray-700 prose-p:leading-7 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm">
            <PortableText value={tutorial.body} components={portableTextComponents} />
          </div>
        )}
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
              L
            </div>
            <span className="text-sm font-medium text-gray-900">
              LabaBersih
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/tentang"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Tentang
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Syarat
            </Link>
            <Link
              href="/pengembalian-dana"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Refund
            </Link>
            <a
              href="https://app.lababersih.com"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Aplikasi
            </a>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} LabaBersih
          </p>
        </div>
      </footer>
    </div>
  );
}
