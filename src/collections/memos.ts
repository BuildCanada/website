import type { CollectionConfig } from "payload";

export const Memos: CollectionConfig = {
	slug: "memos",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "category", "builder", "publishedAt"],
	},
	versions: {
		drafts: true,
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
			name: "builder",
			type: "relationship",
			relationTo: "teams",
		},
		{
			name: "builder2",
			type: "relationship",
			relationTo: "teams",
		},
		{
			name: "description",
			type: "textarea",
		},
		{
			name: "keyMessages",
			type: "array",
			minRows: 1,
			maxRows: 4,
			fields: [
				{
					name: "message",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "body",
			type: "richText",
		},
		{
			name: "appendix",
			type: "richText",
		},
		{
			name: "supporters",
			type: "richText",
		},
		{
			name: "category",
			type: "select",
			options: [
				{ label: "Housing", value: "housing" },
				{ label: "Industry", value: "industry" },
				{ label: "Government Transformation", value: "government-transformation" },
				{ label: "Digital Innovation", value: "digital-innovation" },
				{ label: "Nation Building", value: "nation-building" },
				{ label: "Immigration", value: "immigration" },
				{ label: "Energy", value: "energy" },
				{ label: "Finance", value: "finance" },
				{ label: "Defence", value: "defence" },
			],
		},
		{
			name: "twitterEmbed",
			type: "richText",
		},
		{
			name: "seoImage",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "publishedAt",
			type: "date",
			admin: { position: "sidebar" },
		},
		{
			name: "builderName",
			type: "text",
			admin: { description: "Fallback author name when not linked to a team member" },
		},
		{
			name: "builderTitle",
			type: "text",
			admin: { description: "Fallback author title/role" },
		},
		{
			name: "builderAvatar",
			type: "text",
			admin: { description: "Fallback avatar image path" },
		},
	],
};
