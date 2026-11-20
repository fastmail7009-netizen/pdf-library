async function fetchPdfLibrary() {
  try {
    const res = await fetch('pdf-manifest.json');
    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    console.error('Error loading pdf-manifest.json:', e);
    return [];
  }
}
