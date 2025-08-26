import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Add = () => {
	return (
		<>
			<h2 className="mt-3">Looking for Equipment</h2>
			<section className="mt-4">
				<p>
					Are you looking for a specialized piece of scientific equipment? If
					yes, how frequently do you anticipate needing to use the equipment? If
					you answered this question with:
				</p>
				<ul>
					<li>Occasionally to conduct a few tests or run a few samples</li>
					<li>Monthly or</li>
					<li>Weekly</li>
				</ul>
				<p>
					Then you may want to consider searching the scientific equipment
					inventory to see if the equipment you need is available in another
					federal science-based department or agency (SBDA). Perhaps, this SBDA
					would be willing to run your samples, or share the equipment with you
					and others in the federal science community?
				</p>
			</section>
			<section className="mt-5">
				<p>
					The <span className="fw-bold text-uppercase">advantages</span> of
					scientific equipment <span className="fw-bold">sharing</span> are it:
				</p>
				<ul>
					<li>
						Decreases the need for laboratories to purchase duplicate equipment
						(cost efficient)
					</li>
					<li>
						Reduces the need for multiple equipment maintenance contracts and
						schedules which benefits scientists (saves time and money)
					</li>
					<li>
						Assists with the greening of laboratories by reducing the overall
						equipment that needs to be purchased, carbon emissions are reduced
						and allows energy and resources to be utilized more efficiently
						(supports Greening of Government Strategy)
					</li>
					<li>
						Allows scientists to optimize the use of the equipment across the
						federal science community
					</li>
					<li>Makes the best use of laboratory space</li>
					<li>
						Provides scientists with an opportunity to access different and
						perhaps more specialized equipment allowing them to advance their
						research quicker
					</li>
					<li>
						Increases the opportunities for scientists to have chance encounters
						and meet and network with other scientists
					</li>
				</ul>
			</section>
			<section className="mt-5">
				<p>
					If you need to use the equipment on a more frequent and regular basis
					and its use will be optimized with your work, such as: daily or a
					majority of the time, then you might want to search:
				</p>
				<ul>
					<li>
						<a
							style={{ textUnderlineOffset: "2px" }}
							href="https://www.gcsurplus.ca/mn-eng.cfm?snc=wftat&sc=mp"
							target="_blank"
							rel="noreferrer"
						>
							GCTransfer <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>{" "}
						to determine if there is any gently used equipment available that
						might meet your needs. GCTransfer is a web-based platform within
						GCSurplus that enables government departments to list surplus assets
						available for transfer within the federal domain. You can also be
						notified when new science/medical equipment is posted. Simply
						register for GCTransfer / GCSurplus and sign up for automated email
						notifications –{" "}
						<a
							href="https://gcsurplus.ca/mn-eng.cfm?snc=cmnts&y=1"
							target="blank"
						>
							contact GCSurplus
						</a>{" "}
						for additional information. OR
					</li>
					<li>
						<a
							style={{ textUnderlineOffset: "2px" }}
							href="https://buyandsell.gc.ca/procurement-data/search/site/E60PV %E2%80%93 19EQUI?retain-filters=1&f%5B0%5D=sm_facet_procurement_data%3Adata_data_sosa&f%5B1%5D=sm_facet_procurement_data%3ASA&f%5B2%5D=sm_facet_gsin%3AG&f%5B3%5D=sm_facet_gsin%3AG-66"
							target="_blank"
							rel="noreferrer"
						>
							Buyandsell.gc.ca{" "}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>{" "}
						and investigate the Laboratory and Scientific Equipment, Parts and
						Accessories, Supplies and Services Supply Arrangement (E60PV-19EQUI)
						or other appropriate supply arrangements or standing offers to
						purchase your new equipment.
					</li>
				</ul>
			</section>
			<section className="mt-5">
				<p className="text-muted">
					In addition, you may want to explore –{" "}
					<Link style={{ textUnderlineOffset: "2px" }} to="../remove/">
						Getting rid of Equipment
					</Link>{" "}
					if you have some scientific equipment that you no longer need.
				</p>
			</section>
		</>
	);
};

export default Add;
