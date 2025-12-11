type NewsItem = {
  tags: string[];
  title: string;
  link?: string;
};

const news: NewsItem[] = [
  {
    tags: ["students 3rd", "students 4th", "Numerical Programming"],
    title:
      "The lecturer Ramazi Bochorishvili has recently agreed to conduct every further examination in written form for the remaining time of this course.",
  },
  {
    tags: ["all students"],
    title:
      "GDG hackathon 'hack-the-halls' will be conducted on KIU campus on 12–14 December. The registration and information link is available below.",
    link: "https://gdg.community.dev/events/details/google-gdg-kutaisi-presents-hack-the-halls-gdg-kutaisi-hackathon/",
  },
];

export default function NewsSection() {
  return (
    <div className="mt-10 pt-20 w-9/10 mx-auto">
      <h2 className="text-xl font-semibold text-c-black mb-4">News</h2>
      <div className="flex flex-col gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-c-primary/10 text-c-primary rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title / Description */}
            <p className="text-c-black/90 leading-relaxed">{item.title}</p>

            {/* Optional link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-c-primary underline mt-2 inline-block"
              >
                Open Link →
              </a>
            )}
          </div>
        ))}
        <h2 className="">More News coming soon, stay tuned!</h2>
      </div>
    </div>
  );
}
