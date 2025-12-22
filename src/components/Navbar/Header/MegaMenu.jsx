import { memo } from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ sections }) => {
  return (
    <div className="absolute left-0 top-full w-full bg-white border-t shadow-md z-50 overflow-x-hidden">
      <div className="max-w-450 mx-auto px-6 py-8 grid grid-cols-6 gap-4 text-[13px]">
        {sections.map((section, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-gray-600">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link to={link.path} className="block hover:text-black">
                    {link.name}
                    {link.isNew && (
                      <span className="ml-2 text-sm bg-cyan-500 text-white px-2 rounded-full">
                        NEW
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {sections.footerLink && (
  <div className="border-t mt-6 pt-4 text-sm font-medium">
    <Link to={sections.footerLink.path}>
      {sections.footerLink.label}
    </Link>
  </div>
)}

    </div>
  );
};

export default memo(MegaMenu);
