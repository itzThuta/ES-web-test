import { useMemo, useState } from "react";
import { FaCalculator, FaPiggyBank } from "react-icons/fa";

const BASE_WASTE = 0.2; // 20% of grocery spend wasted
const MAX_REDUCTION = 0.55; // up to 55% cut with full adoption

export default function Savings() {
  const [members, setMembers] = useState(2);
  const [users, setUsers] = useState(2);
  const [budget, setBudget] = useState(300);

  const safeUsers = Math.min(users || 0, members || 0);

  const { monthly, yearly, cutPct } = useMemo(() => {
    const adoption = Math.min(1, members ? safeUsers / members : 0);
    const wasted = (budget || 0) * BASE_WASTE;
    const saved = wasted * (MAX_REDUCTION * adoption);
    return {
      monthly: saved,
      yearly: saved * 12,
      cutPct: MAX_REDUCTION * adoption * 100,
    };
  }, [members, safeUsers, budget]);

  const fmt = (n) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n || 0);

  return (
    <section id="savings" className="bg-transparent py-12">
      <div className="max-w-content px-6 lg:pl-20 lg:pr-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="card-elevated p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Savings estimator
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Model your waste reduction impact
                </h2>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-[var(--brand-600)]">
                <FaCalculator />
              </span>
            </div>

            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Household members"
                value={members}
                onChange={(value) => setMembers(Math.max(1, value))}
              />
              <Field
                label="ExpireSense users"
                value={users}
                onChange={(value) =>
                  setUsers(Math.max(1, Math.min(value, members || 1)))
                }
              />
              <CurrencyField
                label="Monthly grocery budget"
                value={budget}
                onChange={(value) => setBudget(Math.max(0, value))}
              />
            </form>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ResultCard
                title="Estimated yearly savings"
                primary={fmt(yearly)}
                secondary={`≈ ${fmt(monthly)} / month`}
              />
              <ResultCard
                title="Projected waste reduction"
                primary={`${Math.round(cutPct)}%`}
                icon={<FaPiggyBank className="text-base" />}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/60 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Based on {Math.round(BASE_WASTE * 100)}% average household waste
                and up to {Math.round(MAX_REDUCTION * 100)}% reduction with full
                adoption.
              </p>
              <a
                href="#contact"
                className="inline-block whitespace-nowrap px-2 py-0.5 text-xs text-[var(--brand-700)] border border-[var(--brand-300)] rounded hover:bg-[var(--brand-50)] transition"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                How teams use this model
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Combine inventory adoption rates with historic spend to show
                finance leaders the savings tied to ExpireSense roll-outs.
                Adjust the numbers as your team comes on board to keep forecasts
                realistic.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Forecast ROI before rollout.</li>
                <li>• Track progress across locations.</li>
                <li>• Share savings in quarterly reports.</li>
              </ul>
            </div>

            <div className="card-elevated border border-brand-200 bg-brand-50/70 p-6 text-sm text-slate-700">
              <h4 className="text-base font-semibold text-[var(--brand-700)]">
                Need a tailored calculation?
              </h4>
              <p className="mt-2">
                Our team can plug in your exact supplier costs, donation
                programmes, and sustainability metrics to build a custom
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="flex flex-col text-sm font-medium text-slate-600">
      {label}
      <input
        type="number"
        min={0}
        value={value}
        onChange={(event) => onChange(Number(event.target.value || 0))}
        className="input mt-2 py-2 text-sm"
      />
    </label>
  );
}

function CurrencyField({ label, value, onChange }) {
  return (
    <label className="flex flex-col text-sm font-medium text-slate-600 sm:col-span-2">
      {label}
      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          $
        </span>
        <input
          type="number"
          min={0}
          step={10}
          value={value}
          onChange={(event) => onChange(Number(event.target.value || 0))}
          className="input pl-7 py-2 text-sm"
        />
      </div>
    </label>
  );
}

function ResultCard({ title, primary, secondary, icon }) {
  return (
    <div className="card-elevated flex items-center justify-between p-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>
        <p className="mt-2 text-2xl font-bold text-slate-900">{primary}</p>
        {secondary && <p className="text-xs text-slate-500">{secondary}</p>}
      </div>
      {icon && (
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-[var(--brand-600)]">
          {icon}
        </span>
      )}
    </div>
  );
}
