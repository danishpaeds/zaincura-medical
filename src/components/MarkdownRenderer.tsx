'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('markdown-content', className)}>
      <style>{`
        .markdown-content ul > li {
          position: relative;
          padding-left: 2rem;
        }
        .markdown-content ul > li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #4A9D9C;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .markdown-content ul ul > li::before {
          content: "•";
          font-size: 1.5rem;
        }
      `}</style>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ ...props }) => (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-12 mb-6 leading-tight border-b-4 border-[#4A9D9C] pb-4" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A9D9C] mt-10 mb-5 leading-tight" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-2xl md:text-3xl font-semibold text-[#3A8D8C] mt-8 mb-4" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3" {...props} />
          ),
          h5: ({ ...props }) => (
            <h5 className="text-lg md:text-xl font-semibold text-gray-700 mt-4 mb-2" {...props} />
          ),
          h6: ({ ...props }) => (
            <h6 className="text-base md:text-lg font-semibold text-gray-700 mt-3 mb-2" {...props} />
          ),

          // Paragraphs
          p: ({ ...props }) => (
            <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />
          ),

          // Lists
          ul: ({ ...props }) => (
            <ul className="space-y-3 mb-6 ml-6 list-none" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-outside space-y-3 mb-6 ml-6 marker:text-[#4A9D9C] marker:font-semibold" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="text-lg text-gray-700 leading-relaxed pl-2" {...props} />
          ),

          // Links
          a: ({ ...props }) => (
            <a
              className="text-[#4A9D9C] hover:text-[#3A8D8C] underline decoration-2 underline-offset-2 font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),

          // Blockquotes
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-[#4A9D9C] bg-[#4A9D9C]/5 pl-6 pr-4 py-4 my-6 italic text-gray-700 rounded-r-lg"
              {...props}
            />
          ),

          // Code
          code: ({ className, ...props }: { className?: string; children?: React.ReactNode }) => {
            const isInline = !className?.includes('language-');
            return isInline ? (
              <code className="bg-[#4A9D9C]/10 text-[#3A8D8C] px-2 py-1 rounded text-sm font-mono font-semibold" {...props} />
            ) : (
              <code className="block bg-gray-900 text-[#5CD9C6] p-4 rounded-lg overflow-x-auto text-sm font-mono my-6" {...props} />
            );
          },

          // Pre (code blocks)
          pre: ({ ...props }) => (
            <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto my-6 shadow-lg" {...props} />
          ),

          // Strong/Bold
          strong: ({ ...props }) => (
            <strong className="font-bold text-gray-900" {...props} />
          ),

          // Emphasis/Italic
          em: ({ ...props }) => (
            <em className="italic text-gray-800" {...props} />
          ),

          // Horizontal Rule
          hr: ({ ...props }) => (
            <hr className="my-12 border-t-2 border-gray-200" {...props} />
          ),

          // Tables
          table: ({ ...props }) => (
            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-[#4A9D9C]/10" {...props} />
          ),
          tbody: ({ ...props }) => (
            <tbody className="bg-white divide-y divide-gray-200" {...props} />
          ),
          tr: ({ ...props }) => (
            <tr className="hover:bg-gray-50 transition-colors" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="px-6 py-4 text-sm text-gray-700" {...props} />
          ),

          // Images
          img: ({ ...props }) => (
            <img className="rounded-lg shadow-lg my-8 w-full" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
