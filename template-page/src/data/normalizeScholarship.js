const paragraphs = (blocks) =>
  Array.isArray(blocks) ? blocks.map((b) => b?.data).filter(Boolean) : []

export function normalizeScholarship(raw) {
  const s = raw?.scholarship ?? {}

  return {
    name: s.name ?? '',
    company: s.company?.name ?? '',
    location: s.location?.name ?? '',
    duration: s.duration ?? null,
    startDate: s.scholarship_start_date ?? null,
    applicationEndDate: s.application_end_date ?? null,
    position: s.position || 'Marketing Performance',

    intro: paragraphs(s.description),
    about: paragraphs(s.about),

    tuition: s.tuition ?? 0,
    totalValue: s.total_value ?? 0,
    stipendPerMonth: s.stipend_per_month ?? 0,
    stipendPerYear: s.stipend_per_year ?? 0,
    remaining: s.remaining ?? 0,

    studyCommitment: s.study_commitment ?? null,
    studyCommitmentText: s.study_commitment_text ?? '',
    internshipCommitment: s.internship_commitment ?? null,
    internshipCommitmentText: s.internship_commitment_text ?? '',

    degree: s.degree ?? '',
    credits: s.credits ?? null,
    courses: s.courses ?? null,

    faqs: (s.faqs?.items ?? []).map((item, i) => ({
      id: `faq-${i}`,
      category: item.type ?? '',
      question: item.question ?? '',
      body: paragraphs(item.answer),
    })),
    faqCategories: s.faqs?.categories ?? [],
  }
}
