import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center p-6 bg-canvas text-content font-jost">
      {t("footer.copyright", { year: currentYear })}
    </footer>
  );
}
