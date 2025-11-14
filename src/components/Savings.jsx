import { useMemo, useState } from "react";
import { FaCalculator, FaPiggyBank } from "react-icons/fa";

const ADOPTION_RATE_POINTS = [
  { ratio: 0, rate: 0.05 },
  { ratio: 0.25, rate: 0.0594 },
  { ratio: 2 / 7, rate: 0.066 },
  { ratio: 1 / 3, rate: 0.066 },
  { ratio: 0.5, rate: 0.0825 },
  { ratio: 1, rate: 0.1925 },
];

const MAX_RATE = ADOPTION_RATE_POINTS[ADOPTION_RATE_POINTS.length - 1].rate;
const DEFAULT_TRIPS_PER_MONTH = 1.2;

export default function Savings() {
  const [members, setMembers] = useState(2);
  const [users, setUsers] = useState(2);
  const [budget, setBudget] = useState(300);

  const safeUsers = Math.min(users || 0, members || 0);

  const { monthly, yearly, cutPct } = useMemo(() => {
    const adoption = members ? safeUsers / members : 0;
    const savingsRate = getSavingsRate(adoption);
    const yearlySavings =
      Math.max(0, budget || 0) * DEFAULT_TRIPS_PER_MONTH * 12 * savingsRate;

    return {
      monthly: yearlySavings / 12,
      yearly: yearlySavings,
      cutPct: (savingsRate / MAX_RATE) * 100,
    };
  }, [members, safeUsers, budget]);

  const fmt = (n) => formatCurrency(n || 0);

  return (
    <section id="savings" className="bg-transparent py-12">
      <div className="max-w-content px-4 sm:px-6 lg:pl-20 lg:pr-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="card-elevated p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div className="max-w-md">
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
                secondary={`${fmt(monthly)} / month`}
              />
              <ResultCard
                title="Projected waste reduction"
                primary={`${Math.round(cutPct)}%`}
                icon={<FaPiggyBank className="text-base" />}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/60 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-center sm:text-left">
                Uses the adoption-based savings curve from your planning sheet
                (5% capture with minimal use up to 19.25% when everyone is on
                ExpireSense) and assumes {DEFAULT_TRIPS_PER_MONTH} shopping
                trips per month.
              </p>
              <a
                href="#contact"
                className="inline-block self-center whitespace-nowrap px-3 py-1 text-xs text-[var(--brand-700)] border border-[var(--brand-300)] rounded transition hover:bg-[var(--brand-50)] sm:self-auto"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="space-y-6 text-center sm:text-left">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                How you can use this model
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Use your pantry and spending history to estimate savings and
                track progress over time. Adjust as you track your items to keep
                your forecast realistic.
              </p>
              <ul className="mt-4 space-y-2 text-left text-sm text-slate-600">
                <li>• Forecast your savings before trying.</li>
                <li>• Track your progress.</li>
                <li>• Celebrate your waste reduction and money saved.</li>
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
  const numericValue =
    Number.isFinite(value) && value !== null ? Number(value) : "";
  const { fontSize, letterSpacing } = getDynamicInputSizing(value);

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
          value={numericValue}
          onChange={(event) => onChange(Number(event.target.value || 0))}
          className="input pl-7 py-2 text-sm font-mono tracking-tight"
          style={{ fontSize, letterSpacing }}
        />
      </div>
    </label>
  );
}

function ResultCard({ title, primary, secondary, icon }) {
  return (
    <div className="card-elevated flex flex-col gap-3 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <div className="w-full">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>
        <p className="mt-2 break-words text-2xl font-bold leading-tight text-slate-900">
          {primary}
        </p>
        {secondary && (
          <p className="mt-2 text-xs text-slate-500">
            <span className="inline-flex max-w-full items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500">
              approx: 
              <span className="font-mono text-[0.7rem] font-normal lowercase text-slate-700 tracking-tight break-all">
                {secondary}
              </span>
            </span>
          </p>
        )}
      </div>
      {icon && (
        <span className="grid h-10 w-10 place-items-center self-center rounded-xl bg-brand-50 text-[var(--brand-600)] sm:self-auto">
          {icon}
        </span>
      )}
    </div>
  );
}

function getSavingsRate(adoptionRatio) {
  if (!Number.isFinite(adoptionRatio) || adoptionRatio <= 0) {
    return ADOPTION_RATE_POINTS[0].rate;
  }

  const clamped = Math.min(1, Math.max(0, adoptionRatio));

  for (let i = 1; i < ADOPTION_RATE_POINTS.length; i += 1) {
    const current = ADOPTION_RATE_POINTS[i];
    if (clamped <= current.ratio) {
      const prev = ADOPTION_RATE_POINTS[i - 1];
      const span = current.ratio - prev.ratio || 1;
      const t = (clamped - prev.ratio) / span;
      return prev.rate + (current.rate - prev.rate) * t;
    }
  }

  return MAX_RATE;
}

function getDynamicInputSizing(value) {
  const digits = Math.max(
    String(Math.floor(Math.abs(Number(value) || 0))).length,
    1
  );

  if (digits > 24) {
    return { fontSize: "0.55rem", letterSpacing: "-0.025em" };
  }
  if (digits > 20) {
    return { fontSize: "0.6rem", letterSpacing: "-0.02em" };
  }
  if (digits > 16) {
    return { fontSize: "0.7rem", letterSpacing: "-0.015em" };
  }
  if (digits > 12) {
    return { fontSize: "0.8rem", letterSpacing: "-0.008em" };
  }
  return { fontSize: "0.875rem", letterSpacing: "0" };
}

function formatCurrency(value) {
  const numericValue = Number.isFinite(value) ? value : 0;
  const useCompact = Math.abs(numericValue) >= 1000;

  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    notation: useCompact ? "compact" : "standard",
    maximumFractionDigits: useCompact ? 1 : 0,
  }).format(numericValue);
}
