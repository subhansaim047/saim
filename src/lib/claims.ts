import claimsData from "../../content/claims.json";
import ownerFacts from "../../content/owner-facts.json";

export interface ClaimItem {
  id: string;
  text: string;
  evidence: string;
  neutralText: string;
}

export const CLAIMS: Record<string, ClaimItem> = (claimsData as ClaimItem[]).reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, ClaimItem>);

export function getClaim(id: string): string {
  const item = CLAIMS[id];
  if (!item) return "";
  
  if (item.evidence && item.evidence.trim() !== "") {
    return item.text;
  }

  // Specific conditional logic per specification
  if (id === "reply-speed") {
    return ownerFacts.workingHours ? item.neutralText : "";
  }

  if (id === "demos-preview") {
    return ownerFacts.demosAreRealClients ? item.text : item.neutralText;
  }

  if (id === "hmrc-vat") {
    return ownerFacts.vatNumber ? "HMRC & EU VAT-compliant invoices" : item.neutralText;
  }

  if (id === "seven-years") {
    return ownerFacts.yearsExperience ? `Over the last ${ownerFacts.yearsExperience} years, our studio` : item.neutralText;
  }

  return item.neutralText || "";
}
