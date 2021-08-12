import React from "react"
import Dropdown from "../components/Dropdown"
import Layout from "../components/Layout"

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
]

export default function about() {
  return <Dropdown title="Select move" items={items} />
}
