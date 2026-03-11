"use client";

import { useState } from "react";
import Link from "next/link";

function ArrowIcon() {
	return (
		<img
			src="/images/arrow.svg"
			loading="lazy"
			width={14}
			height={14}
			alt=""
			className="arrow-right"
			style={{ transform: "rotate(-90deg)" }}
		/>
	);
}

function ArrowIcon2() {
	return (
		<img
			src="/images/arrow.svg"
			loading="lazy"
			width={14}
			height={14}
			alt=""
			className="arrow-right-2"
			style={{ transform: "rotate(-90deg)" }}
		/>
	);
}

function ReadMoreCta() {
	return (
		<div className="card-meta">
			<div className="cta">
				<div className="meta">Read more</div>
				<div className="read-icon">
					<ArrowIcon />
					<ArrowIcon2 />
				</div>
			</div>
		</div>
	);
}

const categories = [
	{ label: "All", value: "all" },
	{ label: "Finance", value: "finance" },
	{ label: "Nation Building", value: "nation-building" },
	{ label: "Housing", value: "housing" },
	{ label: "Defence", value: "defence" },
	{ label: "Immigration", value: "immigration" },
	{ label: "Government Transformation", value: "government-transformation" },
	{ label: "Energy", value: "energy" },
	{ label: "Industry", value: "industry" },
	{ label: "Digital Innovation", value: "digital-innovation" },
];

export interface MemoItem {
	category: string;
	href: string;
	title: string;
	description: string;
	avatar: string;
	author: string;
	role: string;
}

export default function MemoList({ memos }: { memos: MemoItem[] }) {
	const [activeFilter, setActiveFilter] = useState("all");

	const filteredMemos =
		activeFilter === "all"
			? memos
			: memos.filter((m) => m.category === activeFilter);

	return (
		<>
			<div id="memo-filters" className="memo-filters">
				{categories.map((cat) => (
					<div
						key={cat.value}
						data-filter={cat.value}
						className={`primary-button filter-button${activeFilter === cat.value ? " is-active" : ""}`}
						onClick={() => setActiveFilter(cat.value)}
					>
						{cat.label}
					</div>
				))}
			</div>

			<div className="memo-wrapper">
				<div className="memo-grid" role="list">
					{filteredMemos.map((memo) => (
						<div
							key={memo.href}
							data-cats={memo.category}
							className="memo-item"
							role="listitem"
						>
							<Link href={memo.href} className="memo-card">
								<div className="card-text">
									<div className="memo-details">
										<h3>{memo.title}</h3>
										<p>{memo.description}</p>
									</div>
									<div className="builder">
										<img
											src={memo.avatar}
											loading="lazy"
											width={60}
											height={60}
											alt=""
											className="avatar-small"
										/>
										<div className="memo-card-name">
											<p className="p2 sans">{memo.author}</p>
											<div className="meta">{memo.role}</div>
										</div>
									</div>
								</div>
								<ReadMoreCta />
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
