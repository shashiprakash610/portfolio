import { SITE, WORK_EXPERIENCE, PROJECTS, SKILLS, EDUCATION } from '../config.js'

const normalize = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const roleText = role => `${role.title} — ${role.company}\n${role.year} · ${role.location}\n${role.description}\n\n${role.responsibilities.map(value => `• ${value}`).join('\n')}\n\nTechnologies: ${role.techStack.join(', ')}`
const roleAliases = [['dresden', 'zih'], ['zeltask'], ['secure software', 'student research assistant'], ['fraunhofer'], ['data science group', 'research project member'], ['qunito']]
const findRole = text => WORK_EXPERIENCE.find((role, index) => roleAliases[index]?.some(alias => text.includes(alias)))

export function portfolioReply(question, history = []) {
    const text = normalize(question.trim())
    const fallback = `I can help with Shashi’s experience, projects, skills, education, and contact details using this portfolio. I don’t have information beyond those facts. Try “TU Dresden”, “Zeltask”, or “Projects”, or contact ${SITE.email}.`
    if (!text) return 'Choose a topic below or ask about Shashi’s background.'
    if (/\b(salary|availability|available|visa|married|age|religion|politics|weather|ignore|instructions|secret|password)\b/.test(text)) return fallback
    if (/\b(contact|email|phone|reach|hire|kontakt)\b/.test(text)) return `You can contact ${SITE.name} at ${SITE.email}.\nPhone: ${SITE.phone}\nLinkedIn: ${SITE.socials.linkedin}`
    let role = findRole(text)
    if (!role && /^(and |what about |tell me more|more|which technologies|what technologies|what did he do|technologies|tech stack)/.test(text)) {
        const previous = [...history].reverse().find(message => message.role === 'user' && findRole(normalize(message.content)))
        if (previous) role = findRole(normalize(previous.content))
    }
    if (role) return roleText(role)
    if (/\b(current|currently|present|now|aktuell)\b/.test(text)) return WORK_EXPERIENCE.filter(role => /present/i.test(role.year)).map(roleText).join('\n\n——\n\n')
    if (/\b(experience|work|jobs?|career|roles?|beruf|berufserfahrung|erfahrung)\b/.test(text)) return WORK_EXPERIENCE.map(role => `${role.title} — ${role.company}\n${role.year}\n${role.description}`).join('\n\n')
    if (/\b(education|study|studied|degree|university|thesis|studium|ausbildung)\b/.test(text)) return EDUCATION.map(item => `${item.title} — ${item.institution}\n${item.year}\n${item.description}`).join('\n\n')
    if (/\b(skills?|technologies|stack|languages|python|django|fastapi|kenntnisse)\b/.test(text)) return Object.entries(SKILLS).map(([name, values]) => `${name}: ${values.join(', ')}`).join('\n\n') + '\n\nCurrent-role technologies: ' + [...new Set(WORK_EXPERIENCE.filter(role => /present/i.test(role.year)).flatMap(role => role.techStack))].join(', ')
    const project = PROJECTS.find(project => text.includes(normalize(project.title)) || text.includes(project.slug.replaceAll('-', ' ')))
    if (project) return `${project.title}\n${project.description}\nTechnologies: ${project.stack.join(', ')}`
    if (/\b(projects?|rag|research|projekte)\b/.test(text)) return PROJECTS.map(project => `${project.title}\n${project.description}\nTechnologies: ${project.stack.join(', ')}`).join('\n\n')
    if (/\b(location|live|based|where|standort)\b/.test(text)) return `${SITE.name} is based in ${SITE.location}.`
    if (/^(hi|hello|hey|hallo|help)[!.? ]*$/.test(text) || /\b(about|who|background|summary)\b/.test(text)) return `${SITE.name} — ${SITE.role}\n${SITE.subhead}\n\nAsk about his current roles, projects, skills, education, or contact details.`
    return fallback
}
