import type { CollectionConfig } from "payload";

export const Tools: CollectionConfig = {
	slug: "tools",
	admin: {
		useAsTitle: "title",
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
			name: "description",
			type: "textarea",
		},
		{
			name: "url",
			type: "text",
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "srcSet",
			type: "text",
			admin: { description: "srcSet string for responsive images" },
		},
	],
};
