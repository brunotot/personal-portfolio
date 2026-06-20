import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import EmailService from "../../services/EmailService";
import ToastService from "../../services/ToastService";
import TextField from "./TextField";

export default function ContactForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const form = useRef<any>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await EmailService.send(form.current);
      ToastService.success(t("contact.form.success"));
      form.current.reset();
    } catch (error) {
      ToastService.error(t("contact.form.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      className="w-full flex flex-col gap-4 p-8"
      onSubmit={onSubmit}
    >
      <div className="flex w-full gap-4 flex-col md:flex-row">
        <TextField
          fullWidth
          name="user_name"
          type="text"
          label={t("contact.form.name")}
          variant="outlined"
          placeholder={t("contact.form.namePlaceholder")}
        />
        <TextField
          fullWidth
          name="user_email"
          type="email"
          label={t("contact.form.email")}
          variant="outlined"
          placeholder={t("contact.form.emailPlaceholder")}
        />
      </div>
      <TextField
        fullWidth
        name="user_subject"
        type="text"
        label={t("contact.form.subject")}
        variant="outlined"
        placeholder={t("contact.form.subjectPlaceholder")}
      />
      <TextField
        fullWidth
        name="user_message"
        type="text"
        label={t("contact.form.message")}
        variant="outlined"
        placeholder={t("contact.form.messagePlaceholder")}
        multiline
        rows={4}
      />

      <LoadingButton
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        type="submit"
        size="large"
        className={`font-jost mt-2 !w-full ${
          loading
            ? "!bg-primary-darker !text-tertiary-light"
            : "!bg-primary-base !text-tertiary-darker"
        }`}
      >
        <span>{t("contact.form.send")}</span>
      </LoadingButton>
    </form>
  );
}
