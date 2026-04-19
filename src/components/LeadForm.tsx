import { useState, type ChangeEvent, type FormEvent } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    studio: "",
    contact: "",
    task: ""
  });

  const handleChange = (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Запрос демонстрации CarRestyle AI";
    const body = [
      "Новая заявка с лендинга CarRestyle AI",
      "",
      `Имя: ${form.name || "-"}`,
      `Студия: ${form.studio || "-"}`,
      `Контакт: ${form.contact || "-"}`,
      `Что хотят показывать: ${form.task || "-"}`
    ].join("\n");

    window.location.href = `mailto:hello@carrestyle.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label className="lead-field">
        <span>Имя</span>
        <input
          autoComplete="name"
          name="name"
          onChange={handleChange("name")}
          placeholder="Как к вам обращаться"
          required
          type="text"
          value={form.name}
        />
      </label>

      <label className="lead-field">
        <span>Студия</span>
        <input
          autoComplete="organization"
          name="studio"
          onChange={handleChange("studio")}
          placeholder="Название студии"
          type="text"
          value={form.studio}
        />
      </label>

      <label className="lead-field">
        <span>Контакт</span>
        <input
          autoComplete="email"
          name="contact"
          onChange={handleChange("contact")}
          placeholder="Почта, телефон или Telegram"
          required
          type="text"
          value={form.contact}
        />
      </label>

      <label className="lead-field lead-field-full">
        <span>Что вы хотите показывать клиентам</span>
        <textarea
          name="task"
          onChange={handleChange("task")}
          placeholder="Например: оклейка, антихром, цвет, диски, тюнинг"
          rows={4}
          value={form.task}
        />
      </label>

      <button className="button button-primary lead-submit" type="submit">
        Отправить заявку на демонстрацию
      </button>

      <p className="lead-note">
        После отправки откроется письмо с уже собранной заявкой. Или напишите напрямую на{" "}
        <a href="mailto:hello@carrestyle.ai">hello@carrestyle.ai</a>
      </p>
    </form>
  );
}
