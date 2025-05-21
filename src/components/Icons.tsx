import React from 'react';

export const DiscordLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 11.2c.7-.6 1.5-1.1 2.4-1.6m1.2 0c.9.5 1.7 1 2.4 1.6m-6 0a4 4 0 0 0 6 0m-6 0c-1.1-.9-2-1.8-2.7-2.7a1 1 0 0 1 .5-1.5c.5-.2 1-.4 1.5-.5m8.7 4.7c1.1-.9 2-1.8 2.7-2.7a1 1 0 0 0-.5-1.5c-.5-.2-1-.4-1.5-.5M8.1 17.8c-1 0-1.7-1.2-1.2-2 .4-.6.9-1.2 1.5-1.8m7.5 3.8c1 0 1.7-1.2 1.2-2-.4-.6-.9-1.2-1.5-1.8M13 11.2A7.2 7.2 0 0 0 9 17a1 1 0 0 0 1 1m5-6.8A7.2 7.2 0 0 1 19 17a1 1 0 0 1-1 1" />
  </svg>
);

export const ServerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

export const SendHorizontal: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 3 3 9-3 9 19-9Z" />
    <path d="M6 12h16" />
  </svg>
);