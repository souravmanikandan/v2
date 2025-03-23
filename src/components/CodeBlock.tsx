"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `import React from "react";
  
  export default function Home() {
    return (
        <main>
            <h1>Welcome Home</h1>
        </main>
    );
}`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="jsx"
        filename="Home.jsx"
        highlightLines={[4, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
