const S3Url = process.env.NEXT_PUBLIC_S3_BUCKET_URL;

/**
 * S3 파일 다운로드 링크 반환 */
export const getDownloadLinkFromS3 = (folder: string, fileKey: string) => {
  const fullKey = encodeURIComponent(folder) + '/' + fileKey;
  return `${S3Url}/${fullKey}`;
};
