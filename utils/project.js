import { client } from "@/lib/client";

export async function fetchProject() {
    const query = '*[_type == "project"]| order(framework)';
    const data = await client.fetch(query);
    return data;
}

