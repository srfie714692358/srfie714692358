import { useStore } from "zustand";
import { SettingsIcon } from "lucide-react";

import { useThemeStore } from "@/store/useThemeStore";
import { useMediaQuery } from "@/shared/hooks";

import { settingsStyles as styles } from "./style";
import { settingConstants as constants } from "@/shared/constants/settings";

import Popover from "@/components/ui/popover";
import Dropdown from "@/components/ui/dropdown";
import Modal from "@/components/ui/modal";
import List from "@/components/ui/list";

function Settings() {
	return (
		<Popover trigger={<SettingsIcon />}>
			<Theme />
			<Language />
			<Version />
		</Popover>
	);
}

function Theme() {
	const { theme: current, setTheme } = useStore(useThemeStore);
	const items = constants.themes.map((th) => ({
		content: th,
		action: () => setTheme(th),
		active: th == current,
	}));
	const isMedium = useMediaQuery("md");

	return (
		<div className={styles.item.container}>
			<h6 className={styles.item.label}>Theme Mode</h6>
			{isMedium ? (
				<Modal trigger={current} classNames={{ content: "p-0 border-0 bg-none" }}>
					<List items={items} />
				</Modal>
			) : (
				<Dropdown text={current} items={items} />
			)}
		</div>
	);
}

function Language() {
	return (
		<div className={styles.item.container}>
			<h6 className={styles.item.label}>Language</h6>
			<span className="text-muted">En / Fa / Tr</span>
		</div>
	);
}

function Version() {
	return (
		<div className={styles.item.container}>
			<h6 className={styles.item.label}>Version </h6>
			<span className="text-muted">1.0.0</span>
		</div>
	);
}

export default Settings;
