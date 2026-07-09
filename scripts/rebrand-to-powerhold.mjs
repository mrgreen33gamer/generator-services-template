/**
 * Rebrand garage-door-cloned content → PowerHold Generators
 * Run: node scripts/rebrand-to-powerhold.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.next' || ent.name === '.git') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?|scss|css|json|md|txt|mjs)$/.test(ent.name)) out.push(p);
  }
  return out;
}

// Ordered replacements — longer / more specific first
const REPLACEMENTS = [
  // Brand identity
  [/Summit Door Pros/g, 'PowerHold Generators'],
  [/summitdoorpros\.com/g, 'powerholdgenerators.com'],
  [/summitdoorpros/g, 'powerholdgenerators'],
  [/Marcus Hale/g, 'Rhea Colton'],
  [/\(254\) 720-1100/g, '(254) 991-2121'],
  [/\+12547201100/g, '+12549912121'],
  [/1401 Franklin Ave/g, '1800 Franklin Ave'],
  [/hello@summitdoorpros\.com/g, 'hello@powerholdgenerators.com'],

  // Accent colors
  [/#1d4ed8/gi, '#facc15'],
  [/#3b82f6/gi, '#fde047'],
  [/#1e3a8a/gi, '#ca8a04'],

  // Credentials / guarantees
  [/Lifetime Spring Warranty \+ 2-Year Workmanship/g, 'Storm-Ready Install Guarantee · 2-Year Workmanship'],
  [/Lifetime Spring Warranty/g, 'Storm-Ready Install Guarantee'],
  [/2-Year Workmanship Warranty/g, '2-Year Workmanship'],
  [/IDA-Trained Technicians/g, 'TECL-Aligned Installers'],
  [/IDA-trained technicians/g, 'TECL-aligned installers'],
  [/IDA-Trained/g, 'TECL-Aligned'],
  [/IDA-trained/g, 'TECL-aligned'],
  [/IDA-trained installers/g, 'TECL-aligned installers'],

  // Taglines / social proof
  [/Garage Doors Installed, Repaired & Maintained/g, 'Standby Generators · Install · Service · Transfer Switches'],
  [/5,000\+ doors serviced/g, '1,800+ generators installed'],
  [/5000\+ doors serviced/g, '1,800+ generators installed'],
  [/5,000\+/g, '1,800+'],
  [/value: 5000/g, 'value: 1800'],
  [/800\+ Reviews/g, '520+ Reviews'],
  [/800\+ reviews/g, '520+ reviews'],
  [/800\+ verified reviews/g, '520+ verified reviews'],
  [/Doors serviced across Central Texas/g, 'Generators installed across Central Texas'],
  [/doors serviced across Central Texas/g, 'generators installed across Central Texas'],
  [/Years of local garage door experience/g, 'Years of local generator experience'],
  [/years of local garage door experience/g, 'years of local generator experience'],
  [/Years serving Waco-area homeowners/g, 'Years powering Waco-area homes'],
  [/Years installing for Central Texas builders/g, 'Years installing for Central Texas builders'],

  // Service slugs (paths first)
  [/\/services\/garage-door-repair/g, '/services/standby-generators'],
  [/\/services\/spring-cable-repair/g, '/services/portable-generators'],
  [/\/services\/new-door-installation/g, '/services/transfer-switches'],
  [/\/services\/opener-installation/g, '/services/load-calculations'],
  [/\/services\/door-maintenance/g, '/services/generator-maintenance'],
  [/\/services\/commercial-doors/g, '/services/emergency-service'],
  [/services\/garage-door-repair/g, 'services/standby-generators'],
  [/services\/spring-cable-repair/g, 'services/portable-generators'],
  [/services\/new-door-installation/g, 'services/transfer-switches'],
  [/services\/opener-installation/g, 'services/load-calculations'],
  [/services\/door-maintenance/g, 'services/generator-maintenance'],
  [/services\/commercial-doors/g, 'services/emergency-service'],

  // Industry slugs
  [/\/industries\/property-management/g, '/industries/healthcare-clinics'],
  [/\/industries\/commercial-facilities/g, '/industries/agriculture'],
  [/industries\/property-management/g, 'industries/healthcare-clinics'],
  [/industries\/commercial-facilities/g, 'industries/agriculture'],
  [/slug: 'property-management'/g, "slug: 'healthcare-clinics'"],
  [/slug: 'commercial-facilities'/g, "slug: 'agriculture'"],

  // Blog slugs
  [/garage-door-spring-break-safety-waco/g, 'standby-vs-portable-generator'],
  [/how-to-choose-garage-door-opener/g, 'how-to-size-home-generator'],
  [/signs-garage-door-needs-replacement/g, 'generator-maintenance-schedule'],

  // Service titles
  [/Garage Door Repair/g, 'Standby Generators'],
  [/Spring & Cable Repair/g, 'Portable Generators'],
  [/Spring & Cable/g, 'Portable Generators'],
  [/New Door Installation/g, 'Transfer Switches'],
  [/Opener Installation/g, 'Load Calculations'],
  [/Door Maintenance Plans/g, 'Generator Maintenance'],
  [/Door Maintenance/g, 'Generator Maintenance'],
  [/Commercial Doors/g, 'Emergency Service'],
  [/Commercial doors/g, 'Emergency service'],

  // Industry titles
  [/Property Management Companies/g, 'Healthcare Clinics'],
  [/Property Management/g, 'Healthcare Clinics'],
  [/property managers/g, 'clinic managers'],
  [/property manager/g, 'clinic manager'],
  [/Homebuilders & Remodelers/g, 'Homebuilders'],
  [/Commercial Facilities/g, 'Agriculture & Ranches'],
  [/commercial facilities/g, 'agriculture & ranches'],
  [/facilities lead/g, 'ranch or clinic lead'],
  [/facilities clients/g, 'agriculture clients'],

  // Generic garage door → generator phrasing
  [/garage door company/g, 'generator company'],
  [/Garage door company/g, 'Generator company'],
  [/garage door service/g, 'generator service'],
  [/Garage door service/g, 'Generator service'],
  [/garage door services/g, 'generator services'],
  [/Garage Door Services/g, 'Generator Services'],
  [/Garage door services/g, 'Generator services'],
  [/garage door technician/g, 'generator technician'],
  [/garage door technicians/g, 'generator technicians'],
  [/garage door tech/g, 'generator tech'],
  [/Garage Door/g, 'Generator'],
  [/garage door/g, 'generator'],
  [/Garage doors/g, 'Generators'],
  [/garage doors/g, 'generators'],
  [/a new door/g, 'a new generator'],
  [/new door/g, 'new generator'],
  [/New door/g, 'New generator'],
  [/the door/g, 'the generator'],
  [/your door/g, 'your generator'],
  [/Your door/g, 'Your generator'],
  [/Door Won't Open/g, "Power's Out"],
  [/Door System upgrades/g, 'Standby system upgrades'],
  [/opener/g, 'transfer switch'],
  [/Opener/g, 'Transfer switch'],
  [/openers/g, 'transfer switches'],
  [/Openers/g, 'Transfer switches'],
  [/spring replacement/g, 'generator service'],
  [/Spring replacement/g, 'Generator service'],
  [/torsion spring/g, 'standby unit'],
  [/springs/g, 'components'],
  [/Springs/g, 'Components'],
  [/spring/g, 'component'],
  [/Spring/g, 'Component'],
  [/rollers/g, 'parts'],
  [/hinges/g, 'hardware'],
  [/cables/g, 'fuel lines'],
  [/track/g, 'pad'],
  [/panels/g, 'enclosures'],
  [/photo-eyes/g, 'ATS sensors'],
  [/photo-eye/g, 'ATS sensor'],
  [/wall controls/g, 'control panels'],
  [/smart openers/g, 'smart monitoring'],
  [/Chain, belt, and smart/g, 'Automatic and manual'],
  [/rolling steel/g, 'commercial standby'],
  [/sectional/g, 'whole-home'],
  [/high-cycle/g, 'prime-power'],
  [/curb appeal/g, 'storm readiness'],
  [/off-track/g, 'failed-start'],
  [/Door stuck/g, 'No power'],
  [/stuck door/g, 'power outage'],
  [/Stuck Door/g, 'Power Outage'],
  [/doors/g, 'generators'],
  [/Doors/g, 'Generators'],
  [/door /g, 'generator '],
  [/Door /g, 'Generator '],

  // Schema / misc garage leftovers
  [/"@type": "HomeAndConstructionBusiness"/g, '"@type": "Electrician"'],
  [/GarageDoor/g, 'Generator'],
  [/lead garage door technician/g, 'lead generator installer'],
  [/in the trade/g, 'in backup power'],
  [/multi-unit make-ready/g, 'clinic backup power'],
  [/after-hours commercial repairs/g, 'storm emergency generator service'],
  [/turnovers, open dates, and production windows/g, 'critical loads, storm readiness, and uptime windows'],
  [/multi-unit properties/g, 'clinic and ag properties'],
  [/apartments/g, 'clinics'],
  [/retail/g, 'ranch'],
  [/warehouse/g, 'barn'],
  [/warehouses/g, 'barns'],

  // Cookie / template strings
  [/Summit Template/g, 'PowerHold Template'],
  [/Garage Door Template/g, 'Generator Services Template'],

  // Founded / years already 2011 in garage-door — keep
  // Fix over-aggressive replacements that broke words
  [/generatortor/g, 'generator'],
  [/Generatortor/g, 'Generator'],
  [/transgenerator/g, 'transfer'],
  [/Transgenerator/g, 'Transfer'],
  [/componcomponent/g, 'component'],
  [/Componcomponent/g, 'Component'],
];

let filesChanged = 0;
const files = walk(ROOT);
for (const file of files) {
  // skip this script itself and package-lock
  if (file.includes('rebrand-to-powerhold') || file.endsWith('package-lock.json')) continue;
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;
  for (const [re, rep] of REPLACEMENTS) {
    text = text.replace(re, rep);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    filesChanged++;
  }
}
console.log(`Rebranded ${filesChanged} files`);
