import type { CollectionConfig } from "payload";

export const Teams: CollectionConfig = {
	slug: "teams",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "title", "role", "teamOrder"],
	},
	fields: [
		{
			name: "name",
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
			name: "title",
			type: "text",
		},
		{
			name: "profilePhoto",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "role",
			type: "select",
			options: [
				{ label: "Board", value: "board" },
				{ label: "Team", value: "team" },
				{ label: "Volunteer", value: "volunteer" },
				{ label: "Advisor", value: "advisor" },
			],
		},
		{
			name: "twitter",
			type: "text",
		},
		{
			name: "linkedin",
			type: "text",
		},
		{
			name: "teamOrder",
			type: "number",
			admin: { position: "sidebar" },
		},
	],
};
