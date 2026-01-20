import type { ContactContextT } from "@/types/contactContext";
import { createContext } from "react";

const ContactContext = createContext<ContactContextT | null>(null);

export default ContactContext;
