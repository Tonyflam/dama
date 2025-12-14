export const ICP_TO_CHAT_RATE = 15;

export function formatCHAT(amount: number): string {
  return amount.toLocaleString() + ' CHAT';
}

export function formatICP(amount: number): string {
  return amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' ICP';
}

export function chatToICP(chatAmount: number): number {
  return chatAmount / ICP_TO_CHAT_RATE;
}

export function icpToCHAT(icpAmount: number): number {
  return icpAmount * ICP_TO_CHAT_RATE;
}
