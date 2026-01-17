// saved-teachings.js
import { Preferences } from '@capacitor/preferences';

const STORAGE_KEY = "pf_saved_teachings_v1";

async function loadSaved() {
  try {
    const { value } = await Preferences.get({ key: STORAGE_KEY });
    return JSON.parse(value || "[]");
  } catch (e) {
    return [];
  }
}

async function saveAll(items) {
  await Preferences.set({
    key: STORAGE_KEY,
    value: JSON.stringify(items)
  });
}

function normalizeUrl(url) {
  return (url || "").trim();
}

function sourceFromUrl(url) {
  const u = (url || "").toLowerCase();
  if (u.includes("spotify.com")) return "Spotify";
  if (u.includes("youtu.be") || u.includes("youtube.com")) return "YouTube";
  return "Link";
}

// Public API
window.PFSave = {
  add: async function ({ title, url }) {
    title = (title || "").trim();
    url = normalizeUrl(url);

    if (!title || !url) {
      alert("Missing title or link.");
      return { ok: false, reason: "missing_fields" };
    }

    const items = await loadSaved();

    const exists = items.some((x) => x.url === url);
    if (exists) {
      alert("Already saved.");
      return { ok: true, already: true };
    }

    const item = {
      id: String(Date.now()),
      title,
      url,
      source: sourceFromUrl(url),
      savedAt: new Date().toISOString(),
    };

    items.unshift(item);
    await saveAll(items);
    alert("Saved!");
    return { ok: true };
  },

  remove: async function (id) {
    const items = await loadSaved();
    const filtered = items.filter((x) => x.id !== id);
    await saveAll(filtered);
    return { ok: true };
  },

  list: async function () {
    return await loadSaved();
  },

  clear: async function () {
    await Preferences.remove({ key: STORAGE_KEY });
    return { ok: true };
  },
};