import type { CollectionConfig } from "payload";

export const Builders: CollectionConfig = {
	slug: "builders",
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
			name: "byline",
			type: "text",
		},
		{
			name: "quote",
			type: "textarea",
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "body",
			type: "richText",
		},
		{
			name: "author",
			type: "richText",
		},
	],
};
