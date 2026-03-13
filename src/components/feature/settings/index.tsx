import { AnimatePresence } from "framer-motion";
import { useStore } from "zustand";

import Dropdown from "@/components/ui/dropdown";
import { SettingsIcon } from "lucide-react";
import { MotionDiv } from "@/components/provider";

import { useThemeStore } from "@/store/useThemeStore";
import { useClickOutOfEle } from "@/shared/hooks";

import { settingsStyles as styles } from "./style";
import { settingConstants as constants } from "./constants";
import { fadeDown } from "@/shared/motion/fade";
import { useMediaQuery } from "@/shared/hooks";

function Settings() {
	const { ref, closed, toggle } = useClickOutOfEle<HTMLDivElement>();
	const isMediumDevice = useMediaQuery("md");

	return (
		<div ref={ref} className="z-1">
			<SettingsIcon className={styles.icon} onClick={toggle} />
			<AnimatePresence>
				{!closed && (
					<MotionDiv v={fadeDown} className={styles.container(isMediumDevice)}>
						<Theme />
						<Language />
						<Version />
					</MotionDiv>
				)}
			</AnimatePresence>
		</div>
	);
}

function Theme() {
	const { theme: current, setTheme } = useStore(useThemeStore);
	const items = constants.themes.map((th) => ({ name: th, action: () => setTheme(th) }));

	return (
		<div className={styles.item.container}>
			<span className={styles.item.label}>Theme Mode</span>
			<ul className="w-fit space-y-1">
				<Dropdown text="themes" active={current} items={items} position={styles.dropdownPosition} />
			</ul>
		</div>
	);
}

function Language() {
	return (
		<div className={styles.item.container}>
			<span className={styles.item.label}>Language</span>
			<span className="text-xs text-muted">En / Fa / Tr</span>
		</div>
	);
}

function Version() {
	return (
		<div className={styles.item.container}>
			<span className={styles.item.label}>Version </span>
			<span className="text-xs text-muted font-mono">1.0.0</span>
		</div>
	);
}

export default Settings;
