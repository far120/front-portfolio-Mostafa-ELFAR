export function formatImageUrl(url) {
  if (!url) return "";

  // Fix domain typos if hyphen was used (res-cloudinary.com -> res.cloudinary.com)
  let cleanUrl = url.replace("res-cloudinary.com", "res.cloudinary.com");

  // 1. Google Drive Links
  if (cleanUrl.includes("drive.google.com") || cleanUrl.includes("googleusercontent.com")) {
    const match = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }

  // 2. Cloudinary Console URL -> Public CDN URL
  if (cleanUrl.includes("res-console.cloudinary.com")) {
    cleanUrl = cleanUrl
      .replace("res-console.cloudinary.com", "res.cloudinary.com")
      .replace("/thumbnails/v1", "")
      .replace("/preview", "");
  }

  return cleanUrl;
}
