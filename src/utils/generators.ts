export function generatePrincipalId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = 'icp1-';
  for (let i = 0; i < 32; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export function generateEndpoint(deploymentId: string): string {
  return `https://agent-${deploymentId}.ic0.app`;
}

export function generateDeploymentId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = 'dep_';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
