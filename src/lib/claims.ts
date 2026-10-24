import claimsData from "../../content/claims.json";

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
  return item.evidence && item.evidence.trim() !== "" ? item.text : item.neutralText;
}
