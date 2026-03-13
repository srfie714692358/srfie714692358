import Blur from "@/components/ui/blur";
import { MotionDiv, MotionSpan } from "@/components/provider";

import type { TCertificate } from "./type";
import { list, listItem } from "@/shared/motion/list";
import { certificateStyles as styles } from "./style";
import { certificates } from "./content";

function CertificatesPage() {
	return (
		<MotionDiv v={list} className={styles.container}>
			<h1 className="page-title md:col-span-2 mx-auto">My Certificates</h1>
			{certificates.map((certificate) => (
				<Certificate key={certificate.name} detail={certificate} />
			))}
		</MotionDiv>
	);
}

function Certificate({ detail }: { detail: TCertificate }) {
	const show = detail.completed;
	const props = (link: string | null) => ({ href: link as string, className: styles.cert.link });
	return (
		<MotionSpan v={listItem} useDefault whileHover={{ scale: 1.01 }} className={styles.cert.container}>
			<CertImage detail={detail} />
			<div className="p-6">
				<h3 className={styles.cert.title}>{detail.name}</h3>
				<p className={styles.cert.description}>{detail.description}</p>
				<div className="flex flex-wrap gap-2">
					{show && <a {...props(detail.url)}>Let's see on harvard</a>}
					{show && <a {...props(detail.pdf)}>PDF</a>}
					{!show && <span className={styles.cert.tag}>It will be ready soon.</span>}
				</div>
			</div>
		</MotionSpan>
	);
}

function CertImage({ detail }: { detail: TCertificate }) {
	return (
		<div className={styles.img.container}>
			<img src={detail.image} alt={detail.name} className={styles.img.background} />
			<Blur />
			<div className="w-full h-full flex justify-center">
				<img src={detail.image} alt={detail.name} className={styles.img.main} />
			</div>
			{!detail.completed && (
				<Blur className="grid place-content-center">
					<p className="text-2xl font-bold">It will be ready soon.</p>
				</Blur>
			)}
		</div>
	);
}

export default CertificatesPage;
