const encryptData = (data: string) => btoa(data);
const decryptData = (encodedData: string) => atob(encodedData);

export { encryptData, decryptData };
