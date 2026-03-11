import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
	slug: "posts",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "hidden"],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			unique: true,
			admin: { position: "sidebar" },
		},
		{
			name: "summary",
			type: "textarea",
		},
		{
			name: "body",
			type: "richText",
		},
		{
			name: "seoImage",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "hidden",
			type: "checkbox",
			defaultValue: false,
			admin: { position: "sidebar" },
		},
	],
};
