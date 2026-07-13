import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/content/tours-and-blog";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jamaica Travel Blog — Airport Transfers, Tours & Tips",
  description:
    "Guides for US travelers visiting Jamaica — MBJ airport transfers, RIU & Royalton resort shuttles, Ocho Rios tours, and group transport tips.",
};

export default function BlogPage() {
  return (
    <>
      <div className="rasta-gradient-bg pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-jamaica-gold hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Jamaica Travel Guides
          </h1>
          <p className="mt-4 text-lg text-jamaica-gold-light/90">
            Tips for US travelers — airport transfers, resort pickups, and island tours.
          </p>
        </div>
        <JamaicaStripe variant="flag" className="mt-12" />
      </div>

      <section className="bg-jamaica-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border-2 border-jamaica-green/10 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="h-1 rasta-stripe" />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-jamaica-green">
                    <span className="rounded-full bg-jamaica-green-light px-3 py-1">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-jamaica-black-soft/60">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-jamaica-black-soft/60">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-jamaica-black">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-jamaica-green"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-bold text-rasta-red hover:text-rasta-red-dark"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
