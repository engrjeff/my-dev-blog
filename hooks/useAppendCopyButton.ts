'use client';

import { useEffect } from 'react';

const SELECTOR = '[data-rehype-pretty-code-fragment]';

function copyCode(element: Element) {
  const code = element.querySelector('code');

  if (navigator.clipboard) {
    if (code?.textContent) {
      navigator.clipboard.writeText(code.textContent);
    }
  }
}

export function useAppendCopyButton() {
  useEffect(() => {
    const codeblocks = document.querySelectorAll(SELECTOR);

    codeblocks.forEach((block) => {
      block.classList.add('relative');

      const copybutton = document.createElement('button');

      copybutton.textContent = `Copy`;

      copybutton.classList.add(
        'absolute',
        'top-1',
        'right-1',
        'rounded',
        'text-gray-400',
        'bg-gray-700',
        'text-sm',
        'px-2',
        'py-1',
        'hover:bg-gray-800'
      );

      copybutton.addEventListener('click', () => {
        copyCode(block);
        copybutton.textContent = 'Copied!';
        setTimeout(() => {
          copybutton.textContent = 'Copy!';
        }, 2000);
      });

      block.appendChild(copybutton);
    });
  }, []);
}
