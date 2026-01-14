import Blur from "@/components/Blur";
import data from "@/data";
import type { TCertificate } from "@/types";

function CertificatesPage() {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Certificates</h1>

			<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{data.certificates.map((certificate) => (
					<Certificate key={certificate.name} certData={certificate} />
				))}
			</div>
		</div>
	);
}

function Certificate({ certData }: { certData: TCertificate }) {
	return (
		<span key={certData.name} className="project-card rounded-xl overflow-hidden block">
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
		</span>
	);
}

function CertImage({ certData }: { certData: TCertificate }) {
	return (
		<div className="relative overflow-hidden h-60">
			<img src={certData.image} alt={certData.name} className="w-full h-full object-cover" />
			<Blur />
			<div className="w-full h-full flex justify-center">
				<img src={certData.image} alt={certData.name} className="absolute top-0 h-full" />
			</div>
			{!certData.completed && (
				<Blur className="grid place-content-center hover:scale-105 transition-transform">
					<p className="text-2xl font-bold">It's not ready yet.</p>
				</Blur>
			)}
		</div>
	);
}

export default CertificatesPage;
