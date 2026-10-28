"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().getFullYear();
}

function getServerSnapshot() {
  return 2026;
}

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span>{year}</span>;
}
