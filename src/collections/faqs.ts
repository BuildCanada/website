import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
	slug: "faqs",
	admin: {
		useAsTitle: "question",
		defaultColumns: ["question", "order"],
	},
	fields: [
		{
			name: "question",
			type: "text",
			required: true,
		},
		{
			name: "answer",
			type: "richText",
		},
		{
			name: "answerText",
			type: "textarea",
			admin: { description: "Plain text answer (used when rich text is not needed)" },
		},
		{
			name: "link",
			type: "group",
			fields: [
				{
					name: "text",
					type: "text",
				},
				{
					name: "href",
					type: "text",
				},
			],
		},
		{
			name: "order",
			type: "number",
			admin: { position: "sidebar" },
		},
	],
};
