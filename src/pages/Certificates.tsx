import Blur from "@/components/blur";
import data from "@/data";
import type { TCertificate } from "@/types";

import { motion } from "framer-motion";
import { list, listItem } from "@/animations/list";

function CertificatesPage() {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Certificates</h1>

			<motion.div
				variants={list}
				initial="hidden"
				animate="visible"
				className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
			>
				{data.certificates.map((certificate) => (
					<Certificate key={certificate.name} certData={certificate} />
				))}
			</motion.div>
		</div>
	);
}

function Certificate({ certData }: { certData: TCertificate }) {
	return (
		<motion.span variants={listItem} whileHover={{ scale: 1.01 }} className="project-card rounded-xl overflow-hidden block">
			<CertImage certData={certData} />
			<div className="p-6">
				<h3 className="text-2xl font-bold text-amber-100 mb-3 h-15">{certData.name}</h3>
				<p className="text-red-100 mb-4 h-25">{certData.description}</p>
				<div className="flex flex-wrap gap-2">
					<a
						{...(certData.completed && { href: certData.url })}
						className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp"
					>
						Let's see on harvard
					</a>
					<a
						{...(certData.completed && { href: certData.pdf as string })}
						className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp"
					>
						PDF
					</a>
				</div>
			</div>
		</motion.span>
	);
}

function CertImage({ certData }: { certData: TCertificate }) {
	return (
		<div className="relative overflow-hidden h-60">
			<img src={certData.image} alt={certData.name} className="w-full h-full object-cover" />
			<Blur />
			<div className="w-full h-full flex justify-center">
				<motion.img
					whileHover={{ scale: 1.1 }}
					src={certData.image}
					alt={certData.name}
					className="absolute top-0 h-full"
				/>
			</div>
			{!certData.completed && (
				<Blur className="grid place-content-center">
					<p className="text-2xl font-bold">It's not ready yet.</p>
				</Blur>
			)}
		</div>
	);
}

export default CertificatesPage;
