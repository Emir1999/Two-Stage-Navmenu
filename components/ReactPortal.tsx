import React, { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (
  wrapperId: string
): HTMLDivElement | null => {
  if (!document) return null;
  document.body.style.overflow = 'hidden';
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);

  wrapperElement.style.position = 'fixed';
  wrapperElement.style.top = '0';
  wrapperElement.style.left = '0';
  wrapperElement.style.width = '100%';
  wrapperElement.style.height = '100%';
  wrapperElement.style.zIndex = '9999';

  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export default function ReactPortal({
  children,
  wrapperId,
}: {
  children: React.ReactElement;
  wrapperId: string;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element ?? undefined);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}
