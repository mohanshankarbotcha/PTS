export interface StorageFile {
  url: string;
  key: string;
  filename: string;
  mimeType: string;
  size: number;
}

export interface StorageProvider {
  uploadFile(file: Buffer, filename: string, mimeType: string): Promise<StorageFile>;
  deleteFile(key: string): Promise<boolean>;
  getFileUrl(key: string): Promise<string>;
}

export class LocalStorageProvider implements StorageProvider {
  async uploadFile(file: Buffer, filename: string, mimeType: string): Promise<StorageFile> {
    const key = `uploads/${Date.now()}-${filename}`;
    return {
      url: `/api/storage/${key}`,
      key,
      filename,
      mimeType,
      size: file.length,
    };
  }

  async deleteFile(key: string): Promise<boolean> {
    return true;
  }

  async getFileUrl(key: string): Promise<string> {
    return `/api/storage/${key}`;
  }
}

export function getStorageProvider(): StorageProvider {
  const provider = process.env.STORAGE_PROVIDER || "local";
  switch (provider) {
    case "local":
    default:
      return new LocalStorageProvider();
  }
}
