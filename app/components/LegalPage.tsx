import type { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main className="w-full bg-[#0A1628] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#F5F7FA] mb-3"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h1>
        <p className="text-[#8BA5C8] text-sm mb-12">Last updated: {updated}</p>

        <div
          className="prose prose-invert max-w-none
            prose-headings:text-[#E8EDF5] prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-[#8BA5C8] prose-p:leading-relaxed
            prose-li:text-[#8BA5C8] prose-strong:text-[#E8EDF5]
            prose-a:text-[#4A9FFF] prose-a:no-underline hover:prose-a:text-[#1E6FD9]"
        >
          {children}
        </div>
      </div>
    </main>
  );
}
