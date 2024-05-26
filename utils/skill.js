import { client } from "@/lib/client";

export async function fetchSkill() {
    const query = '*[_type == "skill"]';
    const data = await client.fetch(query);
    return data;
}