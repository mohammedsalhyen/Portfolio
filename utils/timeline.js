import { client } from "@/lib/client";

export async function fetchTimeline() {
    const timeQuery = '*[_type == "experience"]| order(start desc)';
    const data = await client.fetch(timeQuery)
    return data;
}