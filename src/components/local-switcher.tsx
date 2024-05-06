"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";

export default function LocalSwticher() {
  const [isPending, startTransition ] = useTransition()
  const router = useRouter();
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
        router.replace(`${nextLocale}`);
    })
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="id">Indonesia</option>
      </select>
    </label>
  );
}
