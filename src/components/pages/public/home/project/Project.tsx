import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@/components/pages/public/home/project/project.scss';

const Project: React.FC<{
	title: string;
	description: string;
	to: string;
	src: string;
}> = ({ title, description, to, src }) => {
	const navigate = useNavigate();

	const handleReadMore: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault();
		if (to !== undefined) navigate(to);
	};

	return (
		<>
			<div className="project-wrapper">
				<div className="text-wrapper">
					<h3 className="project-title">{title}</h3>

					<p className="project-description">{description}</p>

					<a href={to} className="read-more" onClick={handleReadMore}>
						Read more
					</a>
				</div>

				<div className="image-wrapper">
					<img src={src} />
				</div>
			</div>
		</>
	);
};

export default Project;
