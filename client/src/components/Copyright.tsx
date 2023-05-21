/**
 * Renders the copyright section of the page.
 * @returns {JSX.Element} The copyright section.
 */
export default function Copyrigth() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 no NLW da{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rocketseat"
        className="underline hover:text-gray-100"
      >
        Rocketseat
      </a>
    </div>
  );
}
