/**
 * Fetched the scholarship payload at build time and writes it to public/data/.
 */
const fs = require('fs')
const path = require('path')

const SLUGS = ['data-science-apprenticeship-zeptolab']
const API = 'https://harbour.space/api/v1/scholarship_pages'
const OUT_DIR = path.join(__dirname, '..', 'public', 'data')

async function snapshot(slug) {
  const out = path.join(OUT_DIR, `${slug}.json`)

  try {
    const res = await fetch(`${API}/${slug}`, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const json = await res.json()
    fs.mkdirSync(OUT_DIR, { recursive: true })
    fs.writeFileSync(out, JSON.stringify(json), 'utf8')
    console.log(`[fetch-scholarship] wrote public/data/${slug}.json`)
  } catch (err) {
    if (fs.existsSync(out)) {
      console.warn(`[fetch-scholarship] ${slug}: ${err.message} — keeping existing snapshot`)
      return
    }
    console.error(`[fetch-scholarship] ${slug}: ${err.message} — no snapshot available`)
    process.exitCode = 1
  }
}

Promise.all(SLUGS.map(snapshot))
