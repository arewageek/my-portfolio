"use client"

import dynamic from "next/dynamic"

export const GithubActivity = dynamic(
  () => import("./github-activity").then(m => m.GithubActivity),
  { ssr: false }
)
