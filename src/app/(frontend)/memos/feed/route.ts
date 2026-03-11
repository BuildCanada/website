import { redirect } from "next/navigation";

export function GET() {
	redirect("/memos/rss.xml");
}
