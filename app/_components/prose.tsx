export function Prose({ html, className = "" }: { html: string; className?: string }) {
  return (
    <div
      className={`prose-article prose prose-neutral max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
