"use client";
import ContentBlock from "../content";

export default function GridBlock({
	mobileColumns = 1,
	tabletColumns = 2,
	desktopColumns = 3,
	gaps = 1,
	gapsX,
	gapsY,
	justify,
	align,
	children = [],
}: GridDoc) {
	return (
		<div className="container mx-auto gap-x">
			<style jsx>{`
		  .my-grid {
			display: grid;
			grid-template-columns: repeat(${mobileColumns ?? 1}, minmax(0, 1fr)) !important;
			${gaps && `gap: ${gaps}px;`}
			${gapsX && `column-gap: ${gapsX}px;`}
			${gapsY && `row-gap: ${gapsY}px;`}
			${justify && `justify-content: ${justify};`}
			${align && `align-content: ${align};`}
		  }
  
		  @media (max-width: 767px) {
			.my-grid {
			  grid-template-columns: repeat(${mobileColumns ?? 1}, minmax(0, 1fr)) !important;
			}
		  }
  
		  @media (min-width: 768px) and (max-width: 1023px) {
			.my-grid {
			  grid-template-columns: repeat(${tabletColumns ?? 2}, minmax(0, 1fr)) !important;
			}
		  }
  
		  @media (min-width: 1024px) {
			.my-grid {
			  grid-template-columns: repeat(${desktopColumns ?? 3}, minmax(0, 1fr)) !important;
			}
		  }
		`}</style>
			<div className="my-grid">
				{children.map((content) => (
					<ContentBlock {...content} key={content.id} />
				))}
			</div>
		</div>
	);
}
