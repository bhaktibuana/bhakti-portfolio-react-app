import React from 'react';

import { withPublicPageLayout } from '@/components/layouts/public/page';
import taikoBanner from '@/assets/images/taiko-banner.png';
import grassBanner from '@/assets/images/grass-banner.webp';

import Motion from '@/components/layouts/motion';
import PageContent from '@/components/layouts/public/page-content';
import Project from '@/components/pages/public/home/project/Project';

import '@/pages/public/home/home.scss';

const Home = () => {
	return (
		<>
			<div className="home-container">
				{/* Title Section */}
				<section className="home-page-title-section">
					<Motion delayLevel={1}>
						<h1 className="home-page-title">Bhakti Mega Buana</h1>
					</Motion>

					<Motion delayLevel={2}>
						<p className="home-page-subtitle">
							I develop & automate Web3 solutions
						</p>
					</Motion>
				</section>

				{/* Selected Projects */}
				<Motion delayLevel={3}>
					<div className="home-content-container">
						<h2 className="home-page-title">Selected projects</h2>

						<div className="home-project-wrapper">
							<PageContent title="2024 - 2025">
								<Project
									title="Trailblazers Automation"
									description="Simplifies high-frequency transactions on the Taiko network, optimizing gas fees without sacrificing speed. Has features wallet monitoring, transaction history, gas price checks, RPC latency tracking and more."
									to="/"
									src={taikoBanner}
								/>
							</PageContent>

							<PageContent title="2024 - Now">
								<Project
									title="Grass Mining Nodes"
									description="Grass Unlimited Nodes Miner bypasses device and IP restrictions in Grass network mining by containerizing nodes with Docker and assigning virtual IPs. This allows each container to mine independently, enabling unlimited mining on a single VPS."
									to="/"
									src={grassBanner}
								/>
							</PageContent>
						</div>
					</div>
				</Motion>
			</div>
		</>
	);
};

const Component = withPublicPageLayout(Home);

export default Component;
