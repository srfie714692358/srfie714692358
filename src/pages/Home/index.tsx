import { NavLink } from "react-router";
import { MotionBtn, MotionDiv, MotionH1, MotionImg, MotionP } from "@/components/provider";

import { list, listItem } from "@/shared/motion/list";
import { personal } from "@/shared/data/personal";
import { navigation } from "@/app/navigation";
import { homeStyles as styles } from "./style";
import { homeMotions } from "./motion";

function HomePage() {
	return (
		<div className={styles.container}>
			<MotionImg
				src={personal.image}
				alt={`${personal.name} ${personal.family}`}
				className={styles.image}
				{...homeMotions.image}
			/>
			<AboutMe />
		</div>
	);
}

function AboutMe() {
	return (
		<MotionDiv className="md:w-1/2 space-y-6" v={list}>
			<MotionH1 v={listItem} className="page-title">
				Hello, I'm {personal.name}
			</MotionH1>

			<div className={styles.about}>
				{personal.about.split("\n").map((p, i) => (
					<MotionP key={i} v={listItem}>
						{p}
					</MotionP>
				))}
			</div>
			<ContactBtn />
		</MotionDiv>
	);
}

function ContactBtn() {
	const contactPage = navigation.find((p) => p.label.toLowerCase().includes("contact"));

	return (
		<div className="w-fit pt-5">
			{contactPage && (
				<MotionBtn {...homeMotions.btn}>
					<NavLink to={contactPage.path} className={styles.btn}>
						Get in Touch
					</NavLink>
				</MotionBtn>
			)}
		</div>
	);
}

export default HomePage;
